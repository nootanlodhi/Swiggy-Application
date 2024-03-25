import { IoSearchOutline } from "react-icons/io5";
import { data } from "../../data/foodSchema";
import { fetchSearchByLetter, fetchSearchByName } from "../../services/services";
import { useEffect, useState } from "react";
import { ISearchData } from "../../Interface/Interface";
import { useNavigate } from "react-router-dom";

const SearchFood = () => {
  const [searchData , setSearchData] = useState([]);
  const [letter , setLetter] = useState<string>("")
  const navigate = useNavigate();

  const fetchDataByLetter = async(letter:string) =>{
    try {
      const resp = await fetchSearchByLetter(letter);
      console.log(resp)
      setSearchData(resp.data.meals)
    } catch (error) {
      console.error(error)
    }
  }

  const fetchDataByName = async(letter:string) =>{
    try {
      const resp = await fetchSearchByName(letter);
      console.log(resp)
      setSearchData(resp.data.meals)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(()=>{
    // Debouncing Technique
    setTimeout(()=>{
      if(letter.length > 1){
        fetchDataByName(letter)
      }else{
        fetchDataByLetter(letter)
      }
    },500);
  },[letter]);

  return (
    <>
      <main className="xs:mt-36 sm:mt-30 flex-grow sm:px-10 md:px-10 lg:px-30 xl:px-50 xxl:px-96 px-10 h-inherit mb-10">
        <div className="w-full h-12 flex bg-white border border-gray-light justify-between rounded-md px-5 xs:mt-3 sm:mt-0">
          <input value={letter} onChange={(e) => setLetter(e.target.value)} className="w-full border-none outline-none bg-white text-gray-dark" placeholder="Search for letter and name"/>
          <button className="bg-white rounded-md"><IoSearchOutline/></button>
        </div>
        {letter === "" && 
          <>
            <h2 className="mt-8 sm:text-1xl md:text-1xl lg:text-2xl xl:text-xl xxl:text-xl text-[#404040] font-extrabold">Popular Cuisines</h2>
            <div className='flex gap-4 w-full overflow-x-scroll no-scrollbar mt-2'>
              {data.map((item, index) => (
                <img key={index} className='img-size' src={item.url} alt={`Food ${index}`} />
              ))}
            </div>
          </>}
        <div>
          {
            searchData && searchData.map((item:ISearchData, indx: number) => {
              return(
                <div key={indx} onClick={()=>navigate("/food-details/" + item.idMeal)} className="flex items-center gap-5 my-10 py-3 cursor-pointer hover:bg-gray">
                  <div className="w-20 rounded">
                    <img className="rounded" src={item.strMealThumb}/>
                  </div>
                  <div className="w-3/6">
                    <p>{item.strMeal.length > 16 ? item.strMeal.substring(16,0) + "..." : item.strMeal}</p>
                    <p className="text-gray-dark">Dish</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </main>
    </>
  )
}

export default SearchFood