import React from 'react'
import { IAllFood } from '../../Interface/Interface'

interface IProps{
  isOpen:boolean;
  foodData: IAllFood[];
  itemsPerPage: number;
  setIsOpen: (isOpen:boolean)=>void;
  setCurrentPage: (currentPage:number) => void;
}

const Pagination:React.FC<IProps> = ({isOpen, foodData, itemsPerPage, setIsOpen, setCurrentPage}) => {

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      {/* Pagination */}
      <div className="inline-block text-left flex justify-center mt-5 space-x-4">
        <button
          id="dropdownRadioButton"
          onClick={()=>setIsOpen(!isOpen)}
          className="w-max flex justify-center items-center gap-2 text-gray-extra-dark border border-[#d4d4d4] shadow-[#d4d4d4 0px 2px 12px] bg-[rgb(255, 255, 255)] rounded-md px-4 py-2 text-sm"
          type="button"
        >
          Pagination
          <svg className={`w-2.5 h-2.5 ms-3 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
          </svg>
        </button>
        {isOpen && (
          <div id="dropdownDefaultRadio" className="z-10 absolute mt-10 w-32 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-200 overflow-y-scroll no-scrollbar h-40" aria-labelledby="dropdownRadioButton">
              {
                foodData.length > itemsPerPage &&
                [...Array(Math.ceil(foodData.length / itemsPerPage))].map((_, index)=>{
                  return(
                    <li key={index} className='hover:bg-gray w-full px-3' onClick={() => {paginate(index + 1); setIsOpen(!isOpen);}}>
                      <div className="flex items-center">
                        <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                          {index + 1}
                        </label>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default Pagination