import React, { useRef } from 'react';
import { data } from '../../data/foodSchema';
import { IoArrowForward } from "react-icons/io5";
import { IoArrowBackSharp } from "react-icons/io5";

const FoodCategory: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const handleScroll = (scrollOffset: number) => {
    console.log(scrollContainerRef.current)
    if (scrollContainerRef.current) {
      const { scrollLeft } = scrollContainerRef.current;
      scrollContainerRef.current.scrollTo({
        left: scrollLeft + scrollOffset,
        behavior: 'smooth', // Smooth scrolling behavior
      });
    }
  };

  return (
    <div className='mt-5 relative'>
      <div className='flex justify-between items-center'>
        <h2 className="sm:text-1xl md:text-1xl lg:text-2xl xl:text-3xl xxl:text-3xl dark:text-white font-bold">What's on your mind?</h2>
        <div className='m-0 p-0'>
          <button className='bg-gray m-2 p-2 rounded-full' onClick={() => handleScroll(-500)}><IoArrowBackSharp/></button>
          <button className='bg-gray p-2 rounded-full' onClick={() => handleScroll(500)}><IoArrowForward/></button>
        </div>
      </div>
      <div className='flex gap-4 w-full overflow-x-scroll no-scrollbar mt-5' ref={scrollContainerRef} style={{ scrollBehavior: 'smooth' }}>
        {data.map((item, index) => (
          <img key={index} className='img-size' src={item.url} alt={`Food ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default FoodCategory;
