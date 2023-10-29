import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import PropertyDetailsStep, { PropertyDetailsValidationSchema } from './PropertyDetailsStep';
import AreaOfPropertyStep, { AreaOfPropertyValidationSchema } from './AreaOfPropertyStep';
import ValueOfPropertyStep, { ValueOfPropertyValidationSchema } from './ValueOfPropertyStep';
import ValuationMethodStep from './ValuationMethodStep';
import DeclarationStep from './DeclarationStep';
import FullReport from './FullReport';
import Stepper from 'react-stepper-horizontal';

const steps = [
  { title: 'Property Details' },
  { title: 'Area of Property' },
  { title: 'Value of Property' },
  { title: 'Valuation Method' },
  { title: 'Declaration' },
];

const mockValues = {
  propertyOwnerName: 'Shashika',
  propertyAddress: 'Malwana',
  propertyType: 'Land',
  buildUpArea: 0,
  superBuildUpArea: 0,
  marketValue: 0,
  realizableValue: 0,
  insurableValue: 100,
  landAreaValue: 0,
  superBuildupAreaValue: 0,
  totalValue: 0,
  isAgreed: false,
};

const StepperComponent = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState(mockValues);
  const [showReport, setShowReport] = useState(false);
  const [isDeclarationChecked, setIsDeclarationChecked] = useState(false);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };
  
  const handleSubmit = (values) => {
    console.log("Submitted data for step", step, values);
    setFormData(values);
    
    if (step === 4) {
      setShowReport(true);
    } else {
      handleNextStep();
    }
  };
  const handleBackToStepper = () => {
    setShowReport(false);
    // Add any other logic needed to go back to the stepper
  };

  return (
    <div>
      {showReport ? (
        <FullReport formData={formData} onBackToStepper={handleBackToStepper} />
      ) : (
        <Formik
          initialValues={formData}
          validationSchema={
            step === 0 ? PropertyDetailsValidationSchema :
            step === 1 ? AreaOfPropertyValidationSchema :
            step === 2 ? ValueOfPropertyValidationSchema :
            Yup.object().shape({})
          }
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Stepper steps={steps} activeStep={step} />
  
              {step === 0 && <PropertyDetailsStep />}
              {step === 1 && <AreaOfPropertyStep />}
              {step === 2 && <ValueOfPropertyStep />}
              {step === 3 && <ValuationMethodStep />}
              {step === 4 && (
                <DeclarationStep
                  onAgreementChange={(isChecked) => setIsDeclarationChecked(isChecked)} // Pass the function
                />
              )}

  
              <div className="button-container mt-4 flex justify-between">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    disabled={isSubmitting}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                  >
                    Previous
                  </button>
                )}
  
                {step < 4 && (
                  <button
                    type="button"
                    onClick={() => {
                      handleSubmit(formData);
                    }}
                    disabled={isSubmitting}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover-bg-blue-600"
                  >
                    Next
                  </button>
                )}
                
                {step === 4 && (
                  <button
                    type="submit"
                    disabled={isSubmitting || !isDeclarationChecked}
                    className="px-4 py-2 bg-green-500 text-white hover:bg-green-600 rounded-md"
                  >
                    Generate Report
                  </button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default StepperComponent;
