import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg text-light bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">T-Shirt Review</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className="navbar-nav px-5 mx-5">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/review">REVIEW</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">DASHBOARD</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blogs">BLOGS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">ABOUT</Link>
                        </li> 
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;