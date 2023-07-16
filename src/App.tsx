import "./App.css";
import SiteNav from "./components/SiteNav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import { Helmet } from "react-helmet";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="snap-y  snap-mandatory">
      <SiteNav />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-start about">
        <About />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contacts" className="snap-end">
        <Contacts />
      </section>
      <Footer />
      <Helmet>
        <script>
          {`
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/64a1835f94cf5d49dc610f69/1h4beibho';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})()`}
        </script>
      </Helmet>
    </div>
  );
}

export default App;
