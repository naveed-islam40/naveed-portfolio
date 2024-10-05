'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa"
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-purple-100 to-indigo-100 border-t border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Naveed Islam</h2>
            <p className="text-gray-600 mb-6">
              I am a senior software engineer with 1 year of experience in industry standards. I specialize in HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB, and MySQL.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/naveed_islam20/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/naveed-islam-2a3a3a324/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">
                <FaLinkedinIn className="w-6 h-6" />
              </a>
              <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors">Home</Link></li>
              <li><Link href="/projects" className="text-gray-600 hover:text-purple-600 transition-colors">Projects</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-purple-600 transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-purple-600 transition-colors">Contact</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Me</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-purple-600" />
                <a href="mailto:naveedislam20ni@gmail.com" className="text-gray-600 hover:text-purple-600 transition-colors">naveedislam20ni@gmail.com</a>
              </li>
              <li className="text-gray-600">Phone: 03010771731</li>
              <li className="text-gray-600">Johr Town, Molana shoukat Ali Road Lahore</li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {currentYear} Naveed Islam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer