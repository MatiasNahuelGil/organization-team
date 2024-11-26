import headerImage from '../../assets/img/header.png';
import './Header.css'

export default function Header(){
    return ( 
        <>
        <header className='header'>
            <img src={headerImage} alt="Imagen de portada del header" />
        </header>    
        </>
    )
};