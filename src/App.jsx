import { Analytics } from '@vercel/analytics/react'; // Add this line
import './App.css';
import About from './components/About';
import Achievements from './components/Achievements';
import Blogs from './components/Blogs';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Achievements />
      <Blogs />
      <Analytics />
    </>
  )
}

export default App
