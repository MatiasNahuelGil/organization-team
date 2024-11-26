import Collaborator from '../Collaborator/Collaborator';
import './Team.css';
import hexToRgba from 'hex-to-rgba';

export default function Team({ data, collaborators, collaboratorDelete, updateColor, like }) {
  if (!data || !collaborators || collaborators.length === 0) return null; 

  const { title, primaryColor = "#000000", id } = data; 
  const rgbaColor = primaryColor ? hexToRgba(primaryColor, 0.6) : "rgba(0,0,0,0.6)";

  return (
    <section className='team' style={{ backgroundColor: rgbaColor }}>
      <input
        type='color'
        className='inputColor'
        value={primaryColor || "#000000"} 
        onChange={(event) => {
          updateColor(id, event.target.value);
          
        }}
      />

      <h3 style={{ borderBottom: `2px solid ${primaryColor}` }}>{title}</h3>

      <div className='collaborators'>
        {collaborators.map((collaborator,index) => (
          <Collaborator
            key={index}
            data={{ ...collaborator, primaryColor }}
            id={collaborator.id}
            collaboratorDelete={collaboratorDelete}
            like={like}
          />
        ))}
      </div>
    </section>
  );
}
