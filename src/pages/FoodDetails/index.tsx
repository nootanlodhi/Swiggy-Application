import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { fetchFoodDetailsData } from '../../services/services';
import { IFoodDetailsData } from '../../Interface/Interface';
import FilterButtons from '../../components/FilterButtons';

const FoodDetails = () => {
  const location = useLocation();
  const [foodDetails , setFoodDetails] = useState<IFoodDetailsData[]>([])

  const fetchFoodDetails = async() =>{
    const id = location.pathname.split("/")[2];
    try {
      const resp = await fetchFoodDetailsData(id);
      console.log(resp)
      setFoodDetails(resp.data.meals)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(()=>{
    fetchFoodDetails()
  },[]);

  return (
    <main className="xs:mt-36 sm:mt-30 flex-grow sm:px-10 md:px-10 lg:px-30 xl:px-50 xxl:px-96 px-10 h-inherit mb-10">
      {
        foodDetails.map((item,index) => {
          return(
            <div key={index}>
              <div className='className=" flex grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 mt-8 cursor-pointer"'>
                <div>
                  <img className='rounded-lg' src={item.strMealThumb}/>
                </div>
                <div className=''>
                  <p className='text-xl text-gray-dark'>{item.strMeal} . {item.strCategory} . {item.strArea}</p>
                  <h2 className='text-xl font-bold my-2'>Ingredient</h2>
                  <div>
                    {item.strIngredient1 && <FilterButtons>{item.strIngredient1}</FilterButtons>}
                    {item.strIngredient2 && <FilterButtons>{item.strIngredient2}</FilterButtons>}
                    {item.strIngredient3 && <FilterButtons>{item.strIngredient3}</FilterButtons>}
                    {item.strIngredient4 && <FilterButtons>{item.strIngredient4}</FilterButtons>}
                    {item.strIngredient5 && <FilterButtons>{item.strIngredient5}</FilterButtons>}
                    {item.strIngredient6 && <FilterButtons>{item.strIngredient6}</FilterButtons>}
                    {item.strIngredient7 && <FilterButtons>{item.strIngredient7}</FilterButtons>}
                    {item.strIngredient8 && <FilterButtons>{item.strIngredient8}</FilterButtons>}
                    {item.strIngredient9 && <FilterButtons>{item.strIngredient9}</FilterButtons>}
                    {item.strIngredient10 && <FilterButtons>{item.strIngredient10}</FilterButtons>}
                    {item.strIngredient11 && <FilterButtons>{item.strIngredient11}</FilterButtons>}
                    {item.strIngredient12 && <FilterButtons>{item.strIngredient12}</FilterButtons>}
                    {item.strIngredient13 && <FilterButtons>{item.strIngredient13}</FilterButtons>}
                    {item.strIngredient14 && <FilterButtons>{item.strIngredient14}</FilterButtons>}
                    {item.strIngredient15 && <FilterButtons>{item.strIngredient15}</FilterButtons>}
                  </div>
                  <h2 className='text-xl font-bold my-2'>Measurment</h2>
                  <div>
                    {item.strMeasure1 && <FilterButtons>{item.strMeasure1}</FilterButtons>}
                    {item.strMeasure2 && <FilterButtons>{item.strMeasure2}</FilterButtons>}
                    {item.strMeasure3 && <FilterButtons>{item.strMeasure3}</FilterButtons>}
                    {item.strMeasure4 && <FilterButtons>{item.strMeasure4}</FilterButtons>}
                    {item.strMeasure5 && <FilterButtons>{item.strMeasure5}</FilterButtons>}
                    {item.strMeasure6 && <FilterButtons>{item.strMeasure6}</FilterButtons>}
                    {item.strMeasure7 && <FilterButtons>{item.strMeasure7}</FilterButtons>}
                    {item.strMeasure8 && <FilterButtons>{item.strMeasure8}</FilterButtons>}
                    {item.strMeasure9 && <FilterButtons>{item.strMeasure9}</FilterButtons>}
                    {item.strMeasure10 && <FilterButtons>{item.strMeasure10}</FilterButtons>}
                    {item.strMeasure11 && <FilterButtons>{item.strMeasure11}</FilterButtons>}
                    {item.strMeasure12 && <FilterButtons>{item.strMeasure12}</FilterButtons>}
                    {item.strMeasure13 && <FilterButtons>{item.strMeasure13}</FilterButtons>}
                    {item.strMeasure14 && <FilterButtons>{item.strMeasure14}</FilterButtons>}
                    {item.strMeasure15 && <FilterButtons>{item.strMeasure15}</FilterButtons>}
                  </div>
                  <Link to={item.strYoutube} target='_blank'><h2 className='text-xl font-bold my-2'>Tags</h2></Link>
                  <div>
                    {
                      item.strTags?.split(",").map((tag,index) => {
                        return(
                            <FilterButtons key={index}>{tag}</FilterButtons>
                        )
                      })
                    }
                  </div>
                  <div className='flex mt-3 justify-between w-full'>
                    <Link className='flex gap-2 items-center text-xl px-5 py-1 border border-gray rounded-full hover:bg-orange hover:text-white' to={item.strYoutube} target='_blank'> Play on <img className='w-12 rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlxiiJrfJOY6Pds_vU7Qc8gRefJiMWoqW0H4KxbvdQVvFb2RpOIkrxE0fjsq8YUkUvtQE&usqp=CAU'/></Link>
                    <button className='bg-white text-xl px-7 border border-gray rounded-full hover:bg-orange hover:text-white'>Add to cart</button>
                  </div>
                </div>
              </div>
              <div className='mt-5'>{item.strInstructions}</div>
            </div>
        )})
      }
    </main>
  )
}

export default FoodDetails