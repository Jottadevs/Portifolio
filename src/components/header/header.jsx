
import { BiMenuAltRight } from 'react-icons/bi'
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

    return (
        <div>


            <header>
                <div className='header-content'>
                    <p className='enterprise-p'><strong>Jottadevs</strong></p>

                    <label className='checkbox-sidebar-label'>
                        <input type="button" className='checkbox-input' onClick={sidebar} hidden />
                        <BiMenuAltRight className='icon-label' />
                    </label>

                    <div className='sidebar' id='sidebar-function'>
                        <div className="elements-sidebar">
                            teste
                        </div>
                    </div>
                </div>
            </header>



        </div>
    );
}

export default Header;