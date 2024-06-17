import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Intro from "./components/Intro/intro";
import Navbar from "./components/NavBar/navbar";
import Skill from "./components/Skills/skill";
import Works from "./components/Works/works";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skill/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
