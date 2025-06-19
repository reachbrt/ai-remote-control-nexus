
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Brain, Eye, Smartphone, Monitor } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced AI Vision Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-3">
                <div className="relative group">
                  {/* Main logo container with AI vision theme */}
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-3 transition-all duration-500 relative overflow-hidden">
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-cyan-400/20 animate-pulse"></div>
                    
                    {/* Mobile to laptop connection visual */}
                    <div className="relative z-10 flex items-center justify-center w-full h-full">
                      <div className="flex items-center space-x-1">
                        <Smartphone className="w-3 h-3 text-white/90" />
                        <div className="w-2 h-0.5 bg-gradient-to-r from-cyan-300 to-blue-300 animate-pulse"></div>
                        <Monitor className="w-3 h-3 text-white/90" />
                      </div>
                    </div>
                    
                    {/* AI Vision eye indicator */}
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center animate-pulse">
                      <Eye className="w-2 h-2 text-white" />
                    </div>
                  </div>
                  
                  {/* Floating connection particles */}
                  <div className="absolute -top-2 -left-2 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
                  <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-bounce delay-500"></div>
                </div>
                <div>
                  <span className="text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                    RemoteTask AI
                  </span>
                  <div className="text-xs text-gray-500 flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>Vision Control</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors hover:scale-105 transform duration-200">
                AI Features
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors hover:scale-105 transform duration-200">
                Download
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors hover:scale-105 transform duration-200">
                About
              </a>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200">
              Support
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              <Brain className="w-4 h-4 mr-2" />
              Get AI Pro
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-50 p-2 rounded-xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-all duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-xl">
            <a href="#features" className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200">
              AI Features
            </a>
            <a href="#pricing" className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200">
              Download
            </a>
            <a href="#about" className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200">
              About
            </a>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex flex-col space-y-3 px-3">
                <Button variant="ghost" className="justify-start text-gray-700 hover:bg-blue-50">
                  Support
                </Button>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg">
                  <Brain className="w-4 h-4 mr-2" />
                  Get AI Pro
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
