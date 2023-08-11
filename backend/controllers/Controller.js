import { Product, Category } from "../config/db.js"

class Controller {
    static async getProducts(req, res) {
        const obj = await Product.find()
        res.json(obj)
    }
    static async postProduct(req, res) {
        const data = req.body
        const entry = new Product({
            name: req.body.name,
            description: req.body.description,
            price: parseInt(req.body.price),
            img: req.body.img,
            categoryId: req.body.categoryId
        })

        entry.save()
            .then(obj => {
                res.json(obj)
            })
            .catch(err => {
                res.status(500).json({ error: true, message: err.message })
            })
    }
    static async delProduct(req, res) {
        const id = req.params.id
        const obj = await Product.findByIdAndDelete(id)
        res.json(obj)
    }
    static async updateProduct(req, res) {

    }

    static async getCategories(req, res) {
            const obj = await Category.find()
            res.json(obj)
    }
    static async postCategory(req, res) {

    }
    static async delCategory(req, res) {

    }
    static async updateCategory(req, res) {

    }
}

export default Controller