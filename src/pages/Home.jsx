import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";
import ImageSlideshow from "@/components/ImageSlideshow";
import { Crown, Sparkles, Star } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Redesigned with Editorial Elegance */}
      <section className="relative h-screen overflow-hidden bg-gradient-to-br from-lavender-50 via-pink-50 to-white">
        <div className="absolute inset-0">
          <img
            src="/msa/hero-1.png"
            alt="Miss Scholastic America"
            className="w-full h-full object-cover object-center opacity-20"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
            }}
          />
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-20 text-lavender-300 opacity-30"
          >
            <Sparkles size={40} />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-40 right-32 text-pink-300 opacity-40"
          >
            <Star size={30} />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-40 left-40 text-lavender-400 opacity-25"
          >
            <Crown size={35} />
          </motion.div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="container-responsive text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-5xl mx-auto"
            >
              {/* Animated Crown Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                className="mb-8 flex justify-center"
              >
                <div className="relative">
                  <Crown className="w-16 h-16 text-lavender-600" />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-2 -right-2"
                  >
                    <Sparkles className="w-6 h-6 text-pink-500" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Crowning Tomorrow's
                <span className="block font-cursive text-lavender-600 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mt-2">
                  Leaders
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-8 font-light max-w-3xl mx-auto"
              >
                Miss Scholastic America: A Virtual Scholarship Pageant
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link to="/apply" className="w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    className="btn-responsive bg-gradient-to-r from-lavender-600 to-purple-600 hover:from-lavender-700 hover:to-purple-700 text-white font-medium px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Apply Now
                    <Crown className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/about" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="btn-responsive border-2 border-lavender-600 text-lavender-600 hover:bg-lavender-50 font-medium px-8 py-4 text-lg rounded-full transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </Link>
              </motion.div>
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

      {/* Virtual Meetup 2025 Section - Updated with Premium Design */}
      <section className="py-20 bg-gradient-to-b from-white via-lavender-50/30 to-pink-50/50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-lavender-400 to-pink-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto text-center"
          >
            {/* Section Header */}
            <div className="mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              >
                Virtual Meetup
                <span className="block font-cursive text-lavender-600 text-3xl sm:text-4xl lg:text-5xl mt-2">
                  2025
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl sm:text-2xl text-gray-700 font-light max-w-3xl mx-auto"
              >
                One-Day Virtual Event
                <span className="block text-lavender-600 font-medium mt-2">
                  <span className="whitespace-nowrap">December 13, 2025 at 6:00 PM EST</span>
                </span>
              </motion.p>
            </div>

            {/* Event Timeline Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                {
                  title: "Application Deadline",
                  date: "Thursday, Nov. 20, 2025",
                  icon: "📝",
                  gradient: "from-lavender-500 to-purple-500"
                },
                {
                  title: "Virtual Meet-Up",
                  date: "Saturday, Dec. 13, 2025",
                  icon: "👑",
                  gradient: "from-pink-500 to-rose-500"
                },
                {
                  title: "Winner Announced",
                  date: "Thursday, Jan. 1, 2026",
                  icon: "🎉",
                  gradient: "from-purple-500 to-indigo-500"
                }
              ].map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-lavender-200 transform hover:-translate-y-2">
                    <div className={`w-16 h-16 bg-gradient-to-r ${event.gradient} rounded-full flex items-center justify-center text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      {event.icon}
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      {event.date}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Countdown Timer with Premium Styling */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mb-12"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-8 inline-block">
                <CountdownTimer />
              </div>
            </motion.div>

            {/* Activities Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mb-12"
            >
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">
                Event Activities
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {[
                  "Ice Breaker Games",
                  "Confidence Workshop", 
                  "Outfit Challenge",
                  "Community Showcase",
                  "Sister Circle",
                  "Affirmation Circle",
                  "Top 10 Reveal"
                ].map((activity, index) => (
                  <motion.div
                    key={activity}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.9 }}
                    className="bg-gradient-to-r from-lavender-50 to-pink-50 rounded-xl p-4 text-center hover:shadow-md transition-shadow duration-300"
                  >
                    <p className="text-sm font-medium text-gray-700">{activity}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/apply" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="btn-responsive bg-gradient-to-r from-lavender-600 to-purple-600 hover:from-lavender-700 hover:to-purple-700 text-white font-medium px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Apply Now
                  <Crown className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/meetup" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="btn-responsive border-2 border-lavender-600 text-lavender-600 hover:bg-lavender-50 font-medium px-8 py-4 text-lg rounded-full transition-all duration-300"
                >
                  View Full Schedule
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Age Divisions Preview - Redesigned with Premium Cards */}
      <section className="py-24 bg-gradient-to-b from-pink-50/30 via-white to-lavender-50/30 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-40 left-10 w-64 h-64 bg-gradient-to-br from-lavender-400 to-pink-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-10 w-80 h-80 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Age Divisions
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 font-light max-w-3xl mx-auto">
              Find your perfect category and begin your journey with confidence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Junior Teen",
                age: "13-15",
                description: "For aspiring young scholars beginning their academic journey with purpose and passion",
                image: "/msa/division-junior.png",
                color: "lavender",
                icon: "🌱"
              },
              {
                title: "Teen",
                age: "16-18", 
                description: "For high school students showcasing academic excellence and emerging leadership",
                image: "/msa/division-teen.png",
                color: "pink",
                icon: "⭐"
              },
              {
                title: "Miss",
                age: "19-25",
                description: "For college students and young professionals leading with purpose and vision",
                image: "/msa/division-miss.png",
                color: "purple",
                icon: "👑"
              },
            ].map((division, index) => (
              <motion.div
                key={division.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-lavender-200 transform hover:-translate-y-3">
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-80">
                    <img 
                      src={division.image}
                      alt={`${division.title} Division`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Age Badge */}
                    <div className={`absolute top-6 right-6 bg-gradient-to-r ${
                      division.color === 'lavender' ? 'from-lavender-500 to-purple-500' :
                      division.color === 'pink' ? 'from-pink-500 to-rose-500' :
                      'from-purple-500 to-indigo-500'
                    } text-white px-4 py-2 rounded-full font-medium shadow-lg`}>
                      Ages {division.age}
                    </div>

                    {/* Icon */}
                    <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl shadow-lg">
                      {division.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      {division.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                      {division.description}
                    </p>

                    {/* CTA Button */}
                    <Link to="/divisions" className="block">
                      <Button 
                        variant="outline" 
                        className={`w-full border-2 ${
                          division.color === 'lavender' ? 'border-lavender-500 text-lavender-600 hover:bg-lavender-50' :
                          division.color === 'pink' ? 'border-pink-500 text-pink-600 hover:bg-pink-50' :
                          'border-purple-500 text-purple-600 hover:bg-purple-50'
                        } font-medium py-3 rounded-xl transition-all duration-300 group-hover:shadow-md`}
                      >
                        Learn More
                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <Link to="/divisions" className="inline-block">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-lavender-600 to-purple-600 hover:from-lavender-700 hover:to-purple-700 text-white font-medium px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View All Divisions
                <Crown className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Judging Criteria Section - Timeline Style */}
      <section className="py-24 bg-gradient-to-b from-lavender-50/30 via-white to-pink-50/30 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-lavender-400 to-purple-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Judging Criteria
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 font-light max-w-3xl mx-auto">
              Excellence evaluated through three comprehensive categories
            </p>
          </motion.div>

          {/* Timeline Layout */}
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-lavender-300 via-pink-300 to-purple-300 hidden lg:block"></div>

              <div className="space-y-16">
                {[
                  {
                    title: "Interview",
                    percentage: "40%",
                    description: "Each candidate participates in a 5-7 minute Zoom interview with our esteemed judges. The judges ask questions to learn more about the candidate's background, successes, talents, goals and ambitions. Scoring is assessed on charm, self-confidence, communication skills and substance of answers.",
                    icon: "🎤",
                    color: "lavender",
                    side: "left"
                  },
                  {
                    title: "Community Service",
                    percentage: "30%",
                    description: "Each candidate submits an interview-style video segment (up to 2.5 minutes) where they discuss community service, their platform/initiative, and how they will give back as Miss Scholastic America. Scoring is based on quality of answers, creativity, and knowledge of their initiative.",
                    icon: "💝",
                    color: "pink",
                    side: "right"
                  },
                  {
                    title: "Formal Wear",
                    percentage: "30%",
                    description: "Candidates showcase elegance through their formal headshot submission. Judges evaluate overall appearance and style. Scoring is based on confidence, poise, accessories, and the design and fit of their chosen gown.",
                    icon: "👗",
                    color: "purple",
                    side: "left"
                  }
                ].map((criteria, index) => (
                  <motion.div
                    key={criteria.title}
                    initial={{ opacity: 0, x: criteria.side === 'left' ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className={`relative flex items-center ${
                      criteria.side === 'right' ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Content Card */}
                    <div className={`lg:w-5/12 ${criteria.side === 'right' ? 'lg:pl-8' : 'lg:pr-8'} w-full`}>
                      <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-lavender-200 transform hover:-translate-y-2">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                          <div className={`w-16 h-16 bg-gradient-to-r ${
                            criteria.color === 'lavender' ? 'from-lavender-500 to-purple-500' :
                            criteria.color === 'pink' ? 'from-pink-500 to-rose-500' :
                            'from-purple-500 to-indigo-500'
                          } rounded-full flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            {criteria.icon}
                          </div>
                          <div className={`px-4 py-2 bg-gradient-to-r ${
                            criteria.color === 'lavender' ? 'from-lavender-100 to-purple-100 text-lavender-700' :
                            criteria.color === 'pink' ? 'from-pink-100 to-rose-100 text-pink-700' :
                            'from-purple-100 to-indigo-100 text-purple-700'
                          } rounded-full font-bold text-lg`}>
                            {criteria.percentage}
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                          {criteria.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {criteria.description}
                        </p>

                        {/* Animated Progress Bar */}
                        <div className="mt-6">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: criteria.percentage }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
                              className={`h-2 bg-gradient-to-r ${
                                criteria.color === 'lavender' ? 'from-lavender-500 to-purple-500' :
                                criteria.color === 'pink' ? 'from-pink-500 to-rose-500' :
                                'from-purple-500 to-indigo-500'
                              } rounded-full`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-lavender-400 rounded-full shadow-lg z-10"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mt-20"
          >
            <Link to="/judging" className="inline-block">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-lavender-600 to-purple-600 hover:from-lavender-700 hover:to-purple-700 text-white font-medium px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Learn More About Judging
                <Star className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Slideshow Section */}
      <section className="section-responsive bg-gradient-to-b from-white to-pink-50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <ImageSlideshow />
          </motion.div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="section-responsive bg-gradient-to-b from-pink-50 to-white" style={{ backgroundColor: "#fcf2f8" }}>
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-responsive-3xl font-serif text-center margin-responsive-sm">
              <span className="block sm:inline">Meet the Founder:</span>
              <span className="block sm:inline sm:ml-2">Anissa King-Paul</span>
            </h2>
            
            <div className="card-responsive-lg overflow-hidden">
              <div className="text-center spacing-responsive-md">
                <h3 className="text-responsive-xl font-serif mb-2">A Vision Fueled by Faith, Purpose, and Passion</h3>
                
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                  <div className="order-2 md:order-1 text-left">
                    <p className="text-gray-600 text-responsive-xs leading-relaxed mb-4">
                      Miss Scholastic America was born from the vision of one woman—Anissa King-Paul—whose lifelong 
                      passion is rooted in empowering girls and young women to rise with confidence and purpose. 
                      With more than two decades of experience in pageantry, public relations, and event planning, 
                      Anissa has dedicated her career to inspiring the next generation of leaders to pursue their 
                      passion and embrace their full potential.
                    </p>
                    <p className="text-gray-600 text-responsive-xs leading-relaxed mb-4">
                      Anissa's journey in pageantry began not just as a contestant, but as a champion for what the 
                      crown truly represents: confidence, character, and calling. She has held leadership roles behind 
                      the scenes and on stage, curating transformative events that celebrate not only beauty and poise, 
                      but brains, business, and bravery. Her impact stretches beyond sashes and spotlights—she's been a 
                      mentor, motivator, and a mastermind behind some of the most memorable moments in pageant and 
                      professional women's spaces.
                    </p>
                    <p className="text-gray-600 text-responsive-xs leading-relaxed mb-4">
                      With a strong foundation in strategic media relations and high-level event production, Anissa has 
                      successfully managed national campaigns, branded events, and public platforms that amplify voices 
                      and stories that matter. But more than the titles or accolades, her heart beats for shaping the next 
                      generation of female leaders—young women who know their worth, walk in their purpose, and lead with 
                      authenticity.
                    </p>
                    <p className="text-gray-600 text-responsive-xs leading-relaxed mb-4">
                      Her personal motto says it best: "Love God. Cherish your family. Believe in yourself."
                    </p>
                    <p className="text-gray-600 text-responsive-xs leading-relaxed">
                      Anissa attributes her vision and success to her faith, her family, and an unshakable belief in the 
                      power of purpose. What began as a dream has now become a movement—empowering girls and young women 
                      from classrooms to ballrooms to rise, reign, and leave a lasting legacy.
                    </p>
                  </div>
                  
                  <div className="order-1 md:order-2">
                    <img 
                      src="/msa/founder.jpg"
                      alt="Anissa King-Paul, Founder"
                      className="img-responsive rounded-xl shadow-lg"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 left-40 text-purple-300 opacity-35"
          >
            <Star size={45} />
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

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
            >
              {[
                { number: "$10,000+", label: "In Scholarships", icon: "💰" },
                { number: "3", label: "Age Divisions", icon: "👑" },
                { number: "Virtual", label: "Competition", icon: "🌟" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="font-serif text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
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
              <Link to="/prizes" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="btn-responsive border-2 border-lavender-600 text-lavender-600 hover:bg-lavender-50 font-medium px-10 py-5 text-xl rounded-full transition-all duration-300 transform hover:-translate-y-1"
                >
                  View Prizes & Awards
                  <Star className="ml-3 w-6 h-6" />
                </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-600"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-lavender-500 rounded-full"></div>
                <span className="text-sm font-medium">Secure Application Process</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span className="text-sm font-medium">Virtual Competition Format</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm font-medium">Scholarship Opportunities</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
