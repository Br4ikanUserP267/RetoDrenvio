import SpecialPrice from '../models/SpecialPrice.js';
import Product from "../models/Product.js";

import { sendSuccess, sendError } from '../helpers/response.helper.js';

// Get all special prices
export const getSpecialPrices = async (req, res) => {
    try {
        const specialprices = await SpecialPrice.find();
        sendSuccess(res, specialprices, "specialprices retrieved successfully");
    } catch (error) {
        sendError(res, error);
    }
};

// Create a new special price
export const createSpecialPrice = async (req, res) => {
    try {
        const { productId, specialPrice } = req.body;

        // Verificar si el precio especial ya existe para el producto
        const existingSpecialPrice = await SpecialPrice.findOne({ productId });

        if (existingSpecialPrice) {
            return res.status(400).json({
                success: false,
                message: "Este producto ya tiene un precio especial asignado.",
            });
        }

        // Verificar que el precio especial sea válido
        if (specialPrice <= 0) {
            return res.status(400).json({
                success: false,
                message: "El precio especial debe ser mayor que 0.",
            });
        }

        // Obtener el producto para verificar su precio original
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Producto no encontrado.",
            });
        }

        // Validar que el precio especial sea menor que el precio original
        if (specialPrice >= product.price) {
            return res.status(400).json({
                success: false,
                message: "El precio especial debe ser menor que el precio original del producto.",
            });
        }

        // Crear el nuevo precio especial
        const newSpecialPrice = new SpecialPrice(req.body);
        await newSpecialPrice.save();

        sendSuccess(res, 201, newSpecialPrice);
    } catch (error) {
        sendError(res, error, 400);
    }
};


// Update a special price
export const updateSpecialPrice = async (req, res) => {
    try {
        const updatedSpecialPrice = await SpecialPrice.findByIdAndUpdate(req.params.id, req.body, { new: true });
        sendSuccess(res, 200, updatedSpecialPrice);
    } catch (error) {
        sendError(res, error);
    }
};

// Delete a special price
export const deleteSpecialPrice = async (req, res) => {
    try {
        await SpecialPrice.findByIdAndDelete(req.params.id);
        sendSuccess(res, 200, { message: 'Special price deleted successfully' });
    } catch (error) {
        sendError(res, error);
    }
};

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
