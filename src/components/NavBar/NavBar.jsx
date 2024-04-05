import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from 'React-router-dom'


const NavBar = () => {


    return (
        <nav>
            <div className="linkCategoryContainer">
                <NavLink to="/category/cafe" className={({ isActive }) => isActive ? "active linkCategory" : "linkCategory"}>Café</NavLink>
                <NavLink to="/category/cafeteras" className={({ isActive }) => isActive ? "active linkCategory" : "linkCategory"}>Cafeteras</NavLink>
                <NavLink to="/category/molinos" className={({ isActive }) => isActive ? "active linkCategory" : "linkCategory"}>Molinos</NavLink>
            </div>

            <div className="nav__brandDiv">
                <Link to="/" className="brand">
                    <h1>
                        Phoenix Coffee Roasters
                    </h1>
                </Link>
            </div>

            <div className="nav__cartDiv">
                <CartWidget />
            </div>


        </nav>
    )
}

export default NavBar