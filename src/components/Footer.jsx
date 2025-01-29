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
                <a href='https://www.linkedin.com/in/kcastr1628/'>
                    <img className="linkedin" src='https://upload.wikimedia.org/wikipedia/commons/a/aa/LinkedIn_2021.svg'></img>
                </a>
            </footer>        
        </>
    )
}

export default Footer