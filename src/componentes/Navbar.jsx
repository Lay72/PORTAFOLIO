import { useState } from 'react';
import { Link } from 'react-router';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            {/* Ícono de hamburguesa SIEMPRE visible */}
            <div className='hamburger' onClick={toggleMenu}>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>

            {/* Contenedor del navbar (se desplaza desde fuera) */}
            <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
                <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
                    <li>
                        <Link to='/' onClick={() => setIsMenuOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/projects'
                            onClick={() => setIsMenuOpen(false)}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/contact'
                            onClick={() => setIsMenuOpen(false)}>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/about_me'
                            onClick={() => setIsMenuOpen(false)}>
                            About Me
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Estilos CSS */}
            <style>{`
                .hamburger {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    cursor: pointer;
                    z-index: 1100; /* Por encima de todo */
                }

                .line {
                    width: 30px;
                    height: 4px;
                    background-color: #0056b3;
                    border-radius: 2px;
                }

                .navbar {
                    position: fixed;
                    top: 0;
                    right: 0;
                    height: 100vh;
                    width: 250px;
                    background-color: #888;
                    padding-top: 60px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    transform: translateX(100%);
                    transition: transform 0.3s ease-in-out;
                    z-index: 1000;
                }

                .navbar.active {
                    transform: translateX(0);
                }

                .menu {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    list-style-type: none;
                    padding-left: 20px;
                    opacity: 0;
                    visibility: hidden;
                    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
                }

                .menu.open {
                    opacity: 1;
                    visibility: visible;
                }

                .menu a {
                    color: white;
                    text-decoration: none;
                    font-size: 1.2rem;
                    transition: color 0.3s;
                }

                .menu a:hover {
                    color: #0056b3;
                }
            `}</style>
        </div>
    );
}

export default Navbar;
