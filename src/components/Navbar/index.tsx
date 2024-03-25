import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/swiggy-logo.png"
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { BiSolidOffer } from "react-icons/bi";
import { PiBowlFood } from "react-icons/pi";
import { IoIosHelpCircleOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="bg-white w-full py-4 flex flex-col lg:flex-row justify-between xs:px-5 sm:px-10 md:px-10 lg:px-30 xl:px-50 xxl:px-64 px-10">
      <img className="w-40" src={Logo}/>
      <div className="flex gap-10">
        <NavLink className="flex items-center gap-1 hover:text-orange" to='/search-food'>
          <IoSearchOutline/><p>Search</p>
        </NavLink>
        <NavLink className="flex items-center gap-1 hover:text-orange" to='/'>
          <PiBowlFood/><p>Ingredient Food</p>
        </NavLink>
        <NavLink className="xs:hidden md:flex flex items-center gap-1 hover:text-orange" to='/'>
          <BiSolidOffer/><p>Offer</p>
        </NavLink>
        <NavLink className="xs:hidden md:flex flex items-center gap-1 hover:text-orange" to='/'>
          <IoIosHelpCircleOutline/><p>Help</p>
        </NavLink>
        <NavLink className="flex items-center gap-1 hover:text-orange" to='/'>
          <IoCartOutline/><p>Cart</p>
        </NavLink>
        <NavLink className="xs:hidden md:flex flex items-center gap-1 hover:text-orange" to='/'>
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