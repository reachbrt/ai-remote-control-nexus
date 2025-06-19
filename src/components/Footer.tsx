
import React from 'react';
import { Button } from '@/components/ui/button';
import { Eye, MousePointer, Command, Github, Twitter, Mail, Globe, Brain, Smartphone, Monitor, Cpu } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Enhanced Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl">
                  <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">RT</span>
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  RemoteTask AI
                </span>
                <div className="text-sm text-gray-400">Desktop Professional</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              The future of cross-device desktop control powered by artificial intelligence. 
              Control any computer from your mobile with revolutionary AI vision, voice commands, 
              and intelligent task automation.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-cyan-300 hover:bg-cyan-500/10 p-3 rounded-xl transition-all duration-200">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-300 hover:bg-blue-500/10 p-3 rounded-xl transition-all duration-200">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-purple-300 hover:bg-purple-500/10 p-3 rounded-xl transition-all duration-200">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Enhanced AI Features */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-cyan-300">AI Features</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center group hover:text-cyan-300 transition-colors duration-200">
                <Eye className="w-5 h-5 mr-3 text-cyan-400 group-hover:animate-pulse" />
                AI Vision Recognition
              </li>
              <li className="flex items-center group hover:text-purple-300 transition-colors duration-200">
                <MousePointer className="w-5 h-5 mr-3 text-purple-400 group-hover:animate-pulse" />
                Smart Touch Control
              </li>
              <li className="flex items-center group hover:text-emerald-300 transition-colors duration-200">
                <Command className="w-5 h-5 mr-3 text-emerald-400 group-hover:animate-pulse" />
                Voice AI Agents
              </li>
              <li className="flex items-center group hover:text-blue-300 transition-colors duration-200">
                <Brain className="w-5 h-5 mr-3 text-blue-400 group-hover:animate-pulse" />
                Task Automation
              </li>
              <li className="flex items-center group hover:text-pink-300 transition-colors duration-200">
                <Cpu className="w-5 h-5 mr-3 text-pink-400 group-hover:animate-pulse" />
                Screen Understanding
              </li>
              <li className="flex items-center group hover:text-indigo-300 transition-colors duration-200">
                <Monitor className="w-5 h-5 mr-3 text-indigo-400 group-hover:animate-pulse" />
                Cross-Platform Support
              </li>
            </ul>
          </div>

          {/* Enhanced Product */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-blue-300">Product</h3>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#features" className="hover:text-cyan-300 transition-colors duration-200 hover:underline decoration-cyan-300">AI Features</a></li>
              <li><a href="#pricing" className="hover:text-cyan-300 transition-colors duration-200 hover:underline decoration-cyan-300">Download Free</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition-colors duration-200 hover:underline decoration-cyan-300">Mobile App</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition-colors duration-200 hover:underline decoration-cyan-300">Desktop Client</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition-colors duration-200 hover:underline decoration-cyan-300">API Documentation</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition-colors duration-200 hover:underline decoration-cyan-300">Release Notes</a></li>
            </ul>
          </div>

          {/* Enhanced Support */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-purple-300">Support & Resources</h3>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-purple-300 transition-colors duration-200 hover:underline decoration-purple-300">Help Center</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors duration-200 hover:underline decoration-purple-300">AI Training Videos</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors duration-200 hover:underline decoration-purple-300">Community Forum</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors duration-200 hover:underline decoration-purple-300">Live Support Chat</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors duration-200 hover:underline decoration-purple-300">Enterprise Solutions</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors duration-200 hover:underline decoration-purple-300">System Status</a></li>
            </ul>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-gray-700/50 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 RemoteTask AI. All rights reserved. Powered by Advanced AI Vision Technology.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-cyan-300 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-300 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-cyan-300 transition-colors duration-200">AI Ethics</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
