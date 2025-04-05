// Autor: Sandra Mayerly Cartagena
// Ficha: GA7-220501096-AA4-EV03
// Descripción: Componente de navegación con ícono de carrito

import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import './Navbar.css';

const Navbar = ({ cartItemCount }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <a className="navbar-brand" href="/">Mi Tienda de Baletas</a>
      <div className="ms-auto">
        <button className="btn btn-light position-relative">
          <FaShoppingCart />
          {cartItemCount > 0 && (
            <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
              {cartItemCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
