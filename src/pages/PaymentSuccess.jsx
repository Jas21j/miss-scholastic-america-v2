import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex flex-col items-center space-y-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              
              <h1 className="font-serif text-3xl">Payment Successful!</h1>
              
              <p className="text-gray-600">
                Congratulations! Your entry fee payment has been processed successfully.
                You are now officially part of the Miss Scholastic America 2025 pageant.
              </p>
              
              <div className="bg-pink-50 rounded-lg p-6 w-full my-6">
                <h2 className="font-medium text-xl mb-4">What's Next?</h2>
                <ol className="text-left text-gray-700 space-y-3 list-decimal pl-5">
                  <li>Check your email for your receipt and welcome information</li>
                  <li>Join our private contestants group on social media</li>
                  <li>Prepare for the virtual meet-up on Saturday, December 13th, 2025</li>
                  <li>Begin working on your community service project</li>
                </ol>
              </div>
              
              <p className="text-gray-600">
                We're thrilled to have you join our community of exceptional young scholars!
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center pt-6">
                <Link to="/">
                  <Button variant="outline">Return Home</Button>
                </Link>
                <Link to="/meetup">
                  <Button>Virtual Meet-Up Details</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess; 