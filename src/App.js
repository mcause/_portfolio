import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

function App() {
  console.log('did this happen');
  return (
    <div className="App">
      <Navbar/>
      {console.log('hello world')}
    </div>
  );
}

export default App;
