import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About_me from './pages/About_me';
import Navbar from './componentes/Navbar';
import Animacion from './componentes/Animacion'; // Asegúrate de que la ruta sea correcta

import './App.css';

function App() {
    return (
        <>
            <Animacion />
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path='projects' element={<Projects />} />
                <Route path='contact' element={<Contact />} />
                <Route path='about_me' element={<About_me />} />
            </Routes>
        </>
    );
}

export default App;
