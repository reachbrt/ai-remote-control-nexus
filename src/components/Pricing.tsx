
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Check, Zap, Crown, Building } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 3 remote connections',
        'Basic AI automation',
        'Voice commands',
        'Mobile access',
        'Email support',
        '1GB session recording'
      ],
      buttonText: 'Start Free Trial',
      buttonVariant: 'outline' as const,
      popular: false
    },
    {
      name: 'Professional',
      icon: Crown,
      price: '$29',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Unlimited remote connections',
        'Advanced AI automation',
        'Multi-monitor support',
        'Team collaboration',
        'Priority support',
        '10GB session recording',
        'Analytics dashboard',
        'Custom branding'
      ],
      buttonText: 'Get Started',
      buttonVariant: 'default' as const,
      popular: true
    },
    {
      name: 'Enterprise',
      icon: Building,
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Everything in Professional',
        'Custom AI training',
        'On-premise deployment',
        'Advanced security features',
        'Dedicated support manager',
        'Unlimited session recording',
        '99.9% SLA guarantee',
        'Custom integrations'
      ],
      buttonText: 'Contact Sales',
      buttonVariant: 'outline' as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Simple Pricing
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose the perfect plan
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              for your needs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start with our free trial and scale as you grow. All plans include our core AI features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? 'border-blue-500 shadow-lg scale-105' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600' 
                    : 'bg-gray-100'
                }`}>
                  <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-gray-600'}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-end justify-center">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.buttonVariant} 
                  className={`w-full py-3 text-lg ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : ''
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
          <p className="text-gray-600 mb-8">
            Have questions? We're here to help. Check out our FAQ or contact our support team.
          </p>
          <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
            View All FAQs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
