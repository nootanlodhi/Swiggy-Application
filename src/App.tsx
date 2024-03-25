import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { createContext, useState } from "react";
import { IAllFood, IFoodDetailsData } from "./Interface/Interface";
import BottomNavigation from "./components/Navbar/BottomNavigation";
import SearchFood from "./pages/SearchFood";
import FoodDetails from "./pages/FoodDetails";
import Cart from "./pages/Cart";

export const CreateContext = createContext({});

function App() {
  const [foodData , setFoodData] = useState<IAllFood[]>([]);
  const [isLoading , setIsLoading] = useState<boolean>(true);
  const [cartData , setCartData] = useState<IFoodDetailsData[]>([])
  // const cartData: IFoodDetailsData[] = []
  return (
    <CreateContext.Provider value={{foodData, setFoodData, isLoading , setIsLoading, cartData, setCartData }}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/search-food" element={<SearchFood/>}/>
          <Route path="/food-details/:id" element={<FoodDetails/>}/>
          <Route path="/add-to-cart" element={<Cart/>}/>
        </Routes>
        <BottomNavigation/>
        <Footer/>
      </BrowserRouter>
    </CreateContext.Provider>
  );
}

export default App;
