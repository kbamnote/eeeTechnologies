import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import EnrollmentForm from './EnrollmentForm';

const EnrollmentModal = ({ isOpen, onClose, courseName }) => {
  // 🔒 Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Wrapper */}
      <div className="flex min-h-screen items-start justify-center px-4 py-12 md:py-20">
        <div
          className="relative w-full max-w-4xl mx-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[75vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white hover:bg-gray-100 shadow-md transition-all duration-200 hover:scale-110"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-6">
              <h2
                id="modal-title"
                className="text-2xl md:text-3xl font-bold text-white"
              >
                Course Enrollment
              </h2>
              <p className="text-purple-100 mt-2">
                Start your journey with <span className="font-semibold">{courseName}</span>
              </p>
            </div>

            {/* Form Content */}
            <div className="p-8">
              <EnrollmentForm
                courseName={courseName}
                onSubmit={() => {
                  // Optional: auto close after submit
                  // setTimeout(onClose, 1500);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentModal;
