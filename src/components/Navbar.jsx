import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
    <nav className="nav">
        <ul>
            <li>
                <NavLink to="/" activeClassName="active" >Home</NavLink>
            </li>
            <li>
                <NavLink to="/vehicles" activeClassName="active">Our Vehicles</NavLink>
            </li>
            <li>
                <NavLink to="/contact" activeClassName="active">Contact Us</NavLink>
            </li>
        </ul>
    </nav>
    )
}