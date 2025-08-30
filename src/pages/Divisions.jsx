import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Divisions = () => {
  const divisions = [
    {
      title: "Junior Teen",
      ageRange: "13-15",
      description: "For young scholars beginning their academic journey, focusing on early leadership development and academic excellence.",
      requirements: [
        "Must be 13-15 years old by November 1, 2025",
        "Currently enrolled in middle school or high school",
        "Minimum 3.0 GPA",
        "U.S. citizen or legal resident",
      ],
      image: "https://i.ibb.co/FL4D8vhP/u2579371439-A-colorful-editorial-style-cartoon-illustration-o-0670d6ea-6f21-437f-a8c1-fd32a7522e7f-1.png"
    },
    {
      title: "Teen",
      ageRange: "16-18",
      description: "For high school students demonstrating academic achievement and emerging leadership capabilities.",
      requirements: [
        "Must be 16-18 years old by November 1, 2025",
        "Currently enrolled in high school",
        "Minimum 3.0 GPA",
        "U.S. citizen or legal resident",
      ],
      image: "https://i.ibb.co/Y466rx0q/u2579371439-A-colorful-editorial-style-cartoon-illustration-o-0670d6ea-6f21-437f-a8c1-fd32a7522e7f-0.png"
    },
    {
      title: "Miss",
      ageRange: "19-25",
      description: "For college students and young professionals showcasing academic excellence and established leadership.",
      requirements: [
        "Must be 19-25 years old by November 1, 2025",
        "High school graduate",
        "Minimum 3.0 GPA if currently enrolled",
        "U.S. citizen or legal resident",
      ],
      image: "https://i.ibb.co/27yH0Tpt/u2579371439-A-colorful-editorial-style-cartoon-illustration-o-0670d6ea-6f21-437f-a8c1-fd32a7522e7f-3.png"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative section-responsive-sm sparkle-bg">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-serif text-responsive-3xl margin-responsive-sm">Age Divisions</h1>
            <p className="text-responsive-base text-gray-600">
              Find your perfect category and begin your journey with Miss Scholastic America.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="section-responsive">
        <div className="container-responsive">
          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {divisions.map((division, index) => (
              <motion.div
                key={division.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center"
              >
                <div className={`space-y-4 sm:space-y-6 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <h2 className="font-serif text-responsive-2xl">{division.title}</h2>
                  <div className="inline-block bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-responsive-xs">
                    Ages {division.ageRange}
                  </div>
                  <p className="text-gray-600 text-responsive-sm leading-relaxed">{division.description}</p>
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="font-medium text-responsive-base">Requirements:</h3>
                    <ul className="space-y-2">
                      {division.requirements.map((req, i) => (
                        <li key={i} className="flex items-start space-x-2 text-gray-600 text-responsive-xs">
                          <span className="text-primary mt-1 flex-shrink-0">✓</span>
                          <span className="leading-relaxed">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/apply" className="inline-block w-full sm:w-auto">
                    <Button className="btn-responsive">Apply Now</Button>
                  </Link>
                </div>
                <div className={`${index % 2 === 1 ? "md:order-1" : ""} order-first md:order-none`}>
                  <img 
                    src={division.image}
                    alt={`${division.title} Division`}
                    className="rounded-xl sm:rounded-2xl shadow-lg w-full h-64 sm:h-80 md:h-[400px] object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-responsive bg-gradient-to-b from-pink-50 to-white">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-responsive-2xl margin-responsive-sm">Ready to Take the Next Step?</h2>
            <p className="text-gray-600 text-responsive-sm margin-responsive-sm leading-relaxed">
              Join a community of exceptional young women and start your journey towards becoming
              Miss Scholastic America 2025.
            </p>
            <Link to="/apply" className="inline-block w-full sm:w-auto">
              <Button size="lg" className="btn-responsive">Begin Your Application</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Divisions;
