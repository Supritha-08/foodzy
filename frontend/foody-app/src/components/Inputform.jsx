import React from 'react'

const Inputform = () => {
  return (
    <>
    <form className='form'>
        <div className='form-control'>
            <label>Email</label>
            <input type="email" className='input' required />
            </div>
        <div className='form-control'>
            <label>Password</label>
            <input type="password" className='input' required />
            </div>
            <button type="submit">login 

            </button>
        <p>Create a new account</p>

    </form>
      
    </>
  )
}

export default Inputform
