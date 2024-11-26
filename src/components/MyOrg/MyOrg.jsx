import add from '../../assets/img/add.png'
import './MyOrg.css'


export default function MyOrg({title,showChange}){


    return (
        <>
           <section className='orgSection'>
               <h3 className='orgTitle'>{title}</h3>
               <img src={add} onClick={showChange} alt="imagen para quitar o añadir el formulario" />
           </section>
        </>
    )
}