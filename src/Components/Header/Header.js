import React from "react";
import './Header.css';
import { Link } from "react-router-dom";
import logo from "../../assets/Logo_Invertido.png";
import CartWidget from "./Cart/Widget/cart";


const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-black">
        <div className="container-fluid">
          <Link to={'/'} className="navbar-brand text-light w-25" ><img style={styles.image} src={logo} alt="" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto m-2 mb-lg-0 ">
              <li className="nav-item">
                <Link to={'/'} className="nav-link text-light">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/Productos'} className="nav-link text-light">Products</Link>
              </li>
              <li className="nav-item">
                <Link to={'/About'} className="nav-link text-light">About us</Link>
              </li>
              <div className="contenedor">
                <Link to={'/Productos'} className="text-light dropdown-toggle text-decoration-none">Categorias</Link>
                <ul>
                  <li><Link style={styles.links} to={'/Categoria/'}>NIKE</Link></li>
                  <li><Link style={styles.links} to={'/Categoria/'}>ADIDAS</Link></li>
                  <li><Link style={styles.links} to={'/Productos'}>TODOS</Link></li>
                </ul>
              </div>
            </ul>
            <CartWidget/>
          </div>
        </div>
      </nav>
    );
};
export default Header;



const styles={
    image:{
        width: "50%",
    },
    links:{
        color: 'black',
        textDecoration: 'none',
        transition: 'all .3s ease-in-out',
        backgroundColor: '#ffff',
        borderRadius: '0.5rem', 
        cursor: 'pointer',
        border: '1px solid #fff',
        boxShadow: '0px 0px 5px #000',
        padding: '0.1rem',
        margin: '0.1rem',
        display: 'block',
        textAlign: 'center',
        fontSize: '1.2rem',
        borderBottom: '1px solid #fff',
    }

   
}