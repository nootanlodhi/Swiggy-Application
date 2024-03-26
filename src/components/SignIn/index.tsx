
const SignIn = () => {
  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-2xl font-bold'>Login</h1>
      <p className='text-gray-dark text-xl flex gap-2'>or<em className='text-orange not-italic'>create an account</em></p>
      <input type='number' className='border border-gray-dark w-4/5 p-4 outline-none' placeholder='Phone Number'/>
      <button className='w-4/5 bg-orange text-white p-3 text-xl font-bold'>Login</button>
      <p className='w-4/5'>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p>
    </div>
  )
}

export default SignIn