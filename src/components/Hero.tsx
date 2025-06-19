
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Zap, Shield, Globe, Download } from 'lucide-react';

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
              Professional Edition v2.0.0
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Professional Remote Desktop
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  with AI Precision
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Enterprise-grade remote desktop control with natural language AI commands, global connectivity, and professional security features.
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
                Global Network
              </div>
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-2 text-blue-600" />
                AI-Powered Commands
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                <Download className="mr-2 h-5 w-5" />
                Download Professional
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-gray-300 hover:bg-gray-50">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Social proof */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4">Trusted by enterprise teams worldwide</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual with real image */}
          <div className="relative">
            {/* Main desktop image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Professional remote desktop setup"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Overlay interface */}
              <div className="absolute inset-4 bg-white/95 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-500">RemoteTask AI Professional</div>
                </div>

                {/* Connection info */}
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Connection ID:</span>
                    <span className="font-mono text-blue-600">XXX XXX XXX</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Access Key:</span>
                    <span className="font-mono text-blue-600">XXXXXX</span>
                  </div>
                </div>

                {/* AI Command Interface */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 mb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <Zap className="w-3 h-3 text-white" />
                    </div>
                    <div className="text-xs font-medium text-gray-900">AI Assistant Active</div>
                  </div>
                  <div className="text-xs text-gray-600 italic">
                    "Open calculator and perform 125 * 8"
                  </div>
                </div>

                {/* Status indicators */}
                <div className="flex justify-between text-xs text-gray-500">
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                    Connected
                  </span>
                  <span>Devices: 2</span>
                  <span>Secure</span>
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
