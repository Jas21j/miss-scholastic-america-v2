import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin, Crown, Sparkles, Star, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_4mqw687',
        'template_3qdq1it',
        {
          to_email: 'missscholasticamerica@gmail.com',
          from_email: email,
          subject: 'New Newsletter Subscription',
          message: `New newsletter subscription request from: ${email}`,
        },
        '5zmPvDu8F7qP6JTfD'
      );

      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter!",
      });

      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-lavender-50 via-pink-50 to-purple-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-lavender-400 to-pink-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 text-lavender-300 opacity-20"
        >
          <Sparkles size={30} />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 text-pink-300 opacity-25"
        >
          <Crown size={35} />
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 left-1/2 text-purple-300 opacity-20"
        >
          <Star size={25} />
        </motion.div>
      </div>

      <div className="relative z-10 py-20">
        <div className="container-responsive">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
            
            {/* Column 1: Brand & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Logo & Brand */}
              <div>
                <Link to="/" className="inline-block group">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="relative">
                      <Crown className="w-12 h-12 text-lavender-600 group-hover:text-lavender-700 transition-colors duration-300" />
                      <div className="absolute -top-1 -right-1">
                        <Sparkles className="w-4 h-4 text-pink-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-gray-900">Miss Scholastic</h3>
                      <p className="font-cursive text-lg text-lavender-600">America</p>
                    </div>
                  </div>
                </Link>
                <p className="text-gray-600 leading-relaxed">
                  Empowering young women through academic excellence, leadership development, and community service nationwide.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="font-serif text-xl font-semibold text-gray-900 mb-4">Contact Information</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-lavender-100 to-pink-100 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-lavender-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a href="mailto:missscholasticamerica@gmail.com" className="text-gray-700 hover:text-lavender-600 transition-colors duration-300">
                        missscholasticamerica@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-pink-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="text-gray-700">Virtual Competition Platform</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Column 2: Quick Links & Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8"
            >
              {/* Quick Links */}
              <div>
                <h4 className="font-serif text-xl font-semibold text-gray-900 mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {[
                    { to: "/about", label: "About Us" },
                    { to: "/divisions", label: "Age Divisions" },
                    { to: "/judging", label: "Judging Criteria" },
                    { to: "/prizes", label: "Prizes & Awards" },
                    { to: "/meetup", label: "Virtual Meetup" },
                    { to: "/faq", label: "FAQ" }
                  ].map((link, index) => (
                    <li key={link.to}>
                      <Link 
                        to={link.to} 
                        className="group flex items-center gap-2 text-gray-600 hover:text-lavender-600 transition-colors duration-300"
                      >
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Application Links */}
              <div>
                <h4 className="font-serif text-xl font-semibold text-gray-900 mb-6">Get Started</h4>
                <div className="space-y-4">
                  <Link to="/apply" className="block group">
                    <div className="bg-gradient-to-r from-lavender-500 to-purple-500 text-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Apply Now</p>
                          <p className="text-sm opacity-90">Start your journey</p>
                        </div>
                        <Crown className="w-6 h-6" />
                      </div>
                    </div>
                  </Link>
                  <Link to="/payment" className="block group">
                    <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Pay Entry Fee</p>
                          <p className="text-sm opacity-90">Complete registration</p>
                        </div>
                        <Star className="w-6 h-6" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Column 3: Social Media & Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              {/* Social Media */}
              <div>
                <h4 className="font-serif text-xl font-semibold text-gray-900 mb-6">Connect With Us</h4>
                <div className="flex gap-4 mb-6">
                  {[
                    { icon: Facebook, href: "#", color: "from-blue-500 to-blue-600" },
                    { icon: Instagram, href: "#", color: "from-pink-500 to-purple-500" },
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href={social.href} 
                      className={`w-12 h-12 bg-gradient-to-r ${social.color} text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-110`}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                  >
                    <img 
                      src="https://storage.googleapis.com/hostinger-horizons-assets-prod/25bdcf69-d62d-4efc-ad1d-8d3e548f3a6f/ab088b53dbe38b42c6deea91468c0250.png"
                      alt="TikTok"
                      className="w-5 h-5"
                    />
                  </a>
                </div>
                <p className="text-gray-600 text-sm">
                  Follow us for updates, inspiration, and behind-the-scenes content from our community of exceptional young women.
                </p>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="font-serif text-xl font-semibold text-gray-900 mb-4">Stay Updated</h4>
                <p className="text-gray-600 mb-6">
                  Get the latest news, application deadlines, and exclusive content delivered to your inbox.
                </p>
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lavender-500/20 focus:border-lavender-500 transition-colors duration-300"
                      disabled={isSubmitting}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-lavender-600 to-purple-600 hover:from-lavender-700 hover:to-purple-700 text-white font-medium py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe to Newsletter"}
                    <Mail className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="pt-8 border-t border-gray-200"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-sm">
                © {new Date().getFullYear()} Miss Scholastic America. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <Link to="/contact" className="text-gray-600 hover:text-lavender-600 text-sm transition-colors duration-300">
                  Contact
                </Link>
                <span className="text-gray-300">|</span>
                <a 
                  href="https://salesmansolutions.net" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-500 hover:text-lavender-600 text-sm transition-colors duration-300"
                >
                  Powered by Salesman Solutions
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
