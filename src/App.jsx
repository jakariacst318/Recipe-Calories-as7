import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import OurRecipe from './components/OurRecipe/OurRecipe'
import Recipes from './components/Recipes/Recipes'
import BookMarks from './components/WantCook/BookMarks'

function App() {


  
  const [bookMarks, setBookMarks]= useState([]);
  const handleAddToWantToCook = recipe =>{
    const newBookmarks =[...bookMarks, recipe];
    setBookMarks(newBookmarks)
  }
  

  return (
    < >
      <div className='max-w-7xl mx-auto px-8'>

        <Header></Header>
        <Banner></Banner>
        <OurRecipe></OurRecipe>

        <div className='md:flex justify-between'>
          <Recipes handleAddToWantToCook={handleAddToWantToCook}></Recipes>

          <BookMarks bookMarks={bookMarks}></BookMarks>
          

        </div>

      </div>
    </>
  )
}

export default App
