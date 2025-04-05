// Importaciones necesarias de React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importamos nuestro componente principal
import App from './App';

// Importamos los estilos de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Importamos el bundle JS de Bootstrap (necesario para modales, tooltips, etc.)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Punto de entrada: renderizamos la app en el div con id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
