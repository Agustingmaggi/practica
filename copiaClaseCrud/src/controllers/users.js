const user = require('../models/user')
const controller = {
    index: (req, res) => res.send(user.list())
}

module.exports = controller