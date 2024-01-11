function Header(){
    return(
        <nav>
            <div className="left">
                <a href="/" className="logo">IDK</a>
                <button className='burger'><i className='bx bx-menu'></i></button>
            </div>
            <ul className="links">
                <li className="logged-in">Giorgi Bazerashvili</li>
                {/* <li><a href="#" className="link secondary">LOG OUT</a></li> */}
            </ul>
        </nav>
    )
}

export default Header;