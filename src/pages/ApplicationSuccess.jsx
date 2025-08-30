import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ApplicationSuccess = () => {
  return (
    <div className="container max-w-3xl mx-auto py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-8 text-center"
      >
        <div className="flex flex-col items-center space-y-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="text-primary w-12 h-12" />
          </div>
          <h1 className="text-3xl font-serif text-primary">Application Submitted!</h1>
          <p className="text-gray-700 max-w-lg mx-auto">
            Thank you for applying to the Miss Scholastic America pageant! Your payment has been processed successfully and your application is now under review.
          </p>
          <p className="text-gray-700">
            We will contact you via email with next steps. Please check your inbox (and spam folder) for communications from us.
          </p>
          <div className="mt-8">
            <Link to="/">
              <Button size="lg">
                Return to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ApplicationSuccess; 