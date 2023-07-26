import './Projects.css'

import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoReact } from "react-icons/bi"
import { BiLink } from 'react-icons/bi'

import calculadora from '../../../Images/calculadora.png'
import mario from '../../../Images/mario.png'
import weather from '../../../Images/weather.png'
import todolist from '../../../Images/todo-list.png'
import shopping from '../../../Images/shopping-cart.png'
import piano from '../../../Images/Piano.png'

let fundo = false

function viewproject2() {
    const projeto2 = document.querySelector(".projects2")
    const viewmore = document.querySelector(".vejamais")
    const footer = document.querySelector(".footer")

    if (!fundo) {
        fundo = true
        projeto2.classList.add("active")
        viewmore.innerHTML = "Veja menos"
        viewmore.classList.add("active")
        footer.style.top = "430vh"
    } else {
        fundo = false
        projeto2.classList.remove("active")
        viewmore.innerHTML = "Veja mais"
        viewmore.classList.remove("active")
        footer.style.top = "380vh"
    }
}

function Projects() {
    return (
        <div id="projects">
            <p className='title'>Projetos: </p>

            <div className='projects'>

                <div id="todolist" className="project">
                    <h3 className='title-project'>Todo List</h3>
                    <div className="line"></div>

                    <img src={todolist} alt="projeto-todolist" className="img" id='todolist-img'
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

                    <div className='links-sociais'>
                        <div className="github">
                            <a href="https://github.com/Jottadevs/Lista-de-tarefas" target='_blanck'>
                                <BiLink />
                                <span> Codigo</span>
                            </a>
                        </div>

                        <div className="linkedin">
                            <a href="https://lista-de-tarefas-pearl-ten.vercel.app/" target='_blanck'>
                                <BiLink />
                                <span> Teste-o</span>
                            </a>
                        </div>
                    </div>

                </div>

                <div id="shopping" className="project">
                    <h3 className='title-project'>Shopping Cart</h3>
                    <div className="line"></div>

                    <img src={shopping} alt="projeto-shopping" className="img" id='shopping-img'
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

                    <div className='links-sociais'>
                        <div className="github">
                            <a href="https://github.com/Jottadevs/Shopping-Cart" target='_blanck'>
                                <BiLink />
                                <span> Codigo</span>
                            </a>
                        </div>

                        <div className="linkedin">
                            <a href="https://shopping-cart-jottadevs.vercel.app/" target='_blanck'>
                                <BiLink />
                                <span> Teste-o</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div id="piano" className="project">
                    <h3 className='title-project'>Piano</h3>
                    <div className="line"></div>

                    <img src={piano} alt="projeto-piano" className="img" id='piano-img'
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

                    <div className='links-sociais'>
                        <div className="github">
                            <a href="https://github.com/Jottadevs/Piano" target='_blanck'>
                                <BiLink />
                                <span> Codigo</span>
                            </a>
                        </div>

                        <div className="linkedin">
                            <a href="https://piano-ecru.vercel.app/" target='_blanck'>
                                <BiLink />
                                <span> Teste-o</span>
                            </a>
                        </div>
                    </div>

                </div>


                <p className='vejamais' onClick={viewproject2}>
                    Veja mais
                </p>


                <div className="projects2">

                    <div id="projectOcult" className='project'>
                        <h3 className='title-project'>Calculadora</h3>
                        <div className="line"></div>

                        <img src={calculadora} alt="projeto-caluladora" className="img" id='calculadora-img'
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

                        <div className='links-sociais'>
                            <div className="github">
                                <a href="https://github.com/Jottadevs/Calculadora" target='_blanck'>
                                    <BiLink />
                                    <span> Codigo</span>
                                </a>
                            </div>

                            <div className="linkedin">
                                <a href="https://calculadora-jottadevs.vercel.app/" target='_blanck'>
                                    <BiLink />
                                    <span> Teste-o</span>
                                </a>
                            </div>
                        </div>
                    </div>


                    <div id="projectOcult" className='project'>
                        <h3 className='title-project'>Mario</h3>
                        <div className="line"></div>

                        <img src={mario} alt="projeto-mario" className="img" id='mario-img'
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

                        <div className='links-sociais'>
                            <div className="github">
                                <a href="https://github.com/Jottadevs/Mario-Jump" target='_blanck'>
                                    <BiLink />
                                    <span> Codigo</span>
                                </a>
                            </div>

                            <div className="linkedin">
                                <a href="https://mario-jump-lime.vercel.app/" target='_blanck'>
                                    <BiLink />
                                    <span> Teste-o</span>
                                </a>
                            </div>
                        </div>

                    </div>

                    <div id="projectOcult" className='project'>
                        <h3 className='title-project'>Clima</h3>
                        <div className="line"></div>

                        <img src={weather} alt="projeto-clima" className="img" id='weather-img'
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

                        <div className='links-sociais'>
                            <div className="github">
                                <a href="https://github.com/Jottadevs/Weather" target='_blanck'>
                                    <BiLink />
                                    <span> Codigo</span>
                                </a>
                            </div>

                            <div className="linkedin">
                                <a href="https://weather-jottadevs.vercel.app/" target='_blanck'>
                                    <BiLink />
                                    <span> Teste-o</span>
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
}

export default Projects