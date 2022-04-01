import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Players from './components/Players';
import Clubs from './components/Clubs';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
  <Router>
    <div className="App">
      
        <Header />
        <NavBar />
        <div className='content'>
          <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route path="/clubs" element={ <Clubs /> } />
            <Route path="/players" element={ <Players /> } />
            <Route path="/about" element={ <About /> } />
          </Routes>
        </div>
      
      </div>
    </Router>
  )
}

export default App;
