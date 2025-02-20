import { Router } from "express";
import { upload } from "../helpers/upload.helper.js"; // Importar multer desde el helper
import {
    getAllProductsWithDiscounts,
   
} from "../controllers/product.controller.js";

const router = Router();
router.get('/SpecialPricesDiscounted/',getAllProductsWithDiscounts);



export default router;
