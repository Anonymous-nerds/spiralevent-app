import React, { useState } from 'react';
import { Star, Search, ThumbsUp, Filter, MessageSquare, ChevronDown } from 'lucide-react';

const EventReviewsPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('most-recent');
  const [selectedRating, setSelectedRating] = useState('all');

  // Sample review data
  const reviewStats = {
    average: 4.7,
    total: 256,
    distribution: [
      { stars: 5, count: 180 },
      { stars: 4, count: 45 },
      { stars: 3, count: 20 },
      { stars: 2, count: 8 },
      { stars: 1, count: 3 },
    ]
  };

  const reviews = [
    {
      id: 1,
      author: "Sarah Johnson",
      rating: 5,
      verified: true,
      comment: "The event exceeded all expectations! The speakers were incredibly knowledgeable and the networking opportunities were invaluable. Would definitely attend again!",
      date: "2 days ago",
      helpful: 12,
      avatar: "/api/placeholder/40/40",
      images: ["/api/placeholder/150/100", "/api/placeholder/150/100"]
    },
    {
      id: 2,
      author: "Michael Chen",
      rating: 4,
      verified: true,
      comment: "Great organization and content. The workshops were particularly engaging. Would have loved more Q&A time with the speakers.",
      date: "1 week ago",
      helpful: 8,
      avatar: "/api/placeholder/40/40"
    },
    // Add more reviews as needed
  ];

  const filterOptions = [
    { value: 'most-recent', label: 'Most Recent' },
    { value: 'highest-rated', label: 'Highest Rated' },
    { value: 'lowest-rated', label: 'Lowest Rated' },
    { value: 'most-helpful', label: 'Most Helpful' }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating
            ? 'text-yellow-400 fill-yellow-400'
            : 'text-gray-300'
          }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Rating Summary */}
            <div className="flex items-start space-x-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">{reviewStats.average}</div>
                <div className="flex space-x-1 justify-center mb-1">
                  {renderStars(reviewStats.average)}
                </div>
                <p className="text-sm text-gray-500">
                  {reviewStats.total} reviews
                </p>
              </div>
              {/* Rating Distribution */}
              <div className="flex-1 space-y-2">
                {reviewStats.distribution.reverse().map((item) => (
                  <button
                    key={item.stars}
                    onClick={() => setSelectedRating(item.stars)}
                    className="w-full flex items-center space-x-2 hover:bg-gray-50 p-1 rounded transition-colors"
                  >
                    <div className="flex space-x-1 w-24">
                      {renderStars(item.stars)}
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${(item.count / reviewStats.total) * 100}%` }}
                        />
                      </div>
                    </div>
                    <div className="w-12 text-sm text-gray-500 text-right">
                      {item.count}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Search and Filter */}
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search reviews..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="relative">
                <button
                  onClick={() => setFilterOpen(!filterOpen)}
                  className="w-full flex items-center justify-between px-4 py-2 border rounded-lg bg-white hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-2">
                    <Filter className="w-5 h-5 text-gray-400" />
                    <span>
                      {filterOptions.find(option => option.value === selectedFilter)?.label}
                    </span>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </button>

                {filterOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg z-10">
                    {filterOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSelectedFilter(option.value);
                          setFilterOpen(false);
                        }}
                        className="w-full px-4 py-2 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-start space-x-4">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">{review.author}</span>
                    {review.verified && (
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                        Verified Attendee
                      </span>
                    )}
                  </div>

                  <div className="flex items-center space-x-2 mt-1 mb-3">
                    <div className="flex space-x-1">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-sm text-gray-500">
                      {review.date}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-4">{review.comment}</p>

                  {review.images && (
                    <div className="flex space-x-2 mb-4">
                      {review.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Review ${index + 1}`}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  )}

                  <div className="flex items-center space-x-4 text-sm">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600">
                      <ThumbsUp className="w-4 h-4" />
                      <span>Helpful ({review.helpful})</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600">
                      <MessageSquare className="w-4 h-4" />
                      <span>Reply</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
            Load More Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventReviewsPage;