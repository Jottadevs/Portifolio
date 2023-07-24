
import Sidebar from './sidebar/Sidebar';
import './Head.css'

function Head() {

    function inicio() {
        const elementoDestino = document.getElementById("main");
        const posicaoDestino = elementoDestino.offsetTop - window.innerHeight;

        window.scrollTo({
            top: posicaoDestino,
            behavior: "smooth"
        });
    }

    return (
        <div>

            <header className='header'>
                <div className='header-content'>
                    <p className='enterprise-p' onClick={inicio} ><strong>Jottadevs</strong> |<span className='front-dev'> Front-end developer</span></p>
                    <Sidebar />
                </div>
            </header>

        </div>
    );
}


export default Head; 