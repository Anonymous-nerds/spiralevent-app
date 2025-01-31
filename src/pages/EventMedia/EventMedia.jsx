import { useState, useRef, useEffect } from 'react';
import { Upload, X, Image as ImageIcon, Film, Plus } from 'lucide-react';
import api from '../../../utils/api';
import Navigation from "../../components/ui/Navigation";
import { useParams } from "react-router-dom";
import LoginIn from '../../auth/isLoginIn';
import toast from 'react-hot-toast';
import Loader from '../../components/loader';

const EventMediaGallery = () => {
  //********************** state variables **********************//
  const [mediaItems, setMediaItems] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [newMediaTitle, setNewMediaTitle] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);
  const { id } = useParams();

  //********************** Fetch media items from API **********************//
  const fetchMediaItems = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`/media/event/${id}`);
      setMediaItems(response.data.data || []);
      setError(null);
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to fetch media items';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally { setIsLoading(false); }
  };

  useEffect(() => { fetchMediaItems(); }, [id]);

  //********************** handle drag over **********************//
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  //********************** handle drag leave **********************//
  const handleDragLeave = (e) => { e.preventDefault(); setIsDragging(false); };

  //********************** handle file select **********************//
  const handleFileSelect = (e) => {
    const files = e.target.files;
    if (files.length > 0) { handleFileUpload(files[0]); }
  };

  //********************** handle drop **********************//
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) { handleFileUpload(files[0]); }
  };

  // console.log(mediaItems)

  //********************** handle file upload **********************//
  const handleFileUpload = async (file) => {
    if (file) {
      const isImage = file.type.startsWith('image/');
      const isVideo = file.type.startsWith('video/');
      const isValidSize = file.size <= 20 * 1024 * 1024; // 20MB

      if ((isImage || isVideo) && isValidSize) {
        try {
          setIsUploading(true);
          const formData = new FormData();
          formData.append('eventID', id);
          formData.append('mediaUrl', file);
          formData.append('caption', newMediaTitle || file.name);

          const response = await api.post('/media/add', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            timeout: 30000, // 30 second timeout
            onUploadProgress: (progressEvent) => {
              const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
              console.log(`Upload Progress: ${percentCompleted}%`);
            }
          });

          if (response.data.status == 200) {
            toast.success('Media uploaded successfully');
            await fetchMediaItems();
            setShowUploadForm(false);
            setNewMediaTitle('');
          } else {
            throw new Error(response.data.message || 'Upload failed');
          }
        } catch (err) {
          const errorMessage = err?.data?.message || err.message || 'Failed to upload media';
          toast.success(errorMessage);
          console.error('Error uploading media:', err);
        } finally {
          setIsUploading(false);
        }
      } else { toast.error('Please upload a valid image or video file (max 20MB)'); }
    }
  };

  //********************** handle media removal **********************//
  const removeMedia = async (id) => {
    try {
      const response = await api.delete(`/media/delete/${id}`);
      if (response.data.success) {
        toast.success('Media deleted successfully');
        await fetchMediaItems();
      } else {
        throw new Error(response.data.message || 'Deletion failed');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Failed to delete media';
      toast.error(errorMessage);
      console.error('Error deleting media:', err);
    }
  };

  //********************** handle Browser Click **********************//
  const handleBrowseClick = () => { fileInputRef.current?.click(); };

  //********************** loading states **********************//
  if (isLoading) { return <Loader loading={isLoading} />; }

  return (
    <div className="flex min-h-screen bg-neutral-100">
      <LoginIn />
      <Navigation />
      <div className="max-w-6xl mx-auto flex-1 md:ml-64 px-10 py-32">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-pink-900 mb-2">Event Media Gallery</h1>
          <p className="text-gray-600">Upload and manage your event photos and videos</p>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        {/* Upload Area */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`
            w-full p-8 mb-8 rounded-lg border-2 border-dashed 
            transition-colors duration-200 ease-in-out
            ${isDragging ? 'border-pink-500 bg-pink-50' : 'border-gray-300 bg-white'}
            ${isUploading ? 'opacity-50 pointer-events-none' : ''}
            cursor-pointer hover:border-pink-500 hover:bg-pink-50
          `}
        >
          <div className="flex flex-col items-center justify-center">
            <Upload className="w-12 h-12 text-pink-500 mb-4" />
            <p className="text-gray-600 text-center mb-2">
              {isUploading ? 'Uploading...' : (
                <>
                  Drag and drop your media files here, or
                  <button
                    onClick={handleBrowseClick}
                    className="text-pink-500 font-medium ml-1 hover:underline"
                  >
                    browse
                  </button>
                </>
              )}
            </p>
            <p className="text-sm text-gray-500">Supports: JPG, PNG, MP4 (max 20MB)</p>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              accept="image/*,video/*"
              className="hidden"
              disabled={isUploading}
            />
          </div>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Add New Button */}
          <button
            onClick={() => setShowUploadForm(true)}
            className="relative h-64 bg-white rounded-lg border-2 border-dashed border-gray-300 hover:border-pink-500 transition-colors duration-200 flex flex-col items-center justify-center group"
            disabled={isUploading}
          >
            <Plus className="w-8 h-8 text-gray-400 group-hover:text-pink-500 mb-2" />
            <span className="text-gray-500 group-hover:text-pink-500">Add Media</span>
          </button>

          {/* Media Items */}
          {mediaItems.map((item) => (
            <div key={item.id} className="relative group">
              <div className="relative h-64 bg-white rounded-lg shadow-sm overflow-hidden">
                <img src={item.mediaUrl} alt={item.caption} className="w-full h-full object-cover" />
                {item.type === 'video' && (
                  <div className="absolute top-2 right-2 bg-black bg-opacity-50 p-1 rounded-full">
                    <Film className="w-5 h-5 text-white" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-200">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button
                      className="p-2 bg-white rounded-full text-gray-700 hover:text-pink-500 mx-1"
                      onClick={() => window.open(item.mediaUrl, '_blank')}
                    >
                      <ImageIcon className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => removeMedia(item.id)}
                      className="p-2 bg-white rounded-full text-gray-700 hover:text-pink-500 mx-1"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600 truncate">{item.caption}</p>
            </div>
          ))}
        </div>

        {/* Upload Form Modal */}
        {showUploadForm && !isUploading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h3 className="text-xl font-semibold mb-4">Add New Media</h3>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Caption</label>
                <input
                  type="text"
                  value={newMediaTitle}
                  onChange={(e) => setNewMediaTitle(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Enter media title"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">File</label>
                <input
                  type="file"
                  onChange={handleFileSelect}
                  accept="image/*,video/*"
                  className="w-full"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowUploadForm(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventMediaGallery;