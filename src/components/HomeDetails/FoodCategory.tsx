import axios from 'axios'
import React, { useEffect } from 'react'
import { data } from '../../data/foodSchema'

const FoodCategory = () => {

    const fetchCategory = async() =>{
      try {
        const resp = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
        console.log(resp,"response")
      } catch (error) {
        console.error(error)
      }
    }

    useEffect(()=>{
        fetchCategory();
    },[]);
  return (
    <div className='mt-5 relative'>
      <h2 className="sm:text-1xl md:text-1xl lg:text-2xl xl:text-3xl xxl:text-3xl dark:text-white font-bold mt-5">What's on your mind?</h2>
      <div className='flex gap-4 w-full overflow-x-scroll no-scrollbar mt-5'>
        {
          data.map((item)=>{
            return(
                <>
                  {
                    <img className='img-size' src={item.url}/>
                  }
                </>
            )
          })
        }
      </div>
    </div>
  )
}

export default FoodCategory