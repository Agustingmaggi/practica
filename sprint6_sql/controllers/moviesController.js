const db = require('../database/models/index')
const moviesController = {
    add: function (req, res) {
            res.render('../views/form')
        },
    
    create: function (req, res){
        const {title, rating, awards, release_date, length} = req.body
        db.Movie.create ({
            title,
            rating,
            awards,
            release_date,
            length
        }).then(() => {res.redirect("/")})       
    },
    list: (req,res) => {
        db.Movie.findAll({
            include: [{ association:'actors'}]
        })
        .then(movies => {
            res.send(movies[1].actors)
        })
    }
}

module.exports = moviesController