import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import MyOrg from "./components/MyOrg/MyOrg";
import { useState } from "react";
import { TEAMS } from "./data/teamData";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
import { v4 as uuid } from "uuid";

function App() {
  // Colaboradores
  const [collaborators, setCollaborator] = useState([
    {
      id: uuid(),
      team: "Front End",
      image: "https://github.com/harlandlohora.png",
      name: "Harland Lohora",
      position: "Instructor",
      fav: false,
    },
    {
      id: uuid(),
      team: "Programación",
      image: "https://github.com/genesysR-dev.png",
      name: "Genesys Rondón",
      position: "Desarrolladora de software e instructora",
      fav: false,
    },
    {
      id: uuid(),
      team: "UX y Diseño",
      image: "https://github.com/JeanmarieAluraLatam.png",
      name: "Jeanmarie Quijada",
      position: "Instructora en Alura Latam",
      fav: false,
    },
    {
      id: uuid(),
      team: "Programación",
      image: "https://github.com/christianpva.png",
      name: "Christian Velasco",
      position: "Head de Alura e Instructor",
      fav: false,
    },
  ]);

  // Equipos con IDs únicos
  const [teams, setTeams] = useState(
    TEAMS.map((team) => ({ ...team, id: uuid() }))
  );

  // Mostrar o no formulario
  const [showForm, setShowForm] = useState(false);

  const showChange = () => {
    setShowForm(!showForm);
  };

  // Registrar colaborador
  const collaboratorRegister = (collaborator) => {
    setCollaborator([...collaborators, collaborator]);
  };

  // Borrar colaborador
  const collaboratorDelete = (id) => {
    const newCollaborators = collaborators.filter(
      (collaborator) => collaborator.id !== id
    );
    setCollaborator(newCollaborators);
  };

  // Actualizar color de equipo
  const updateColor = (id, color) => {
    console.log("Updating team color for ID:", id, "Color:", color);
    const updatedTeams = teams.map((team) => {
      if (team.id === id) {
        return { ...team, primaryColor: color };
      }
      return team;
    });
    setTeams(updatedTeams);
  };

  // Crear equipo
  const createTeam = (newTeam) => {
    setTeams([...teams, { ...newTeam, id: uuid() }]);
  };

  // Like
  const like = (id) => {
    const updatedCollaborators = collaborators.map((collaborator) => {
      if (collaborator.id === id) {
        collaborator.fav = !collaborator.fav;
      }
      return collaborator;
    });
    setCollaborator(updatedCollaborators);
  };

  return (
    <>
      <Header />

      {showForm && (
        <Form
          collaboratorRegister={collaboratorRegister}
          createTeam={createTeam}
          teams={teams}
        />
      )}

      <MyOrg title="Mi organización" showChange={showChange} />

      {teams.map((team, index) => (
        <Team
          key={index}
          data={team}
          collaborators={collaborators.filter(
            (collaborator) => collaborator.team === team.title
          )}
          collaboratorDelete={collaboratorDelete}
          updateColor={updateColor}
          like={like}
        />
      ))}

      <Footer />
    </>
  );
}

export default App;
