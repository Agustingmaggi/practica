const db = require('../../database/models');
const moviesAPIController = {
    'list':(req, res) => {
        db.Movie.findAll({
            include:['genre']
        })
        .then(movies => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: movies.length,
                    url:'api/movies'
                },
                data: movies
            }
            res.json(respuesta)
        })
        .catch(error =>{
            res.json({
                meta:500,
                url: req.url,
                error,
            })
        })
    }
}



module.exports = moviesAPIController