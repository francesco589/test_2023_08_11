import mongoose from "mongoose";

const psw = 's40T3bCetfpJ6O0A'
const url = `mongodb+srv://fra89:${psw}@cluster0.6ctbtkw.mongodb.net/product`

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log('db connected')
    })
    .catch(err => console.log(err))

    const productSchema = new mongoose.Schema({
        name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    img: {type: String, required: true},
    categoryId: {type: Number, required:true}
    //{ timestamps: true }
    })

    const categorySchema = new mongoose.Schema({
        name:{type: String, required: true},
        idCode:{type: Number, required: true}
    })

    const Product = mongoose.model('product', productSchema, 'products')
    const Category = mongoose.model('category', categorySchema, 'categories')

    export {Product, Category}


