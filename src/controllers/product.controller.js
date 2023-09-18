import Product from "../models/product.model.js"

export const getProducts = async (req, res) => {
    try {
        const allProducts = await Product.find({})
        res.json(allProducts)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id)

        if (!product) return res.status(404).json({ message: "Product not found" })
        res.json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const createProduct = async (req, res) => {
    try {
        const { product, stock, costo } = req.body
        const newProduct = new Product({
            product,
            stock,
            costo
        })
        await newProduct.save()
        res.json(newProduct) 
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id)

        if (!product) return res.status(404).json({ message: "Product not found" })
        res.status(204).json()
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const infoProduct = req.body
        const product = await Product.findByIdAndUpdate(id, infoProduct, { new: true })

        if (!product) return res.status(404).json({ message: "Product not found" })
        res.json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updatePrices = async (req, res) => {
    const { action } = req.params;
    const { value } = req.body;
    if (action === 'add') {
        try {
            const number = Number(value) + 1
            await Product.updateMany({}, { $mul: { costo: number } });
            console.log('Precios actualizados exitosamente');
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    } else if (action === 'sub') {
        try {
            const number = 1 - Number(value)
            await Product.updateMany({}, { $mul: { costo: number } });
            console.log('Precios actualizados exitosamente');
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}