import express from "express";
import Controller from "../controllers/Controller.js";


const router = express.Router()


router
    .get('/api/products', Controller.getProducts)
    .post('/api/products',Controller.postProduct)
    .delete('/api/products/:id',Controller.delProduct)
    .patch('/api/products/:id',Controller.updateProduct)

    .get('/api/categories', Controller.getCategories)
    .post('/api/categories',Controller.postCategory)
    .delete('/api/categories/:id',Controller.delCategory)
    .patch('/api/categories/:id',Controller.updateCategory)


export default router