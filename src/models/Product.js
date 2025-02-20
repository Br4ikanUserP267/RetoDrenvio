import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        price: { type: Number, required: true },
        stock: { type: Number, required: true, default: 0 },
        category: { type: String },
        brand: { type: String }, // Nueva propiedad
        sku: { type: String }, // Nueva propiedad
        tags: { type: [String], default: [] }, // Array de etiquetas
        imageUrl: { type: String } // URL de la imagen
    },
    { timestamps: true }
);

export default mongoose.model("productos", ProductSchema);
