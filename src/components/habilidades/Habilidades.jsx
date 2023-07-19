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
                        Sou um profissional com habilidades abrangentes no mercado
                        de tecnologia, com experiência em montagem e manutenção de
                        computadores, configuração de redes e sub-redes. Iniciei
                        minha jornada no campo há cerca de um ano, por meio de
                        um curso técnico, onde tive a oportunidade de me familiarizar
                        com diversas tecnologias.

                        Na área de programação, adquiri conhecimentos em SQL, C++, e C#,
                        além de me aprofundar no desenvolvimento web com HTML5, CSS3, JavaScript
                        e React Js. Embora ainda não tenha experiência profissional, estou
                        determinado a expandir meu conhecimento e aplicar minhas habilidades
                        em projetos reais no futuro.
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

                        <p>Estou estudando / aperfeiçoando</p>
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