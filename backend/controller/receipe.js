const Recipes=require('../models/receipe');
const getRecipes = (req, res) => {
    res.json({ message: "hello" });
};
const getRecipe = async (req, res) => {
    const receipe=await Recipes.findById(req.params.id);
    if(!receipe){
        return res.status(404).json({message: "Recipe not found"});
    }
    return res.json(receipe);
};
const addRecipe = async (req, res) => {
    const {title,ingredients,instruction,time,imageUrl} = req.body;

    if(!title || !ingredients || !instruction){
        return res.status(400).json({message: "Please fill all the fields"});
    }
    const newRecipe= await Recipes.create({
        title,
        ingredients,
        instruction,
        time,
    });
    return res.json(newRecipe);
     };
const updateRecipe = async(req, res) => {
    const {title,ingredients,instruction,time,imageUrl} = req.body;
   let receipe=await Recipes.findById(req.params.id);
    try{
        if(!receipe){
        await receipe.findByIdAndUpdate(req.params.id,receipe.body) ,{new:true};
        res.json({title,ingredients,instruction,time});
    }
    }catch(error){
        return res.status(500).json({message: "Error updating recipe"});
    }
}
const deleteRecipe = (req, res) => {
    res.json({ message: "hello" });
};
module.exports = { getRecipes,getRecipe,addRecipe,updateRecipe,deleteRecipe };