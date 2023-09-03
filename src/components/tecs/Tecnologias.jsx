import './Tecnologias.css';
import { AiFillHtml5 } from 'react-icons/ai'
import { SiMysql } from 'react-icons/si'
import { BsGit, BsGithub } from 'react-icons/bs'
import { TbBrandCpp, TbBrandCSharp } from 'react-icons/tb'
import { BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoPython } from 'react-icons/bi'


function Tecnologias() {
    return (

        <>
            <div id="tecs">
                Tecnologias
            </div>

            <div id='container'>
                <div class='square'>
                    <AiFillHtml5 class='form' />
                </div>

                <div class='square'>
                    <BiLogoCss3 class='form' />
                </div>

                <div class='square'>
                    <BiLogoJavascript class='form' />
                </div>

                <div class='square'>
                    <BiLogoReact class='form' />
                </div>
                <div class='square'>
                    <BiLogoPython class='form' />
                </div>


                <div class='square'>
                    <TbBrandCpp class='form' />
                </div>
                <div class='square'>
                    <TbBrandCSharp class='form' />
                </div>
                <div class='square'>
                    <SiMysql class='form' />
                </div>
                <div class='square'>
                    <BsGit class='form' />
                </div>
                <div class='square'>
                    <BsGithub class='form' />
                </div>
            </div>

        </>

    );
}

export default Tecnologias;
