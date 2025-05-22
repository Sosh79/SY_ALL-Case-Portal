interface CaseData {
  department: 'Emergency' | 'Police';
  fullName: string;
  nationalId: string;
  phoneNumber: string;
  address: string;
  ageRange: string;
  caseDescription: string;
}

export const submitCaseToWebhook = async (
  webhookUrl: string, 
  caseData: CaseData
): Promise<{ success: boolean; message: string }> => {
  try {
    if (!webhookUrl) {
      return { success: false, message: "No webhook URL provided" };
    }

    console.log('Sending data to webhook:', { url: webhookUrl, data: caseData });

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors', // Add no-cors mode to bypass CORS restrictions
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        ...caseData
      }),
    });

    // When using no-cors mode, we won't get a proper response status
    // Instead, we'll assume success if the request didn't throw an error
    console.log('Webhook response type:', response.type);
    
    return { 
      success: true, 
      message: "Your case has been successfully submitted." 
    };
  } catch (error) {
    console.error("Webhook submission error:", error);
    return { 
      success: false, 
      message: "Failed to submit your case. Please try again later." 
    };
  }
};
