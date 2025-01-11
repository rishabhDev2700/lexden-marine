'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/navigation';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
export default function About() {
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
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                    >
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in touch</h1>
                                <p className="text-xl text-blue-100">
                                    Leading the way in global shipping and logistics since 1970, delivering excellence and reliability to businesses worldwide.
                                </p>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="mt-12 lg:mt-0"
                            >
                                <img
                                    src="https://images.pexels.com/photos/8937118/pexels-photo-8937118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Shipping Port"
                                    className="rounded-lg shadow-xl"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </section>

                {/* Stats Section */}
                {/* <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { number: '50+', label: 'Years Experience' },
                                { number: '100+', label: 'Countries Served' },
                                { number: '1M+', label: 'Shipments Delivered' },
                                { number: '10K+', label: 'Happy Clients' },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                                    <div className="text-gray-600">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section> */}

                {/* Values Section */}
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl font-bold mb-4">Fill the form below</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Our core values guide everything we do, from how we treat our employees to how we serve our customers.
                            </p>
                        </motion.div>

                        <div className="grid self-center">

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-lg shadow-lg shadow-black/20 text-center md:w-2/3 md:mx-auto"
                            >
                                <form method='post' className='grid lg:grid-cols-2 gap-8 text-left'>
                                    <div className="my-2">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                        <input type="text" id="name" name="name" placeholder="Your name" required
                                            className="mt-1 p-2 block w-full border rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                    </div>

                                    <div className="my-2">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                        <input type="email" id="email" name="email" placeholder="Your email" required
                                            className="mt-1 p-2 block w-full border rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                    </div>

                                    <div className="my-2 lg:col-span-2">
                                        <label htmlFor="service-type" className="block text-sm font-medium text-gray-700">Service Type</label>
                                        <Select>
                                            <SelectTrigger className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500">
                                                <SelectValue placeholder="Select a service" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="freight">Freight Shipping</SelectItem>
                                                <SelectItem value="parcel">Parcel Delivery</SelectItem>
                                                <SelectItem value="international">
                                                    International Shipping
                                                </SelectItem>
                                                <SelectItem value="custom">Custom Solutions</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="my-2 lg:col-span-2">
                                        <label htmlFor="enquiry" className="block text-sm font-medium text-gray-700">Enquiry</label>
                                        <textarea id="enquiry" name="enquiry" rows={6} placeholder="Write your message here" required
                                            className="mt-1 p-2 block w-full border rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
                                    </div>

                                    <div className="flex">
                                        <button type="submit"
                                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}