import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { createContext, useState } from "react";
import { IAllFood } from "./Interface/Interface";

export const CreateContext = createContext({});

function App() {
  const [foodData , setFoodData] = useState<IAllFood[]>([]);
  const [isLoading , setIsLoading] = useState<boolean>(true);
  return (
    <CreateContext.Provider value={{foodData, setFoodData, isLoading , setIsLoading}}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CreateContext.Provider>
  );
}

export default App;
