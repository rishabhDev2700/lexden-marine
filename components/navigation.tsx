'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Ship, Menu } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Sheet >
            <SheetTrigger className='md:hidden'><Menu /></SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Navigate</SheetTitle>
                <SheetDescription className="flex flex-col">
                  {[
                    { name: 'Home', href: '/' },
                    { name: 'Services', href: '/services' },
                    { name: 'Gallery', href: '/gallery' },
                    { name: 'Contact', href: '/contact' },
                    { name: 'About', href: '/about' },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="relative inline-flex items-center px-4 py-2 my-2 text-sm font-medium text-gray-900"
                    >
                      {item.name}

                    </Link>
                  ))}
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center space-x-2">
            <Ship className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Lexden Marine</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {[
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'Gallery', href: '/gallery' },

              { name: 'Contact', href: '/contact' },
              { name: 'About', href: '/about' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 top-full h-0.5 w-full bg-blue-600"
                  />
                )}
              </Link>
            ))}
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                Get Quote
              </motion.button>
            </DialogTrigger>
            <DialogContent className='m-4 w-11/12 mx-auto rounded-md md:w-auto'>
              <DialogHeader>
                <DialogTitle>Please fill the form</DialogTitle>
                <DialogDescription>
                  We will soon get in touch with you
                </DialogDescription>
              </DialogHeader>
              <form method='post' className='grid lg:grid-cols-2'>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" required
                    className="mt-1 p-2 block w-full border rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email" placeholder="Your email" required
                    className="mt-1 p-2 block w-full border rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>

                <div className="mb-4 lg:col-span-2">
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

                <div className="mb-4 lg:col-span-2">
                  <label htmlFor="enquiry" className="block text-sm font-medium text-gray-700">Enquiry</label>
                  <textarea id="enquiry" name="enquiry" rows={6} placeholder="Write your message here" required
                    className="mt-1 p-2 block w-full border rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
                </div>

                <div className="flex justify-start">
                  <button type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 duration-150">
                    Submit
                  </button>
                </div>
              </form>
            </DialogContent>
          </Dialog>

        </div>
      </div>
    </nav>
  );
}