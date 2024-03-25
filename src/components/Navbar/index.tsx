import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/swiggy-logo.png"
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { useContext } from "react";
import { CreateContext } from "../../App";
import { IContextProps } from "../../Interface/Interface";

const Navbar = () => {
  const {cartData} = useContext<IContextProps>(CreateContext)
  return (
    <nav className="bg-white w-full py-4 flex flex-col lg:flex-row justify-between xs:px-5 sm:px-10 md:px-10 lg:px-30 xl:px-50 xxl:px-64 px-10">
      <NavLink to="/"><img className="w-40" src={Logo}/></NavLink>
      <div className="flex gap-10">
        <NavLink style={({ isActive }) => {return isActive ? { color: "#ff7849" } : {};}} className="flex items-center gap-1 hover:text-orange" to='/search-food'>
          <IoSearchOutline/><p>Search</p>
        </NavLink>
        <NavLink style={({ isActive }) => {return isActive ? { color: "#ff7849" } : {};}} className="xs:hidden md:flex flex items-center gap-1 hover:text-orange" to='/'>
          <BiSolidOffer/><p>Offer</p>
        </NavLink>
        <NavLink style={({ isActive }) => {return isActive ? { color: "#ff7849" } : {};}} className="xs:hidden md:flex flex items-center gap-1 hover:text-orange" to='/'>
          <IoIosHelpCircleOutline/><p>Help</p>
        </NavLink>
        <NavLink style={({ isActive }) => {return isActive ? { color: "#ff7849" } : {};}} className="flex items-center gap-1 hover:text-orange" to='/add-to-cart'>
          {cartData && cartData.length > 0 ? <div className="bg-green px-1.5 rounded-full text-white">{cartData.length}</div> : <IoCartOutline/>}<p>Cart</p>
        </NavLink>
        <NavLink style={({ isActive }) => {return isActive ? { color: "#ff7849" } : {};}} className="xs:hidden md:flex flex items-center gap-1 hover:text-orange" to='/'>
          <LuUser/><p>Sign In</p>
        </NavLink>
      </div>
      {/* <div className="sm:4 xs:w-full md:w-2/4 lg:w-2/5 xl:w-1/4 flex bg-gray justify-between rounded-md px-5 xs:mt-3 sm:mt-0 xs:h-10 sm:h-auto">
        <input className="w-full border-none outline-none bg-gray text-gray-dark" placeholder="Search for restaurant and food"/>
        <button className="bg-gray rounded-md"><IoSearchOutline/></button>
      </div> */}
    </nav>
  )
}

export default Navbar