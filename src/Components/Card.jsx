import React from 'react';

const Card = ({ card }) => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto bg-blue-400 dark:bg-white dark:text-black flex flex-col items-center justify-center text-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out p-4">
      <span className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold mb-2">
        {card.name}
      </span>
      <span className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
        {card.data}
      </span>
    </div>
  );
};

export default Card;
