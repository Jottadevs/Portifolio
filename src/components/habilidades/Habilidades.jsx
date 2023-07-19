import './Habilidades.css'
import { SiMysql } from "react-icons/si"
import { TbBrandCSharp } from "react-icons/tb"
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoCPlusPlus } from "react-icons/bi"

function Habilidades() {
    return (
        <>
            <div id="skills">
                <div className='skills'>
                    <p>Habilidades de Jotta:</p>

                    <div className='desc-skills'>
                        Minhas habilidades abrangem diversas áreas no mercado de tecnologia,
                        desde montagem e manutenção de computadores e redes até programação.
                        Tive meu primeiro contato profissional nesse campo há aproximadamente
                        um ano, através de um curso técnico. Durante o curso, adquiri conhecimento
                        em montagem de computadores, configuração de redes e sub-redes. <br />

                        No que diz respeito à programação, tive experiência com várias tecnologias,
                        embora de forma breve, incluindo SQL , C++ , C#.
                        Comecei a me aprofundar no desenvolvimento web utilizando HTML5, CSS3 e JavaScript
                        e React Js. <br />

                        Embora não tenha tido experiência profissional até o momento, estou empenhado
                        em expandir meu conhecimento e aplicar minhas habilidades em projetos reais no futuro.

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

            <div className='icons'>
                <div className='tecnology'>
                    <p>Tecnologias</p>
                    <div className='icones-tec'>
                        <p>Com amplo conhecimento</p>
                        <div className='icones-conhecimento'>
                            <span className='html'>
                                <BiLogoHtml5 />
                            </span>

                            <span className="css">
                                <BiLogoCss3 />
                            </span>
                        </div>

                        <p>Estou estudando/aperfeiçoando</p>
                        <div className="icones-estudando">
                            <span className="js">
                                <BiLogoJavascript />
                            </span>

                            <span className="react">
                                <BiLogoReact />
                            </span>
                        </div>

                        <p>Tive contato breve</p>
                        <div className="icones-breve">
                            <span className='cmais'>
                                <BiLogoCPlusPlus />
                            </span>
                            <span className='csharp'>
                                <TbBrandCSharp />
                            </span>
                            <span className='sql'>
                                <SiMysql />
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Habilidades;