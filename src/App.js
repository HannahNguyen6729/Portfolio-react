import About from "./components/About/About";
import BackToTop from "./components/BackToTop/BackToTop";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import MainProjects from "./components/MainProjects/MainProjects";
import OtherProjects from "./components/OtherProjects/OtherProjects";
import Skills from "./components/Skills/Skills";
import RecentProject from "./components/MainProjects/RecentProject";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <RecentProject/>
      <MainProjects />
      <OtherProjects />
      <Skills />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
