import './projects.css'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

const todolist = document.querySelector("#todolist")
const calculadora = document.querySelector("#calculadora")
const mario = document.querySelector("#mario")
const clima = document.querySelector("#clima")
const shopping = document.querySelector("#shopping")
const piano = document.querySelector("#piano")



function Projects() {
    return (
        <div id="projects">
            <p className='title'>Projetos: </p>


            <div className='buttons'>
                <label>
                    <BsArrowLeft className='button-icon-left' />
                    <input type="button" hidden />
                </label>

                <label>
                    <BsArrowRight className='button-icon-right' />
                    <input type="button" hidden />
                </label>
            </div>

            <div className='projects'>
                <div id="todolist" className="project-todolist">
                    TODO
                </div>

                <div id="calculadora" className='project-calculadora'>
                    CALCULADORA
                </div>

                <div id="mario" className='project-mario'>
                    MARIO
                </div>

                <div id="clima" className='project-weather'>
                    CLIMA
                </div>

                <div id="shopping" className="project-carrinho-compras">
                    SHOPPING
                </div>

                <div id="piano" className="project-piano">
                    PIANO
                </div>
            </div>
        </div >

    );
}

export default Projects;