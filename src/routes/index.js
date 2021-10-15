const { Router } = require('express')

const UserController = require('../controllers/UserController')
const SessionController = require ('../controllers/SessionController')
const ProductController = require('../controllers/ProductController')
const CartController = require('../controllers/CartController')

const routes = Router()


routes.post('/users', UserController.createUser)
routes.get('/users', UserController.getUsers)
routes.get('/users/:user_id', UserController.getUserById)


routes.post('/sessions', SessionController.createSession)
    
routes.post('/products/:user_id', ProductController.createProduct)
routes.get('/:user_id/products', ProductController.getUserProducts)
routes.patch('/products/:user_id/:product_id', ProductController.updateProduct)
routes.delete('/products/:user_id/:product_id', ProductController.deleteProduct)

routes.get('/products', ProductController.getProducts)
routes.get('/products/:product_id', ProductController.getProductById)

routes.post('/carts/:user_id', CartController.createCart)
routes.get('/carts/:user_id', CartController.getUserCarts)
routes.get('/carts/:user_id/:cart_id', CartController.getCarts)




module.exports = routes