import React from 'react';

const DeclarationStep = ({onAgreementChange }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Declaration</h2>
      <div className="space-y-2">
        <p>
          <strong>Declaration:</strong> I Hereby Declare That
        </p>
        <ul className="list-disc pl-6">
          <li>The information furnished in this report is true and correct to my knowledge and belief.</li>
          <li>I have no direct or indirect interest in the property being valued.</li>
          <li>This report or part shall not be used for any other purpose than mentioned in this report.</li>
          <li>Future life of the property is based on proper maintenance of the property.</li>
          <li>This is only a valuation report and it does not contain any legal aspect.</li>
          <li>Property is identified by the owner.</li>
        </ul>
      </div>
      <div className="mt-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            onChange={(event) => {
              onAgreementChange(event.target.checked); // Pass the checkbox value to the function
            }}
          />
          <span className="ml-2 text-gray-700">I agree to the declaration</span>
        </label>
      </div>
    </div>
  );
};

export default DeclarationStep;





