import React from 'react'
import PropTypes from 'prop-types'

const CurrentCook = () => {
    return (
        <div>
            <h2 className='text-2xl text-center py-2 font-semibold '> Currently cooking: </h2>
            <div className='w-full bg-slate-300 p-3 m-4 rounded-lg flex justify-between text-xl font-medium '>


                <h3>Name</h3>
                <h3>Time</h3>
                <h3>Calories</h3>

            </div>
        </div>
    )
}

CurrentCook.propTypes = {
    currentCook: PropTypes.array
}

export default CurrentCook
