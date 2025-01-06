import React, { useState } from 'react';
import BannerForm from '../../components/BannerForm';
import BannerDisplay from '../../components/BannerDisplay';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Nav from '../../components/ui/MainNav';
import toast from 'react-hot-toast';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const CreateBanner = () => {
  //********************** Variables from env file **********************//
  const [bannerImage, setBannerImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //********************** generate banner function **********************//
  const generateBanner = async (prompt, style) => {
    setIsLoading(true);
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
      const result = await model.generateContent([
        `Create a banner image with the text "${prompt}" in a ${style} style.`,
        { inlineData: { mimeType: "image/jpeg", data: "" } },
      ]);
      const imageUrl = result.response.text();
      setBannerImage(imageUrl);
    } catch (error) {
      console.error('Error generating banner:', error);
      toast.error("Failed to generate banner. Please try again.")
    } finally { setIsLoading(false); }
  };

  return (
    <div className="">
      <div className="min-h-screen bg-neutral-100 flex flex-col items-center justify-center p-4">
        <Nav />
        <h1 className="text-4xl font-bold text-pink-600 mb-8">Need a banner? Create one here!</h1>
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
          <BannerForm onSubmit={generateBanner} isLoading={isLoading} />
          {bannerImage && <BannerDisplay imageUrl={bannerImage} />}
        </div>
      </div>
    </div>

  );
};

export default CreateBanner;

