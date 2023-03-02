import express from 'express'
import factory from './factories/factory.js'

const app = express()
app.use(express.json())

export const productController = await factory.initialize()

export default app