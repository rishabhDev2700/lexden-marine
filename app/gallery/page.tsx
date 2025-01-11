'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/navigation';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';
export default function Gallery() {
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
                                <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
                                <p className="text-xl text-blue-100">
                                    Pictures and videos
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

                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl font-bold mb-4">Pictures and Videos</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Our core values guide everything we do, from how we treat our employees to how we serve our customers.
                            </p>
                        </motion.div>
                        <div className="mx-8 lg:mx-0">

                            <Carousel opts={{
                                align: "start",
                                loop: true,
                            }}>
                                <CarouselContent className='flex items-center justify-center'>
                                    <CarouselItem><Image alt="image" width={1024} height={200} src="https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /></CarouselItem>
                                    <CarouselItem><Image alt="image" width={1024} height={200} src="https://images.pexels.com/photos/3075996/pexels-photo-3075996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /></CarouselItem>
                                    <CarouselItem><Image alt="image" width={1024} height={200} src="https://images.pexels.com/photos/3840447/pexels-photo-3840447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /></CarouselItem>
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>

                    </div>
                </section>
            </main>
        </div>
    );
}