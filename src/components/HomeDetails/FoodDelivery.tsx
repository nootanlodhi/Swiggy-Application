import { useContext, useEffect, useState } from 'react'
import { fetchAllArea, fetchAllCategory, fetchAllIndianFood, fetchFoodCategoryData } from '../../services/services';
import { IArea, ICategory, IContextProps } from '../../Interface/Interface';
import { TbSortAscendingLetters } from "react-icons/tb";
import { TbSortDescendingLetters } from "react-icons/tb";
import HeroSection from '../HeroSection';
import FilterButtons from '../FilterButtons';
import { CreateContext } from '../../App';

const FoodDelivery = () => {
  const [area , setArea] = useState<IArea[]>([]);
  const [category , setCategory] = useState<ICategory[]>([]);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const {foodData, setFoodData , setIsLoading} = useContext<IContextProps>(CreateContext)
  const [selectFilter , setSelectFilter] = useState({
    selectArea:"Indian",
    selectCategory: "None",
    selectIngredient: ""
  })

  const [isOpen , setIsOpen] = useState({
    isAreaOpen: false,
    isCategoryOpen: false,
    isIngredient : false
  })
  
  const fetchAreaFoodData = async(area:string, isBoolean: boolean) =>{
    setIsLoading && setIsLoading(true)
    try {
      const resp = await fetchAllIndianFood(area);
      if(resp.status === 200){
        setFoodData && setFoodData(resp.data.meals)
        setIsOpen({...isOpen, isAreaOpen:isBoolean});
      }
    } catch (error) {
      console.error(error);
    }
    setIsLoading && setIsLoading(false)
  }

  const fetchFoodCategory = async(category:string, isBoolean: boolean) =>{
    setIsLoading && setIsLoading(true)
    try {
      const resp = await fetchFoodCategoryData(category);
      if(resp.status === 200){
        setFoodData && setFoodData(resp.data.meals)
        setIsOpen({...isOpen, isCategoryOpen:isBoolean});
      }
    } catch (error) {
      console.error(error);
    }
    setIsLoading && setIsLoading(false)
  }

  const fetchCategoryList = async() =>{
    try {
      const resp = await fetchAllCategory();
      if(resp.status === 200){
        setCategory(resp.data.meals)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const AllAreaList = async() =>{
    setIsLoading && setIsLoading(true)
    try {
      const resp = await fetchAllArea();
      if(resp.status === 200){
        setArea(resp.data.meals)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(()=>{
    // Reset loading state on initial load or page refresh
    setIsLoading && setIsLoading(true)
    fetchAreaFoodData("Indian", false);
    AllAreaList();
    fetchCategoryList();
  },[]);

  const handleDropdown = (area:string) =>{
    if(area){
      fetchAreaFoodData(area, false)
      setSelectFilter({...selectFilter, selectArea: area, selectCategory:"None"})
    }
  }

  const handleCategory = (category:string) =>{
    if(category){
      fetchFoodCategory(category, false)
      setSelectFilter({...selectFilter, selectCategory: category, selectArea:"None"})
    }
  }

  const sortFoodData = (order: 'asc' | 'desc') => {
    const sortedFoodData = [...foodData].sort((a, b) => {
      if (order === 'asc') {
        return a.strMeal.localeCompare(b.strMeal);
      } else {
        return b.strMeal.localeCompare(a.strMeal);
      }
    });
    setFoodData && setFoodData(sortedFoodData);
  }

  const toggleSortOrder = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newOrder);
    sortFoodData(newOrder);
  }

  return (
    <div className='mt-5 relative'>
       <h2 className="sm:text-1xl md:text-1xl lg:text-2xl xl:text-3xl xxl:text-3xl dark:text-white font-bold mt-5">Restaurants with online food delivery in Pune</h2>
       <div className='flex gap-4 w-full overflow-x-scroll no-scrollbar mt-5'>
         {/* Filter By Area Dropdown */}
         <div className="inline-block text-left">
           <button
              id="dropdownRadioButton"
              onClick={()=>setIsOpen({...isOpen, isAreaOpen: !isOpen.isAreaOpen, isCategoryOpen: false})}
              className="w-max flex justify-center items-center gap-2 text-gray-extra-dark border border-[#d4d4d4] shadow-[#d4d4d4 0px 2px 12px] bg-[rgb(255, 255, 255)] rounded-full px-4 py-2 text-sm"
              type="button"
            >
              Filter By Area
              <svg className={`w-2.5 h-2.5 ms-3 transform ${isOpen.isAreaOpen ? 'rotate-180' : 'rotate-0'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
              </svg>
          </button>
          {isOpen.isAreaOpen && (
            <div id="dropdownDefaultRadio" className="z-10 absolute mt-1 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-200 overflow-y-scroll no-scrollbar h-40" aria-labelledby="dropdownRadioButton">
                {
                  area && area.map((item:IArea, index:number)=>{
                    return(
                      <li key={index} className='hover:bg-gray w-full px-3'>
                        <div className="flex items-center">
                          <input checked={item.strArea === selectFilter.selectArea ? true : false} id="default-radio-1" type="radio" value={item.strArea} onChange={(e)=>handleDropdown(e.target.value)} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"/>
                          <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            {item.strArea}
                          </label>
                        </div>
                      </li>
                    )
                  })
                }
                <div className='border-solid border-t-2 border-gray p-2 text-center'>
                  <button className='text-red' onClick={()=>fetchAreaFoodData(selectFilter.selectArea, false)}>Apply</button>
                </div>
              </ul>
            </div>
          )}
        </div>
        {/* Filter By Category Dropdown */}
        <div className="inline-block text-left">
           <button
              id="dropdownRadioButton"
              onClick={()=>setIsOpen({...isOpen, isCategoryOpen: !isOpen.isCategoryOpen, isAreaOpen: false})}
              className="w-max flex justify-center items-center gap-2 text-gray-extra-dark border border-[#d4d4d4] shadow-[#d4d4d4 0px 2px 12px] bg-[rgb(255, 255, 255)] rounded-full px-4 py-2 text-sm"
              type="button"
            >
              Filter By Category
              <svg className={`w-2.5 h-2.5 ms-3 transform ${isOpen.isCategoryOpen ? 'rotate-180' : 'rotate-0'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
              </svg>
          </button>
          {isOpen.isCategoryOpen && (
            <div id="dropdownDefaultRadio" className="z-10 absolute mt-1 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-200 overflow-y-scroll no-scrollbar h-40" aria-labelledby="dropdownRadioButton">
                {
                  category && category.map((item:ICategory, index:number)=>{
                    return(
                      <li key={index} className='hover:bg-gray w-full px-3'>
                        <div className="flex items-center">
                          <input checked={item.strCategory === selectFilter.selectCategory ? true : false} id="default-radio-1" type="radio" value={item.strCategory} onChange={(e)=>handleCategory(e.target.value)} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"/>
                          <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            {item.strCategory}
                          </label>
                        </div>
                      </li>
                    )
                  })
                }
                <div className='border-solid border-t-2 border-gray p-2 text-center'>
                  <button className='text-red' onClick={()=>fetchFoodCategory(selectFilter.selectCategory, false)}>Apply</button>
                </div>
              </ul>
            </div>
          )}
        </div>

        <FilterButtons toggleSortOrder={toggleSortOrder}>Sort By {sortOrder === 'asc' ? <TbSortAscendingLetters/> : <TbSortDescendingLetters/>}</FilterButtons>
        <FilterButtons>Fast Delivery</FilterButtons>
        <FilterButtons>New On Swiggy</FilterButtons>
        <FilterButtons>Rating 4.0+</FilterButtons>
        <FilterButtons>Pure Veg</FilterButtons>
        <FilterButtons>Offer</FilterButtons>
        <FilterButtons>Rs. 300-Rs. 500</FilterButtons>
        <FilterButtons>Less Then Rs 300</FilterButtons>
       </div>
       <HeroSection />
    </div>
  )
}

export default FoodDelivery