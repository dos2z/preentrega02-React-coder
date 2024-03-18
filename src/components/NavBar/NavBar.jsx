import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from 'React-router-dom'


const NavBar = () => {
    
    
    return (
        <nav>
            <Link to="/" className="brand">
                <h1>
                    Phoenix Coffee Roasters
                </h1>
            </Link>
            <div className="linkCategoryContainer">
                <NavLink to="/category/cafe" className={({ isActive }) => isActive ? "active linkCategory" : "linkCategory"}>Café</NavLink>
                <NavLink to="/category/cafeteras" className={({ isActive }) => isActive ? "active linkCategory" : "linkCategory"}>Cafeteras</NavLink>
                <NavLink to="/category/molinos" className={({ isActive }) => isActive ? "active linkCategory" : "linkCategory"}>Molinos</NavLink>
            </div>

            <CartWidget />
        </nav>
    )
}

export default NavBar