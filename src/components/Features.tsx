
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
  Clock,
  Download,
  Settings
} from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      icon: Brain,
      title: 'AI-Powered Commands',
      description: 'Natural language processing for intuitive remote control. Say "open calculator" or "take screenshot" and watch it happen.',
      gradient: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Globe,
      title: 'Global Connectivity',
      description: 'Connect from anywhere without complex network setup. WebSocket global network ensures reliable real-time communication.',
      gradient: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'End-to-end AES-256 encryption, multi-factor authentication, and comprehensive audit trails for enterprise compliance.',
      gradient: 'from-emerald-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const secondaryFeatures = [
    {
      icon: Monitor,
      title: 'Cross-Platform Support',
      description: 'Windows, macOS, and Linux compatibility'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Control',
      description: 'Control desktops from any mobile device'
    },
    {
      icon: Users,
      title: 'Enterprise Deployment',
      description: 'MSI, DMG, and AppImage installers'
    },
    {
      icon: Settings,
      title: 'System Tray Integration',
      description: 'Background operation and auto-start'
    },
    {
      icon: FileText,
      title: 'Activity Logging',
      description: 'Comprehensive audit trail and compliance'
    },
    {
      icon: Download,
      title: 'Auto-Update System',
      description: 'Seamless updates with zero downtime'
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Professional Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything you need for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              professional remote control
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            RemoteTask AI Desktop Professional combines cutting-edge artificial intelligence with enterprise-grade 
            remote desktop technology for professional and business use.
          </p>
        </div>

        {/* Main Features with Images */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="bg-gray-50 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">System Requirements</h3>
            <p className="text-lg text-gray-600">Professional-grade specifications for optimal performance</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Minimum Requirements</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• OS: Windows 10, macOS 10.14, Ubuntu 18.04</li>
                <li>• RAM: 4GB minimum, 8GB recommended</li>
                <li>• Storage: 500MB available space</li>
                <li>• Network: Broadband internet connection</li>
                <li>• Display: 1024x768 minimum resolution</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Recommended Specs</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• OS: Windows 11, macOS 12+, Ubuntu 20.04+</li>
                <li>• RAM: 16GB for optimal performance</li>
                <li>• Storage: 1GB available space</li>
                <li>• Network: High-speed internet (10+ Mbps)</li>
                <li>• Display: 1920x1080 or higher resolution</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Secondary Features Grid */}
        <div className="bg-gray-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Professional capabilities</h3>
            <p className="text-lg text-gray-600">Additional features that make RemoteTask AI the complete enterprise solution</p>
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
