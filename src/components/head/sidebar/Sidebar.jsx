//Icones
import { BiMenuAltRight } from 'react-icons/bi' //Icone menu sidebar
import { MdDarkMode } from 'react-icons/md' // Icone do dark mode
//Hooks
import { useEffect } from 'react'
//Css
import './Sidebar.css'

function Sidebar() {

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

    function skills() {
        const elementoDestino = document.getElementById("skills");
        const posicaoDestino = elementoDestino.offsetTop - window.innerHeight * 0.2;

        window.scrollTo({
            top: posicaoDestino,
            behavior: "smooth"
        });
    }

    function projects() {
        const elementoDestino = document.getElementById("projects");
        const posicaoDestino = elementoDestino.offsetTop - window.innerHeight * 0.2;

        window.scrollTo({
            top: posicaoDestino,
            behavior: "smooth"
        });
    }



    let visible = false

    function sidebar() {
        const sidebar = document.querySelector('#sidebar-function')
        const menuButton = document.querySelector(".icon-label")

        if (!visible) {
            visible = true;
            console.log('true')
            sidebar.classList.add("active")
            menuButton.classList.add("active")
        } else {
            visible = false;
            console.log('false')
            sidebar.classList.remove("active");

            setTimeout(() => {
                menuButton.classList.remove("active");
            }, 300);
        }
    }

    useEffect(() => {
        const HTML = document.querySelector('html');
        const checkbox = document.querySelector('#darkmode-checkbox');


        const toggleDarkMode = () => {
            HTML.classList.toggle('light');
        };

        checkbox.addEventListener('click', toggleDarkMode);

        return () => {
            checkbox.removeEventListener('click', toggleDarkMode);
        };
    },);

    let moonRotation = false

    function moonRotate() {
        const moonButton = document.querySelector(".icon-darkmode")
        const background = document.querySelector(".background-white")

        if (!moonRotation) {
            moonRotation = true
            moonButton.classList.add("rotate")
            background.classList.add("active")
        } else {
            moonRotation = false
            moonButton.classList.remove("rotate")
            background.classList.remove("active")
        }
    }

    return (

        <div>

            <label className='checkbox-sidebar-label'>
                <input type="button" className='checkbox-input' onClick={sidebar} hidden />
                <BiMenuAltRight className='icon-label' />
            </label>

            <div className='sidebar' id='sidebar-function'>
                <div className="elements-sidebar">

                    <p className='darkmode'>
                        Light Mode:
                        <label>
                            <input type="checkbox" id="darkmode-checkbox" hidden />
                            <MdDarkMode className='icon-darkmode' onClick={moonRotate} />
                        </label>
                    </p>

                    <div className="menu">

                        <p className='nav'>Navegação: </p>

                        <label>
                            <p className='about-button'>Inicio</p>
                            <input type='button' onClick={inicio} hidden></input>
                        </label>

                        <label>
                            <p className='about-button'>Sobre</p>
                            <input type='button' onClick={sobremim} hidden></input>
                        </label>

                        <label>
                            <p className='about-button'>Habilildades</p>
                            <input type='button' onClick={skills} hidden></input>
                        </label>

                        <label>
                            <p className='about-button'>Projetos</p>
                            <input type='button' onClick={projects} hidden></input>
                        </label>
                    </div>

                </div>
            </div>



        </div>
    );
}

export default Sidebar;