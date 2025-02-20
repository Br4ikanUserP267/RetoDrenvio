import { Router } from "express";
import { upload } from "../helpers/upload.helper.js"; // Importar multer desde el helper
import {
    getAllProductsWithDiscounts,
    getProductById,
   
} from "../controllers/product.controller.js";

const router = Router();
router.get('/SpecialPricesDiscounted/',getAllProductsWithDiscounts);

router.get("/products/:id", getProductById);


export default router;
