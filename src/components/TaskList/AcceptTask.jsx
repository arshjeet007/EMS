import React from 'react'

const AcceptTask = ({data}) => {
  console.log(data);
  
  return (
    <div>
      <div className='flex-shrink-0 h-full w-[400px] bg-yellow-600 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 px-3 py-1 rounded-xl'>{data.category}</h3>
          <h4>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 font-semibold text-2xl'>{data.taskTitle}</h2>
        <p className='text-sm mt-1.5'>
        {data.taskDescription}
        </p>
        <div className='flex justify-between mt-4 '>
            <button className='bg-green-500 py-1 px-2 text-sm rounded-full'>Mark As Completed</button>
            <button className='bg-red-600 py-1 px-2 text-sm rounded-full'>Mark As Failed</button>
        </div>
      </div>
    </div>
  )
}

export default AcceptTask
