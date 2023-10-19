import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar'

import Home from './pages/Home';
import Events from './pages/Events';
import Faith from './pages/Faith';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Reports from './pages/Reports';
import Admin from './Admin';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/events' element={<Events />} />
          <Route path='/unser-glaube' element={<Faith />} />
          <Route path='/events/gallery' element={<Gallery />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/reports' element={<Reports />} />
          <Route path= '/admin' element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
