import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/swiggy-logo.png"
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
// import { BiSolidOffer } from "react-icons/bi";
// import { IoIosHelpCircleOutline } from "react-icons/io";
import { useContext } from "react";
import { CreateContext } from "../../App";
import { IContextProps } from "../../Interface/Interface";
import Modal from "../Modal";
import SignIn from "../SignIn";

const Navbar = () => {
  const {cartData, setOpenModal, openModal} = useContext<IContextProps>(CreateContext);
  return (
    <nav className="bg-white w-full py-4 flex lg:flex-row justify-between xs:px-5 sm:px-10 md:px-10 lg:px-30 xl:px-50 xxl:px-64 px-10">
      <NavLink to="/"><img className="w-40" src={Logo}/></NavLink>
      <div className="xs:hidden md:flex flex gap-10">
        <NavLink style={({ isActive }) => {return isActive ? { color: "#ff7849" } : {};}} className="flex items-center gap-1 hover:text-orange" to='/search-food'>
          <IoSearchOutline/><p>Search</p>
        </NavLink>
        <NavLink style={({ isActive }) => {return isActive ? { color: "#ff7849" } : {};}} className="flex items-center gap-1 hover:text-orange" to='/add-to-cart'>
          {cartData && cartData.length > 0 ? <div className="bg-green px-1.5 rounded-full text-white">{cartData.length}</div> : <IoCartOutline/>}<p>Cart</p>
        </NavLink>
        <button onClick={()=>setOpenModal && setOpenModal(true)} className="flex items-center gap-1 hover:text-orange">
          <LuUser/><p>Sign In</p>
        </button>
      </div>
      {
        openModal &&
          <Modal>
            <SignIn/>
          </Modal>
      }
    </nav>
  )
}

export default Navbar