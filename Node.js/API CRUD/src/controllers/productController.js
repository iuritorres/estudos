export default class ProductController {
    #service

    constructor ({ service }) {
        this.#service = service
    }

    // get all products
    async getAll(request, response) {
        try {
            const products = await this.#service.getAllProducts()

            response.status(200).json({ products })
        }
        catch (error) {
            console.log(error)
            response.status(500).json({ message: 'Internal Server Error' })
        }
    }

    // get product by ID
    async getById(request, response) {
        const { id } = request.params

        try {
            const product = await this.#service.getProductById(id)

            if (product) {
                response.status(200).json({ product })
            }
            else {
                response.status(404).json({ message: 'Product not found' })
            }
        }
        catch (error) {
            console.log(error)
            response.status(500).json({ message: 'Internal Server Error' })
        } 
    }

    // create product
    async create(request, response) {
        const product = request.body

        try {
            const productId = await this.#service.createProduct(product)

            response.status(201).json({ message: `Product successfully created, id = ${productId}` })
        }
        catch (error) {
            console.log(error)
            response.status(500).json({ message: 'Internal Server Error' })
        }
    }

    // update product
    async update(request, response) {
        const { id } = request.params
        const product = request.body

        try {
            const updated = await this.#service.updateProduct(id, product)

            if (updated) {
                response.status(200).json({ message: 'Product successfully updated' })
            }
            else {
                response.status(404).json({ message: 'Product not found' })
            }
        }
        catch (error) {
            console.log(error)
            response.status(500).json({ message: 'Internal Server Error' })
        }
    }

    // delete product
    async delete(request, response) {
        const { id } = request.params

        try {
            const deleted = await this.#service.deleteProduct(id)

            if (deleted) {
                response.status(200).json({ message: 'Product succesfully deleted' })
            }
            else {
                response.status(404).json({ message: 'Product not found' })
            }
        }
        catch (error) {
            console.log(error)
            response.status(500).json({ message: 'Internal Server Error' })
        }
    }

    // initialize
    static async initialize(dependencies) {
        const controller = new ProductController(dependencies)
        return controller
    }
}

