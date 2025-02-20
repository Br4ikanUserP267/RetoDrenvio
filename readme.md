# 🚀 Desafío React / MongoDB

Aplicación que consume y actualiza datos en una base de datos MongoDB a través de una API en Node.js, con una interfaz en React.

## 📂 Estructura del Proyecto

📂 backend  
│   ├── 📂 config  
│   │   ├── database.js  
│   │   ├── env.js  
│   ├── 📂 models  
│   │   ├── product.js  
│   │   ├── specialPrice.js  
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
│   ├── .env  

## 📦 Instalación del Proyecto

```bash
# Instalar dependencias
pnpm install
🚀 Ejecución del Proyecto
Para iniciar el backend con pnpm:

bash

pnpm start O con npm: npm start

npm start