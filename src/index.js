import dotenv from "dotenv";
import connectDB from "./config/db.js";
import app from "./app.js";
import { showWelcomeMessage, showConnectionError } from "./helpers/index.helper.js";

// Cargar variables de entorno
dotenv.config();

// Conectar a la base de datos
connectDB();

// Definir el puerto
const PORT = process.env.PORT || 3000;

// Iniciar el servidor y exportarlo
const server = app.listen(PORT, () => showWelcomeMessage(PORT));

server.on("error", (error) => showConnectionError(error));

export default server; // 🟢 Exportamos para poder cerrarlo en Jest
