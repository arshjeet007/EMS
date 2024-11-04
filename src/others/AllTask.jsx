import  { useContext } from 'react'
import { AuthContext } from '../components/context/AuthContext'

const AllTask = () => {

  const {userData} = useContext(AuthContext)
  // console.log(authData.employees);

  return (
    <div id="tasklist2" className='bg-[#1C1C1C] p-5 rounded-xl mt-5'>
      <div className=' text-xl mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='text-xl w-1/5 bg-slate-500 py-2 px-1'>Employee Name</h2>
        <h3 className='text-xl w-1/5 bg-slate-500 py-2 px-1'>New Task</h3>
        <h5 className='text-xl w-1/5 bg-slate-500 py-2 px-1'>Active Task</h5>
        <h5 className='text-xl w-1/5 bg-slate-500 py-2 px-1'>Completed Task</h5>
        <h5 className='text-xl w-1/5 bg-slate-500 py-2 px-1'>Failed Task</h5>
      </div>
      <div className=''>
      {userData.map(function(elem,idx){
        return <div key={idx} className=' mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='text-xl w-1/5'>{elem.firstName}</h2>
        <h3 className='text-xl w-1/5 text-blue-500'>{elem.taskCounts.newTask}</h3>
        <h5 className='text-xl w-1/5 text-yellow-500'>{elem.taskCounts.active}</h5>
        <h5 className='text-xl w-1/5 text-green-400'>{elem.taskCounts.completed}</h5>
        <h5 className='text-xl w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
      </div>
      })}
      </div>
      
    </div>
  )
}

export default AllTask
