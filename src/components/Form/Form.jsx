import { useState } from "react";
import Button from "../Button/Button";
import OptionsList from "../OptionsList/OptionsList";
import Field from "../Field/Field";
import "./Form.css";

export default function Form({collaboratorRegister,createTeam,teams}) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");
  const [title,setTitle] = useState("");
  const [color,setColor] = useState("");
 
  const handleClickSend = (event) => {
    event.preventDefault();

    let sendData = {
      name,
      position,
      image,
      team,
    };
     
    collaboratorRegister(sendData)
    
  };

  const handleNewTeam = (event) =>{
     event.preventDefault();

     createTeam({title,primaryColor : color})
  };

  return (
    <>
      <section className="form__container">
        <form onSubmit={handleClickSend}>
          <h2>Rellena el formulario para crear el colaborador.</h2>
          <Field
            labelName="Nombre"
            placeHolder="Ingresa tu nombre"
            required
            value={name}
            setValue={setName}
          />
          <Field
            labelName="Puesto"
            placeHolder="Ingresar puesto"
            required
            value={position}
            setValue={setPosition}
          />
          <Field
            labelName="Foto"
            placeHolder="Ingresar enlace de foto"
            required
            value={image}
            setValue={setImage}
          />
          <OptionsList labelName="Equipos" teams={teams} value={team} setValue={setTeam}/>
          <Button text="Crear" />
        </form>

        <form onSubmit={handleNewTeam}>
          <h2>Rellena el formulario para crear el equipo.</h2>
          <Field
            labelName="Título"
            placeHolder="Ingresar título"
            required
            value={title}
            setValue={setTitle}
          />
          <Field
            labelName="Color"
            placeHolder="Ingresar color en hexadecimal"
            required
            value={color}
            setValue={setColor}
            type="color"
          />
          <Button text="Registrar equipo" />
        </form>   
      </section>
    </>
  );
}
