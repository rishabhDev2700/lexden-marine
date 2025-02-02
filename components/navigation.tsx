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
import Image from 'next/image';
import logo from "@/assets/logo.webp"
export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  const links = [
    { name: 'Home', href: '/', ariaLabel: 'Go to the Home page' },
    { name: 'Services', href: '/services', ariaLabel: 'View our Services' },
    { name: 'Gallery', href: '/gallery', ariaLabel: 'Browse our Gallery' },
    { name: 'Contact', href: '/contact', ariaLabel: 'Get in touch with us on the Contact page' },
    { name: 'About', href: '/about', ariaLabel: 'Learn more About us' },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Sheet >
            <SheetTrigger className='md:hidden' aria-label="Open main menu" ><Menu /></SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Navigate</SheetTitle>
                <SheetDescription className="flex flex-col">
                  {links.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="relative inline-flex items-center px-4 py-2 my-2 text-sm font-medium text-gray-900"
                      aria-label={item.ariaLabel}
                    >
                      {item.name}

                    </Link>
                  ))}
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center space-x-2 mx-auto 2xl:mx-0">
            <Image src={logo} alt="Lexden marine Ltd." width="56" />
            <span className="text-xl font-bold text-gray-900">Lexden Marine</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 top-full h-0.5 w-full bg-lexden"
                  />
                )}
              </Link>
            ))}
          </div>
          
        </div>
      </div>
    </nav>
  );
}