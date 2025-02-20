import Product from "../models/Product.js";
import { sendSuccess, sendError } from "../helpers/response.helper.js";

// Obtener todos los productos
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        sendSuccess(res, products, "Products retrieved successfully");
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

// Crear un nuevo producto con imagen
export const createProduct = async (req, res) => {
    try {
        const { name, description, price, stock, category } = req.body;
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

        const newProduct = new Product({ name, description, price, stock, category, imageUrl });
        await newProduct.save();

        sendSuccess(res, newProduct, "Product created successfully", 201);
    } catch (error) {
        sendError(res, error, 400);
    }
};

// Actualizar un producto con imagen
export const updateProduct = async (req, res) => {
    try {
        const { name, description, price, stock, category } = req.body;
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : req.body.imageUrl;

        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { name, description, price, stock, category, imageUrl },
            { new: true }
        );

        if (!updatedProduct) return sendError(res, { message: "Product not found" }, 404);
        sendSuccess(res, updatedProduct, "Product updated successfully");
    } catch (error) {
        sendError(res, error);
    }
};

// Eliminar un producto
export const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return sendError(res, { message: "Product not found" }, 404);
        sendSuccess(res, null, "Product deleted successfully");
    } catch (error) {
        sendError(res, error);
    }
};
