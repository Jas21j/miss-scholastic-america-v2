import React from "react";
import { motion } from "framer-motion";
import ApplicationForm from "@/components/ApplicationForm";

const Apply = () => {
  return (
    <div className="min-h-screen">
      <section className="relative section-responsive-sm sparkle-bg">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-serif text-responsive-3xl margin-responsive-sm">Apply Now</h1>
            <p className="text-responsive-base text-gray-600 mb-4">
              Begin your journey to become Miss Scholastic America 2025
            </p>
            <div className="grid-responsive-1-3 mt-6 mb-8 max-w-4xl mx-auto">
              <div className="card-responsive text-center">
                <p className="font-medium text-primary text-responsive-sm">Application Deadline</p>
                <p className="text-responsive-xs">Thursday, Nov. 20, 2025</p>
              </div>
              <div className="card-responsive text-center">
                <p className="font-medium text-primary text-responsive-sm">Virtual Meet-Up</p>
                <p className="text-responsive-xs">Saturday, Dec. 13, 2025</p>
              </div>
              <div className="card-responsive text-center">
                <p className="font-medium text-primary text-responsive-sm">Winner Announced</p>
                <p className="text-responsive-xs">Thursday, Jan. 1, 2025</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-responsive bg-gradient-to-b from-white to-pink-50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <ApplicationForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Apply;

