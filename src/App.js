import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/homePage/Home';
import Footer from './pages/shared/Footer';
import NavBar from './pages/shared/NavBar';

function App() {
  return (
    <div  className="App bgAccent">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer/>


    
    
    </div>
  );
}

export default App;
