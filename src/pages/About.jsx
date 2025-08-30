import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Crown, Sparkles, Star, Heart, Award, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative h-screen overflow-hidden bg-gradient-to-br from-lavender-50 via-pink-50 to-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/msa/about-hero.png"
            alt="Miss Scholastic America"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
            }}
          />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-20 text-lavender-300 opacity-30"
          >
            <Sparkles size={50} />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-40 right-32 text-pink-300 opacity-40"
          >
            <Crown size={40} />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-40 left-40 text-purple-300 opacity-25"
          >
            <Star size={35} />
          </motion.div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="container-responsive text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-5xl mx-auto"
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
                About Miss Scholastic
                <span className="block font-cursive text-lavender-600 text-4xl sm:text-5xl lg:text-6xl mt-2">
                  America
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-xl sm:text-2xl lg:text-3xl text-gray-700 font-light max-w-3xl mx-auto"
              >
                Celebrating academic excellence, leadership, and service among young women nationwide
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Mission Section - Premium Split Layout */}
      <section className="py-24 bg-gradient-to-b from-white via-lavender-50/20 to-pink-50/30 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-lavender-400 to-pink-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container-responsive relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-lavender-300 to-pink-300 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <img 
                  src="/msa/new-hero.png"
                  alt="Miss Scholastic America Contestants"
                  className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://storage.googleapis.com/hostinger-horizons-assets-prod/25bdcf69-d62d-4efc-ad1d-8d3e548f3a6f/57b5e4919849f39a2732f84132490725.png";
                  }}
                />
                {/* Floating Badge */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-lavender-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-xl">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    <span className="font-medium">Excellence</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 space-y-8"
            >
              {/* Header */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-lavender-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lavender-600 font-medium text-lg">Our Purpose</span>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
                >
                  Our Mission
                </motion.h2>
              </div>

              {/* Mission Content */}
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  Miss Scholastic America is dedicated to recognizing and celebrating the academic 
                  achievements, leadership qualities, and community service contributions of young 
                  women across the United States.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  Through our virtual platform, we provide opportunities for scholarship, mentorship, 
                  and personal development while fostering a community of academically excellent 
                  young women who are making a difference in their communities.
                </motion.p>
              </div>

              {/* Key Points */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                {[
                  { icon: Star, text: "Academic Excellence Recognition" },
                  { icon: Users, text: "Leadership Development" },
                  { icon: Heart, text: "Community Service Impact" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-lavender-100 to-pink-100 rounded-full flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-lavender-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Link to="/apply" className="inline-block">
                  <Button className="bg-gradient-to-r from-lavender-600 to-purple-600 hover:from-lavender-700 hover:to-purple-700 text-white font-medium px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    Join Our Community
                    <Crown className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Premium Card Layout */}
      <section className="py-24 bg-gradient-to-b from-pink-50/30 via-white to-lavender-50/30 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-lavender-400 to-purple-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 font-light max-w-3xl mx-auto">
              The principles that guide everything we do at Miss Scholastic America
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Inclusivity",
                description: "Embracing diversity and ensuring equal opportunities for all participants from every background",
                icon: "🤝",
                color: "lavender"
              },
              {
                title: "Innovation", 
                description: "Leveraging technology to create an accessible virtual platform that reaches young women everywhere",
                icon: "💡",
                color: "pink"
              },
              {
                title: "Integrity",
                description: "Maintaining the highest standards of fairness and transparency in every aspect of our competition",
                icon: "⚖️",
                color: "purple"
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-lavender-200 transform hover:-translate-y-3 h-full">
                  {/* Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-r ${
                    value.color === 'lavender' ? 'from-lavender-500 to-purple-500' :
                    value.color === 'pink' ? 'from-pink-500 to-rose-500' :
                    'from-purple-500 to-indigo-500'
                  } rounded-full flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {value.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-lg text-center">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section - Premium Design */}
      <section className="py-24 bg-gradient-to-br from-lavender-50 via-pink-50 to-purple-50 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-lavender-400 to-pink-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-3xl"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 text-lavender-300 opacity-30"
          >
            <Crown size={60} />
          </motion.div>
          <motion.div
            animate={{ y: [20, -20, 20] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-40 right-40 text-pink-300 opacity-40"
          >
            <Sparkles size={50} />
          </motion.div>
        </div>

        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Ready to Begin Your
              <span className="block font-cursive text-lavender-600 text-3xl sm:text-4xl lg:text-5xl mt-2">
                Journey?
              </span>
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-2xl text-gray-700 font-light mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Join us in celebrating academic excellence and leadership.
              <span className="block text-lavender-600 font-medium mt-2">
                Apply now for Miss Scholastic America 2025.
              </span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Link to="/apply" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="btn-responsive bg-gradient-to-r from-lavender-600 to-purple-600 hover:from-lavender-700 hover:to-purple-700 text-white font-medium px-10 py-5 text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Start Your Application
                  <Crown className="ml-3 w-6 h-6" />
                </Button>
              </Link>
              <Link to="/payment" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="btn-responsive border-2 border-lavender-600 text-lavender-600 hover:bg-lavender-50 font-medium px-10 py-5 text-xl rounded-full transition-all duration-300 transform hover:-translate-y-1"
                >
                  Pay Entry Fee
                  <Star className="ml-3 w-6 h-6" />
                </Button>
              </Link>
            </motion.div>

            {/* Trust Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 inline-block"
            >
              <p className="text-gray-600 font-medium">
                Already applied? Complete your entry fee payment to secure your spot in the competition.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
