import Aboutme from "./components/about-me/Aboutme";
import Footer from "./components/footer/Footer";
import Habilidades from "./components/habilidades/Habilidades";
import Head from "./components/head/Head";
import Main from "./components/main/Main";
import Projects from "./components/projetos/Projects";

import './responsivo.css'

function App() {


  return (
    <div>
      <Head />
      <Main />
      <Aboutme />
      <Habilidades />
      <Projects />
      <Footer />
    </div>

  )
}

export default App;
