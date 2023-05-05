import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

const Modal = ({ onClose, data, title }) => {
  return (
    <div className="fixed top-0 left-0  md:left-[10%] md:top-[30%] md:right-0 w-full h-auto md:w-auto md:h-[50%] flex justify-center items-center z-50   ">   
     <div className="bg-white rounded-lg shadow-lg w-full md:max-w-2xl overflow-y-auto  md:ml-10 md:mr-28 md:mb-20">
     <div className="max-h-screen overflow-y-auto mb-4 relative p-8 md:pt-12 md:pb-[10%]  md:max-h-[80vh] max-w-full ">

        <button onClick={onClose} className="absolute  top-2 right-2 md:top-2 md:right-10">
          <AiFillCloseCircle className="fixed top-auto right-3 md:right-auto    w-6 h-6 md:w-8 md:h-8" />
        </button>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div>
            {data.map((detail, index) => (
              <div key={index}>
                <h2 className="font-semibold">{detail.heading}</h2>
                <p className="text-justify pb-4">{detail.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
