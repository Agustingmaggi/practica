const product = require('../models/product')
const controller = {
    index: (req, res) => res.render('products/list',{list: product.list()}),
    create: (req,res) => res.render('products/create')
}

module.exports = controller