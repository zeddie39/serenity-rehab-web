
import { Heart, Mail, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-teal-400" />
              <span className="text-xl font-bold">Serenity Rehab</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Providing compassionate, evidence-based addiction treatment and mental health services 
              to help individuals and families heal and recover.
            </p>
            <div className="flex space-x-4">
              <Mail className="h-5 w-5 text-teal-400" />
              <span className="text-gray-300">info@serenityrehab.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-teal-400 transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-teal-400 transition-colors">About Us</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-teal-400 transition-colors">Success Stories</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-teal-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>123 Recovery Lane</p>
              <p>Healing City, HC 12345</p>
              <p className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-teal-400" />
                24/7 Crisis Support
              </p>
              <p className="font-semibold text-white">(555) 123-HELP</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Serenity Rehab Center. All rights reserved.</p>
          <p className="mt-2 text-sm">
            If you are experiencing a medical emergency, please call 911 immediately.
          </p>
        </div>
      </div>
    </footer>
  );
};
