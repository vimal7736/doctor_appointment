import React from 'react';

const App = () => {
  const Watermark = () => {
    return `
      <div class="absolute inset-0 flex justify-center items-center">
        <p class="text-6xl font-bold text-gray-700 opacity-20 transform rotate-45 select-none">
          Under Development
        </p>
      </div>
    `;
  };

  return (
    <div className="">
      
      <div dangerouslySetInnerHTML={{ __html: Watermark() }} />
    </div>
  );
};

export default App;
