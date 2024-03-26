import React, { ReactNode, useContext } from "react";
import { GrClose } from 'react-icons/gr';
import { IContextProps } from "../../Interface/Interface";
import { CreateContext } from "../../App";

interface IProps{
    children?: ReactNode;
}

const Modal:React.FC<IProps> = ({children}) => {
  const {setOpenModal} = useContext<IContextProps>(CreateContext);
    return (
        <div className="relative z-50">
            <div className="fixed inset-0 bg-blue/50" aria-hidden="true"/>

            <div className="fixed inset-0 flex items-center justify-center p-4">
                <div className="flex min-h-full items-center justify-center">
                <div className="flex flex-col gap-2 bg-white rounded-lg">
              <div className="py-10 px-10">
                <div className="mb-5 flex justify-end cursor-pointer">
                  <div onClick={()=>setOpenModal && setOpenModal(false)}><GrClose /></div>
                </div>
                <div>
                 {children}
                </div>
              </div>
            </div>
                </div>
            </div>
        </div>
    );
}

export default Modal