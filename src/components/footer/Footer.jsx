import './Footer.css'
import { FaInstagram } from 'react-icons/fa' // Iconde do instagram
import { FaGithub } from 'react-icons/fa' // Icone do github
import { FaLinkedin } from 'react-icons/fa' // Icone do linkedin
import { FaReact } from 'react-icons/fa' // Icone do react
import { HiOutlineMail } from "react-icons/hi" // Icone do email

function Footer() {

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


    return (
        <div className="footer">


            <p className="descricao">
                Jottadevs &reg;
            </p>

            <p className="email">
                <a href="mailto:jottadevs.contato@gmail.com">
                    <HiOutlineMail className='logo-email' />
                </a>
                jottadevs.contato@gmail.com
            </p>


            <div className="redes-sociais">

                <p className='contateme'>Contate-me em:</p>

                <a href="https://instagram.com/jottalucass" target='_blanck'>
                    <FaInstagram />
                </a>

                <a href="https://github.com/Jottadevs" target='_blanck'>
                    <FaGithub />
                </a>

                <a href="https://www.linkedin.com/in/jo%C3%A3o-lucas-99aa9b259/" target='_blanck'>
                    <FaLinkedin />
                </a>
            </div>

            <div className='navegação'>

                <p className="novamente">
                    Veja novamente
                </p>

                <label>
                    <h4 className='about-button'>Inicio</h4>
                    <input type='button' onClick={inicio} hidden></input>
                </label>

                <label>
                    <h4 className='about-button'>Sobre-mim</h4>
                    <input type='button' onClick={sobremim} hidden></input>
                </label>

                <label>
                    <h4 className='about-button'>Minhas habilildades</h4>
                    <input type='button' onClick={skills} hidden></input>
                </label>

                <label>
                    <h4 className='about-button'>Meus projetos</h4>
                    <input type='button' onClick={projects} hidden></input>
                </label>
            </div>


            <div className="feitoem">
                <p>Portifólio feito em React Js. <FaReact /></p>
            </div>


        </div>
    );
}

export default Footer;