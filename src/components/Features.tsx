
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
  TouchpadIcon as Touchpad,
  Brain,
  Cpu,
  Wifi
} from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      icon: Eye,
      title: 'AI Vision Control',
      description: 'Revolutionary computer vision that sees and understands your desktop interface. AI identifies buttons, forms, and elements with human-like precision for seamless remote control.',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      icon: MousePointer,
      title: 'Smart Touch & Mouse Control',
      description: 'Transform your mobile into an intelligent touchpad with AI-powered gestures. Natural touch controls, precision clicking, and intuitive desktop navigation from your phone.',
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bgGradient: 'from-purple-50 to-pink-50'
    },
    {
      icon: Command,
      title: 'AI Agent Task Automation',
      description: 'Voice and text commands that execute complex workflows. Say "login to my email" and watch AI navigate, authenticate, and complete entire task sequences automatically.',
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bgGradient: 'from-emerald-50 to-teal-50'
    }
  ];

  const secondaryFeatures = [
    {
      icon: Monitor,
      title: 'Cross-Platform Desktop',
      description: 'Windows, macOS, and Linux support',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      icon: Touchpad,
      title: 'Mobile Touchpad Mode',
      description: 'Transform phone into intelligent touchpad',
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    {
      icon: Smartphone,
      title: 'Voice Command Control',
      description: 'Natural language voice commands',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      icon: Brain,
      title: 'AI Task Automation',
      description: 'Complex workflow automation',
      color: 'text-cyan-600',
      bg: 'bg-cyan-50'
    },
    {
      icon: Cpu,
      title: 'Smart Recognition',
      description: 'AI understands UI elements and context',
      color: 'text-indigo-600',
      bg: 'bg-indigo-50'
    },
    {
      icon: Wifi,
      title: 'Instant Connection',
      description: 'Zero configuration remote access',
      color: 'text-teal-600',
      bg: 'bg-teal-50'
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-cyan-100 text-blue-800 text-sm font-medium mb-6 border border-blue-200/50 shadow-lg backdrop-blur-sm">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-3 animate-pulse">
              <Zap className="w-3 h-3 text-white" />
            </div>
            Revolutionary AI Features
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            The future of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 animate-pulse">
              mobile-to-desktop control
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            RemoteTask AI combines cutting-edge computer vision, natural language processing, and intelligent automation 
            to create the most intuitive cross-device control experience ever built. Control any desktop from your mobile with AI precision.
          </p>
        </div>

        {/* Enhanced Main Features with improved animations */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden bg-white/80 backdrop-blur-sm animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
              <div className="relative h-56 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-50`}></div>
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className={`absolute bottom-4 left-4 w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced AI Capabilities Showcase */}
        <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 mb-16 shadow-2xl animate-fade-in delay-500">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 text-sm font-medium mb-6 border border-cyan-500/30">
              <Brain className="w-5 h-5 mr-2" />
              AI Vision & Control Engine
            </div>
            <h3 className="text-4xl font-bold text-white mb-4">Experience AI-Powered Cross-Device Control</h3>
            <p className="text-xl text-gray-300">Revolutionary technology that bridges mobile and desktop seamlessly</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center group-hover:text-cyan-300 transition-colors duration-300">
                <Eye className="w-7 h-7 mr-3 text-cyan-400" />
                AI Vision Recognition
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center"><div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>Identifies buttons, forms, and UI elements with 99% accuracy</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse delay-200"></div>Understands screen context and application layout</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse delay-500"></div>Recognizes text, images, and interactive areas instantly</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse delay-700"></div>Adapts to different applications and websites dynamically</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-pink-400 rounded-full mr-3 animate-pulse delay-1000"></div>Real-time screen analysis and intelligent mapping</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 group">
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center group-hover:text-purple-300 transition-colors duration-300">
                <Command className="w-7 h-7 mr-3 text-purple-400" />
                AI Agent Voice Commands
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center"><div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>"Open Chrome and search for today's weather"</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-pink-400 rounded-full mr-3 animate-pulse delay-200"></div>"Login to my Gmail account automatically"</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse delay-500"></div>"Take a screenshot and save to desktop"</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse delay-700"></div>"Copy the selected text to clipboard"</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse delay-1000"></div>"Navigate to settings and change display theme"</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Enhanced Secondary Features Grid */}
        <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-3xl p-12 shadow-lg animate-fade-in delay-700">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Complete AI Remote Control Suite</h3>
            <p className="text-xl text-gray-600">Everything you need for intelligent cross-device desktop management</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 group animate-fade-in" style={{animationDelay: `${(index + 8) * 100}ms`}}>
                <div className={`flex-shrink-0 w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
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
