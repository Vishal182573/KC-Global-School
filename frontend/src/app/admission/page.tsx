import React from 'react';

const AdmissionProcedure = () => {
  return (
    <div className="bg-white p-8  mx-auto">
      <h3 className="text-teal-500 font-semibold mb-2">KC GLOBAL SCHOOL</h3>
      <h1 className="text-4xl font-bold text-navy-900 mb-6">Admission Procedure</h1>
      
      <div className="space-y-6">
        <p className="text-gray-700">
          Admissions Parents / Guardians should register their children / ward vide the Application Form available at the school reception. All the requirements mentioned in the Application Form must be strictly followed. Admission is purely on the basis of Merit list prepared after the entrance test followed by a personal interview, provided there is a seat vacant. After the child has qualified in the interview and admission has been confirmed, the parent must immediately deposit the necessary fees as per fee structure, failing which the offer of admission may be communicated to the next eligible candidate.
        </p>
        
        <section>
          <h2 className="text-2xl font-semibold text-navy-900 mb-2">Admission Test and Interaction</h2>
          <p className="text-gray-700">
            Admission will be based on written test and interaction. The admission tests will be conducted on the School premises and parents will be intimated about the date and time. Parents will also be given a basic guideline about what their child can be expected to be tested on. Admission will be on the basis of tests only for Standard I and above.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-navy-900 mb-2">Admission Lists</h2>
          <p className="text-gray-700">
            The outcome of the admission test will be conveyed to the parents after a stipulated period. A list of the names of the selected candidates will also be displayed in the School office. The decision of the School Admission Committee in this matter will be final and binding and no further discussions will be entertained.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-navy-900 mb-2">Confirmation of Admission</h2>
          <p className="text-gray-700">
            On receipt of the intimation for acceptance of admission, parents will be expected to pay the specified fees within the stipulated period. Failure to do so may lead to rejection of application form.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-navy-900 mb-2">Mode of Payment</h2>
          <p className="text-gray-700">
          Fees are to be paid in the form of cash or demand draft drawn in favour of KC Global School, payable at Greater Noida. No out-station cheques will be accepted. Please note that the brochure and application form price is non-refundable. Further, please note that the submission of the application form does not guarantee admission of the child.
          </p>
        </section>
        
      </div>
    </div>
  );
};

export default AdmissionProcedure;