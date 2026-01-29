import React, { createContext, useContext, useState } from 'react';
import EnrollmentModal from '../components/courses/EnrollmentModal';

const EnrollmentContext = createContext();

export const useEnrollment = () => {
  const context = useContext(EnrollmentContext);
  if (!context) {
    throw new Error('useEnrollment must be used within an EnrollmentProvider');
  }
  return context;
};

export const EnrollmentProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseName, setCourseName] = useState('');
  const [onSubmitCallback, setOnSubmitCallback] = useState(null);

  const openEnrollmentModal = (course = 'General Inquiry', onSubmit = null) => {
    setCourseName(course);
    if (onSubmit) setOnSubmitCallback(onSubmit);
    setIsModalOpen(true);
  };

  const closeEnrollmentModal = () => {
    setIsModalOpen(false);
    setOnSubmitCallback(null);
  };

  const handleSubmit = (formData) => {
    if (onSubmitCallback) {
      onSubmitCallback(formData);
    } else {
      console.log('Enrollment form submitted with data:', formData);
    }
    closeEnrollmentModal();
  };

  return (
    <EnrollmentContext.Provider value={{
      openEnrollmentModal,
      closeEnrollmentModal,
      isModalOpen,
      courseName
    }}>
      {children}
      {isModalOpen && (
        <EnrollmentModal
          isOpen={isModalOpen}
          onClose={closeEnrollmentModal}
          courseName={courseName}
          onSubmit={handleSubmit}
        />
      )}
    </EnrollmentContext.Provider>
  );
};