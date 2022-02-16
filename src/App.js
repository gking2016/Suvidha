import './App.css';
import Login from './Components/Login';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Who from './Components/Who';
import Why from './Components/Why';

function App() {
  return (
    <div className="App">    
      <Header/>
      <Who/>
      <Why/>
      <Contact/>
    </div>
  );
}

export default App;
