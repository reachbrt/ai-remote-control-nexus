
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Zap, Shield, Globe } from 'lucide-react';

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
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Remote Control
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Control any computer
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  with AI precision
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Experience the future of remote desktop control with voice commands, smart automation, and seamless cross-platform connectivity.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-blue-600" />
                Enterprise Security
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-2 text-blue-600" />
                Cross-Platform
              </div>
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-2 text-blue-600" />
                AI-Powered
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-gray-300 hover:bg-gray-50">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Social proof */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4">Trusted by teams at</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              {/* Mock interface */}
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-500">Connected to Desktop-AI-01</div>
                </div>

                {/* AI Command Interface */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-sm font-medium text-gray-900">AI Assistant</div>
                  </div>
                  <div className="text-sm text-gray-600 italic">
                    "Open the quarterly report and highlight revenue growth..."
                  </div>
                </div>

                {/* Screen preview */}
                <div className="bg-gray-900 rounded-lg p-4 aspect-video flex items-center justify-center">
                  <div className="text-white text-sm opacity-75 text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <Globe className="w-8 h-8" />
                    </div>
                    Remote Desktop Preview
                  </div>
                </div>

                {/* Status indicators */}
                <div className="flex justify-between text-xs text-gray-500">
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    Connected
                  </span>
                  <span>Latency: 12ms</span>
                  <span>Quality: HD</span>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
