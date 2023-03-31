import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <div className="menu">
                <Link to='/about' className="menu-text">
                    About
                </Link>
            </div>
            <div className="menu">
                <Link to='/projects' className="menu-text">
                    Projects
                </Link>
            </div>
            <div className="menu">
                <Link to='/' className="menu-text">
                    Home
                </Link>
            </div>
        </nav>
    )
}

export default NavBar;