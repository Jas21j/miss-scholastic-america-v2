import React from "react";

const TermsAndConditions = ({ checked, onCheckedChange }) => {
  return (
    <div className="space-y-4 border border-gray-200 rounded-lg p-6 bg-slate-50 max-h-[400px] overflow-y-auto">
      <h3 className="font-serif text-xl mb-4">Terms and Conditions</h3>
      <div className="space-y-3 text-sm text-gray-700">
        <ul className="list-disc pl-6 space-y-3">
          <li>By completing this application, you are agreeing to represent your city, county, or region.</li>
          
          <li>Upon registration and acceptance, you agree to pay the $595 entry fee by the deadlines established by the Miss Scholastic America pageant.</li>
          
          <li>All fees and monies paid to Miss Scholastic America Organization, LLC are non-refundable and non-transferrable.</li>
          
          <li>The Miss Scholastic America pageant reserves the right to change the application/winner announcement date at the sole discretion of Miss Scholastic America.</li>
          
          <li>Miss Scholastic America is not responsible for any gifts/prizes that are forfeited by a sponsor.</li>
          
          <li>If for any reason, you choose to withdraw from representing the national Miss Scholastic America title, you will not receive any remaining gifts or items that are included in the National Prize Package AND you must return your crown and sash at your own expense.</li>
          
          <li>All fees, etc., must be paid by Credit Card, Apple Pay, Pay Pal, etc. We will not accept personal checks as a form of payment for your entry fee.</li>
          
          <li>Delegates agree and understand that all judges comments are final and we reserve the right to disqualify any delegate on the grounds of unsportmanlike behavior.</li>
          
          <li>Age qualifications of 13-25 are a delegate's age as of Nov 1, 2025. We reserve the right to require you to submit a copy of the delegates birth certificate or state identification.</li>
          
          <li>Delegate agrees that they are a U.S. citizen or legal U.S. resident and reside in the USA or U.S. territories.</li>
          
          <li>All delegates must be a natural born female.</li>
          
          <li>If a delegate is chosen to represent the national Miss Scholastic America title, they will be required to sign an official contract.</li>
          
          <li>1st Runner-ups will be required to sign a contract as well, in the unforeseen occurrence that the 1st Runner-up will have to step into the national titleholder's role.</li>
          
          <li>All delegates must be of good moral character.</li>
          
          <li>All delegates agree that the Miss Scholastic America Organization, LLC is not liable for any damages or liability and agree not to bring any legal action towards the organization, its directors, volunteers or staff for any claims.</li>
          
          <li>Delegates forever discharge the Miss Scholastic America Organization, LLC, its directors, volunteers and staff from any and all claims associated with damages, theft, accident, loss or injury resulting from participation in the Miss Scholastic America pageant.</li>
        </ul>
      </div>
      
      <div className="pt-4 border-t border-gray-200">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input 
            type="checkbox" 
            checked={checked} 
            onChange={(e) => onCheckedChange(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            required
          />
          <span className="text-sm font-medium">I have read and agree to the terms and conditions</span>
        </label>
      </div>
    </div>
  );
};

export default TermsAndConditions; 