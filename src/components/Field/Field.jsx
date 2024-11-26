import "./Field.css";
import "../../App.css";


export default function Field({type = "text", placeHolder, labelName, required, value, setValue}) {

  

  const handleChange = (event) =>{
      setValue(event.target.value)
  }

  return (
    <>
      <li className={`field ${type === "color" ? "field__color" : ""}`}>
        <label>{labelName}</label>
        <input 
        placeholder={placeHolder} 
        required={required}
        value={value}
        onChange={handleChange}
        type={type}
        />
      </li>
    </>
  );
}
