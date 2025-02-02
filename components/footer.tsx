'use client';

import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-lexden to-[#020246] text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Lexden Marine</h3>
                        <p className="text-indigo-100">
                            Empowering businesses with seamless procurement and trading of dry bulk commodities
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="hover:underline text-indigo-100">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:underline text-indigo-100">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="hover:underline text-indigo-100">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:underline text-indigo-100">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-3">
                                <Phone className="text-white h-5 w-5" />
                                <span className="text-indigo-100">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="text-white h-5 w-5" />
                                <span className="text-indigo-100">contact@lexdenmarine.com</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <MapPin className="text-white h-5 w-5" />
                                <span className="text-indigo-100">51 Moorgate, London, England, United Kingdom, EC2R 6LL </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 border-t border-indigo-800 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-indigo-100 text-sm">
                        © {new Date().getFullYear()} Lexdenmarine Ltd. All rights reserved.
                    </p>
                    {/* <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-indigo-100 hover:text-white">
                            <Facebook className="h-5 w-5" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-indigo-100 hover:text-white">
                            <Twitter className="h-5 w-5" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-indigo-100 hover:text-white">
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-indigo-100 hover:text-white">
                            <Instagram className="h-5 w-5" />
                        </a>
                    </div> */}
                </div>
            </div>
        </footer>
    );
}
