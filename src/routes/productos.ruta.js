import { Router } from "express";
import { productsService } from "../persistence/";
import { ProductosController } from "../controllers/productos.controller.js";

const router = Router();

router.get("/", ProductosController.getProductos);

router.post("/", async(req,res) => {
    try {
        const productoInfo = req.body;
        const result = await productsService.crearProducto(productoInfo);
        res.json({status:"success", result});
    } catch (error) {
        res.json({status:"error", message:error.message});
    }
});

router.get("/:id", async(req,res) => {
    try {
        const productoId = parseInt(req.params.id);
        const producto = await productsService.getProductoById(productoId);
        res.json({message:"Obtener producto", data:producto});
    } catch (error) {
        res.json({status:"error", message:error.message});
    }
});

export {router as productsRouter};