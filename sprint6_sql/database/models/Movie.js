module.exports = (Sequelize,Datatypes) => {
    const alias = "Movie"
    const cols = {
        id:{
            primaryKey: true,
            autoIncrement:true,
            type: Datatypes.INTEGER
        },
        title:{
            notNull:false,
            type: Datatypes.STRING
        },
        rating:{
            notNull: false,
            type: Datatypes.DECIMAL(3,1)
        },
        awards:{
            notNull: false,
            type: Datatypes.INTEGER
        },
        release_date:{
            notNull:false,
            type: Datatypes.DATE
        },
        length:{
            notNull:true,
            type: Datatypes.INTEGER
        }
    }
    const config={
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
       // tableName: "movies"
    }

    const Movie = Sequelize.define(alias, cols, config)

    Movie.associate = function(models){
        Movie.belongsToMany(models.Actor,{
            as: 'actors',
            through:'actor_movie',
            foreignKey: 'movie_id',
            otherKey: 'actor_id'
        })
    }

    return Movie
}