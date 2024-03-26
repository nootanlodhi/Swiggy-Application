import React, { useRef } from 'react';
import { data } from '../../data/foodSchema';
import { IoArrowForward } from "react-icons/io5";
import { IoArrowBackSharp } from "react-icons/io5";
import { restaurent } from '../../data/restaurentSchema';

const FoodCategory: React.FC = () => {
  const scrollContainerRefOne = useRef<HTMLDivElement>(null);
  const scrollContainerRefTwo = useRef<HTMLDivElement>(null);
  
  const handleScrollOne = (scrollOffset: number) => {
    console.log(scrollContainerRefOne.current)
    if (scrollContainerRefOne.current) {
      const { scrollLeft } = scrollContainerRefOne.current;
      scrollContainerRefOne.current.scrollTo({
        left: scrollLeft + scrollOffset,
        behavior: 'smooth', // Smooth scrolling behavior
      });
    }
  };

  const handleScrollTwo = (scrollOffset: number) => {
    console.log(scrollContainerRefTwo.current)
    if (scrollContainerRefTwo.current) {
      const { scrollLeft } = scrollContainerRefTwo.current;
      scrollContainerRefTwo.current.scrollTo({
        left: scrollLeft + scrollOffset,
        behavior: 'smooth', // Smooth scrolling behavior
      });
    }
  };

  return (
    <div className='mt-5 relative'>
      <div className='flex justify-between items-center'>
        <h2 className="xs:text-[1rem] sm:text-1xl md:text-1xl lg:text-2xl xl:text-3xl xxl:text-3xl dark:text-white font-bold">What's on your mind?</h2>
        <div className='m-0 p-0'>
          <button className='bg-gray m-2 p-2 rounded-full' onClick={() => handleScrollOne(-500)}><IoArrowBackSharp/></button>
          <button className='bg-gray p-2 rounded-full' onClick={() => handleScrollOne(500)}><IoArrowForward/></button>
        </div>
      </div>
      <div className='flex gap-4 w-full overflow-x-scroll no-scrollbar mt-5' ref={scrollContainerRefOne} style={{ scrollBehavior: 'smooth' }}>
        {data.map((item, index) => (
          <img key={index} className='img-size' src={item.url} alt={`Food ${index}`} />
        ))}
      </div>
      <div className='w-full h-0.5 bg-gray my-10'></div>
      <div className='flex justify-between items-center'>
        <h2 className="xs:text-[1rem] sm:text-1xl md:text-1xl lg:text-2xl xl:text-3xl xxl:text-3xl dark:text-white font-bold">Top restaurant chains in Pune</h2>
        <div className='m-0 p-0 xs:w-1/2 sm:w-auto text-right'>
          <button className='bg-gray m-2 p-2 rounded-full' onClick={() => handleScrollTwo(-500)}><IoArrowBackSharp/></button>
          <button className='bg-gray p-2 rounded-full' onClick={() => handleScrollTwo(500)}><IoArrowForward/></button>
        </div>
      </div>
      <div className='flex gap-10 w-full overflow-x-scroll no-scrollbar mt-5' ref={scrollContainerRefTwo} style={{ scrollBehavior: 'smooth' }}>
        {restaurent.map((item, index) => (
          <div key={index} className='hover:scale-90 duration-300 cursor-pointer'>
            <div className="rounded-md w-64 h-48">
              <img className="w-full h-full object-cover rounded-2xl" src={item.url} alt={item.restaurentName} />
            </div>
            <div className="px-1 py-2">
              <h2 className="text-xl font-bold text-[#4e4e4e]">{item.restaurentName}</h2>
              <span className="flex items-center gap-2 m-0">
                <svg className="w-4 h-4 ms-1 text-green" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <p className='font-bold text-[#4e4e4e]'>{item.rating} . {item.time}</p>
              </span>
              <p className='text-[#4e4e4e]'>{item.food}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full h-0.5 bg-gray my-10'></div>
    </div>
  );
};

export default FoodCategory;
