
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Zap, Shield, Globe, Download, MousePointer, Eye, Command } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full">
          <div className="w-full h-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 transform rotate-3 scale-110"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium">
              <Eye className="w-4 h-4 mr-2" />
              AI Vision + Remote Control
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                AI-Powered Remote Desktop
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  with Smart Vision
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Control any computer remotely with AI vision, natural language commands, and intelligent task automation. See, click, and control with AI precision.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-2 text-blue-600" />
                AI Vision Control
              </div>
              <div className="flex items-center">
                <MousePointer className="w-4 h-4 mr-2 text-blue-600" />
                Smart Mouse Control
              </div>
              <div className="flex items-center">
                <Command className="w-4 h-4 mr-2 text-blue-600" />
                Voice Commands
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg">
                <Download className="mr-2 h-5 w-5" />
                Download Free
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-gray-300 hover:bg-gray-50">
                <Play className="mr-2 h-5 w-5" />
                Watch AI Demo
              </Button>
            </div>

            {/* Social proof */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4">Trusted by professionals worldwide</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>

          {/* Right Column - AI Vision Demo */}
          <div className="relative">
            {/* Main AI vision interface */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="AI Robot representing intelligent automation"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* AI Vision Overlay */}
              <div className="absolute inset-4 bg-black/90 backdrop-blur-sm rounded-xl p-6 border border-blue-500/50">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-700 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="text-sm text-green-400">AI Vision Active</div>
                  </div>
                  <div className="text-sm text-gray-400">RemoteTask AI</div>
                </div>

                {/* AI Vision Commands */}
                <div className="space-y-3 mb-4">
                  <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-3 border border-blue-500/30">
                    <div className="flex items-center space-x-3 mb-2">
                      <Eye className="w-5 h-5 text-blue-400" />
                      <div className="text-sm font-medium text-white">Vision Analysis</div>
                    </div>
                    <div className="text-xs text-gray-300">
                      "I can see a login button on the screen"
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-600/20 to-cyan-600/20 rounded-lg p-3 border border-green-500/30">
                    <div className="flex items-center space-x-3 mb-2">
                      <MousePointer className="w-5 h-5 text-green-400" />
                      <div className="text-sm font-medium text-white">Smart Click</div>
                    </div>
                    <div className="text-xs text-gray-300">
                      "Clicking on the login button now..."
                    </div>
                  </div>
                </div>

                {/* Status indicators */}
                <div className="flex justify-between text-xs text-gray-400">
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></div>
                    AI Connected
                  </span>
                  <span>Vision: ON</span>
                  <span>Commands: 147</span>
                </div>
              </div>
            </div>

            {/* Floating AI elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
