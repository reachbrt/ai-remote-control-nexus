
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Brain, 
  Mic, 
  Monitor, 
  Shield, 
  Zap, 
  Globe, 
  Smartphone, 
  Lock,
  Users,
  BarChart3,
  FileText,
  Clock
} from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      icon: Brain,
      title: 'AI-Powered Automation',
      description: 'Let AI handle complex tasks automatically. Just describe what you need, and watch it happen.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mic,
      title: 'Voice Commands',
      description: 'Control remote computers naturally with voice. No more clicking through menus.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and security protocols. Your data stays protected, always.',
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  const secondaryFeatures = [
    {
      icon: Monitor,
      title: 'Multi-Monitor Support',
      description: 'Seamlessly work across multiple screens'
    },
    {
      icon: Smartphone,
      title: 'Mobile Access',
      description: 'Control desktops from any mobile device'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Share sessions and collaborate in real-time'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Track usage and performance metrics'
    },
    {
      icon: FileText,
      title: 'Session Recording',
      description: 'Record and replay remote sessions'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Access your computers anytime, anywhere'
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Powerful Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything you need for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              seamless remote control
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            RemoteTask AI combines cutting-edge artificial intelligence with robust remote desktop technology 
            to deliver an unparalleled user experience.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Secondary Features Grid */}
        <div className="bg-gray-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">And so much more</h3>
            <p className="text-lg text-gray-600">Additional features that make RemoteTask AI the complete solution</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white transition-colors duration-200 group">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-200">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
