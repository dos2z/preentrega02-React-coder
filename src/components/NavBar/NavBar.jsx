import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h1>
                Phoenix Coffee Roasters
            </h1>
            <button to="">Café</button>
            <button to="">Cafeteras</button>
            <button to="">Molinos</button>
            <CartWidget />
        </nav>
    )
}

export default NavBar