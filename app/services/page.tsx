'use client';

import { motion } from 'framer-motion';
import { ShieldHalf, Users, Handshake } from 'lucide-react';
import { services } from '@/lib/data';
export default function Services() {

  return (
    <div className="min-h-screen bg-gray-50">

      <main>
        {/* Hero Section */}
        <section className="bg-lexden text-white py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-md lg:text-xl text-indigo-100 max-w-3xl mx-auto">
              Exceptional services and building lasting partnerships
            </p>
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-md"
                >
                  <div className="text-lexden mb-4">{service.icon}</div>
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-700">
                        <span className="h-1.5 w-1.5 bg-lexden rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Services</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Handshake className="h-8 w-8" />, // Replace with an appropriate icon
                  title: 'Trusted Partnerships',
                  description:
                    'Our long-standing relationship with a leading industrial group has built a foundation of trust, delivering steady revenue streams.',
                },
                {
                  icon: <ShieldHalf className="h-8 w-8" />, // Replace with an appropriate icon
                  title: 'Robust Operational Structure',
                  description:
                    'Consistency driven by a strong operational framework and market expertise, ensuring smooth international trading.',
                },
                {
                  icon: <Users className="h-8 w-8" />, // Replace with an appropriate icon
                  title: 'Dedicated Team',
                  description:
                    'Committed to exceptional service, our team of experts ensures every aspect of your trading needs is handled professionally.',
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-lexden mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}