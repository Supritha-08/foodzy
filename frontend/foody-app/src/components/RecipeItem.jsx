import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { BsFillStopwatchFill } from "react-icons/bs";
export default function RecipeItem() {
  const allReceipe=useLoaderData()
  console.log(allReceipe)
  return (
    <>
    <div className='card-container'>
        {Array.isArray(allReceipe) && allReceipe.map((item, index) => {
          return(
            <div className='card' key={index}>
              <img src={`http://localhost:5000/images/${item.coverImage}`} alt={item.title} width="120px" height="100px" />
              <div className='card-body'>
                <div className='title'>
                  {item.title}
                  <div className='icons'>
                    <div className='time'><BsFillStopwatchFill />30 min</div>
                    <FaHeart />
                  </div>
                </div>
              </div>
            </div>
)})}
        
      </div> 
    </>
  )
}

// Loader function moved to a separate file (recipeLoader.js)
// Correct example of a loader function




