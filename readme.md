# 🚀 Desafío React / MongoDB

Aplicación que consume y actualiza datos en una base de datos MongoDB a través de una API en Node.js, con una interfaz en React.

## 📂 Estructura del Proyecto
Se escogio de esta manera debido a que se bsuco tener opciones mejores de organización de codigo y rehutilación de este 

📂 backend  
│   ├── 📂 config  
│   │   ├── database.js  
│   ├── 📂 models  
│   │   ├── product.js  
│   │   ├──     specialPricejs  
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
│   │   ├── index.spec.js 
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


En la consola ingresa los codigos 
con npm 
pnpm start 

O con npm: 

npm start