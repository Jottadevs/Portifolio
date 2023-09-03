import Head from "./components/head/Head";

import Main from "./components/main/Main";

import Aboutme from "./components/about-me/Aboutme";

import Habilidades from "./components/habilidades/Habilidades";

import Tecnologias from "./components/tecs/Tecnologias";

import Projects from "./components/projetos/Projects";

import Footer from "./components/footer/Footer";

import './responsivo.css'

function App() {

  return (

    <div>
      <Head />
      <Main />
      <Aboutme />
      <Habilidades />
      <Tecnologias />
      <Projects />
      <Footer />
    </div>

  )
}

export default App;
