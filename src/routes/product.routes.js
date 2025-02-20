import { Router } from "express";
import { upload } from "../helpers/upload.helper.js"; // Importar multer desde el helper
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from "../controllers/product.controller.js";

const router = Router();

// Rutas de productos con soporte para imágenes
router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post("/products", upload.single("image"), createProduct); // Se añade soporte para subir imágenes
router.put("/products/:id", upload.single("image"), updateProduct); // Soporta actualización de imagen
router.delete("/products/:id", deleteProduct);

export default router;
