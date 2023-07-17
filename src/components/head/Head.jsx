
import Sidebar from './sidebar/Sidebar'
import './Head.css'

function Head() {

    function inicio() {
        const elementoDestino = document.getElementById("main");
        const posicaoDestino = elementoDestino.offsetTop - window.innerHeight * 0.08;

        window.scrollTo({
            top: posicaoDestino,
            behavior: "smooth"
        });
    }

    function sobremim() {
        const elementoDestino = document.getElementById("sobremim");
        const posicaoDestino = elementoDestino.offsetTop - window.innerHeight * 0.2;

        window.scrollTo({
            top: posicaoDestino,
            behavior: "smooth"
        });
    }



    return (
        <div>

            <header className='header'>
                <div className='header-content'>
                    <p className='enterprise-p'><strong>Jottadevs</strong> |<span className='front-dev'> Front-end developer</span></p>
                    <div className="menu">
                        <label>
                            <h4 className='about-button'>Inicio</h4>
                            <input type='button' onClick={inicio} hidden></input>
                        </label>

                        <label>
                            <h4 className='about-button'>Sobre</h4>
                            <input type='button' onClick={sobremim} hidden></input>
                        </label>

                        <label>
                            <h4 className='about-button'>Habilildades</h4>
                            <input type='button' /* onClick={meusprojetos */ hidden></input>
                        </label>

                        <label>
                            <h4 className='about-button'>Projetos</h4>
                            <input type='button' /* onClick={meusprojetos */ hidden></input>
                        </label>
                    </div>
                    <Sidebar />
                </div>
            </header>

        </div>
    );
}


export default Head; 