import React, { useState } from 'react';
import { CreditCard, CheckCircle, AlertCircle, Lock } from 'lucide-react';
import Nav from '../../components/ui/MainNav';

const PaymentForm = () => {
  const [processing, setProcessing] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvc: '',
    email: ''
  });

  // Selected plan details (would come from props in real app)
  const selectedPlan = {
    name: 'Pro Plan',
    price: 79,
    period: 'month',
    features: ['Up to 20 team members', 'Advanced analytics', 'Priority support']
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Format card number with spaces
    if (name === 'cardNumber') {
      formattedValue = value.replace(/\s/g, '')
        .match(/.{1,4}/g)?.join(' ').substr(0, 19) || '';
    }

    // Format expiry date
    if (name === 'expiry') {
      formattedValue = value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .substr(0, 5);
    }

    // Format CVC
    if (name === 'cvc') {
      formattedValue = value.replace(/\D/g, '').substr(0, 3);
    }

    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    // Simulate payment processing
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus('success');
    } catch (error) {
      setStatus('error');
    } finally {
      setProcessing(false);
    }
  };

  if (status === 'success') {
    return (
      <div className="max-w-md mx-auto p-8  rounded-xl shadow-sm">

        <div className="text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for subscribing to the {selectedPlan.name}. You`ll receive a confirmation email shortly.
          </p>
          <button className="w-full px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-sm">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Failed</h2>
          <p className="text-gray-600 mb-6">
            We couldn`t process your payment. Please try again or contact support.
          </p>
          <button
            onClick={() => setStatus(null)}
            className="w-full px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl  mx-auto p-8">
      <Nav />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Payment Form */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Details</h2>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                  <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="MM/YY"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CVC
                  </label>
                  <input
                    type="text"
                    name="cvc"
                    value={formData.cvc}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="123"
                    required
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={processing}
              className={`w-full mt-6 px-6 py-3 rounded-lg text-white font-medium transition-colors
                ${processing
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-pink-600 hover:bg-pink-700'
                }`}
            >
              {processing ? 'Processing...' : `Pay $${selectedPlan.price}`}
            </button>
          </form>

          <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
            <Lock className="w-4 h-4 mr-2" />
            Secure payment powered by Stripe
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Order Summary
          </h3>

          <div className="bg-white rounded-lg p-4 mb-4">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-semibold text-gray-900">{selectedPlan.name}</h4>
                <p className="text-sm text-gray-500">Billed monthly</p>
              </div>
              <div className="text-xl font-bold text-gray-900">
                ${selectedPlan.price}
              </div>
            </div>

            <div className="space-y-2">
              {selectedPlan.features.map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">${selectedPlan.price}</span>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${selectedPlan.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;