
import './Header.css'
import Sidebar from './sidebar/Sidebar'

function Header() {

    return (
        <div>


            <header className='header'>
                <div className='header-content'>
                    <p className='enterprise-p'><strong>Jottadevs</strong></p>
                    <Sidebar />
                </div>
            </header>



        </div>
    );
}

export default Header; 