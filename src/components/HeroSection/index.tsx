import React, { useContext } from 'react';
import { IAllFood, IContextProps } from '../../Interface/Interface';
import Cards from '../Cards';
import CardSkeleton from '../CardSkeleton';
import { CreateContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const {foodData, isLoading} = useContext<IContextProps>(CreateContext);
  const navigate = useNavigate();

  // Pagination Logic
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = foodData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      {/* Food Cards */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-4 mt-8 cursor-pointer">
        {foodData && foodData.map((item:IAllFood, index: number) => {
          return (
            <div key={index} onClick={() => navigate("/food-details/" + item.idMeal)} className='hover:scale-90 duration-300'>
              <Cards currentItems={item}/>
            </div>
          );
        })}
      </div> 
      
        {/* Skeleton */}
        {isLoading && (
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-4 mt-8 cursor-pointer">
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
          </div>)
        }

        {/* Pagination */}
       {/* {currentItems.length > 0 && <Pagination isOpen={isOpen} foodData={foodData} itemsPerPage={itemsPerPage} setIsOpen={setIsOpen} setCurrentPage={setCurrentPage}/>} */}
    </>
  );
};

export default HeroSection;
