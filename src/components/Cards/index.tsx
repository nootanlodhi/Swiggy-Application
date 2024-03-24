import React, { useMemo } from 'react';
import { IAllFood } from '../../Interface/Interface';
import { FcRating } from 'react-icons/fc';

interface IProps {
  currentItems: IAllFood;
}

const Cards: React.FC<IProps> = ({ currentItems }) => {

  // Generating Rating Randomly
  const handleRating = useMemo(() => {
    return Math.floor(Math.random() * 5) + 1;
  }, []);

  return (
    <>
      {/* Food Cards */}
      <div className="rounded-2xl w-full h-60">
        <img className="w-full h-full object-cover rounded-2xl" src={currentItems.strMealThumb} alt={currentItems.strMeal} />
      </div>
      <div className="px-1 py-2">
        <h2 className="text-xl font-bold text-[#4e4e4e]">{currentItems.strMeal}</h2>
        <span className="flex items-center gap-2 m-0 font-bold text-[#4e4e4e]">
          <FcRating /> <p>{handleRating}</p>
        </span>
      </div>
    </>
  );
};

export default Cards;
