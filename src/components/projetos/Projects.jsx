import './projects.css'


const devimage = document.querySelector('.dev-image')
const devsetup = document.querySelector('.setup-image')

let fundo = false; // Certifique-se de que esta variável está sendo declarada e inicializada em algum lugar do seu código.

function projectview(event) {
    const projetoClicado = event.currentTarget;

    if (projetoClicado.classList.contains('active')) {
        // O projeto clicado já está ativo, desative-o
        projetoClicado.classList.remove('active');
        devimage.classList.remove('move');
        fundo = false;
    } else if (!fundo) {
        fundo = true;

        const projetoAtivo = document.querySelector('.project.active');
        if (projetoAtivo) {
            projetoAtivo.classList.remove('active');
        }

        projetoClicado.classList.add('active');
        devimage.classList.add('move');
    }
}



function projectview2(event) {
    const projetoClicado = event.currentTarget;

    if (projetoClicado.classList.contains('active2')) {
        // O projeto clicado já está ativo, desative-o
        projetoClicado.classList.remove('active2');
        devsetup.classList.remove('move');
        fundo = false;
    } else if (!fundo) {
        fundo = true;

        const projetoAtivo = document.querySelector('.project.active2');
        if (projetoAtivo) {
            projetoAtivo.classList.remove('active2');
        }

        projetoClicado.classList.add('active2');
        devsetup.classList.add('move');
    }
}




function Projects() {
    return (
        <div id="projects">
            <p className='title'>Projetos: </p>

            <div className='projects'>

                <div onClick={projectview} id="calculadora" className='project'>
                    <h3 className='title-project'>Calculadora</h3>
                    <div className="line"></div>

                </div>

                <div onClick={projectview} id="mario" className='project'>
                    <h3 className='title-project'>Mario</h3>
                    <div className="line"></div>

                </div>

                <div onClick={projectview} id="clima" className='project'>
                    <h3 className='title-project'>Clima</h3>
                    <div className="line"></div>
                </div>

                <img src='./Images/elemento-grafico-dev.png' alt="dev" className='dev-image' />


            </div>

            <div className="projects2">
                <div onClick={projectview2} id="todolist" className="project">
                    <h3 className='title-project'>Todo List</h3>
                    <div className="line"></div>

                </div>

                <div onClick={projectview2} id="shopping" className="project">
                    <h3 className='title-project'>Shopping Cart</h3>
                    <div className="line"></div>

                </div>

                <div onClick={projectview2} id="piano" className="project">
                    <h3 className='title-project'>Piano</h3>
                    <div className="line"></div>

                </div>

                <img src="./Images/elemento-grafico-setup.png" alt="setup" className='setup-image' />

            </div>

        </div>
    );
}

export default Projects