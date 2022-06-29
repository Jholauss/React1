import React from "react";
import logo from "../../assets/Logo_Invertido.png";
import CartWidget from "./Cart/Widget/cart";

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-black">
        <div className="container-fluid">
          <a className="navbar-brand text-light w-25" href="/"><img style={styles.image} src={logo} alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto m-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link text-light" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/">About us</a>
              </li>
            </ul>
            <CartWidget/>
          </div>
        </div>
      </nav>
    );
};
export default Header

const styles={
    image:{
        width: "50%",
    },
}