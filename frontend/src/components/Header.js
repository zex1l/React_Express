import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header__inner">
                    <Link  to="/" className="nav__item logo">Home</Link>
                    <nav className="nav__items">
                        <Link to="/another" className="nav__item">Another</Link>
                        <Link to="/auth" className="nav__item">Send</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;