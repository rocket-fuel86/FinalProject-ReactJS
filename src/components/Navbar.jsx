import { Link, NavLink } from "react-router"
import Category from "../models/Category"
import React from "react"

const categories = [
    new Category({ id: 1, name: "Electronics" }),
    new Category({ id: 2, name: "Clothes" }),
]

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
                                {categories.map(category => (
                                    <React.Fragment key={category.id}>
                                        <li><Link className="dropdown-item" to={`/category/${category.id}`}>{category.name}</Link></li>
                                    </React.Fragment>
                                ))}
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