import { FaInstagram } from 'react-icons/fa' // Iconde do instagram
import { FaGithub } from 'react-icons/fa' // Icone do github
import { FaLinkedin } from 'react-icons/fa' // Icone do linkedin

function Contatos() {
    return (
        <div>
            <div className='socias-icons'>
                <a href="https://instagram.com/jottalucass" target='_blank'>
                    <FaInstagram />
                </a>

                <a href="https://github.com/Jottadevs" target='_blank'>
                    <FaGithub />
                </a>

                <a href="https://www.linkedin.com/in/jo%C3%A3o-lucas-99aa9b259/" target='_blank'>
                    <FaLinkedin />
                </a>
            </div>
        </div>
    );
}

export default Contatos();