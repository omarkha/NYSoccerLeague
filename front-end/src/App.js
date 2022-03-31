import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Register from './components/Register';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Search from './components/Search';

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
            <Route path="/register" element={ <Register /> } />
            <Route path="/search" element={ <Search /> } />
            <Route path="/about" element={ <About /> } />
          </Routes>
        </div>
      
      </div>
    </Router>
  )
}

export default App;
