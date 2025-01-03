import React, { useState } from 'react';
import { Star } from 'lucide-react';
import Nav from '../../components/ui/MainNav';

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ rating, review });
  };

  return (
    <div className="min-h-screen bg-neutral-100 p-4 md:p-8">
      <Nav />
      <div className="max-w-xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold mb-6">Event Feedback</h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Your Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    onClick={() => setRating(star)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`w-8 h-8 ${star <= (hoveredRating || rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                        }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Your Review</label>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Share your experience..."
                rows="4"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-pink-300"
                required
              />
            </div>

            <div className="space-y-2">
              <button
                type="submit"
                className="w-full bg-pink-300 hover:bg-pink-400 text-black py-3 rounded-lg"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;