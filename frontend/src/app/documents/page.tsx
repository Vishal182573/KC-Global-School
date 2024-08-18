import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AdmissionRequirements: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Card className="w-full mx-auto bg-blue-50">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-blue-500 ">KC GLOBAL SCHOOL</CardTitle>
        </CardHeader>
        <CardContent>
          <h1 className="text-4xl font-bold text-navy-blue mb-6">Document Required</h1>
          
          <p className="mb-4 text-gray-700">
            Admissions Parents / Guardians should register their children / ward vide the Application Form available at the school reception. All the requirements mentioned in the Application Form must be strictly followed. Admission is purely on the basis of Merit list prepared after the entrance test followed by a personal interview, provided there is a seat vacant. After the child has qualified in the interview and admission has been confirmed, the parent must immediately deposit the necessary fees as per fee structure, failing which the offer of admission may be communicated to the next eligible candidate.
          </p>

          <h2 className="text-xl font-semibold mb-4 text-navy-blue">The Admission form must be accompanied by the documents listed below:</h2>

          <ul className="space-y-2">
            {[
              "Report Card of the last session attended in previous school",
              "Transfer Certificate in original (after confirmation of admission)",
              "Copy of Birth Certificate",
              "Parents are required to carry their aadhar cards at the time of admission",
              "Passport size photo of parents and children (2 each)"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-teal-500 mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdmissionRequirements;