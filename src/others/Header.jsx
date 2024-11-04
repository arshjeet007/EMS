import PropTypes from 'prop-types';
const Header = ({data}) => {

  function logOutUser(){
    localStorage.setItem('loggedInUser','')
    window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello!! <br/> <span className='text-3xl font-semibold'>{data?.firstName} 😇</span> </h1>
      <button onClick={logOutUser} className='bg-red-600 text-white rounded-full px-3 py-2'>Log Out</button>
    </div>
  )
}
Header.propTypes = {
  data: PropTypes.object,
};
export default Header
