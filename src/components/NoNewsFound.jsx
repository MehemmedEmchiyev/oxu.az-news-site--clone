import React from 'react';

const NoNewsFound = () => {
    
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 p-6 text-center bg-gray-50 border border-gray-200 rounded-2xl shadow-md">
      <img
        src="https://media.giphy.com/media/JT2A5pclbctP9Khzcs/giphy.gif"
        alt="Belə Xəbər Yoxdur"
        className="w-48 rounded-2xl"
      />
      <p className="text-xl font-semibold text-gray-700">Belə Xəbər Yoxdur</p>
    </div>
  );
};

export default NoNewsFound;
