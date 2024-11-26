import './Collaborator.css';
import { IoIosCloseCircle   } from "react-icons/io";
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai"


export default function Collaborator({data, collaboratorDelete,id,like}){

   



    return (
        <> 
           <div className='collaborator'>
            <IoIosCloseCircle onClick={()=> collaboratorDelete(id)} className='delete'/>
             <div className='head' style={{backgroundColor : data.primaryColor}}>
                 <img src={data.image} alt={data.name}/>
             </div>
             <div className='info'>
                <h4>{data.name}</h4>
                <h5>{data.position}</h5>
                {data.fav ? <AiFillHeart color="red" onClick={() => like(id)} /> : <AiOutlineHeart onClick={() => like(id)} />}
             </div>
           </div>
        </>
    )
}