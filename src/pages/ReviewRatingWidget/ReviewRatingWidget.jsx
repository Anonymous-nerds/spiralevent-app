import React, { useState } from 'react';
import { Star, ThumbsUp, MessageSquare, BarChart3 } from 'lucide-react';

const ReviewRatingWidget = () => {
  const [activeRating, setActiveRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  // Sample data - in real app, this would come from props or API
  const reviewStats = {
    average: 4.7,
    total: 256,
    distribution: [
      { stars: 5, count: 180 },
      { stars: 4, count: 45 },
      { stars: 3, count: 20 },
      { stars: 2, count: 8 },
      { stars: 1, count: 3 },
    ],
    recentReviews: [
      {
        id: 1,
        author: "Sarah Johnson",
        rating: 5,
        comment: "Amazing event! The speakers were incredibly knowledgeable and the networking opportunities were invaluable.",
        date: "2 days ago",
        helpful: 12,
        avatar: "/api/placeholder/32/32"
      },
      {
        id: 2,
        author: "Michael Chen",
        rating: 4,
        comment: "Great organization and content. Would have loved more Q&A time.",
        date: "1 week ago",
        helpful: 8,
        avatar: "/api/placeholder/32/32"
      }
    ]
  };

  const renderStars = (rating, size = 5) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-${size} h-${size} ${index < rating
          ? 'text-yellow-400 fill-yellow-400'
          : 'text-gray-300'
          }`}
      />
    ));
  };

  const calculatePercentage = (count) => {
    return (count / reviewStats.total) * 100;
  };

  return (
    <div className="max-w-4xl mx-auto bg-neutral-100 rounded-xl shadow-sm p-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Event Reviews</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Write a Review
        </button>
      </div>

      {/* Rating Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Average Rating */}
        <div className="flex items-center space-x-4">
          <div className="text-5xl font-bold text-gray-900">
            {reviewStats.average}
          </div>
          <div>
            <div className="flex space-x-1 mb-1">
              {renderStars(reviewStats.average)}
            </div>
            <p className="text-gray-500">
              Based on {reviewStats.total} reviews
            </p>
          </div>
        </div>

        {/* Rating Distribution */}
        <div className="space-y-2">
          {reviewStats.distribution.reverse().map((item) => (
            <div key={item.stars} className="flex items-center space-x-2">
              <div className="flex space-x-1 w-24">
                {renderStars(item.stars, 4)}
              </div>
              <div className="flex-1">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-pink-600 rounded-full"
                    style={{ width: `${calculatePercentage(item.count)}%` }}
                  />
                </div>
              </div>
              <div className="w-16 text-sm text-gray-500">
                {item.count}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Form */}
      <div className="border rounded-lg p-4 mb-8">
        <h3 className="font-semibold mb-4">Rate this event</h3>
        <div className="flex space-x-2 mb-4">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              onMouseEnter={() => setHoverRating(rating)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => setActiveRating(rating)}
              className="focus:outline-none"
            >
              <Star
                className={`w-8 h-8 transition-colors ${rating <= (hoverRating || activeRating)
                  ? 'text-yellow-400 fill-yellow-400'
                  : 'text-gray-300'
                  }`}
              />
            </button>
          ))}
        </div>
        <textarea
          placeholder="Share your experience..."
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          rows="3"
        />
        <div className="mt-3 flex justify-end">
          <button className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
            Submit Review
          </button>
        </div>
      </div>

      {/* Recent Reviews */}
      <div>
        <h3 className="font-semibold mb-4">Recent Reviews</h3>
        <div className="space-y-6">
          {reviewStats.recentReviews.map((review) => (
            <div key={review.id} className="border-b pb-6">
              <div className="flex items-center space-x-4 mb-3">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="font-medium">{review.author}</div>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {renderStars(review.rating, 4)}
                    </div>
                    <span className="text-sm text-gray-500">
                      {review.date}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-3">{review.comment}</p>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewRatingWidget;