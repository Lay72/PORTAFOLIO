import { Link } from 'react-router';

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/about_me'>About_me</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
