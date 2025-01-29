import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <footer className='footer'> 
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
            </footer>        
        </>
    )
}

export default Footer