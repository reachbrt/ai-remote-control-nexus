
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Eye, 
  MousePointer, 
  Command, 
  Shield, 
  Zap, 
  Globe, 
  Smartphone, 
  Monitor,
  Users,
  BarChart3,
  FileText,
  Clock,
  Download,
  Settings,
  TouchpadIcon as Touchpad
} from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      icon: Eye,
      title: 'AI Vision Control',
      description: 'Advanced computer vision that sees and understands your screen. AI identifies buttons, forms, and interface elements for precise control.',
      gradient: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: MousePointer,
      title: 'Smart Mouse & Touch Control',
      description: 'Intelligent mouse control with AI-powered clicking, dragging, and touchpad gestures. Control any desktop with natural mobile interactions.',
      gradient: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Command,
      title: 'AI Agent Task Automation',
      description: 'Voice and text commands that execute complex tasks. Say "login to my email" and watch AI navigate, click, and complete the entire workflow.',
      gradient: 'from-emerald-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const secondaryFeatures = [
    {
      icon: Monitor,
      title: 'Cross-Platform Desktop',
      description: 'Windows, macOS, and Linux support'
    },
    {
      icon: Touchpad,
      title: 'Mobile Touchpad Mode',
      description: 'Transform phone into intelligent touchpad'
    },
    {
      icon: Smartphone,
      title: 'Voice Command Control',
      description: 'Natural language voice commands'
    },
    {
      icon: Settings,
      title: 'AI Task Automation',
      description: 'Complex workflow automation'
    },
    {
      icon: FileText,
      title: 'Screen Recognition',
      description: 'AI understands UI elements and context'
    },
    {
      icon: Download,
      title: 'Instant Setup',
      description: 'Zero configuration remote access'
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            AI-Powered Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The future of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              remote desktop control
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            RemoteTask AI combines advanced computer vision, natural language processing, and intelligent automation 
            to create the most intuitive remote desktop experience ever built.
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

        {/* AI Capabilities Showcase */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">AI Vision & Control Capabilities</h3>
            <p className="text-lg text-gray-600">Experience the power of artificial intelligence in remote desktop control</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Eye className="w-6 h-6 mr-2 text-blue-600" />
                Vision Recognition
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Identifies buttons, forms, and UI elements</li>
                <li>• Understands screen context and layout</li>
                <li>• Recognizes text, images, and interactive areas</li>
                <li>• Adapts to different applications and websites</li>
                <li>• Real-time screen analysis and mapping</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Command className="w-6 h-6 mr-2 text-purple-600" />
                AI Agent Tasks
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• "Open Chrome and search for weather"</li>
                <li>• "Login to my email account"</li>
                <li>• "Take a screenshot and save it"</li>
                <li>• "Copy the selected text to clipboard"</li>
                <li>• "Navigate to settings and change theme"</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Secondary Features Grid */}
        <div className="bg-gray-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Complete Remote Control Suite</h3>
            <p className="text-lg text-gray-600">Everything you need for intelligent remote desktop management</p>
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
