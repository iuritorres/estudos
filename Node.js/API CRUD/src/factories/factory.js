import ProductController from '../controllers/productController.js'
import ProductService from '../services/productService.js'
import pool from '../database/pool.js'

const factory = {
    async initialize() {
        return ProductController.initialize({
            service: new ProductService({ database: pool })
        })
    }
}


export default factory
