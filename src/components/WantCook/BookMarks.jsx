import React from 'react'
import PropTypes from 'prop-types'
import BookMark from '../BookMark/BookMark'
import CurrentCook from '../CurrentCook/CurrentCook'

const BookMarks = ({bookMarks}) => {
  return (
    <div>
      <div className='w-[400px] bg-slate-300 p-3 m-4 rounded-lg'>
          <h2 className='text-2xl text-center py-2 font-semibold '> Want to cook: {bookMarks.length}</h2>

          <div className='flex gap-x-12 text-xl font-medium '>
                <h3>Name</h3>
                <h3>Time</h3>
                <h3>Calories</h3>
            </div>

          {
            bookMarks.map(bookMark => <BookMark key={bookMark.id} bookMark={bookMark}></BookMark>)
          }
      </div>

      <CurrentCook></CurrentCook>
    </div>
  )
}

BookMarks.propTypes = {
    bookMarks: PropTypes.array
}

export default BookMarks

