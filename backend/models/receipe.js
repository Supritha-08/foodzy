const mongoose = require('mongoose');
const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
        required: true
    },
    instruction: {
        type: String,
        required: true
    },
    time: {
        type: String
        
    },
    coverImage: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, 
{ timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);