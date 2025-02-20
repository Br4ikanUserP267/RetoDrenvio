import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        price: { type: Number, required: true },
        stock: { type: Number, required: true, default: 0 },
        category: { type: String },
        imageUrl: { type: String } // URL de la imagen
    },
    { timestamps: true }
);

export default mongoose.model("Productpiña11", ProductSchema);
