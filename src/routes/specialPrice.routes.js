import express from 'express';
import { getSpecialPrices, createSpecialPrice, updateSpecialPrice, deleteSpecialPrice } from '../controllers/specialPrice.controller.js';

const router = express.Router();

// Routes for Special Prices
router.get('/SpecialPrices', getSpecialPrices);
router.post('/SpecialPrices', createSpecialPrice);
router.put('/SpecialPrices/:id', updateSpecialPrice);
router.delete('/SpecialPrices/:id', deleteSpecialPrice);
export default router;
