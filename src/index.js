import ReactDOM from 'react-dom';

import './css/all-screens.css';

import logoMini from './img/logo-mini.png';

function App() {
    return (
        
    <>
        <header>
            <img src={logoMini} />
        </header>
        <main className='card'></main>
    </>
    
    );

}

ReactDOM.render(App(), document.querySelector('.root'));