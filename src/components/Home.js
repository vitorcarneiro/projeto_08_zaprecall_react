import FlashCards from './FlashCards.js';

import '../css/all-screens.css';
import '../css/home.css';

import logo from '../img/logo.png';
import next from '../img/next.png';

const buttonText = 'Praticar React';

export default function Home( {setScreen} ) {
    console.log(setScreen);

    return (
        <div className="home">
            <img src={logo} alt='logo'/>
            <button onClick={() => setScreen(<FlashCards />)}>
                {buttonText}
                <img src={next} alt='next'/>
            </button>
        </div>
    );

}