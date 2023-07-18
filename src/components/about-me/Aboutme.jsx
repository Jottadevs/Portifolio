import './Aboutme.css'

import eu from "/img/eu.jpg"
import euabandeira from "/img/bandeira-eua.jfif"
import brasilbandeira from "/img/bandeira-brasil.jfif"

function Aboutme() {
    return (
        <section id='sobremim' className='section-aboutme'>
            <h1 className='about'>SOBRE MIM</h1>
            <div className="line"></div>
            <div className='desc'>
                <p className='iam-j'>Esse é o jotta</p>


                <p className='desc-about'>
                    Meu nome é João Lucas e estou estudando programção desde o fim do ano <br />de
                    2022, possuo 18 anos meu primeiro contato com programação foi na <br /> escola com
                    amigos que ja estudavam a um tempo, e desde então me  <br /> apaioxenei pela área
                    e venho estudando desde então, eu iniciei um curso  <br /> técnico de informática
                    onde ainda terei melhor contato com a área, após finalizar o
                    ensino médio entrei em uma faculdade de <br /> ADS (
                    <span className='fontsize-ads'> Analise e desenvolvimento de sistemas </span>)
                    porêm todo meu estudo <br /> de programação foi por conta, desde o básico do html até minha <br />
                    atual area de atuação o React Js, e continuarei empenhando até chegar ao <br />
                    meu objetivo, me tornar um <strong> dev fullstack.</strong>
                </p>
                <img src={eu} alt="jottadev" className='picture-j' />
                <h1 className='idioma'>Idiomas:</h1>
            </div>
            <div className='idiomas'>
                <div className="idioma-br">
                    <img src={brasilbandeira} alt="bandeira-brasil" className='bandeira-brasil' />
                    <h2>Português</h2>
                    <h3 className='opacity-idioma'>Nativo</h3>
                </div>
                <div className="idioma-eua">
                    <img src={euabandeira} alt="bandeira-eua" className='bandeira-eua' />
                    <h2>Inglês</h2>
                    <h3 className='opacity-idioma'>Técnico</h3>
                </div>
            </div>
        </section>
    );
}

export default Aboutme;