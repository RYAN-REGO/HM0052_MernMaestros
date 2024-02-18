/* eslint-disable react/prop-types */
const Option = ({setRole}) => {
    const roleChanging = (role) => {
        localStorage.setItem('role', role);
        setRole(role);
    }
  return (
    <div className='flex h-screen md:gap-8 gap-2 justify-center items-center flex-wrap'>
        <div onClick={()=>roleChanging("mentor")} className=' text-center w-40 hover:bg-gray-200 cursor-pointer text-lg font-bold h-40 border rounded-md flex justify-center items-center'>
            Sign Up as Mentor
        </div>
        <div onClick={()=>roleChanging("mentee")} className='w-40 h-40 text-center hover:bg-gray-200 border cursor-pointer text-lg font-bold rounded-md flex justify-center items-center'>
            Sign Up as Mentee
        </div>
    </div>
  )
}

export default Option