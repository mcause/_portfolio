import logo from './logo.svg';
import './App.css';
import Nb from './Components/Navbar/Nb';
import AboutMe from './Components/About-Me/aboutme';
import Project from './Components/Projects/projects';
import Tag from './Components/Tag/tag'
import { BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nb links={['Home', 'About Me', 'Project', 'Contact Me']}/>
        <Route exact path ='/About'>
          <AboutMe/>
        </Route>
        <Route exact path ='/Projects'>
          <Project/>
        </Route>
      <h2> Welcome to my domain</h2>
      </BrowserRouter>
    </div>
  );
}

export default App;
