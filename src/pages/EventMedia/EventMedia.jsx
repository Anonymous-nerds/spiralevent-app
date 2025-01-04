import React, { useState } from 'react';
import { Upload, X, Image as ImageIcon, Film, Plus } from 'lucide-react';
import Image from "../../assets/dev-fest.jpg"
import Nav from '../../components/ui/MainNav';

const EventMediaGallery = () => {
  const [mediaItems, setMediaItems] = useState([
    { id: 1, type: 'image', url: Image, title: 'Opening Ceremony' },
    { id: 2, type: 'video', url: Image, title: 'Keynote Speech' },
    { id: 3, type: 'image', url: Image, title: 'Workshop Session' },
    { id: 4, type: 'image', url: Image, title: 'Networking Event' },
  ]);

  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file drop logic here
  };

  const removeMedia = (id) => {
    setMediaItems(mediaItems.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-neutral-100 p-6">
      <Nav />
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Event Media Gallery</h1>
          <p className="text-gray-600">Upload and manage your event photos and videos</p>
        </div>

        {/* Upload Area */}
        <div onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}
          className={`
            w-full p-8 mb-8 rounded-lg border-2 border-dashed 
            transition-colors duration-200 ease-in-out
            ${isDragging ? 'border-pink-500 bg-pink-50' : 'border-gray-300 bg-white'}
            cursor-pointer hover:border-pink-500 hover:bg-pink-50
          `}
        >
          <div className="flex flex-col items-center justify-center">
            <Upload className="w-12 h-12 text-pink-500 mb-4" />
            <p className="text-gray-600 text-center mb-2">
              Drag and drop your media files here, or
              <span className="text-pink-500 font-medium ml-1">browse</span>
            </p>
            <p className="text-sm text-gray-500">Supports: JPG, PNG, MP4 (max 20MB)</p>
          </div>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Add New Button */}
          <button className="relative h-64 bg-white rounded-lg border-2 border-dashed border-gray-300 hover:border-pink-500 transition-colors duration-200 flex flex-col items-center justify-center group">
            <Plus className="w-8 h-8 text-gray-400 group-hover:text-pink-500 mb-2" />
            <span className="text-gray-500 group-hover:text-pink-500">Add Media</span>
          </button>

          {/* Media Items */}
          {mediaItems.map((item) => (
            <div key={item.id} className="relative group">
              <div className="relative h-64 bg-white rounded-lg shadow-sm overflow-hidden">
                <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
                {item.type === 'video' && (
                  <div className="absolute top-2 right-2 bg-black bg-opacity-50 p-1 rounded-full">
                    <Film className="w-5 h-5 text-white" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-200">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button className="p-2 bg-white rounded-full text-gray-700 hover:text-pink-500 mx-1">
                      <ImageIcon className="w-5 h-5" />
                    </button>
                    <button onClick={() => removeMedia(item.id)}
                      className="p-2 bg-white rounded-full text-gray-700 hover:text-pink-500 mx-1">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600 truncate">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventMediaGallery;