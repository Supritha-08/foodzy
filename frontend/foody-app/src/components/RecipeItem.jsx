import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { BsFillStopwatchFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import axios from 'axios';

export default function RecipeItem() {
  const allReceipe = useLoaderData();
  let path = window.location.pathname === "/myRecipe";
  let favItem = JSON.parse(localStorage.getItem("fav")) ?? [];
  // Removed unused isFavRecipe state

  const onDelete = async (id) => {
    await axios.delete(`http://localhost:5000/recipe${id}`)
      .then((res) => console.log(res));
    // UI update logic should be added here if needed
  };

  const favRecipe = (item) => {
    let filterItem = favItem.filter(recipe => recipe._id !== item._id);
    favItem = favItem.filter(recipe => recipe._id === item._id).length === 0 ? [...favItem, item] : filterItem;
    localStorage.setItem("fav", JSON.stringify(favItem));
    // Removed setIsFavRecipe since isFavRecipe state is not used
  };

  return (
    <>
      <div className='card-container'>
        {
          Array.isArray(allReceipe) && allReceipe.map((item, index) => {
            return (
              <div className='card' key={index}>
                <img src={`http://localhost:5000/images/${item.coverImage}`} alt={item.title} width="120px" height="100px" />
                <div className='card-body'>
                  <div className='title'>
                    {item.title}
                    <div className='icons'>
                      <div className='timer'><BsFillStopwatchFill />{item.time}</div>
                      {
                        (!path) ?
                          <FaHeart
                            onClick={() => favRecipe(item)}
                            style={{ color: (favItem).some(res => res._id === item._id) ? "red" : "" }}
                          />
                          :
                          <div className='action'>
                            <Link to={`/editRecipe/${item._id}`} className="editIcon"><FaEdit /></Link>
                            <MdDeleteSweep onClick={() => onDelete(item._id)} className='delete' />
                          </div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  );
}

// Loader function moved to a separate file (recipeLoader.js)
// Correct example of a loader function




