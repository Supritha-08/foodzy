const mongoose = require('mongoose');
const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    instruction: {
        type: String,
        required: true
    },
    time: {
        type: String
        
    },
    imageUrl: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, 
{ timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);