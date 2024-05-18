import React, { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';
import PropTypes from 'prop-types'

const Recipes = ({handleAddToWantToCook}) => {

    const [recipes, setRecipes] = useState([]);
    useEffect( () =>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))

    }, [])



    return (
        <div className='md:w-1/2'>

            {
                recipes.map(recipe => 
                <Recipe key={recipe.id} 
                recipe={recipe}
                handleAddToWantToCook={handleAddToWantToCook}>
                </Recipe>)
            }
        </div>
    );
};

Recipes.propTypes = {
    handleAddToWantToCook: PropTypes.func
}

export default Recipes;