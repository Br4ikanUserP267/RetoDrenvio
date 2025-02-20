import mongoose from "mongoose";

const SpecialPriceSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    specialPrice: { type: Number, required: true },
    description: { type: String, default: "" },
    createdAt: { type: Date, default: Date.now }
});

const SpecialPrice = mongoose.model("preciosEspecialesPina11", SpecialPriceSchema);
export default SpecialPrice;
