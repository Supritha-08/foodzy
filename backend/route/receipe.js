const express = require('express');
const router=express.Router();
const { getRecipe,getRecipes,addRecipe,updateRecipe,deleteRecipe,upload } = require('../controller/receipe');
router.get('/', (req, res) => {
  res.json({ message: 'Recipe route is working!' });
});
router.get('/receipe', getRecipes)//Get all recipes
router.get("/:id",getRecipe) //Get reipe by id
router.post("/", upload.single('file'),addRecipe) //get recipe
router.put("/:id",updateRecipe) //Edit recipe
router.delete("/:id",deleteRecipe) //Delete recipe

module.exports = router;
