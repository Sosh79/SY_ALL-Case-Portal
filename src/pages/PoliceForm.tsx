import CaseForm from "@/components/CaseForm";
import { config } from "@/config/env";

const PoliceForm = () => {
  const webhookUrl = config.webhookUrl;
  
  return (
    <div className="fade-in">
      <div className="mb-6 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-police-DEFAULT mb-2">Police Department</h2>
        <p className="text-gray-600">
          Please provide all required information to report your police case.
          Our officers will review your case and take appropriate action.
        </p>
      </div>
      
      <CaseForm department="Police" webhookUrl={webhookUrl} />
    </div>
  );
};

export default PoliceForm;
