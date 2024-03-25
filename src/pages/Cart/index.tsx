import { useContext } from 'react'
import { CreateContext } from '../../App'
import { IContextProps, IFoodDetailsData } from '../../Interface/Interface';

const Cart = () => {
  const {cartData} = useContext<IContextProps>(CreateContext);

  return (
    <>
      {
        cartData?.length === 0 ? 
          <div className="xs:mt-36 sm:mt-30 flex-grow sm:px-10 md:px-10 lg:px-30 xl:px-50 xxl:px-96 px-10 h-inherit mb-10">
            <div className='w-full h-full flex items-center justify-center'>
              <img src='https://img.freepik.com/premium-vector/cooking-process-pan_602006-5501.jpg'/>
            </div>
            <div className='w-full h-full flex flex-col items-center justify-around gap-3'>
              <h1 className='text-xl text-gray-extra-dark font-bold'>Your cart is empty</h1>
              <p className='text-gray-dark'>You can go to home page to view more restaurants</p>
              <button className='bg-orange text-white p-2 font-semibold'>SEE RESTAURANTS NEAR YOU</button>
            </div>
          </div>
           : 
          <div className="w-full flex gap-3 justify-center bg-[#e9ecee] xs:pt-36 sm:pt-30 flex-grow sm:px-10 md:px-10 lg:px-30 xl:px-50 xxl:px-64 px-10 h-inherit pb-10">
            <div className='flex flex-col gap-5 w-8/12'>
              <div className='p-8 bg-white'>
                <h2 className='font-semibold'>Account</h2>
                <p className='text-gray-dark'>To place your order now, log in to your existing account or sign up.</p>
                <div className='flex gap-3 mt-3'>
                  <button className='border border-green-light text-green-light font-bold px-5 py-2'>Log In</button>
                  <button className='bg-green-light text-white font-bold px-5 py-2'>Sign In</button>
                </div>
              </div>

              <div className='p-8 bg-white'>
                <h2 className='font-semibold text-xl text-gray-dark'>Delivery address</h2>
              </div>

              <div className='p-8 bg-white'>
                <h2 className='font-semibold text-xl text-gray-dark'>Payment</h2>
              </div>
            </div>
            
            <div className='px-10 py-5 bg-white w-3/12'>
            {
              cartData && cartData.map((item:IFoodDetailsData, indx: number) => {
                return(
                  <div key={indx} className="flex items-center gap-5 my-2">
                    <div className="w-16 rounded">
                      <img className="rounded" src={item.strMealThumb}/>
                    </div>
                    <div>
                      <p>{item.strMeal.length > 20 ? item.strMeal.substring(20,0) + "..." : item.strMeal}</p>
                      <p className="text-gray-dark">&#8377;{Math.floor(Math.random() * 991) + 10}</p>
                    </div>
                  </div>
                )
              })
            }
            <span>Bill Details</span>
            {/* <div>{totalItemValue}</div> */}
            </div>
          </div>
      }
    </>
  )
}

export default Cart