function Header(){
    return(
        <nav>
            <a href="/" className="logo">IDK</a>
            <ul className="links">
                <li className="logged-in">Giorgi Bazerashvili</li>
                {/* <li><a href="#" className="link secondary">LOG OUT</a></li> */}
            </ul>
        </nav>
    )
}

export default Header;