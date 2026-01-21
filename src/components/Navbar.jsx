import { Link, NavLink } from "react-router"

function Navbar({ logo }) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    {logo}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/category/1">Electronics</Link></li>
                                <li><Link className="dropdown-item" to="/category/2">Clothes</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/cart" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                                Cart
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar