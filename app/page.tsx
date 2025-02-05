'use client';

import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image1 from "../assets/ship.webp"
import Image from 'next/image';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import stockImage from "@/assets/stock.webp"
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

      {/* Hero Section */}
      <section className="relative bg-lexden text-white py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="lg:grid lg:grid-cols-2 lg:gap-4 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-xl font-semibold lg:text-4xl md:text-6xl mb-6">
                Dry bulk commodity purchasing and trading
              </h1>
              <p className="text-md font-light lg:text-xl text-indigo-100 mb-8">
                With decades of trading and shipping expertise, Lexden Marine is able to efficiently procure dry bulk commodities from global markets              </p>

            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-8 lg:mt-0"
            >
              <Image
                src={Image1}
                alt="Container Ship"
                className="rounded-lg shadow-xl max-h-[220px] md:max-h-[360px] lg:h-96 object-cover"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="bg-white pb-12 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className='text-4xl mx-4 my-8 text-center'>Our Services</h2>
            <p className="text-md text-gray-600 max-w-2xl mx-auto">
              Comprehensive procurement and trading of dry bulk commodities
            </p>
          </motion.div>
          <div className='grid md:grid-cols-2 gap-8'>


            {services.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-[#CACADC]/20 p-6 rounded-lg shadow-md shadow-[#CACADC] flex items-center justify-between"
              >
                <div className="text-lexden mx-2">{feature.icon}</div>
                <h3 className="text-md lg:text-xl font-semibold mx-2 text-center">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
          <Link href="/services" className='mt-8'>
            <Button className='bg-lexden hover:bg-indigo-800'>
              Explore Services
            </Button>
          </Link>

        </div>
      </section>
      <Separator className='w-1/2 mx-auto h-0.5' />
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className='text-4xl mx-4 my-8 text-center'>Key Statistics</h2>
          <div className="grid md:grid-cols-3 gap-y-16 lg:gap-y-12 md:gap-8 justify-evenly lg:min-h-[35vh] pt-4">
            {[
              { number: '750K–1M', label: 'Metric Tonnes of Raw Sugar Traded Annually' },
              { number: '700K–1.2M', label: 'Metric Tonnes of Soybeans Traded Annually' },
              { number: '600K–1.5M', label: 'Metric Tonnes of Wheat Traded Annually' },
              { number: '200K–400K', label: 'Metric Tonnes of Corn Traded Annually' },
              { number: '100K–300K', label: 'Metric Tonnes of Pulses Traded Annually' },
              { number: '200K–400K', label: 'Metric Tonnes of Edible Oils Traded Annually' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center lg:place-content-start"
              >
                <div className="text-4xl font-bold text-lexden mb-2">{stat.number}</div>
                <div className="text-md text-gray-600">{stat.label}</div>
              </motion.div>

            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-gray-600 my-8 font-light text-sm">(Note: These figures highlight our significant presence and capacity in the global commodities market, demonstrating our ability to handle large-scale trading operations efficiently.)
            </div>
          </motion.div>
        </div>
      </section>
      <Separator className='w-1/2 mx-auto h-0.5' />

      {/* Contact Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-xl border border-black/5 overflow-hidden"
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
                      text: "contact@lexdenmarine.com",
                    },
                    {
                      icon: <MapPin className="h-5 w-5" />,
                      text: "123 Shipping Lane, Port City, PC 12345",
                    },
                  ].map((contact) => (
                    <div key={contact.text} className="flex items-center space-x-3">
                      <div className="text-lexden">{contact.icon}</div>
                      <span className="text-gray-600">{contact.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image
                  src={stockImage}
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