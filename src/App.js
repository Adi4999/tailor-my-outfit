import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Sign from './pages/Sign';
import Gallery from './pages/Gallery';
import Start from './pages/Start';
import Works from './pages/Works';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="app-body">
        <Router>
          <Nav />
          <Routes>
           
            <Route path="/" element={<Sign />} />
            
            
            <Route path="/home" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/start" element={<Start />} />
            <Route path="/how-it-works" element={<Works />} />
            <Route path="/gallery" element={<Gallery />} />

          
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
