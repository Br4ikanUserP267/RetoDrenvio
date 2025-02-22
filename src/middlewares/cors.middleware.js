import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Cargar variables de entorno

const allowedOrigins = [
    "http://localhost:3000",  // Desarrollo
    "http://localhost:5173",  // Desarrollo
    process.env.PRODUCTION_URL // Producción (desde variable de entorno)
].filter(Boolean); // Elimina valores `undefined` en caso de que la variable no esté definida

const corsOptions = {
    origin: (origin, callback) => {
        // Permitir solicitudes sin 'origin' (como Postman o servidores backend)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
};

// Middleware de CORS
const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
