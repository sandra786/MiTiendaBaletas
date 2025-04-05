import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const productos = [
  {
    nombre: "Baleta Clásica",
    precio: 40000,
    imagen: "baleta1.jpg"
  },
  {
    nombre: "Baleta Moderna",
    precio: 45000,
    imagen: "baleta2.jpg"
  },
  {
    nombre: "Baleta Elegante",
    precio: 50000,
    imagen: "baleta3.jpeg"
  }
];

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    const existe = carrito.find((item) => item.nombre === producto.nombre);
    if (existe) {
      setCarrito(
        carrito.map((item) =>
          item.nombre === producto.nombre
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <div className="container mt-4">
      <h1>Productos</h1>
      <div className="row">
        {productos.map((producto) => (
          <div className="col-md-4" key={producto.nombre}>
            <div className="card mb-4">
              <img
                src={producto.imagen}
                className="card-img-top"
                alt={producto.nombre}
              />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">
                  Precio: ${producto.precio.toLocaleString("es-CO")}
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => agregarAlCarrito(producto)}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          <ul className="list-group">
            {carrito.map((item) => (
              <li className="list-group-item" key={item.nombre}>
                {item.nombre} x {item.cantidad} = $
                {(item.precio * item.cantidad).toLocaleString("es-CO")}
              </li>
            ))}
          </ul>
          <h4 className="mt-3">Total: ${total.toLocaleString("es-CO")}</h4>
          <button className="btn btn-danger mt-2" onClick={vaciarCarrito}>
            Vaciar carrito
          </button>
        </div>
      )}
    </div>
  );
}

export default App;