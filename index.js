const express = require('express');
const rutasProductos = require('./rutas/productos');

const app = express();
const PUERTO = 3000;

// ⚙️ Configuración del motor de plantillas Pug
app.set('view engine', 'pug');
app.set('views', './vistas');

// Parsear JSON en las peticiones
app.use(express.json());

// 🌐 Ruta de página de inicio (usa Pug)
app.get('/', (req, res) => {
  res.render('index', { 
    titulo: 'API de Productos',
    mensaje: '¡Bienvenidos a la Primera Entrega!',
    integrantes: [
      'Sonia Raquel Andrada',
      'Guillermo Chacón',
      'Eitel Hugo Belinzoni',
      'Emilia Sosa'
    ]
  });
});

// 🛣️ Rutas de la API
app.use('/api/productos', rutasProductos);

// 🚀 Iniciar servidor
app.listen(PUERTO, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PUERTO}`);
  console.log(`📦 API disponible en http://localhost:${PUERTO}/api/productos`);
  console.log(`🎨 Página con Pug en http://localhost:${PUERTO}`);
});