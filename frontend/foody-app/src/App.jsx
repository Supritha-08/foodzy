// // App.jsx
import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import MainNavigation from './components/MainNavigation';
import RecipeItem from './components/RecipeItem';
import { recipeLoader } from './loaders/receipeloader';
import axios from 'axios';

// Optional: if you want to load data for home page
const getAllReceipes = async () => {
  let allReceipes = [];
  await axios.get('http://localhost:5000/receipe').then(res => {
    allReceipes = res.data;
  });
  return allReceipes;
};

// ✅ ROUTER CONFIGURATION
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainNavigation />,
    children: [
      { path: '/', element: <Home />, loader: getAllReceipes },
      { path: '/recipes', element: <RecipeItem />, loader: recipeLoader } // ✅ Added here
    ]
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
