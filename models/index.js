// import all models
const Post = require("./Post");
const User = require("./User");
const Vote = require("./Vote");
/*
const Comment = require("./Comment");
const Video = require("./Video");
const SeenMovie = require("./SeenMovie");
const UserSeenMovie = require("./UserSeenMovie");

User.hasMany(Post, {
    foreignKey: "user_id"
});

Post.belongsTo(User, {
    foreignKey: "user_id"
})

User.belongsToMany(Post, {
    though: Vote,
    as: "voted_posts",
    foreignKey: "user_id"
})

Post.belongsToMany(User, {
    through: Vote,
    as: "voted_posts",
    foreignKey: "post_id"
})

Vote.belongsTo(User, {
    foreignKey: "user_id"
});

Vote.belongsTo(Post, {
    foreignKey: "post_id"
});

User.hasMany(Vote, {
    foreignKey: "user_id"
});

Post.hasMany(Vote, {
    foreignKey: "post_id"
});

Comment.belongsTo(User, {
    foreignKey: "user_id"
});

Comment.belongsTo(Post, {
    foreignKey: "post_id"
});

User.hasMany(Comment, {
    foreignKey: "user_id"
});

Post.hasMany(Comment, {
    foreignKey: "post_id"
});

User.belongsToMany(SeenMovie, {
    through: UserSeenMovie,
    foreignKey: "product_id"
})

SeenMovie.belongsToMany(User, {
    through: UserSeenMovie,
    foreignKey: "seen_movie_id"
})

module.exports = { User, Post, Vote, Comment, Video, SeenMovie, UserSeenMovie}
