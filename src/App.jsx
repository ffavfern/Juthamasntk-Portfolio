import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AboutMe from './components/Aboutme';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import ContactForm from './components/ContactForm';
import Projects from './components/Projects';
import Social from './components/Social';
import Footer from './components/Footer';

function App() {
  return (
  <>
    <div className='justify-center'>
      <NavBar />
      <Hero />
      <AboutMe />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-10">
            <Experience />
            <Education />
          </div>
          <div className="space-y-10">
            <Skills />
            <Projects />
          </div>
        </div>
        <div className="mt-10">
          <Social />
        </div>
      </div>
      <div className="px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </div>
    </div>
    <Footer />
  </>
  );
}

export default App;
