## Desafío React / MongoDB

### Descripción 
Aplicación que consume y actualiza datos en una base de datos MongoDB a través de una API en Node.js, con una interfaz en React.

### 📂 Estructura del Proyecto

```
📂 backend
│   ├── 📂 config
│   │   ├── database.js
│   │   ├── env.js
│   ├── 📂 models
│   │   ├── product.js  productpiña11
│   │   ├── specialPrice.js specialPricePIÑA11
│   ├── 📂 routes
│   │   ├── productRoutes.js
│   │   ├── specialPriceRoutes.js
│   ├── 📂 controllers
│   │   ├── productController.js
│   │   ├── specialPriceController.js
│   ├── 📂 middleware
│   │   ├── errorHandler.js
│   │   ├── global.middleware.js
│   │   ├── routes.middleware.js
│   ├── 📂 tests
│   │   ├── test_product.js
│   │   ├── test_specialPrice.js
│   ├── 📂 uploads
│   ├── index.js
│   ├── app.js
│   ├── package.json
│   └── .env
```

### 📌 Backend

Contiene la API en Node.js que interactúa con MongoDB.

- **config/**: Configuración de la base de datos y variables de entorno.
- **models/**: Definición de los esquemas de MongoDB.
- **routes/**: Definición de rutas para la API.
- **controllers/**: Lógica de negocio para gestionar solicitudes.
- **middleware/**: Manejadores de errores y validaciones.
- **tests/**: Pruebas automatizadas.
- **index.js**: Punto de entrada del backend.
- **package.json**: Dependencias del backend.
- **uploads.json**: Aquí se guardan las imagenes

### 📦 Instalación
```sh
pnpm install  
pnpm install  

```

### 🚀 Ejecución
```sh
pnpm start  
npm start  #   R e t o D r e n v i o  
 