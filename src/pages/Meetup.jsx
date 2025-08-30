import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Video, Users, Crown, Heart, MessageCircle, Star } from 'lucide-react';

const Meetup = () => {
  const activities = [
    {
      icon: Users,
      title: "Ice Breaker Games",
      description: "Connect with fellow contestants through fun virtual activities",
      time: "6:00 PM EST"
    },
    {
      icon: Star,
      title: "Confidence Workshop",
      description: "Learn valuable techniques to boost your self-confidence",
      time: "6:30 PM EST"
    },
    {
      icon: Crown,
      title: "Themed Outfit Challenge",
      description: "Showcase your style and creativity with a chance to win best dressed",
      time: "7:00 PM EST"
    },
    {
      icon: Heart,
      title: "Community Service Showcase",
      description: "Share your impactful community service projects",
      time: "7:30 PM EST"
    },
    {
      icon: MessageCircle,
      title: "Sister Circle – Open Chat Room",
      description: "Open discussions and bonding with fellow contestants",
      time: "8:00 PM EST"
    },
    {
      icon: Star,
      title: "Affirmation Circle",
      description: "Share positive affirmations and support",
      time: "8:30 PM EST"
    },
    {
      icon: Crown,
      title: "Top 10 Announcement",
      description: "Exciting reveal of our Top 10 contestants",
      time: "9:00 PM EST"
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
            <h1 className="font-serif text-4xl md:text-5xl mb-6">Virtual Meet-Up</h1>
            <p className="text-lg text-primary font-medium mb-4">
              Saturday, December 13th, 2025 • 6:00 PM EST
            </p>
            <p className="text-gray-600">
              Join us for an exciting virtual gathering of contestants, featuring engaging activities,
              workshops, and celebrations!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://i.postimg.cc/TYQ3yxBB/Chat-GPT-Image-Jun-28-2025-05-42-41-PM.png"
                alt="Virtual Miss Scholastic America Meetup"
                className="rounded-2xl shadow-lg w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-serif text-3xl">Virtual Event Details</h2>
              <p className="text-gray-600">
                For our inaugural year, Miss Scholastic America will be hosting a virtual meet-up for all contestants. 
                No travel expenses required!
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Video className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Easy Access</h3>
                    <p className="text-sm text-gray-600">
                      Join from anywhere using our secure virtual platform
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Interactive Experience</h3>
                    <p className="text-sm text-gray-600">
                      Engage with fellow contestants in real-time activities
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Crown className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Special Announcements</h3>
                    <p className="text-sm text-gray-600">
                      Be present for exciting reveals and celebrations
                    </p>
                  </div>
                </div>
              </div>
              <Button size="lg">Register for Virtual Meet-Up</Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="font-serif text-3xl mb-4">Event Schedule</h2>
            <p className="text-gray-600">
              Mark your calendar for these important dates:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
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
                <p className="text-sm">Thursday, Jan. 1, 2025</p>
              </div>
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {activities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <motion.div
                    key={activity.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg flex items-center space-x-6"
                  >
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium">{activity.title}</h3>
                      <p className="text-sm text-gray-600">{activity.description}</p>
                    </div>
                    <div className="text-primary font-medium">
                      {activity.time}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Meetup;
