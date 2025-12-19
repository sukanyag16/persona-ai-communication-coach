import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AC</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Aura Coach</span>
            </div>
            <p className="text-gray-600 text-sm max-w-md">
              AI-powered coaching platform for improving your communication skills through advanced speech analysis, body language detection, and real-time feedback.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Features
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-violet-600">Voice Analysis</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-violet-600">Body Language</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-violet-600">Real-time Feedback</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-violet-600">Progress Tracking</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-violet-600">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-violet-600">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-violet-600">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-violet-500">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-500">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-500">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="text-sm text-gray-500">
              © 2025 Aura Coach. Built with ❤️ by <a rel="nofollow" target="_blank" href="https://meku.dev" className="text-violet-600 hover:text-violet-700">Meku.dev</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;