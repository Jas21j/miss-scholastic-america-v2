import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Smartphone, CreditCard, Crown, Sparkles, Star } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Payment = () => {
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const { toast } = useToast();
  const ENTRY_FEE = 595;
  
  // Payment links
  const CASHAPP_LINK = "https://cash.app/$crowningsuccess";
  const PAYPAL_ENTRY_LINK = "https://www.paypal.com/ncp/payment/AF2SZ7EJAYTYS";

  const handlePaymentCompleted = () => {
    setPaymentCompleted(true);
    toast({
      title: "Payment Confirmed",
      description: "Thank you! Your entry fee payment has been recorded. You will receive confirmation via email shortly.",
    });
    // Redirect after a short delay
    setTimeout(() => {
      window.location.href = "/payment-success";
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender-50 via-pink-50 to-white">
      {/* Premium Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-lavender-400 to-pink-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-3xl"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-20 text-lavender-300 opacity-30"
          >
            <Crown size={50} />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-40 right-32 text-pink-300 opacity-40"
          >
            <Sparkles size={40} />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-40 left-40 text-purple-300 opacity-25"
          >
            <Star size={35} />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Crown Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-8 flex justify-center"
            >
              <Crown className="w-16 h-16 text-lavender-600" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Entry Fee
              <span className="block font-cursive text-lavender-600 text-4xl sm:text-5xl lg:text-6xl mt-2">
                Payment
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-xl sm:text-2xl text-gray-700 font-light max-w-3xl mx-auto"
            >
              Complete your registration and secure your spot in Miss Scholastic America 2025
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100"
            >
              {!paymentCompleted ? (
                <>
                  <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
                      Miss Scholastic America Entry Fee
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                      Congratulations on being accepted! Complete your registration by submitting the entry fee.
                    </p>
                    
                    <div className="bg-gradient-to-br from-lavender-50 to-pink-50 rounded-2xl p-8 mb-8 border border-lavender-200">
                      <div className="flex items-center justify-center mb-4">
                        <Crown className="w-8 h-8 text-lavender-600 mr-3" />
                        <span className="text-4xl font-bold text-lavender-600">${ENTRY_FEE}</span>
                      </div>
                      <span className="text-gray-600 font-medium">One-time entry fee</span>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-6 mb-8">
                      <h3 className="font-semibold text-gray-900 mb-3">Your entry fee includes:</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Crown className="w-4 h-4 text-lavender-600" />
                          <span>Official Sash</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Crown className="w-4 h-4 text-pink-600" />
                          <span>Crown</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-purple-600" />
                          <span>T-shirt</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-lavender-600" />
                          <span>Coaching</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mt-4">Plus virtual meet-up activities • No travel expenses!</p>
                    </div>
                  </div>

                  {/* Payment Options */}
                  <div className="space-y-8">
                    <div className="text-center">
                      <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                        Choose Your Payment Method
                      </h3>
                      <p className="text-gray-600 mb-8">
                        Select your preferred payment option below and complete your ${ENTRY_FEE} entry fee payment.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {/* Cash App Option */}
                      <a
                        href={CASHAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200 hover:border-green-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                      >
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                              <Smartphone className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-xl text-gray-900">Cash App</h4>
                              <p className="text-green-700 font-medium">$crowningsuccess</p>
                            </div>
                          </div>
                          <ExternalLink className="w-6 h-6 text-gray-400 group-hover:text-green-500 transition-colors" />
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          Pay instantly with Cash App. Quick, secure, and convenient mobile payments.
                        </p>
                      </a>

                      {/* PayPal Option */}
                      <a
                        href={PAYPAL_ENTRY_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                      >
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                              <CreditCard className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-xl text-gray-900">PayPal</h4>
                              <p className="text-blue-700 font-medium">Secure payment</p>
                            </div>
                          </div>
                          <ExternalLink className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors" />
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          Pay securely with PayPal using your account, bank, or credit card.
                        </p>
                      </a>
                    </div>

                    <div className="bg-lavender-50 p-6 rounded-2xl border border-lavender-200">
                      <h5 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Crown className="w-5 h-5 text-lavender-600" />
                        Payment Instructions:
                      </h5>
                      <ol className="text-gray-700 space-y-2 list-decimal list-inside mb-6">
                        <li>Click on your preferred payment method above</li>
                        <li>Complete the ${ENTRY_FEE} payment</li>
                        <li>Return to this page and click "I've Completed Payment" below</li>
                        <li>You'll receive email confirmation and next steps</li>
                      </ol>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button 
                          onClick={handlePaymentCompleted}
                          className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                          size="lg"
                        >
                          I've Completed Payment
                        </Button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Crown className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-gray-900 mb-4">
                    Payment Confirmed!
                  </h3>
                  <p className="text-lg text-gray-600">
                    Thank you! Your entry fee has been recorded. Redirecting you now...
                  </p>
                </motion.div>
              )}
              
              <div className="text-sm text-gray-500 border-t pt-8 mt-8">
                <p className="mb-2">
                  <strong>Note:</strong> All fees and monies paid to Miss Scholastic America Organization, LLC are non-refundable and non-transferrable.
                </p>
                <p>
                  If you have any questions about your payment, please contact us at{" "}
                  <a href="mailto:missscholasticamerica@gmail.com" className="text-lavender-600 underline hover:text-lavender-700">
                    missscholasticamerica@gmail.com
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment; 