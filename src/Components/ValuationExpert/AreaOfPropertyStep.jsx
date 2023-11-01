import React from 'react';
import { Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AreaOfPropertyStep = ({ initialValues }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg mt-14 mb-14">
      <h2 className="text-xl font-semibold mb-4">Area of Property</h2>
      <div className="mb-4">
        <label htmlFor="buildUpArea" className="block text-gray-600 font-medium">Build-up Area:</label>
        <Field
          type="number"
          id="buildUpArea"
          name="buildUpArea"
          className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200"
        />
        <ErrorMessage name="buildUpArea" component="div" className="text-red-500 mt-1" />
      </div>
      
      <div className="mb-4">
        <label htmlFor="superBuildUpArea" className="block text-gray-600 font-medium">Super Build-up Area:</label>
        <Field
          type="number"
          id="superBuildUpArea"
          name="superBuildUpArea"
          className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200"
        />
        <ErrorMessage name="superBuildUpArea" component="div" className="text-red-500 mt-1" />
      </div>
      {/* Add more area details fields */}
    </div>
  );
};

export default AreaOfPropertyStep;

// Validation Schema for AreaOfPropertyStep
export const AreaOfPropertyValidationSchema = Yup.object().shape({
  buildUpArea: Yup.number().required('Build-up Area is required').positive(),
  superBuildUpArea: Yup.number().required('Super Build-up Area is required').positive(),
  // Add validation for other fields
});
