
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Check, Zap, Crown, Building, Download } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Professional',
      icon: Zap,
      price: 'Free',
      period: 'Open Source',
      description: 'Full-featured professional remote desktop',
      features: [
        'AI-powered natural language commands',
        'Global connectivity network',
        'Cross-platform support (Win/Mac/Linux)',
        'Enterprise-grade security',
        'System tray integration',
        'Auto-update system',
        'Activity logging',
        'Mobile app control'
      ],
      buttonText: 'Download Windows',
      buttonVariant: 'default' as const,
      popular: true,
      downloads: [
        { platform: 'Windows', file: 'RemoteTask-AI-Setup-2.0.0.exe' },
        { platform: 'macOS', file: 'RemoteTask-AI-2.0.0.dmg' },
        { platform: 'Linux', file: 'RemoteTask-AI-2.0.0.AppImage' }
      ]
    },
    {
      name: 'Enterprise',
      icon: Building,
      price: 'Custom',
      period: 'Volume Licensing',
      description: 'For large organizations and deployments',
      features: [
        'Everything in Professional',
        'Custom branding and configuration',
        'Silent installation (MSI/PKG)',
        'Centralized management console',
        'Advanced audit and compliance',
        'Priority enterprise support',
        'Custom integrations',
        'On-premise deployment options'
      ],
      buttonText: 'Contact Sales',
      buttonVariant: 'outline' as const,
      popular: false
    },
    {
      name: 'Developer',
      icon: Crown,
      price: 'Open Source',
      period: 'MIT License',
      description: 'Build and customize your own solution',
      features: [
        'Full source code access',
        'MIT license for commercial use',
        'Build and deployment scripts',
        'Development documentation',
        'Community support',
        'Contribution guidelines',
        'API documentation',
        'Custom feature development'
      ],
      buttonText: 'View on GitHub',
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
            <Download className="w-4 h-4 mr-2" />
            Download & Licensing
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose your deployment
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              option
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            RemoteTask AI Desktop Professional is available as a free download with enterprise options for organizations.
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
                    Recommended
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

                {plan.downloads ? (
                  <div className="space-y-3">
                    {plan.downloads.map((download, downloadIndex) => (
                      <Button 
                        key={downloadIndex}
                        variant="outline" 
                        className="w-full py-3 text-sm justify-start"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        {download.platform} - {download.file}
                      </Button>
                    ))}
                  </div>
                ) : (
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
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Installation Instructions */}
        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Quick Installation Guide</h3>
            <p className="text-lg text-gray-600">Get started with RemoteTask AI Desktop Professional in minutes</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Download</h4>
              <p className="text-gray-600">Download the installer for your operating system from the options above.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Install</h4>
              <p className="text-gray-600">Run the installer and follow the setup wizard. No complex configuration needed.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Connect</h4>
              <p className="text-gray-600">Launch the app, get your connection credentials, and start controlling remotely.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
