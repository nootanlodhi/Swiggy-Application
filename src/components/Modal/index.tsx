import React from "react";
import { IFoodDetails } from "../../Interface/Interface";
import { GrClose } from 'react-icons/gr';

interface IProps{
    foodDetails:IFoodDetails[];
    setOpen: (open:boolean)=>void
}

const Modal:React.FC<IProps> = ({foodDetails, setOpen}) => {
    return (
        <div className="relative z-50">
            <div className="fixed inset-0 bg-blue/50" aria-hidden="true"/>

            <div className="fixed inset-0 flex items-center justify-center p-4">
                <div className="flex min-h-full items-center justify-center">
                <div className="flex flex-col gap-2 bg-white rounded-lg">
              <div className="py-10 px-10">
                <div className="mb-5 flex justify-end cursor-pointer" onClick={() => setOpen(false)}>
                  <GrClose />
                </div>
                {foodDetails &&
                  foodDetails.map((item: IFoodDetails, index: number) => {
                    return (
                      <div key={index}>
                        <img src={item.strMealThumb} />
                        <h1 className="text-xxl font-bold text-[#4e4e4e]">Area: {item.strArea}</h1>
                        <h1 className="text-xxl font-bold text-[#4e4e4e]">Category: {item.strCategory}</h1>
                        <h1 className="text-xxl font-bold text-[#4e4e4e]">
                          Material: {item.strIngredient1}, {item.strIngredient2}, {item.strIngredient3} etc
                        </h1>
                        <div>
                          <h1 className="text-xxl font-bold text-[#4e4e4e]">
                            {item.strInstructions.length > 50 ? item.strInstructions.substring(50, 0) + '...' : item.strInstructions}
                          </h1>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
                </div>
            </div>
        </div>
    );
}

export default Modal