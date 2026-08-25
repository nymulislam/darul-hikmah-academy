"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiYoutube,
  FiLinkedin,
} from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { icon: <FiFacebook size={18} />, href: "https://www.facebook.com/darulhikmahislamicacademy" },
  { icon: <FiYoutube size={18} />, href: "#" },
  { icon: <FaXTwitter size={18} />, href: "#" },
  { icon: <FiLinkedin size={18} />, href: "#" },
];

const menuItems = {
  "Quick Links": [
    { name: "All Courses", href: "/courses" },
    { name: "Our Instructors", href: "/instructors" },
    { name: "About Us", href: "/about" },
    { name: "Contact Support", href: "/contact" },
  ],
  Support: [
    { name: "FAQ", href: "/faq" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Refund Policy", href: "/refund" },
  ],
};

const contactInfo = [
  { icon: <FiMapPin size={15} />, text: "Mohammadpur, Dhaka" },
  { icon: <FiPhone size={15} />, text: "+880 1989 049397" },
  { icon: <FiMail size={15} />, text: "support@dhia.com" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">

          {/* ── Brand ── */}
          <div className="space-y-6">
            <div className="bg-white p-2 rounded-xl w-fit">
              <Image
                src="/academy-logo.png"
                alt="Darul Hikmah Logo"
                width={180}
                height={55}
                className="h-9 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Experience transformative live classes tailored to your pace. Join
              a global community of certified experts.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map((s, i) => (
                <Link
                  key={i}
                  href={s.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary hover:scale-110 transition-all duration-200"
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Nav columns ── */}
          {Object.entries(menuItems).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/80 border-b border-white/10 pb-3">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-gray-300 hover:text-secondary hover:translate-x-1 transition-all duration-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary opacity-40 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ── Contact + Subscribe ── */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/80 border-b border-white/10 pb-3">
              Contact Us
            </h3>

            <div className="space-y-3">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="text-secondary flex-shrink-0">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>

            {/* Subscribe */}
            <div className="space-y-3 pt-2">
              <p className="text-[11px] font-bold uppercase tracking-widest text-white/50">
                Subscribe for updates
              </p>
              <div className="flex gap-2">
                {/* Input-এর চারপাশে Absolute Positioning দিয়ে Icon বসানো হয়েছে */}
                <div className="relative flex-1">
                  <FiMail
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 z-10 pointer-events-none"
                    size={14}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full pl-9 pr-3 py-2 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-gray-500 hover:border-secondary/50 focus:border-secondary focus:outline-none transition-all"
                  />
                </div>
                <Button
                  size="sm"
                  className="bg-secondary text-white font-bold px-4 rounded-xl shrink-0 hover:bg-secondary/80 transition-colors h-auto"
                >
                  ✓ Submit
                </Button>
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {currentYear} Darul Hikmah Islamic Academy. All rights reserved.</p>
          <p>
            Developed by{" "}
            <Link
              href="https://github.com/nymulislam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-semibold hover:underline"
            >
              Naymul Islam
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;