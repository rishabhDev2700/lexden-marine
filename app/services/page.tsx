'use client';

import { motion } from 'framer-motion';
import { Ship, Truck, Plane, Package, Warehouse, Clock, Globe2, Shield } from 'lucide-react';
import Navigation from '@/components/navigation';

export default function Services() {
  const services = [
    {
      icon: <Ship className="h-12 w-12" />,
      title: 'Ocean Freight',
      description: 'International sea freight solutions for all cargo types, from containers to bulk shipments.',
      features: ['Container shipping', 'Bulk cargo', 'Project cargo', 'Temperature controlled'],
    },
    {
      icon: <Truck className="h-12 w-12" />,
      title: 'Land Transport',
      description: 'Comprehensive ground transportation services across continents with real-time tracking.',
      features: ['Full truckload', 'Less than truckload', 'Intermodal', 'Last mile delivery'],
    },
    {
      icon: <Plane className="h-12 w-12" />,
      title: 'Air Freight',
      description: 'Express air freight services for time-sensitive shipments worldwide.',
      features: ['Express delivery', 'Charter services', 'Door-to-door', 'Dangerous goods'],
    },
    {
      icon: <Warehouse className="h-12 w-12" />,
      title: 'Warehousing',
      description: 'State-of-the-art warehousing and distribution solutions for your logistics needs.',
      features: ['Storage', 'Inventory management', 'Pick & pack', 'Distribution'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-blue-900 text-white py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive shipping and logistics solutions tailored to your business needs
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
                  <div className="text-blue-600 mb-4">{service.icon}</div>
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-700">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
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
              <p className="text-gray-600">Experience the difference with our premium shipping solutions</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Clock className="h-8 w-8" />,
                  title: '24/7 Support',
                  description: 'Round-the-clock customer service to assist you anytime',
                },
                {
                  icon: <Globe2 className="h-8 w-8" />,
                  title: 'Global Network',
                  description: 'Extensive network covering all major global routes',
                },
                {
                  icon: <Shield className="h-8 w-8" />,
                  title: 'Secure Shipping',
                  description: 'Advanced tracking and security for your cargo',
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
                  <div className="text-blue-600 mb-4 flex justify-center">{feature.icon}</div>
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