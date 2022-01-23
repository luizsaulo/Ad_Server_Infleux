const Product = require('../Models/Product')

module.exports = {
    async create (req, res) {

        const { name, price } = req.body
        const { user_id } = req.params

        try {
            const createdProduct = await Product.create({
                name,
                price,
                user: user_id
            })
            await createdProduct.populate('user').execPopulate()

            return res.status(201).send(createdProduct)
        } catch(err) {
            return res.status(400).send(err)
        }

    },

    async delete (req, res) {

    },

    async indexByUser (req, res) {

    },

    async indexAll (req, res) {

    }
}