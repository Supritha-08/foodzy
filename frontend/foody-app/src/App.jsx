// // App.jsx
import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import MainNavigation from './components/MainNavigation';
import RecipeItem from './components/RecipeItem';
import axios from 'axios';
import AddFoodRecipe from './pages/AddFoodRecipe';
import EditRecipe from './pages/EditRecipe';

// Optional: if you want to load data for home page
const getAllReceipes = async () => {
  let allReceipes = [];
  await axios.get('http://localhost:5000/receipe').then(res => {
    allReceipes = res.data;
  });
  return allReceipes;
};

const getMyRecipe=async()=>{
  let user=JSON.parse(localStorage.getItem(user))
  let allRecipes=await getAllReceipes()
  return allRecipes.filter(item=>item.createdBy===user._id)
}

const getfavRecipes=()=>{
  return JSON.parse(localStorage.getItem("fav"))
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainNavigation />,
    children: [
      { path: '/', element: <Home />, loader: getAllReceipes },
      { path: '/', element: <RecipeItem />, loader: getMyRecipe } ,
      {path:"/myRecipe",element:<Home/>,loader: getfavRecipes},
      {path:"/favRecipe",element:<Home/>},
      {path:"/addRecipe",element:<AddFoodRecipe/>},
      {path:"/editRecipe/:id",element:<EditRecipe/>}
    ]
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
