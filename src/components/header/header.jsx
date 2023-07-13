
import { BiMenuAltRight } from 'react-icons/bi'
import { BsPeopleFill } from 'react-icons/bs'
import { FcAbout } from 'react-icons/fc'
import { MdDarkMode } from 'react-icons/md'
import { FaInstagram } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import './Header.css'

function Header() {

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

    function socialIconsVisible() {
        const socialIcons = document.querySelector(".socias-icons")
        if (!visible) {
            visible = true
            socialIcons.classList.add("active")
        } else {
            visible = false
            socialIcons.classList.remove("active")
        }
    }

    return (
        <div>


            <header className='header'>
                <div className='header-content'>
                    <p className='enterprise-p'><strong>Jottadevs</strong></p>

                    <label className='checkbox-sidebar-label'>
                        <input type="button" className='checkbox-input' onClick={sidebar} hidden />
                        <BiMenuAltRight className='icon-label' />
                    </label>

                    <div className='sidebar' id='sidebar-function'>
                        <div className="elements-sidebar">
                            <p className='contactus'>
                                Contate-me
                                <BsPeopleFill onClick={socialIconsVisible} className='icon-contact' />
                            </p>

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

                            <p className='darkmode'>
                                Dark Mode
                                <MdDarkMode className='icon-darkmode' />
                            </p>


                            <p className='about'>
                                Sobre
                                <FcAbout className='icon-about' />
                            </p>
                        </div>
                    </div>
                </div>
            </header>



        </div>
    );
}

export default Header;