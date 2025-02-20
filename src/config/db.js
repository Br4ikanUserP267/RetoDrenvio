import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;

// Conectar a la base de datos
const connectDB = async () => {
  try {
    await mongoose.connect(`${MONGODB_URI}/${DB_NAME}?authSource=admin`);
    console.log(`✅ Conectado a MongoDB: ${DB_NAME}`);
  } catch (error) {
    console.error("❌ Error de conexión a MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB; // 👈 Exportación por defecto
