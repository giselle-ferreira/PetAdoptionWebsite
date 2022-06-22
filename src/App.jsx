import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  

  return (   
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>        
          <Route path="/about" element={<About />}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
