import './App.css';
import Header from './components/Header'
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Players from './components/Players';
import Clubs from './components/Clubs';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Leagues from './components/Leagues';

function App() {
  return (
  <Router>
    <div className="App">
      
        <Header />
        <NavBar />
        <div className='content'>
          <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route path="/leaguespage" element={ <Leagues /> } />
            <Route path="/clubspage" element={ <Clubs /> } />
            <Route path="/playerspage" element={ <Players /> } />
            <Route path="/aboutpage" element={ <About /> } />
          </Routes>
        </div>
      
      </div>
    </Router>
  )
}

export default App;
