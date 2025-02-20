import cors from "cors";

const allowedOrigins = [
    "http://localhost:3000",  // Desarrollo
    "https://myproductionapp.com" // Producción
];

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
