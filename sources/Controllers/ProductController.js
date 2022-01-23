const Product = require('../Models/Product')
const User = require('../Models/User')

module.exports = {
    async create (req, res) {

        const { name, price } = req.body
        const { user_id } = req.params

        try {
            const userInfo = await User.findById(user_id)

            const { location } = userInfo

            const longitude = location.coordinates[0]
            const latitude = location.coordinates[1]

            const setLocation = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }

            return

            const createdProduct = await Product.create({
                name,
                price,
                user: user_id,
                location: setLocation
            })
            await createdProduct.populate('user').execPopulate()

            return res.status(201).send(createdProduct)
        } catch(err) {
            return res.status(400).send(err)
        }

    },

    async delete (req, res) {
        const {  product_id, user_id } = req.params

        try {
            const deletedProduct = await Product.findByIdAndDelete(product_id)

            return res.status(200).send({ status: 'deleted', user: deletedProduct })
        } catch(err) {
            return res.status(400).send(err)
        }
    },

    async indexByUser (req, res) {

    },

    async indexAll (req, res) {
        const { longitute, latitude } = req.query

        const maxDistance = 2000000

        try {
            const allProducts = await Product.find({
                location: {
                    $near: {
                        $geometry: {
                            type: 'Point',
                            coordinates: [longitude, latitude]
                        },
                        $maxDistance: maxDistance
                    }
                }
            } ).populate('user')
           

            return res.status(200).send(allProducts)
        } catch(err) {
            return res.status(400).send(err)
        }
    }
}