import React from 'react';

const BannerDisplay = ({ imageUrl }) => {
  //********************** handle download function **********************//
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'banner.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mt-8 space-y-4">
      <img src={imageUrl} alt="Generated Banner" className="w-full rounded-lg shadow-md" />
      <button onClick={handleDownload}
        className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">Download Banner</button>
    </div>
  );
};

export default BannerDisplay;

