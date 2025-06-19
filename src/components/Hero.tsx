
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Zap, Shield, Globe, Download, MousePointer, Eye, Command, Smartphone, Monitor, Cpu, Brain } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 pt-16">
      {/* Advanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="w-full h-full bg-gradient-to-r from-emerald-400/5 to-teal-400/5 transform rotate-12 scale-150"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-cyan-100 text-blue-800 text-sm font-medium border border-blue-200/50 shadow-lg backdrop-blur-sm">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-3 animate-pulse">
                <Brain className="w-3 h-3 text-white" />
              </div>
              AI Vision + Smart Remote Control
            </div>

            {/* Enhanced Logo and Headline */}
            <div className="space-y-6">
              {/* Elegant Logo */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">RT</span>
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                    RemoteTask AI
                  </h3>
                  <p className="text-sm text-gray-500">AI Desktop Professional</p>
                </div>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                AI-Powered
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 animate-pulse">
                  Remote Vision
                </span>
                <span className="block text-3xl lg:text-4xl text-gray-700 mt-2">
                  Control Desktop from Mobile
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Transform your mobile into an AI-powered remote desktop controller. Advanced computer vision, 
                intelligent touchpad, and natural language commands for seamless cross-device automation.
              </p>
            </div>

            {/* Enhanced Feature highlights */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center p-3 bg-white/70 backdrop-blur-sm rounded-xl border border-blue-100 shadow-sm">
                <Eye className="w-5 h-5 mr-3 text-blue-600" />
                <span className="text-gray-700 font-medium">AI Vision Recognition</span>
              </div>
              <div className="flex items-center p-3 bg-white/70 backdrop-blur-sm rounded-xl border border-purple-100 shadow-sm">
                <MousePointer className="w-5 h-5 mr-3 text-purple-600" />
                <span className="text-gray-700 font-medium">Smart Touch Control</span>
              </div>
              <div className="flex items-center p-3 bg-white/70 backdrop-blur-sm rounded-xl border border-cyan-100 shadow-sm">
                <Command className="w-5 h-5 mr-3 text-cyan-600" />
                <span className="text-gray-700 font-medium">Voice AI Agent</span>
              </div>
              <div className="flex items-center p-3 bg-white/70 backdrop-blur-sm rounded-xl border border-emerald-100 shadow-sm">
                <Zap className="w-5 h-5 mr-3 text-emerald-600" />
                <span className="text-gray-700 font-medium">Task Automation</span>
              </div>
            </div>

            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white px-8 py-4 text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                <Download className="mr-2 h-5 w-5" />
                Download Free Pro
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-2 border-gray-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-300 transition-all duration-300">
                <Play className="mr-2 h-5 w-5" />
                Watch AI Demo
              </Button>
            </div>

            {/* Social proof */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4">Trusted by professionals worldwide</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="h-8 w-24 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg animate-pulse"></div>
                <div className="h-8 w-24 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg animate-pulse delay-200"></div>
                <div className="h-8 w-24 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg animate-pulse delay-500"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced AI Vision Demo */}
          <div className="relative animate-fade-in delay-500">
            {/* Mobile to Desktop Connection Animation */}
            <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-8 shadow-2xl">
              {/* Mobile Device */}
              <div className="absolute -top-8 -left-8 z-10">
                <div className="w-32 h-56 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-2xl border-4 border-gray-700 relative overflow-hidden">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-full"></div>
                  <div className="p-4 pt-6 h-full">
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl h-full p-3 relative overflow-hidden">
                      <div className="text-white text-xs font-bold mb-2">RemoteTask AI</div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Eye className="w-3 h-3 text-cyan-300" />
                          <div className="text-xs text-cyan-300">Vision Active</div>
                        </div>
                        <div className="w-full h-1 bg-cyan-400 rounded animate-pulse"></div>
                        <div className="text-xs text-white/80">"Click login button"</div>
                      </div>
                      {/* Animated connection line */}
                      <div className="absolute -right-6 top-1/2 w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Screen */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-inner border border-gray-700 overflow-hidden">
                {/* Desktop Header */}
                <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-3 border-b border-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-300 ml-4">AI Vision Desktop Control</div>
                  </div>
                </div>

                {/* Desktop Content */}
                <div className="p-6 h-80 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="AI controlling desktop interface"
                    className="w-full h-full object-cover rounded-lg opacity-60"
                  />
                  
                  {/* AI Vision Overlay */}
                  <div className="absolute inset-6 bg-black/80 backdrop-blur-sm rounded-lg border border-blue-500/50 p-4">
                    {/* AI Status */}
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-700">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <div className="text-sm text-green-400 font-medium">AI Agent Active</div>
                      </div>
                      <div className="text-xs text-gray-400">Mobile Connected</div>
                    </div>

                    {/* AI Commands */}
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-lg p-3 border border-blue-500/30 animate-pulse">
                        <div className="flex items-center space-x-2 mb-1">
                          <Eye className="w-4 h-4 text-blue-400" />
                          <div className="text-sm font-medium text-white">Vision Analysis</div>
                        </div>
                        <div className="text-xs text-gray-300">"I can see a login form on screen"</div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-emerald-600/30 to-cyan-600/30 rounded-lg p-3 border border-emerald-500/30 animate-pulse delay-500">
                        <div className="flex items-center space-x-2 mb-1">
                          <MousePointer className="w-4 h-4 text-emerald-400" />
                          <div className="text-sm font-medium text-white">Smart Action</div>
                        </div>
                        <div className="text-xs text-gray-300">"Clicking username field now..."</div>
                      </div>

                      <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-lg p-3 border border-purple-500/30 animate-pulse delay-1000">
                        <div className="flex items-center space-x-2 mb-1">
                          <Command className="w-4 h-4 text-purple-400" />
                          <div className="text-sm font-medium text-white">AI Command</div>
                        </div>
                        <div className="text-xs text-gray-300">"Typing credentials securely..."</div>
                      </div>
                    </div>

                    {/* Connection Status */}
                    <div className="flex justify-between items-center text-xs text-gray-400 mt-4 pt-3 border-t border-gray-700">
                      <span className="flex items-center">
                        <Smartphone className="w-3 h-3 mr-1 text-cyan-400" />
                        Mobile
                      </span>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-0.5 bg-cyan-400 animate-pulse"></div>
                        <div className="w-2 h-0.5 bg-cyan-400 animate-pulse delay-200"></div>
                        <div className="w-2 h-0.5 bg-cyan-400 animate-pulse delay-500"></div>
                      </div>
                      <span className="flex items-center">
                        <Monitor className="w-3 h-3 mr-1 text-blue-400" />
                        Desktop
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating AI Particles */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-30 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-30 animate-bounce delay-1000"></div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-40 animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
