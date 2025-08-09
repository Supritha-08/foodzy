import React, { useState } from 'react'

import food from '../assets/food.jpeg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RecipeItem from '../components/RecipeItem';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate=useNavigate()
  const [isOpen, setIsOpen]=useState(false)
  const addRecipe=()=>{
    let token=localStorage.getItem("token")
    if(token)
    navigate("/addRecipe")
    else{
      setIsOpen(true)
    }
  }
  return (
    <>
      <section className='home'>
        <div className='left'>
        <h1>Food Receipe</h1>
        <h5>This text contains nouns (banana, vanilla, milk, eggs), verbs (cream, sift, beat, mix, add) and factual adjectives which describe the preparation of the cake, e.g. cream butter and sugar until light and fluffy.   The recipe also contains two headings, 'Method' and 'Ingredients', which make it clear to the reader what is involved in making the cake.</h5>
      <button onClick={addRecipe}>Share your receipe</button>
      </div>
      <div className='right'>
        <img src={food} alt='food recipe' ></img>
        </div>
        </section>
        <div className="bg">
        
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#00cba9" fillOpacity="0.5" d="M0,288L48,266.7C96,245,192,203,288,186.7C384,171,480,181,576,202.7C672,224,768,256,864,256C960,256,1056,224,1152,229.3C1248,235,1344,277,1392,298.7L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg>

        </div>
        {isOpen && (
          <>
            <Modal onclose={() => setIsOpen(false)}>
              <Inputform setIsOpen={() => setIsOpen(false)} />
            </Modal>
          </>
        )}
        <div className='recipe'>
          <RecipeItem />
        </div>
      </>
  )
}



