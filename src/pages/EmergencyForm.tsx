import CaseForm from "@/components/CaseForm";

const EmergencyForm = () => {
  const webhookUrl = "";
  
  return (
    <div className="fade-in">
      <div className="mb-6 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-emergency-DEFAULT mb-2">Emergency Department</h2>
        <p className="text-gray-600">
          Please provide all required information to report your emergency case.
          Our teams will respond as quickly as possible.
        </p>
      </div>
      
      <CaseForm department="Emergency" webhookUrl={webhookUrl} />
    </div>
  );
};

export default EmergencyForm;
