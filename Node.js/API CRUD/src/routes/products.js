import app, { productController } from "../index.js"

// get all products
app.get('/products', productController.getAll.bind(productController))

// get product by ID
app.get('/products/:id', productController.getById.bind(productController))

// create product
app.post('/products', productController.create.bind(productController))

// update product
app.put('/products/:id', productController.update.bind(productController))

// delete product
app.delete('/products/:id', productController.delete.bind(productController))