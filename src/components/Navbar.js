import React from 'react'
import { Link } from 'react-router-dom'

// Navbar Component: Provides site-wide navigation for InstaNews
const Navbar = (props) => {
    return (
        // Main navbar container with dark background
        <div>
            <nav className="fixed-top navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    {/* Brand section with site name and logo */}
                    <div className='navbar-brand'>
                        {/* Site name as a link to homepage */}
                        <Link 
                            className='px-1' 
                            style={{
                                textDecoration:"none", 
                                color:"white", 
                                fontWeight:"bold"
                            }} 
                            to="/"
                        >
                            InstaNews
                        </Link>
                        {/* Site logo */}
                        <img 
                            style={{width:"30px"}} 
                            src="/logo.png" 
                            alt="InstaNews Logo" 
                        />
                    </div>

                    {/* Responsive navbar toggle for mobile views */}
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navigation menu items */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* Home link */}
                            <li className="nav-item">
                                <Link 
                                    className="nav-link active" 
                                    aria-current="page" 
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>

                            {/* Category dropdown menu */}
                            <li className="nav-item dropdown">
                                <a 
                                    className="nav-link dropdown-toggle active" 
                                    href="/" 
                                    role="button" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false"
                                >
                                    Category
                                </a>
                                {/* Dropdown menu items for different news categories */}
                                <ul className="dropdown-menu bg-dark">
                                    <li><Link className="nav-link text-light" to="/business">Business</Link></li>
                                    <li><Link className="nav-link text-light" to="/entertainment">Entertainment</Link></li>
                                    <li><Link className="nav-link text-light" to="/general">General</Link></li>
                                    <li><Link className="nav-link text-light" to="/health">Health</Link></li>
                                    <li><Link className="nav-link text-light" to="/science">Science</Link></li>
                                    <li><Link className="nav-link text-light" to="/sports">Sports</Link></li>
                                    <li><Link className="nav-link text-light" to="/technology">Technology</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar