
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="max-w-5xl mx-auto fade-in">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-red-700">
          SY_ALL Case Reporting Portal
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Welcome to the official case reporting system. Please select the appropriate department for your case.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="shadow-md border-emergency-light hover:shadow-lg transition-shadow">
          <CardHeader className="bg-emergency-light rounded-t-lg">
            <CardTitle className="text-emergency-DEFAULT text-2xl">Emergency Department</CardTitle>
            <CardDescription>
              For medical emergencies, accidents, fires, and other urgent situations requiring immediate attention.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Medical emergencies</li>
              <li>Fire incidents</li>
              <li>Natural disasters</li>
              <li>Accidents and injuries</li>
              <li>Other life-threatening situations</li>
            </ul>
          </CardContent>
          <CardFooter className="flex justify-center pb-6">
            <Button asChild className="emergency-gradient">
              <Link to="/emergency">Report Emergency Case</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="shadow-md border-police-light hover:shadow-lg transition-shadow">
          <CardHeader className="bg-police-light rounded-t-lg">
            <CardTitle className="text-police-DEFAULT text-2xl">Police Department</CardTitle>
            <CardDescription>
              For reporting crimes, suspicious activities, missing persons, and other police-related matters.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Criminal activities</li>
              <li>Theft or burglary</li>
              <li>Missing persons</li>
              <li>Suspicious behavior</li>
              <li>Traffic violations</li>
            </ul>
          </CardContent>
          <CardFooter className="flex justify-center pb-6">
            <Button asChild className="police-gradient text-white">
              <Link to="/police">Report Police Case</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <section className="bg-gray-100 p-6 rounded-lg shadow-inner">
        <h2 className="text-2xl font-semibold mb-3">How to Report a Case</h2>
        <ol className="list-decimal pl-5 space-y-3">
          <li>Select the appropriate department above.</li>
          <li>Fill in all required information in the form.</li>
          <li>Provide as many details as possible in the case description.</li>
          <li>Submit your report and note the case reference for follow-up.</li>
        </ol>
        <p className="mt-4 text-gray-600">
          In case of life-threatening emergencies, please also call the national emergency number directly.
        </p>
      </section>
    </div>
  );
};

export default Index;
