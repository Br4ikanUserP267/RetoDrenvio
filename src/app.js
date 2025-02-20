import express from "express";
import dotenv from "dotenv";
import { configureMiddlewares } from "./middlewares/global.middleware.js";
import corsMiddleware from "./middlewares/cors.middleware.js";
import { loadRoutes } from "./middlewares/routes.middleware.js";

// Cargar variables de entorno
dotenv.config();

// Inicializar Express
const app = express();

// Configurar middlewares
configureMiddlewares(app);
app.use(corsMiddleware); // Aplicar CORS aquí

// Cargar rutas
loadRoutes(app);

export default app;
