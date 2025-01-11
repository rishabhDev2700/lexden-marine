'use client';

import { Ship, Truck, Globe2, Package,ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/navigation';
import Link from 'next/link';

export default function Home() {
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Global Shipping Solutions for Your Business
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Reliable, efficient, and secure shipping services worldwide. Your trusted partner in global logistics.
              </p>
              <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-900 px-8 py-3 rounded-lg text-lg font-medium inline-flex items-center"
                >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
                </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-12 lg:mt-0"
            >
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Container Ship"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Ship className="h-8 w-8" />,
                title: "Global Shipping",
                description: "International shipping solutions for businesses of all sizes",
              },
              {
                icon: <Package className="h-8 w-8" />,
                title: "Bulk Shipping",
                description: "Efficient transportation across continents",
              },
              {
                icon: <Globe2 className="h-8 w-8" />,
                title: "Worldwide Network",
                description: "Connected to major ports and transportation hubs",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive shipping and logistics solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Ocean Freight",
                description: "Reliable sea freight services for all cargo types",
                image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
              },
              {
                title: "Other services",
                description: "Fast and secure transportation worldwide",
                image: "https://images.pexels.com/photos/30168286/pexels-photo-30168286/free-photo-of-in-flight-view-of-clouds-with-airbus-wing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative overflow-hidden rounded-lg group"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-200">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Phone className="h-5 w-5" />,
                      text: "+1 (555) 123-4567",
                    },
                    {
                      icon: <Mail className="h-5 w-5" />,
                      text: "contact@shipco.com",
                    },
                    {
                      icon: <MapPin className="h-5 w-5" />,
                      text: "123 Shipping Lane, Port City, PC 12345",
                    },
                  ].map((contact) => (
                    <div key={contact.text} className="flex items-center space-x-3">
                      <div className="text-blue-600">{contact.icon}</div>
                      <span className="text-gray-600">{contact.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Contact"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}