import './projects.css'

let fundo = false

function darkfundo(event) {
    const projetoClicado = event.currentTarget;

    if (!fundo) {
        fundo = true;

        const projetoAtivo = document.querySelector('.project.active');
        if (projetoAtivo) {
            projetoAtivo.classList.remove('active');
        }

        projetoClicado.classList.add('active');
    } else {
        fundo = false;

        projetoClicado.classList.remove('active');
    }
}




function Projects() {
    return (
        <div id="projects">
            <p className='title'>Projetos: </p>

            <div className='projects'>


                <div onClick={darkfundo} id="calculadora" className='project'>
                    <h3 className='title-project'>Calculadora</h3>
                    <div className="line"></div>
                </div>

                <div onClick={darkfundo} id="mario" className='project'>
                    <h3 className='title-project'>Mario</h3>
                    <div className="line"></div>

                </div>

                <div onClick={darkfundo} id="clima" className='project'>
                    <h3 className='title-project'>Clima</h3>
                    <div className="line"></div>

                </div>

                <div onClick={darkfundo} id="todolist" className="project">
                    <h3 className='title-project'>Todo List</h3>
                    <div className="line"></div>

                </div>

                <div onClick={darkfundo} id="shopping" className="project">
                    <h3 className='title-project'>Shopping Cart</h3>
                    <div className="line"></div>

                </div>

                <div onClick={darkfundo} id="piano" className="project">
                    <h3 className='title-project'>Piano</h3>
                    <div className="line"></div>

                </div>
            </div>

        </div>
    );
}

export default Projects