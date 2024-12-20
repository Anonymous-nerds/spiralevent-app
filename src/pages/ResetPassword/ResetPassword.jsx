import React from 'react'
import { CiLock, CiLogin } from 'react-icons/ci'

const ResetPassword = () => {
  return (
    <div className='w-full h-full flex container justify-center pt-20 pb-20  '>
        <div className='smallerdiv '>
          {/*img*/}
          <div>
          <button className='text-2xl bg-pink-900 hover:text-white rounded-full p-2 duration-200'>
            <CiLock />
          </button>
          </div>

          <div className='words pt-10'>
            <h2 className='text-4xl font-bold'>Enter your new password</h2>
            {/*note for smaller screen set to text-4xl also change text to must be diifrent to prev*/}
            <h3 className='text-gray-600 pt-5 font-semibold '>Your new password must be different to previous passwords. </h3>
          </div>

          <div className='pt-5'>
            <input type="password"
             name="pass" 
             id="pass"
             placeholder='Enter new password'
             className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-900 shadow-sm' />
      
         </div>

         <div className='pt-5'>
          <input type="password" 
          name="pass2" id="pass2"
          placeholder='Confirm password' 
          className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-900 shadow-sm' />
         </div>

          <div className='pt-8'>
            <button className='text-white bg-pink-800 w-[150px] font-semibold shadow-md hover:bg-pink-700  rounded-md h-[50px]'>Reset password</button>
          </div>
        </div>
    </div>
  )
}

export default ResetPassword
