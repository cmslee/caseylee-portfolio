import { Link } from "react-router-dom"

function NavBar () {
    return (
        <nav>
            <Link to='/about'>
                About
            </Link>
            <Link to='/projects'>
                Projects
            </Link>
            <Link to='/'>
                Home
            </Link>
        </nav>
    )
}

export default NavBar;