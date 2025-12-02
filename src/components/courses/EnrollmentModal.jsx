import React, { useState } from 'react';
import { X } from 'lucide-react';
import ContactForm from '../contact/ContactForm';

const EnrollmentModal = ({ isOpen, onClose, courseName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-8 right-4 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors duration-200 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="p-6 border-b mt-2 border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            Enroll in {courseName}
          </h2>
          <p className="text-gray-600 mt-2">
            Fill out the form below and our team will contact you shortly about your enrollment.
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <ContactForm courseName={courseName} onSubmit={onClose} />
        </div>
      </div>
    </div>
  );
};

export default EnrollmentModal;