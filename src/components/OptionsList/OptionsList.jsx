import './OptionsList.css'
import { TEAMS } from '../../data/teamData'

export default function OptionsList({labelName,value,setValue,teams}){

    

    const handleChange = (event) => {
         setValue(event.target.value)
    }

    return(
        <>
            <li className='options__list'>
                <label>{labelName}</label>
                <select value={value} onChange={handleChange}>
                    <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
                    {teams.map((team, index) =>{
                      return (
                        <option key={index} value={team.title}>{team.title}</option>       
                      )
                    })}
                </select>
            </li>
        </>
    )
}