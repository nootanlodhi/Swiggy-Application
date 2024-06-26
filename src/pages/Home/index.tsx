import FoodCategory from "../../components/HomeDetails/AreaFoods"
import FoodDelivery from "../../components/HomeDetails/FoodDelivery"

const Home = () => {
  return (
    <>
      <div className="xs:mt-20 sm:mt-20 flex-grow sm:px-10 md:px-10 lg:px-30 xl:px-50 xxl:px-64 px-10 h-inherit mb-10">
        <FoodCategory/>
        <FoodDelivery/>
      </div>
    </>
  )
}

export default Home