import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex justify-between gap-5 screen mt-10'>
        <div className='w-[40%] rounded-xl bg-blue-400 px-5 py-10'>
            <h2 className='text-2xl font-semibold'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className='w-[40%] rounded-xl bg-green-400 px-5 py-10'>
            <h2 className='text-2xl font-semibold'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>

        <div className='w-[40%] rounded-xl bg-yellow-400 px-5 py-10'>
            <h2 className='text-2xl font-semibold'>{data.taskCounts.active}</h2>
            <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div>

        <div className='w-[40%] rounded-xl bg-red-400 px-5 py-10'>
            <h2 className='text-2xl font-semibold'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
        
    </div>
  )
}

export default TaskListNumber
