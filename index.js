const express = require('express');
const rutasProductos = require('./rutas/productos');

const app = express();
const PUERTO = 3000;

app.use(express.json());

// Rutas
app.use('/api/productos', rutasProductos);

// Iniciar
app.listen(PUERTO, () => {
  console.log(`✅ Servidor en http://localhost:${PUERTO}`);
  console.log(`📦 Estructura organizada: rutas, middlewares, validaciones`);
});