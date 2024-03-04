import CartWidget from "../CartWidget/CartWidget"
import { Link } from 'React-router-dom'
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav>
            <Link to="/" className="brand">
                <h1>
                    Phoenix Coffee Roasters
                </h1>
            </Link>
            <div className="linkCategoryContainer">
                <Link to="/category/cafe" className="linkCategory">Café</Link>
                <Link to="/category/cafeteras" className="linkCategory">Cafeteras</Link>
                <Link to="/category/molinos" className="linkCategory">Molinos</Link>
            </div>

            <CartWidget />
        </nav>
    )
}

export default NavBar