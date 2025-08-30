import React from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Miss Scholastic America?",
      answer: "Miss Scholastic America is a premier virtual scholarship pageant celebrating academic excellence, leadership, and empowering young women across America.",
    },
    {
      question: "Who can participate?",
      answer: "Young women ages 13-25 who are U.S. citizens or legal residents, maintaining a minimum 3.0 GPA.",
    },
    {
      question: "Is the pageant completely virtual?",
      answer: "Yes, the main competition is virtual. Categories: Virtual Interview, Community Service, and Formal Headshot.",
    },
    {
      question: "What are the judging criteria?",
      answer: "Judging is based on Zoom Interview (40%), Community Service (30%), and Formal Headshot (30%).",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 sparkle-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600">
              Find answers to common questions about Miss Scholastic America
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <h3 className="font-serif text-xl mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
