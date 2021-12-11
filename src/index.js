import ReactDOM from 'react-dom';

import './css/all-screens.css';

import logoMini from './img/logo-mini.png';
import turn from './img/turn.png';

let page = 1;
const totalPages = 8;

function App() {
    return (
        
    <>
        <header>
            <img src={logoMini} />
        </header>

        <main className='card'>
            <p className='page-marker'>{page}/{totalPages}</p>
            

            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ullamcorper at quis eu. Malesuada iaculis viverra a tincidunt arcu nullam. Orci tortor arcu placerat id sit et. Elementum in erat cras tortor at auctor diam.</h2>
            
            <div className="bottom-card-boxes">
                <p className="bottom-box black">Aprendi agora</p>
                <p className="bottom-box red">Não lembrei</p>
                <p className="bottom-box green">Lembrei com esforço</p>
                <p className="bottom-box yellow">Zap!</p>
            </div>

            {/* <img src={turn} className='turn'/> */}
        </main>
    </>
    
    );

}

ReactDOM.render(App(), document.querySelector('.root'));