import React, { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { Form, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ExternalLink, Smartphone, CreditCard } from "lucide-react";
import emailjs from 'emailjs-com';
import TermsAndConditions from "@/components/TermsAndConditions";

const ApplicationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthdate: "",
    division: "",
    school: "",
    gpa: "",
    headshot: null,
    fullBody: null,
    bio: null,
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [validatedForm, setValidatedForm] = useState(null);
  const APPLICATION_FEE = 95; // This represents $95.00
  
  // Payment links
  const CASHAPP_LINK = "https://cash.app/$crowningsuccess";
  const PAYPAL_APPLICATION_LINK = "https://www.paypal.com/ncp/payment/3BVTZ8MJYW5YE";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files[0]
    }));
  };

  const validateForm = (e) => {
    e.preventDefault();
    
    // Check if terms are accepted
    if (!termsAccepted) {
      toast({
        title: "Terms and Conditions",
        description: "You must accept the terms and conditions to continue.",
        variant: "destructive",
      });
      return;
    }
    
    // Check required form fields
    const { firstName, lastName, email, phone, birthdate, division, school, gpa, headshot, fullBody, bio } = formData;
    
    if (!firstName || !lastName || !email || !phone || !birthdate || !division || !school || !gpa || !headshot || !fullBody || !bio) {
      toast({
        title: "Missing Information",
        description: "Please complete all required fields before proceeding to payment.",
        variant: "destructive",
      });
      // Trigger HTML5 validation
      e.target.reportValidity();
      return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Validate phone format - accept formats like (123) 456-7890, 123-456-7890, or 1234567890
    const phonePattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (!phonePattern.test(phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid US phone number.",
        variant: "destructive",
      });
      return;
    }
    
    // Validate GPA (should be between 0 and 4.0)
    const gpaValue = parseFloat(gpa);
    if (isNaN(gpaValue) || gpaValue < 0 || gpaValue > 4.0) {
      toast({
        title: "Invalid GPA",
        description: "GPA must be between 0 and 4.0.",
        variant: "destructive",
      });
      return;
    }

    // If all validations pass, show payment options
    setValidatedForm(formData);
    setShowPaymentOptions(true);
  };

  const handlePaymentCompleted = async () => {
    setIsSubmitting(true);
    try {
      // Send email using EmailJS
      const templateParams = {
        to_email: 'missscholasticamerica@gmail.com',
        from_name: `${validatedForm.firstName} ${validatedForm.lastName}`,
        from_email: validatedForm.email,
        subject: 'New Miss Scholastic America Application',
        message: `Application Details:
Name: ${validatedForm.firstName} ${validatedForm.lastName}
Email: ${validatedForm.email}
Phone: ${validatedForm.phone}
Date of Birth: ${validatedForm.birthdate}
Division: ${validatedForm.division}
School/University: ${validatedForm.school}
GPA: ${validatedForm.gpa}
Headshot: ${validatedForm.headshot ? validatedForm.headshot.name : 'Not uploaded'}
Full Body: ${validatedForm.fullBody ? validatedForm.fullBody.name : 'Not uploaded'}
Bio: ${validatedForm.bio ? validatedForm.bio.name : 'Not uploaded'}

Payment Information:
Payment Amount: $${APPLICATION_FEE}
Payment Date: ${new Date().toLocaleString()}
Payment Note: Payment completed via Cash App or PayPal`,
      };

      try {
        console.log('Sending email to Miss Scholastic America...', templateParams);
        const emailResult = await emailjs.send(
          'service_4mqw687', // EmailJS service ID
          'template_3qdq1it', // EmailJS template ID
          templateParams,
          '5zmPvDu8F7qP6JTfD' // EmailJS public key
        );
        console.log('Email sent successfully:', emailResult);
      } catch (emailError) {
        console.error('Failed to send email:', emailError);
        toast({
          title: "Warning",
          description: "Application submitted but email notification failed. Please contact us directly.",
          variant: "destructive",
        });
      }

      // Create file URLs for preview
      let headshotUrl = null;
      let fullBodyUrl = null; 
      let bioUrl = null;

      if (validatedForm.headshot) {
        headshotUrl = URL.createObjectURL(validatedForm.headshot);
      }
      
      if (validatedForm.fullBody) {
        fullBodyUrl = URL.createObjectURL(validatedForm.fullBody);
      }
      
      if (validatedForm.bio) {
        bioUrl = URL.createObjectURL(validatedForm.bio);
      }

      // Save application to localStorage for admin dashboard
      const applicationSubmission = {
        id: Date.now().toString(),
        firstName: validatedForm.firstName,
        lastName: validatedForm.lastName,
        email: validatedForm.email,
        phone: validatedForm.phone,
        birthdate: validatedForm.birthdate,
        division: validatedForm.division,
        school: validatedForm.school,
        gpa: validatedForm.gpa,
        headshotUrl: headshotUrl || '',
        fullBodyUrl: fullBodyUrl || '',
        bioUrl: bioUrl || '',
        paymentAmount: APPLICATION_FEE,
        paymentStatus: 'completed',
        paymentMethod: 'Cash App / PayPal',
        createdAt: new Date()
      };

      // Get existing applications from localStorage or initialize empty array
      const existingApplications = JSON.parse(localStorage.getItem('applicationSubmissions') || '[]');
      
      // Add new application to the array
      const updatedApplications = [applicationSubmission, ...existingApplications];
      
      // Save updated applications back to localStorage
      localStorage.setItem('applicationSubmissions', JSON.stringify(updatedApplications));

      // Display toast notification
      toast({
        title: "Application Submitted",
        description: "Your application has been received. Please check your email for next steps.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        birthdate: "",
        division: "",
        school: "",
        gpa: "",
        headshot: null,
        fullBody: null,
        bio: null,
      });
      
      // Redirect to success page
      window.location.href = "/application-success";
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="mb-8 p-4 bg-pink-50 rounded-lg text-center">
        <p className="text-primary font-medium">Application Deadline: Thursday, Nov. 20, 2025</p>
      </div>
      
      <Form onSubmit={validateForm} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <FormItem>
            <FormLabel>First Name</FormLabel>
            <FormControl>
              <Input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </FormControl>
          </FormItem>

          <FormItem>
            <FormLabel>Last Name</FormLabel>
            <FormControl>
              <Input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </FormControl>
          </FormItem>
        </div>

        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormControl>
        </FormItem>

        <FormItem>
          <FormLabel>Phone</FormLabel>
          <FormControl>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </FormControl>
        </FormItem>

        <FormItem>
          <FormLabel>Date of Birth</FormLabel>
          <FormControl>
            <Input
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              required
            />
          </FormControl>
        </FormItem>

        <FormItem>
          <FormLabel>Division</FormLabel>
          <FormControl>
            <select
              name="division"
              value={formData.division}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              required
            >
              <option value="">Select Division</option>
              <option value="junior-teen">Junior Teen (13-15)</option>
              <option value="teen">Teen (16-18)</option>
              <option value="miss">Miss (19-25)</option>
            </select>
          </FormControl>
        </FormItem>

        <FormItem>
          <FormLabel>School/University</FormLabel>
          <FormControl>
            <Input
              name="school"
              value={formData.school}
              onChange={handleChange}
              required
            />
          </FormControl>
        </FormItem>

        <FormItem>
          <FormLabel>GPA</FormLabel>
          <FormControl>
            <Input
              type="number"
              step="0.01"
              min="0"
              max="4.0"
              name="gpa"
              value={formData.gpa}
              onChange={handleChange}
              required
            />
          </FormControl>
        </FormItem>

        <FormItem>
          <FormLabel>Headshot Upload (JPG/PNG)</FormLabel>
          <FormControl>
            <Input
              type="file"
              name="headshot"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
          </FormControl>
        </FormItem>
        <FormItem>
          <FormLabel>Full Body Photo Upload (JPG/PNG)</FormLabel>
          <FormControl>
            <Input
              type="file"
              name="fullBody"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
          </FormControl>
        </FormItem>
        <FormItem>
          <FormLabel>Bio Upload (PDF/DOC)</FormLabel>
          <FormControl>
            <Input
              type="file"
              name="bio"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
            />
          </FormControl>
        </FormItem>

        <div className="mt-8 mb-6">
          <TermsAndConditions 
            checked={termsAccepted} 
            onCheckedChange={setTermsAccepted} 
          />
        </div>

        {!showPaymentOptions ? (
          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              Application Fee: ${APPLICATION_FEE} (non-refundable)
            </p>
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-lavender-600 to-purple-600 hover:from-lavender-700 hover:to-purple-700" 
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Continue to Payment"}
            </Button>
            <p className="text-xs text-gray-600 mt-4 border-t pt-4">
              <strong>Disclaimer:</strong> If accepted, there is a $595 entry fee. Entry fee payment covers your sash, crown, t-shirt, coaching, and virtual meet-up activities. No travel expenses!
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 mt-8 p-6 bg-gradient-to-br from-lavender-50 to-pink-50 rounded-2xl border border-lavender-200"
          >
            <div className="text-center">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                Complete Your Payment
              </h3>
              <p className="text-gray-600 mb-4">
                Application Fee: <span className="font-bold text-lavender-600">${APPLICATION_FEE}</span>
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Choose your preferred payment method below. After completing payment, return here to confirm your application submission.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Cash App Option */}
              <a
                href={CASHAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-green-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Cash App</h4>
                      <p className="text-sm text-gray-500">$crowningsuccess</p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors" />
                </div>
                <p className="text-sm text-gray-600">
                  Pay instantly with Cash App. Click to open the app or website.
                </p>
              </a>

              {/* PayPal Option */}
              <a
                href={PAYPAL_APPLICATION_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">PayPal</h4>
                      <p className="text-sm text-gray-500">Secure payment</p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <p className="text-sm text-gray-600">
                  Pay securely with PayPal using your account or card.
                </p>
              </a>
            </div>

            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <h5 className="font-semibold text-gray-900 mb-2">Payment Instructions:</h5>
              <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                <li>Click on your preferred payment method above</li>
                <li>Complete the ${APPLICATION_FEE} payment</li>
                <li>Return to this page and click "I've Completed Payment" below</li>
                <li>Your application will be submitted for review</li>
              </ol>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={handlePaymentCompleted}
                className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "I've Completed Payment"}
              </Button>
              <Button 
                onClick={() => setShowPaymentOptions(false)}
                variant="outline"
                className="flex-1 border-gray-300 text-gray-600 hover:bg-gray-50"
                size="lg"
                disabled={isSubmitting}
              >
                Back to Form
              </Button>
            </div>
          </motion.div>
        )}
      </Form>

      {/* Judging Criteria Section */}
      <section className="mt-12 bg-pink-50 rounded-xl p-8 shadow-inner">
        <h2 className="font-serif text-2xl mb-6 text-center text-primary">Judging Criteria</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg">Interview – 40%</h3>
            <p className="text-gray-700">
              Each candidate participates in a 5-7 minute Zoom interview with our esteemed judges. The judges ask questions to learn more about the candidate's background, successes, talents, goals and ambitions. Scoring is assessed on charm, self-confidence, communication skills and substance of answers.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Community Service – 30%</h3>
            <p className="text-gray-700">
              Each candidate submits an interview-style video segment (up to 2.5 minutes) where they discuss community service, their platform/initiative, and how they will give back as Miss Scholastic America. Scoring is based on quality of answers, creativity, and knowledge of their initiative.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Formal Wear – 30%</h3>
            <p className="text-gray-700">
              Candidates showcase elegance through their formal headshot submission. Judges evaluate overall appearance and style. Scoring is based on confidence, poise, accessories, and the design and fit of their chosen gown.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ApplicationForm;
