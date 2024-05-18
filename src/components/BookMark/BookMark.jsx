import React from 'react'
import PropTypes from 'prop-types'


const BookMark = ({ bookMark }) => {
    const { recipe_name, preparing_time, calories} = bookMark;

    return (
        <div className='flex items-center'>           

            <div className='flex justify-between bg-slate-200 py-2 px-1  my-2 rounded-lg'>
                <div>
                    <p>{recipe_name}</p>
                </div>
                <div>
                    <p>{preparing_time}</p>
                </div>
                <div>
                    <p>{calories}</p>
                </div>
               
            <button className="btn bg-green-400 rounded-full"> Preparing</button>
            </div>
        </div>
    )
}

BookMark.propTypes = {
    bookMark: PropTypes.array
}

export default BookMark

