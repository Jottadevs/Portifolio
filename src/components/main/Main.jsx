import './Main.css'
import { FaInstagram } from 'react-icons/fa' // Iconde do instagram
import { FaGithub } from 'react-icons/fa' // Icone do github
import { FaLinkedin } from 'react-icons/fa' // Icone do linkedin
import Scrool from '../scrool/Scrool';

import fundoDark from '../../../Images/backgroundDark.png'
import fundoWhite from '../../../Images/backgroundWhite.png'

function Main() {
    return (
        <div>

            <div>
                <img src={fundoDark} className="background" />
                <img src={fundoWhite} className="background-white" />
            </div>

            <main id='main' className="main">
                <div className='apresentation-main'>
                    <h2 className='myName'>Olá meu nome é</h2>

                    <h1>João Lucas
                        <span className='apresentation-main-sub'> mas pode me chamar de
                            <span className='color-Jotta'> Jotta</span></span>
                    </h1>

                    <h2 className='Iam'>Desenvolvedor <span className='color-Front'>Front-End.</span></h2>

                    <div className='contacts'>
                        <div className='links-sociais'>
                            <div className="github">
                                <a href="https://github.com/Jottadevs" target='_blanck'>
                                    <FaGithub />
                                </a>
                            </div>

                            <div className="linkedin">

                                <a href="https://www.linkedin.com/in/jo%C3%A3o-lucas-99aa9b259/" target='_blanck'>
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <Scrool />
            </main>
        </div>
    );
}

export default Main;