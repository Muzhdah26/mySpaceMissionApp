import { Link } from "react-router-dom";

function Navbar() {
    return ( 
        <nav>
            <Link to="/mission">Mission</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
        </nav>
     );
}

export default Navbar;