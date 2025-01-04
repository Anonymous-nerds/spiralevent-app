import React from 'react';
import { Check, X, Zap } from 'lucide-react';
import Nav from '../../components/ui/MainNav';

const SubscriptionPlans = () => {
  const plans = [
    {
      name: "Basic",
      price: 29,
      period: "month",
      description: "Perfect for startups and small businesses",
      features: [
        { name: "Up to 5 team members", included: true },
        { name: "Basic analytics", included: true },
        { name: "24/7 support", included: true },
        { name: "Custom domain", included: false },
        { name: "Advanced security", included: false },
        { name: "API access", included: false },
      ],
      highlighted: false,
    },
    {
      name: "Pro",
      price: 79,
      period: "month",
      description: "Ideal for growing companies",
      features: [
        { name: "Up to 20 team members", included: true },
        { name: "Advanced analytics", included: true },
        { name: "24/7 priority support", included: true },
        { name: "Custom domain", included: true },
        { name: "Advanced security", included: true },
        { name: "API access", included: false },
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: 199,
      period: "month",
      description: "For large organizations",
      features: [
        { name: "Unlimited team members", included: true },
        { name: "Enterprise analytics", included: true },
        { name: "24/7 dedicated support", included: true },
        { name: "Custom domain", included: true },
        { name: "Advanced security", included: true },
        { name: "API access", included: true },
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Nav />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Subscription Toggle - Can be implemented for monthly/yearly */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg inline-flex">
            <button className="px-6 py-2 rounded-md bg-white shadow-sm text-gray-900 font-medium">
              Monthly
            </button>
            <button className="px-6 py-2 rounded-md text-gray-600 font-medium">
              Yearly
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl ${plan.highlighted
                ? 'border-2 border-pink-500 shadow-lg scale-105'
                : 'border border-gray-200'
                } bg-white p-8 transition-all duration-200 hover:shadow-lg`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-6 transform -translate-y-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-pink-500 text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-500 mb-6">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="ml-2 text-gray-500">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature.name}
                    className="flex items-center text-gray-600"
                  >
                    {feature.included ? (
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                    )}
                    <span className={!feature.included ? 'text-gray-400' : ''}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200 ${plan.highlighted
                  ? 'bg-pink-500 text-white hover:bg-pink-600'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
              >
                {plan.highlighted ? (
                  <div className="flex items-center justify-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Get Started
                  </div>
                ) : (
                  'Select Plan'
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-8 items-center text-gray-400">
            <span className="flex items-center">
              <Check className="w-5 h-5 mr-2" />
              14-day free trial
            </span>
            <span className="flex items-center">
              <Check className="w-5 h-5 mr-2" />
              No credit card required
            </span>
            <span className="flex items-center">
              <Check className="w-5 h-5 mr-2" />
              Cancel anytime
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;