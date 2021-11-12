const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class UserSeenMovie extends Model {}

UserSeenMovie.init(
    {
        // define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            },
        },
        seen_movie_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "seen_movie",
                key: "id",
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "user_seen_movie",
    }
);

module.exports = UserSeenMovie;
