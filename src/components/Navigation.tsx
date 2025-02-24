
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-primary">EduLearn</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="/courses" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Courses
              </a>
              <a href="/dashboard" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Dashboard
              </a>
              <a href="/about" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About Us
              </a>
              <Button variant="default" className="ml-4">Sign In</Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="/courses" className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium">
              Courses
            </a>
            <a href="/dashboard" className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium">
              Dashboard
            </a>
            <a href="/about" className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium">
              About Us
            </a>
            <Button variant="default" className="w-full mt-4">Sign In</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
