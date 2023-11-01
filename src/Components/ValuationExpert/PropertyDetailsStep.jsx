import React from 'react';
import { Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const PropertyDetailsStep = ({ initialValues }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Property Details</h2>
      <div className="mb-4">
        <label htmlFor="propertyOwnerName" className="block text-gray-600 font-medium">Name of Property Owner:</label>
        <Field
          type="text"
          id="propertyOwnerName"
          name="propertyOwnerName"
          className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200"
        />
        <ErrorMessage name="propertyOwnerName" component="div" className="text-red-500 mt-1" />
      </div>
      <div className="mb-4">
        <label htmlFor="propertyAddress" className="block text-gray-600 font-medium">Address of Property:</label>
        <Field
          type="text"
          id="propertyAddress"
          name="propertyAddress"
          className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200"
        />
        <ErrorMessage name="propertyAddress" component="div" className="text-red-500 mt-1" />
      </div>
      
      <div className="mb-4">
        <label htmlFor="propertyType" className="block text-gray-600 font-medium">Type of Property:</label>
        <Field
          as="select"
          id="propertyType"
          name="propertyType"
          className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200"
        >
          <option value="Land">Land</option>
          <option value="House">House</option>
          {/* Add other property types */}
        </Field>
        <ErrorMessage name="propertyType" component="div" className="text-red-500 mt-1" />
      </div>
      {/* Add more property details fields */}
    </div>
  );
};

export default PropertyDetailsStep;

// Validation Schema for PropertyDetailsStep
export const PropertyDetailsValidationSchema = Yup.object().shape({
  propertyAddress: Yup.string().required('Address is required'),
  propertyType: Yup.string().required('Property type is required'),
  // Add validation for other fields
});
