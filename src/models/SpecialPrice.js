import mongoose from "mongoose";

const SpecialPriceSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    price: { type: Number, required: true }
});

// Exportación por defecto para que funcione `import SpecialPrice from ...`
const SpecialPrice = mongoose.model("SpecialPricePiña11", SpecialPriceSchema);
export default SpecialPrice;
