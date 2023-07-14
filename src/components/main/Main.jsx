import './Main.css'
import './Responsivo.css'
import { FaInstagram } from 'react-icons/fa' // Iconde do instagram
import { FaGithub } from 'react-icons/fa' // Icone do github
import { FaLinkedin } from 'react-icons/fa' // Icone do linkedin
import Scrool from './scrool/Scrool';


function Main() {
    return (
        <div>

            <div>
                <img src="/img/herobg.png" className="background" />
                <img src="/img/herobg1.png" className="background-white" />
            </div>

            <main id='main' className="main">
                <div className='apresentation-main'>
                    <h2 className='myName'>Olá meu nome é</h2>

                    <h1>João Lucas
                        <span className='apresentation-main-sub'> mas pode me chamar de
                            <span className='color-Jotta'> Jotta</span></span>
                    </h1>

                    <h2 className='Iam'>Eu sou desenvolvedor <span className='color-Front'>Front-End.</span></h2>

                    <div className="about-me">
                        <p>
                            Sou programador Jr Front-end. Estou estudando programação a 9 messes <br />
                            com inutito de ser um desenvolvedor full stack. Estou em busca da minha <br />
                            <strong>primeira</strong> vaga de emprego.  <br />
                            Minhas especialidades são até o momento são <span className='js-color'> Java script </span> e <span className='react-color'> React Js </span>.
                        </p>
                    </div>

                    <div className='contacts'>
                        <p className='contact'>
                            Contate-me:
                        </p>
                        <div className='links-sociais'>
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
                    </div>

                </div>

                <Scrool />
            </main>
        </div>
    );
}

export default Main;