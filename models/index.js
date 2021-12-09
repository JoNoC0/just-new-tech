const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');

// create associations
// User has many Posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// reverse association
// Posts belonging to ONE USER
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});

Post.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});

Vote.belongsTo(User, {
    foreignKey: 'user_id'
});

Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});

Vote.hasMany(Vote, {
    foreignKey: 'user_id'
});

Vote.hasMany(Vote, {
    foreignKey: 'post_id'
});


module.exports = { 
    User, 
    Post,
    Vote };