import '../css/all-screens.css';
import '../css/header.css';

import Home from "./Home";

import logoMini from '../img/logo-mini.png';

export default function Header( {setScreen} ) {
    return (
       <>
            <header>
                <img src={logoMini} alt="logo mini" onClick={() => setScreen(setScreen)} />
            </header>
       </>
    );
}