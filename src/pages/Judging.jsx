import React from "react";
import { motion } from "framer-motion";

const Judging = () => {
  const criteria = [
    {
      title: "Interview",
      percentage: "40%",
      description: "Each candidate participates in a 5-7 minute interview with our esteemed judges. The judges ask a series of questions to learn more about the candidate's background, successes, talents, goals and ambitions. Scoring is assessed specifically on her charm, self-confidence, ability to communicate effectively and the substance of her answers."
    },
    {
      title: "Community",
      percentage: "30%",
      description: "Each candidate participates in pre-recorded behind the scenes interview-style video segment where each candidate dresses for the job of Miss Scholastic America. Scoring is based on each candidate's answers to questions pertaining to the importance of community service, their community platform/non-profit initiative they are passionate about, and how they will give back to the community as the new Miss Scholastic America. Scoring is assessed specifically on quality of her interview answers, creativity of response, and knowledge of platform/non-profit initiative."
    },
    {
      title: "Formal Wear",
      percentage: "30%",
      description: "The most glamorous portion of the competition that allows each candidate to show off her elegance and formal fashion in her virtual headshot submission. Judges are looking for her to captivate everyone with her overall appearance and \"wow\" them with her keen sense of style. Scoring is assessed specifically on her confidence, poise, choice of accessories, and of course, the actual design and fit of her gown of choice."
    }
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
            <h1 className="font-serif text-4xl md:text-5xl mb-6">Judging Criteria</h1>
            <p className="text-lg text-gray-600">
              Understanding how contestants are evaluated in Miss Scholastic America
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-pink-50 rounded-xl p-6 shadow text-center"
            >
              <h2 className="font-serif text-2xl mb-4">Key Competition Dates</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <p className="font-medium text-primary">Application Deadline</p>
                  <p className="text-sm">Thursday, Nov. 20, 2025</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <p className="font-medium text-primary">Virtual Meet-Up</p>
                  <p className="text-sm">Saturday, Dec. 13, 2025</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <p className="font-medium text-primary">Winner Announced</p>
                  <p className="text-sm">Thursday, Jan. 1, 2026</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {criteria.map((criterion, index) => (
              <motion.div
                key={criterion.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <h3 className="font-serif text-2xl">{criterion.title}</h3>
                  <div className="ml-4 text-3xl font-bold text-primary">
                    {criterion.percentage}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {criterion.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Judging;
