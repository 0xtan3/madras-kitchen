"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, Phone, Clock } from "lucide-react"
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6"



export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-block mb-6">
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-bold text-primary tracking-wide">
                  MADRAS
                </span>
                <span className="font-serif font-bold text-sm text-foreground/80 tracking-[0.3em] -mt-1">
                  KITCHEN
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Authentic South Indian flavours crafted with passion. From our family to yours.
            </p>
            <div className="flex gap-3 mt-6">
              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/madra_s88?utm_source=qr&igsh=M3dzZGg5YWQ2cnBv"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md transition-all duration-300"
                style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </motion.a>
              {/* Facebook */}
              <motion.a
                href="https://www.facebook.com/share/1B7bZ5ZcDU/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md transition-all duration-300"
                style={{ backgroundColor: '#1877F2' }}
                aria-label="Facebook"
              >
                <FaFacebookF className="w-5 h-5" />
              </motion.a>
              {/* TikTok */}
              <motion.a
                href="https://www.tiktok.com/@madras.kitchen8?_r=1&_t=ZS-96yni6F9hbA"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md transition-all duration-300"
                style={{ backgroundColor: '#010101' }}
                aria-label="TikTok"
              >
                <FaTiktok className="w-5 h-5" style={{ color: '#ff0050' }} />
              </motion.a>
            </div>
          </motion.div>


          {/* Restaurant */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-xl border border-border bg-background/50"
          >
            <h3 className="font-serif text-xl font-bold text-primary mb-2">Madras Kitchen Restaurant</h3>
            <div className="w-10 h-0.5 bg-primary mb-5 rounded-full" />
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-foreground/90 font-medium leading-relaxed">
                  5/190 Stoddard Road<br />
                  Mount Roskill<br />
                  Auckland 1041
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:096501744"
                  className="text-foreground/90 font-medium hover:text-primary transition-colors duration-300"
                >
                  +64 09 650 1744
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-foreground/90 font-medium">
                  Mon - Sun: 11am - 10pm
                </p>
              </div>
            </div>
          </motion.div>

          {/* Food Truck */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 rounded-xl border border-border bg-background/50"
          >
            <h3 className="font-serif text-xl font-bold text-primary mb-2">Madras Kitchen Food Truck</h3>
            <div className="w-10 h-0.5 bg-primary mb-5 rounded-full" />
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-foreground/90 font-medium leading-relaxed">
                  24 Manuroa Road<br />
                  Takanini<br />
                  Auckland 2110
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+64273498859"
                  className="text-foreground/90 font-medium hover:text-primary transition-colors duration-300"
                >
                  +64 27 349 8859
                </a>
              </div>
              <p className="inline-block px-3 py-1 bg-secondary/20 text-secondary font-semibold rounded-full text-sm border border-secondary/30">
                Temporarily Closed
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Madras Kitchen. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Crafted with passion in Auckland, New Zealand
          </p>
        </motion.div>
      </div>
    </footer>
  )
}