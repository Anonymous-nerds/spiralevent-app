import React, { useState } from 'react';

const BannerForm = ({ onSubmit, isLoading }) => {
  //********************** state variables **********************//
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('modern');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(prompt, style);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">Banner Text</label>
        <input type="text" id="prompt" value={prompt} onChange={(e) => setPrompt(e.target.value)}
          className="mt-1 p-3 block w-full rounded-md border border-gray-600 shadow-sm focus:border-pink-500 focus:ring-pink-500"
          placeholder="Enter your banner text" required />
      </div>
      <div>
        <label htmlFor="style" className="block text-sm font-medium text-gray-700">Banner Style</label>
        <select id="style" value={style} onChange={(e) => setStyle(e.target.value)}
          className="mt-1 p-3 block w-full rounded-md border border-gray-600 shadow-sm focus:border-pink-500 focus:ring-pink-500">
          <option value="modern">Modern</option>
          <option value="retro">Retro</option>
          <option value="minimalist">Minimalist</option>
          <option value="colorful">Colorful</option>
        </select>
      </div>
      <button type="submit" disabled={isLoading}
        className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 disabled:opacity-50">
        {isLoading ? 'Generating...' : 'Generate Banner'}
      </button>
    </form>
  );
};

export default BannerForm;

