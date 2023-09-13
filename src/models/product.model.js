import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    costo: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
})

export default mongoose.model('Product', productSchema)