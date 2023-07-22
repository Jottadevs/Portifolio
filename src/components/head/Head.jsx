
import Sidebar from './sidebar/Sidebar';
import './Head.css'

function Head() {

    return (
        <div>

            <header className='header'>
                <div className='header-content'>
                    <p className='enterprise-p'><strong>Jottadevs</strong> |<span className='front-dev'> Front-end developer</span></p>
                    <Sidebar />
                </div>
            </header>

        </div>
    );
}


export default Head; 