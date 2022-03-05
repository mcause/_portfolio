import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import AboutMe from './Components/About-Me/aboutme';
import Project from './Components/Projects/projects';
import Tag from './Components/Tag/tag'

function App() {
  return (
    <div className="App">
      <Navbar links={['Home', 'About Me', 'Project', 'Contact Me']}/>
      <AboutMe/>
      <Project/>
      <h2> Welcome to my portfolio</h2>
    </div>
  );
}

export default App;
