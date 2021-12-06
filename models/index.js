const User = require('./User');
const Post = require('./Post');

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

module.exports = { User, Post };