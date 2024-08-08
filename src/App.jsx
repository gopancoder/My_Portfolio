import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Title from "./Components/Title/Title";
import About from "./Components/About/About"
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
      <div className="app">
        <Navbar/>
        <Hero/>
        <Title subTitle={'info on'} title={'About me'}  />
        <About/>
        <Title subTitle={'Explore my'} title={'Technical Skills'}  />
        <Skills/>
        <Title subTitle={'Showcasing My'} title={'Projects'}  />
        <Projects/>
        <Title subTitle={'Get in Touch'} title={'Contact Me'}  />
        <Contact/>
        <Footer/>
      </div>
  );
}

export default App;
