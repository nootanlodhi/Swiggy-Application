import React, { useContext, useState } from 'react';
import { IAllFood, IContextProps, IFoodDetails } from '../../Interface/Interface';
import Modal from '../Modal';

import { fetchFoodDetailsData } from '../../services/services';
import Cards from '../Cards';
import CardSkeleton from '../CardSkeleton';
import { CreateContext } from '../../App';

const HeroSection: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [foodDetails, setFoodDetails] = useState<IFoodDetails[]>([]);
  const {foodData, isLoading} = useContext<IContextProps>(CreateContext);

  // Fetching Food Details Info
  const fetchFoodDetails = async (id: string) => {
    try {
      const resp = await fetchFoodDetailsData(id);
      if (resp.status === 200) {
        setFoodDetails(resp.data.meals);
        setOpen(true);
      }
    } catch (error) {
      console.error(error);
    } 
  };

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
            <div key={index} onClick={() => fetchFoodDetails(item.idMeal)} className='hover:scale-90 duration-300'>
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
      {
      /* Food Details Modal */}
      <div className="relative">
        {open ? (
          <Modal foodDetails={foodDetails} setOpen={setOpen}/>
        ) : null}
      </div>

    </>
  );
};

export default HeroSection;
