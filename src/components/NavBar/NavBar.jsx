import CartWidget from "../CartWidget/CartWidget"
import { Link } from 'React-router-dom'

const NavBar = () => {
    return (
        <nav>
            <Link to="/">
                <h1>
                    Phoenix Coffee Roasters
                </h1>
            </Link>

            <Link to="/category/cafe">Café</Link>
            <Link to="/category/cafeteras">Cafeteras</Link>
            <Link to="/category/molinos">Molinos</Link>
            <CartWidget />
        </nav>
    )
}

export default NavBar