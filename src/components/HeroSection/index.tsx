import React, { useState } from 'react';
import { IAllFood, IFoodDetails } from '../../Interface/Interface';
import Modal from '../Modal';

import { fetchFoodDetailsData } from '../../services/services';
import Cards from '../Cards';
import Pagination from '../Pagination';

interface IProps {
  foodData: IAllFood[];
}

const HeroSection: React.FC<IProps> = ({ foodData }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [foodDetails, setFoodDetails] = useState<IFoodDetails[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isOpen, setIsOpen] = useState(false);
  const itemsPerPage: number = 8;

  // Fetching Food Details Info
  const fetchFoodDetails = async (id: string) => {
    try {
      const resp = await fetchFoodDetailsData(id);
      if (resp.status === 200) {
        console.log(resp);
        setFoodDetails(resp.data.meals);
        setOpen(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = foodData.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//   };

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

  return (
    <>
      {/* Food Cards */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-4 mt-8 cursor-pointer">
        {currentItems.map((item, index) => {
          return (
            <div key={index} onClick={() => fetchFoodDetails(item.idMeal)}>
              <Cards currentItems={item}/>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <Pagination isOpen={isOpen} foodData={foodData} itemsPerPage={itemsPerPage} setIsOpen={setIsOpen} setCurrentPage={setCurrentPage}/>
      {/* Food Details Modal */}
      <div className="relative">
        {open ? (
          <Modal foodDetails={foodDetails} setOpen={setOpen}/>
        ) : null}
      </div>
    </>
  );
};

export default HeroSection;
