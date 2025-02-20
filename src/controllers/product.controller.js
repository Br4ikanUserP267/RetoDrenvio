import Product from "../models/Product.js";
import SpecialPrice from '../models/SpecialPrice.js';

import { sendSuccess, sendError } from "../helpers/response.helper.js";

// Obtener todos los productos
export const getAllProductsWithDiscounts = async (req, res) => {
    try {
        // Obtener todos los productos
        const products = await Product.find();

        // Obtener los precios especiales
        const specialPrices = await SpecialPrice.find();

        // Crear un mapa de precios especiales para acceso rápido
        const specialPriceMap = new Map(
            specialPrices.map(sp => [sp.productId.toString(), sp.specialPrice])
        );

        // Mapear productos y agregar descuento si aplica
        let productsWithDiscounts = products.map(product => ({
            ...product.toObject(),
            price: product.price, // Precio normal
            discountPrice: specialPriceMap.get(product._id.toString()) || null, // Precio con descuento si existe
        }));

        // Ordenar los productos con descuento primero
        productsWithDiscounts.sort((a, b) => (b.discountPrice ? 1 : 0) - (a.discountPrice ? 1 : 0));

        sendSuccess(res, productsWithDiscounts, "All products retrieved successfully with discounts");
    } catch (error) {
        sendError(res, error);
    }
};
// Obtener un producto por ID
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return sendError(res, { message: "Product not found" }, 404);
        sendSuccess(res, product, "Product retrieved successfully");
    } catch (error) {
        sendError(res, error);
    }
};

