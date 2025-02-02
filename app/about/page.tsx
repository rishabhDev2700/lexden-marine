'use client';

import { motion } from 'framer-motion';
import { Users, Target, Award, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Cover from "@/assets/claw-2.webp"
export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">

      <main>
        {/* Hero Section */}
        <section className="bg-lexden text-white py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
                <p className="text-md lg:text-xl text-indigo-100">
                  Lexden Marine is a trusted global commodities trader, specializing in sourcing and trading essential foodstuffs, with a focus on Bangladesh. With over 120 years of combined experience, our team delivers expert insights and reliable service, navigating complex markets to achieve exceptional results. Our strategic alliances with grain houses and major trading companies provide a competitive edge, ensuring efficient and seamless operations for our clients.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mt-12 lg:mt-0"
              >
                <Image
                  src={Cover}
                  alt="Shipping Port"
                  className="rounded-lg shadow-xl"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}

        {/* <Navigation /> */}

        {/* Values Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our core values guide everything we do, from how we treat our employees to how we serve our customers.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Users className="h-8 w-8" />,
                  title: 'Customer First',
                  description: 'Your success is our priority',
                },
                {
                  icon: <Target className="h-8 w-8" />,
                  title: 'Excellence',
                  description: 'Striving for perfection in every delivery',
                },
                {
                  icon: <Award className="h-8 w-8" />,
                  title: 'Integrity',
                  description: 'Honest and transparent in all we do',
                },
                {
                  icon: <TrendingUp className="h-8 w-8" />,
                  title: 'Innovation',
                  description: 'Continuously improving our services',
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <div className="text-lexden mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        {/* <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
              <p className="text-gray-600">Meet the people who make it all possible</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'John Smith',
                  role: 'CEO',
                  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
                },
                {
                  name: 'Sarah Johnson',
                  role: 'COO',
                  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
                },
                {
                  name: 'Michael Chen',
                  role: 'CTO',
                  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
                },
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}