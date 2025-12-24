import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function ThankYou() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-10 min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Thank You for Your Interest!
          </h1>
          
          <p className="text-lg text-gray-600 mb-2">
            We've received your enrollment request and our team will get back to you shortly.
          </p>
          
          <p className="text-gray-500 mb-8">
            In the meantime, feel free to explore our other courses or contact us directly.
          </p>
          
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 mb-8 text-left">
            <h3 className="text-white font-bold text-lg mb-2">What Happens Next?</h3>
            <ul className="text-white/90 space-y-2 text-sm">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Our admissions team will review your information</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>You'll receive a confirmation email within 24 hours</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>We'll schedule a consultation call to discuss your goals</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/placement-courses" 
              className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Back to Courses
            </Link>
            <a 
              href="https://wa.me/9730893320" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}