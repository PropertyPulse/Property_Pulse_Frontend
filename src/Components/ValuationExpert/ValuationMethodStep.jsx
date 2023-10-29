import React from 'react';
import { Field, ErrorMessage } from 'formik';

const ValuationMethodStep = ({ initialValues }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Valuation Method</h2>
      <div className="mb-4">
        <label htmlFor="landAreaValue" className="block text-gray-600 font-medium">Land Area Value (Per Sq Ft):</label>
        <Field
          type="number"
          id="landAreaValue"
          name="landAreaValue"
          className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200"
        />
        <ErrorMessage name="landAreaValue" component="div" className="text-red-500 mt-1" />
      </div>
      
      <div className="mb-4">
        <label htmlFor="superBuildupAreaValue" className="block text-gray-600 font-medium">Super Build-up Area Value (Per Sq Ft):</label>
        <Field
          type="number"
          id="superBuildupAreaValue"
          name="superBuildupAreaValue"
          className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200"
        />
        <ErrorMessage name="superBuildupAreaValue" component="div" className="text-red-500 mt-1" />
      </div>
      <div className="mb-4">
        <label htmlFor="totalValue" className="block text-gray-600 font-medium">Total Value:</label>
        <Field
          type="number"
          id="totalValue"
          name="totalValue"
          className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200"
        />
        <ErrorMessage name="totalValue" component="div" className="text-red-500 mt-1" />
      </div>

      {/* Add more valuation method fields */}
    </div>
    
  );
};

export default ValuationMethodStep;
