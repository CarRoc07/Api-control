import { Router } from "express";
import { verifyToken } from "../middlewares/validateToken.js";
import { 
    getProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct,
    updatePrices} 
from "../controllers/product.controller.js";
import { validateSchema } from "../middlewares/validatorSchema.js";
import { productSchema } from "../schemas/product.schema.js"; 


const productsRouter = Router();

productsRouter.get("/product", verifyToken, getProducts)

productsRouter.get("/product/:id", verifyToken, getProduct)

productsRouter.post("/product", verifyToken, validateSchema(productSchema) , createProduct)

productsRouter.delete("/product/:id", verifyToken, deleteProduct)

productsRouter.put("/product/:id", verifyToken, updateProduct)

productsRouter.put("/product/update/:action", verifyToken, updatePrices)

export default productsRouter;