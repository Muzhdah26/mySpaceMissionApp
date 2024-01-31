import {Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Home from './Home';
import Mission from './Mission';
import Contact from './Contact';
import Gallery from './Gallery';


function App() {
  return ( 
    <div className="container">
      <div className="row">
        {/* Header goes here... */}
        <Header/>
        {/* Navbar goes here... */}
        <Navbar />
      </div>

      <div className="row">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </div>
   );
}

export default App;
