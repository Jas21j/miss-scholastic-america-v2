import React from "react";
import { motion } from "framer-motion";
import { Crown, Camera, CreditCard, Plane, Award, Users, Sparkles, Briefcase, Mic, Share2, Gift, Shirt } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Prizes = () => {
  const prizes = [
    {
      title: "Miss",
      amount: "$1,250",
      position: "Winner",
      color: "from-pink-400 to-pink-600",
      gradientClass: "text-pink-500",
    },
    {
      title: "Teen",
      amount: "$1,000",
      position: "Winner",
      color: "from-purple-400 to-purple-600",
      gradientClass: "text-purple-500",
    },
    {
      title: "Junior Teen",
      amount: "$750",
      position: "Winner",
      color: "from-blue-400 to-blue-600",
      gradientClass: "text-blue-500",
    },
  ];

  const additionalPrizes = [
    {
      title: "Custom Crown & Rhinestone Sash",
      description: [
        "Signature design with pageant logo",
        "Keepsake embroidered sash in pageant colors"
      ],
      icon: <Crown className="w-8 h-8" />
    },
    {
      title: "Professional Photoshoot Package",
      description: [
        "Glamour shoot with a celebrity photographer",
        "Hair & makeup included",
        "Digital portfolio and social media content"
      ],
      icon: <Camera className="w-8 h-8" />
    },
    {
      title: "Wardrobe Gift Card",
      description: [
        "Boutique or brand partnership (e.g., $250 toward Sherri Hill, Jovani, Fashion Nova, etc.)"
      ],
      icon: <CreditCard className="w-8 h-8" />
    },
    {
      title: "Travel Opportunity",
      description: [
        "Paid trip to a national leadership summit, retreat, or pageant"
      ],
      icon: <Plane className="w-8 h-8" />
    },
    {
      title: "Brand Ambassador Contract",
      description: [
        "One-year ambassadorship with partnered fashion, beauty, or nonprofit brands"
      ],
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Mentorship Program",
      description: [
        "One-on-one coaching from a pageant veteran or life coach",
        "Career and purpose-building workshops (age 19-25)"
      ],
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Makeup & Skincare Bundle",
      description: [
        "Skincare essentials tailored to age group"
      ],
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      title: "Custom Monogrammed Luggage or Tote Set",
      description: [
        "Stylish luggage with queen's initials or title",
        "Perfect for appearances and travel"
      ],
      icon: <Briefcase className="w-8 h-8" />
    },
    {
      title: "Media & Speaking Opportunities",
      description: [
        "Featured in magazines, podcasts, or blogs",
        "Stage time at empowerment or community events"
      ],
      icon: <Mic className="w-8 h-8" />
    },
    {
      title: "Social Media Feature & Press Release",
      description: [
        "Highlight on pageant platforms",
        "Professionally written press release to announce win"
      ],
      icon: <Share2 className="w-8 h-8" />
    },
    {
      title: "Jewelry or Tiara Box",
      description: [
        "Keepsake box to store crown and accessories",
        "Optional custom engraving"
      ],
      icon: <Gift className="w-8 h-8" />
    },
    {
      title: "Personalized Robe",
      description: [
        "Satin robe with title on the back"
      ],
      icon: <Shirt className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-16 sm:py-20 sparkle-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">Prizes & Awards</h1>
            <p className="text-base sm:text-lg text-gray-600">
              Celebrating excellence with prestigious awards and scholarships
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {prizes.map((prize, index) => (
              <motion.div
                key={prize.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-75 rounded-2xl shadow-lg transform group-hover:scale-[1.02] transition-transform duration-300"
                  style={{ backgroundImage: `linear-gradient(to right, ${prize.color})` }}
                ></div>
                <div className="relative bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center transform group-hover:scale-[1.02] transition-transform duration-300">
                  <h3 className="font-serif text-xl sm:text-2xl mb-3 sm:mb-4">{prize.title}</h3>
                  <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 ${prize.gradientClass}`}>
                    {prize.amount}
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">{prize.position}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto mt-12 sm:mt-16"
          >
            <h2 className="text-2xl sm:text-3xl font-serif text-center mb-8 sm:mb-12">Plus there is more…</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {additionalPrizes.map((prize, index) => (
                <motion.div
                  key={prize.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md p-4 sm:p-6 flex items-start hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mr-3 sm:mr-4 bg-pink-100 p-2 sm:p-3 rounded-lg text-pink-600 flex-shrink-0">
                    {prize.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-base sm:text-lg mb-2 leading-tight">{prize.title}</h3>
                    <ul className="space-y-1">
                      {prize.description.map((item, i) => (
                        <li key={i} className="text-gray-600 text-xs sm:text-sm flex items-start leading-relaxed">
                          <span className="mr-2 mt-1 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 border-l-4 border-primary">
              <h3 className="font-serif text-xl sm:text-2xl mb-4 text-gray-900">Important Disclaimer</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                <strong>Disclaimer:</strong> Cash prize distributions are based on the number of contestants in each division. A minimum of 10 contestants are required in each division to remit the full cash prize for aforementioned division. The Miss Scholastic America Pageant is not responsible for prizes forfeited by sponsors.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-2xl sm:text-3xl mb-4 sm:mb-6">Ready to Win These Amazing Prizes?</h2>
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
              Submit your application today and take the first step toward becoming Miss Scholastic America 2025.
            </p>
            <Link to="/apply" className="inline-block">
              <Button size="lg" className="w-full sm:w-auto">Start Your Application</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Prizes;
