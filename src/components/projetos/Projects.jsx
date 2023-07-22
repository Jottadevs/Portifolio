import './projects.css'

import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoReact } from "react-icons/bi"


import setup from '../../../Images/elemento-grafico-setup.png'
import dev from '../../../Images/elemento-grafico-dev.png'

import calculadora from '../../../Images/calculadora.png'
import mario from '../../../Images/mario.png'
import weather from '../../../Images/weather.png'
import todolist from '../../../Images/todo-list.png'
import shopping from '../../../Images/shopping-cart.png'
import piano from '../../../Images/Piano.png'

const devimage = document.querySelector('.dev-image')
const devsetup = document.querySelector('.setup-image')

let fundo = false;

function projectview(event) {
    const projetoClicado = event.currentTarget;

    if (projetoClicado.classList.contains('active')) {
        // O projeto clicado já está ativo, desative-o
        projetoClicado.classList.remove('active');
        devimage.classList.remove('move');
        fundo = false;
    } else if (!fundo) {
        fundo = true;

        const projetoAtivo = document.querySelector('.project.active');
        if (projetoAtivo) {
            projetoAtivo.classList.remove('active');
        }

        projetoClicado.classList.add('active');
        devimage.classList.add('move');
    }
}



function projectview2(event) {
    const projetoClicado = event.currentTarget;

    if (projetoClicado.classList.contains('active2')) {
        // O projeto clicado já está ativo, desative-o
        projetoClicado.classList.remove('active2');
        devsetup.classList.remove('move');
        fundo = false;
    } else if (!fundo) {
        fundo = true;

        const projetoAtivo = document.querySelector('.project.active2');
        if (projetoAtivo) {
            projetoAtivo.classList.remove('active2');
        }

        projetoClicado.classList.add('active2');
        devsetup.classList.add('move');
    }
}




function Projects() {
    return (
        <div id="projects">
            <p className='title'>Projetos: </p>

            <div className='projects'>

                <div onClick={projectview} id="calculadora" className='project'>
                    <h3 className='title-project'>Calculadora</h3>
                    <div className="line"></div>

                    <img src={calculadora} alt="projeto-caluladora" className="img" id='calculadora-img'
                        style={{ objectFit: 'cover', }}
                    />

                    <p className='tec'>
                        Técnologias usadas:
                    </p>

                    <div className="tecs">
                        <BiLogoHtml5 />
                        <BiLogoCss3 />
                        <BiLogoJavascript />
                    </div>

                    <p className="clickme">
                        Clique em mim
                    </p>

                </div>

                <div onClick={projectview} id="mario" className='project'>
                    <h3 className='title-project'>Mario</h3>
                    <div className="line"></div>

                    <img src={mario} alt="projeto-caluladora" className="img" id='mario-img'
                        style={{ objectFit: 'cover' }}
                    />

                    <p className='tec'>
                        Técnologias usadas:
                    </p>

                    <div className="tecs">
                        <BiLogoHtml5 />
                        <BiLogoCss3 />
                        <BiLogoJavascript />
                    </div>

                    <p className="clickme">
                        Clique em mim
                    </p>

                </div>

                <div onClick={projectview} id="clima" className='project'>
                    <h3 className='title-project'>Clima</h3>
                    <div className="line"></div>

                    <img src={weather} alt="projeto-caluladora" className="img" id='weather-img'
                        style={{ objectFit: 'cover' }}
                    />

                    <p className='tec'>
                        Técnologias usadas:
                    </p>

                    <div className="tecs">
                        <BiLogoHtml5 />
                        <BiLogoCss3 />
                        <BiLogoJavascript />
                    </div>

                    <p className="clickme">
                        Clique em mim
                    </p>

                </div>

                <img src={dev} alt="dev" className='dev-image' />


            </div>

            <div className="projects2">
                <div onClick={projectview2} id="todolist" className="project">
                    <h3 className='title-project'>Todo List</h3>
                    <div className="line"></div>

                    <img src={todolist} alt="projeto-caluladora" className="img" id='todolist-img'
                        style={{ objectFit: 'cover' }}
                    />

                    <p className='tec'>
                        Técnologias usadas:
                    </p>

                    <div className="tecs">
                        <BiLogoHtml5 />
                        <BiLogoCss3 />
                        <BiLogoJavascript />
                        <BiLogoReact />
                    </div>

                    <p className="clickme">
                        Clique em mim
                    </p>

                </div>

                <div onClick={projectview2} id="shopping" className="project">
                    <h3 className='title-project'>Shopping Cart</h3>
                    <div className="line"></div>

                    <img src={shopping} alt="projeto-caluladora" className="img" id='shopping-img'
                        style={{ objectFit: 'cover' }}
                    />

                    <p className='tec'>
                        Técnologias usadas:
                    </p>

                    <div className="tecs">
                        <BiLogoHtml5 />
                        <BiLogoCss3 />
                        <BiLogoJavascript />
                        <BiLogoReact />
                    </div>

                    <p className="clickme">
                        Clique em mim
                    </p>

                </div>

                <div onClick={projectview2} id="piano" className="project">
                    <h3 className='title-project'>Piano</h3>
                    <div className="line"></div>

                    <img src={piano} alt="projeto-caluladora" className="img" id='piano-img'
                        style={{ objectFit: 'cover' }}
                    />

                    <p className='tec'>
                        Técnologias usadas:
                    </p>

                    <div className="tecs">
                        <BiLogoHtml5 />
                        <BiLogoCss3 />
                        <BiLogoJavascript />
                        <BiLogoReact />
                    </div>

                    <p className="clickme">
                        Clique em mim
                    </p>

                </div>

                <img src={setup} alt="setup" className='setup-image' />

            </div>

        </div>
    );
}

export default Projects