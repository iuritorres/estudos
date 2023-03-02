export default class ProductService {
    #database

    constructor ({ database }) {
        this.#database = database
    }

    // get all products
    async getAllProducts() {
        try {
            const [rows] = await this.#database.promise().execute('SELECT * FROM products')
            return rows
        }
        catch (error) {
            throw error
        }
    }

    // get product by ID
    async getProductById(id) {
        try {
            const [rows] = await this.#database.promise().execute('SELECT * FROM products WHERE id = ?', [id])
            return rows
        }
        catch (error) {
            throw error
        }   
    }

    // create product
    async createProduct(product) {
        const name = product.name
        const price = product.price
        const stock = product.stock

        try {
            const [result] = await this.#database.promise().execute('INSERT INTO products (name, price, stock) VALUES (?, ?, ?)', [name, price, stock])
            return result.insertId
        }
        catch (error) {
            throw error
        }
    }

    // update product
    async updateProduct(id, product) {
        const name = product.name
        const price = product.price
        const stock = product.stock

        try {
            const [result] = await this.#database.promise().execute('UPDATE products SET name = ?, price = ?, stock = ? WHERE id = ?', [name, price, stock, id])
            return result.affectedRows > 0
        }
        catch (error) {
            throw error
        }
    }

    // delete product
    async deleteProduct(id) {
        try {
            const [result] = await this.#database.promise().execute('DELETE FROM products WHERE id = ?', [id])
            return result.affectedRows > 0
        }
        catch (error) {
            throw error
        }
    }

}