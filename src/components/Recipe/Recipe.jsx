import React from 'react';
import { FaRegClock } from "react-icons/fa";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import PropTypes from 'prop-types';

const Recipe = ({ recipe ,handleAddToWantToCook }) => {
    const { recipe_name, short_description, recipe_image, ingredients, preparing_time, calories } = recipe
    const { } = ingredients
    return (
        <div className=''>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={recipe_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p className='py-4'>{short_description}</p>
                    <div>
                        <h2 className=' font-semibold pb-3'>Ingredients: {ingredients.length}</h2>

                        <p className='text-[#878787]'>
                            {
                                ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)
                            }
                        </p>

                        <div className='flex justify-between text-[#878787]  pt-10 pb-4'>
                            <p className='flex items-center gap-x-2'><FaRegClock />{preparing_time}</p>
                            <p className='flex items-center gap-x-2'> <MdOutlineLocalFireDepartment /> {calories}</p>
                        </div>
                    </div>
                    <div className="card-actions ">
                        <button onClick={() => handleAddToWantToCook (recipe)} className="btn bg-green-400 rounded-full">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleAddToWantToCook: PropTypes.func
}

export default Recipe;