import './Habilidades.css'

function Habilidades() {
    return (
        <>
            <div id="skills">
                <div className='skills'>
                    <p>Habilidades de Jotta:</p>

                    <div className='desc-skills'>
                        Sou um profissional com habilidades abrangentes no mercado de
                        tecnologia, com aproximadamente um ano de experiência em montagem e manutenção
                        de computadores. Iniciei minha
                        jornada nesse campo por meio de um curso técnico que me proporcionou
                        a oportunidade de me familiarizar com diversas tecnologias. <br></br>

                        Na área de programação, adquiri conhecimentos em SQL, C++, C# e Python,
                        além de me aprofundar no desenvolvimento web, dominando tecnologias como
                        HTML5, CSS3 e Java Script. Embora ainda não tenha tido a chance
                        de aplicar essas habilidades em um ambiente profissional, estou altamente
                        motivado e determinado a expandir meu conhecimento e utilizá-lo em projetos
                        reais no futuro.

                        <div className='certificados-titulo'>
                            <p>Certificados</p>

                            <div className='certificados'>

                                <p><span className='senacsp'>SENAC SP 2023</span> - Assistente de suporte e manutenção de computadores.</p>
                                <p><span className='senacsp'>SENAC SP 2023</span> - Assistente de operação de redes e computadores. </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Habilidades;