import React from 'react';
import { Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ValueOfPropertyStep = ({ initialValues }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Value of Property</h2>
      <div className="mb-4">
        <label htmlFor="marketValue" className="block text-gray-600 font-medium">Market Value:</label>
        <Field
          type="number"
          id="marketValue"
          name="marketValue"
          className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200"
        />
        <ErrorMessage name="marketValue" component="div" className="text-red-500 mt-1" />
      </div>
      
      <div className="mb-4">
        <label htmlFor="realizableValue" className="block text-gray-600 font-medium">Realizable Value:</label>
        <Field
          type="number"
          id="realizableValue"
          name="realizableValue"
          className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200"
        />
        <ErrorMessage name="realizableValue" component="div" className="text-red-500 mt-1" />
      </div>
      <div className="mb-4">
        <label htmlFor="insurableValue" className="block text-gray-600 font-medium">Insurable Value:</label>
        <Field
          type="number"
          id="insurableValue"
          name="insurableValue"
          className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200"
        />
        <ErrorMessage name="insurableValue" component="div" className="text-red-500 mt-1" />
      </div>
      {/* Add more value details fields */}
    </div>
  );
};

export default ValueOfPropertyStep;

// Validation Schema for ValueOfPropertyStep
export const ValueOfPropertyValidationSchema = Yup.object().shape({
  marketValue: Yup.number().required('Market Value is required').positive(),
  realizableValue: Yup.number().required('Realizable Value is required').positive(),
  // Add validation for other fields
});
