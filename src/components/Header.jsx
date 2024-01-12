import { React, Component } from "react";

class Header extends Component {
  componentDidMount() {
    const burger = document.querySelector(".burger");

    const sidebar_links = document.querySelectorAll("aside ul a");

    burger.addEventListener("click", this.toggleSidebar);

    sidebar_links.forEach((link) => {
      link.addEventListener("click", this.toggleSidebar);
    });
  }

  toggleSidebar() {
    const burger_icon = document.querySelector(".burger i");
    const sidebar = document.querySelector("aside");
    burger_icon.classList.toggle("bx-menu");
    burger_icon.classList.toggle("bx-x");
    sidebar.classList.toggle("active");
  }

  render() {
    return (
      <nav>
        <div className="left">
          <a href="/" className="logo">
            IDK
          </a>
          <button className="burger">
            <i className="bx bx-menu"></i>
          </button>
        </div>
        <ul className="links">
          <li className="logged-in">Giorgi Bazerashvili</li>
          {/* <li><a href="#" className="link secondary">LOG OUT</a></li> */}
        </ul>
      </nav>
    );
  }
}

export default Header;
