const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class SeenMovie extends Model {}

SeenMovie.init(
    {
        // define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        movie_name: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "seen_movie",
    }
);

module.exports = SeenMovie;
