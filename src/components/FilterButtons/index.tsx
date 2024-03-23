import React, { ReactNode } from 'react'

interface IProps{
  toggleSortOrder?: () => void;
  children?: ReactNode;
}

const FilterButtons:React.FC<IProps> = ({toggleSortOrder, children}) => {
  return (
    <div className="inline-block text-left">
      <button className='w-max flex justify-center items-center gap-2 text-gray-extra-dark border border-[#d4d4d4] shadow-[#d4d4d4 0px 2px 12px] bg-[rgb(255, 255, 255)] rounded-full px-4 py-2 text-sm' onClick={toggleSortOrder}>
        {children}
      </button>
    </div>
  )
}

export default FilterButtons