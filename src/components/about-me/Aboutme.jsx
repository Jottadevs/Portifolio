import './Aboutme.css'
import eu from "../../../Images/eu.jpg"
import bandeiraBrasil from "../../../Images/bandeira-brasil.jfif"
import bandeiraEua from "../../../Images/bandeira-eua.jfif"

function Aboutme() {
    return (

        <section id='sobremim' className='section-aboutme'>
            <h1 className='about'>SOBRE MIM</h1>

            <div className='desc'>
                <p className='iam-j'>Esse é o Jotta</p>

                <img src={eu} alt="jottadev" className='picture-j' />

                <p className='desc-about'>
                    Me chamo João Lucas, tenho 18 anos e estudo programação desde o final de 2022.
                    Me apaixonei pela área após ter contato com amigos na escola. Estou fazendo
                    um curso técnico de informática e entrei na faculdade de Análise e Desenvolvimento
                    de Sistemas. Todo meu aprendizado em programação tem sido autodidata até o momento,
                    abrangendo desde HTML básico até React Js. Meu objetivo é me tornar um desenvolvedor
                    <strong> full stack. </strong>
                </p>

            </div>

            <div className='idiomas'>

                <h3 className='language'>Idiomas falados por Jotta:</h3>

                <div className="idioma-br">
                    <img src={bandeiraBrasil} alt="bandeira-brasil" className='bandeira-brasil' />
                    <h2>Português</h2>
                    <h3 className='opacity-idioma'>Nativo</h3>
                </div>
                <div className="idioma-eua">
                    <img src={bandeiraEua} alt="bandeira-eua" className='bandeira-eua' />
                    <h2>Inglês</h2>
                    <h3 className='opacity-idioma'>Técnico</h3>
                </div>
            </div>
        </section>

    );
}

export default Aboutme;