import SpecialPrice from '../models/SpecialPrice.js';
import { sendSuccess, sendError } from '../helpers/response.helper.js';

// Get all special prices
export const getSpecialPrices = async (req, res) => {
    try {
        const specialPrices = await SpecialPrice.find().populate('userId').populate('productId');
        sendSuccess(res, 200, specialPrices);
    } catch (error) {
        sendError(res, error);
    }
};

// Create a new special price
export const createSpecialPrice = async (req, res) => {
    try {
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
