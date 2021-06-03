import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <div className="container">
                <div className="nav-columns">
                    <div className="nav-column">
                        <div className="nav-label">Menu</div>
                        <ul className="nav-links">
                            <li>
                                <NavLink to="/about" exact>About Me</NavLink>
                            </li>
                            <li>
                                <NavLink to="/approach" exact>Approach</NavLink>
                            </li>
                            <li>
                                <NavLink to="/case-studies" exact>Case Studies</NavLink>
                            </li>
                            <li>
                                <NavLink to="/services" exact>Services</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-column">
                        <div className="nav-label">Contact</div>
                        <div className="nav-infos">
                            <ul className="nav-info">
                                <li className="nav-info-label">Email</li>
                                <li>
                                    <NavLink to="/contact" exact>Get in touch with us</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/audit" exact>Get a free Aduit</NavLink>
                                </li>
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info-label">HeadQuarters</li>
                                <li>360 Highroad Leyton</li>
                                <li>London</li>
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info-label">Phone</li>
                                <li>07772778204</li>
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info-label">Legal</li>
                                <li>Privacy and Cookies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
