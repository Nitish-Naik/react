import React, { useState } from 'react'

const Marks = (props) => {
    const [marks, setMarks] = useState(props.mark);
  return (
    <>
        <div>
        <h1 className='font-bold text-xl text-red-5 px-11 mt-6'>My total marks {marks}.</h1>
      <button onClick={() => {
        setMarks(marks+1)
      }}  className='bg-blue-500 text-white font-bold py-2 px-5 rounded mt-5 ml-10'>Update</button>
        </div>
    </>
  )
}

export default Marks
