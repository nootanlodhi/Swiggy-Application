import { LuUser } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { IContextProps } from "../../Interface/Interface";
import { CreateContext } from "../../App";
import Modal from "../Modal";
import SignIn from "../SignIn";

const BottomNavigation = () => {
  const {cartData, setOpenModal, openModal} = useContext<IContextProps>(CreateContext);

  return (
    <div className="md:hidden sticky bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto">
        <NavLink to='/search-food' className="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <IoSearchOutline/>
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Search</span>
        </NavLink>
        <NavLink to='/add-to-cart' className="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          {cartData && cartData.length > 0 ? <div className="bg-green px-1.5 rounded-full text-white">{cartData.length}</div> : <IoCartOutline/>}
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Cart</span>
        </NavLink>
        <button onClick={()=>setOpenModal && setOpenModal(true)} className="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <LuUser/>
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Sign In</span>
        </button>
      </div>
      {
        openModal &&
          <Modal>
            <SignIn/>
          </Modal>
      }
    </div>
  )
}

export default BottomNavigation