'use client'

import { useState } from 'react'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
    alert('Thank you for your message! We will get back to you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-gray-100/90 backdrop-blur-sm text-black font-serif">
      {/* Hero / Masthead */}
      <section className="border-b border-black py-12 text-center">
        <h1 className={`${playfair.className} text-4xl md:text-6xl font-bold uppercase tracking-wide`}>
          Contact the Editors
        </h1>
        <p className={`${playfair.className} text-md md:text-xl italic mt-2 text-black/70`}>
          Letters to the Island Market
        </p>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="border-t-2 border-b-2 border-black py-8">
          <h2 className="text-2xl font-bold uppercase mb-8 tracking-wide">
            Submit Your Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-bold uppercase tracking-wide mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-black bg-white text-black rounded-none focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wide mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-black bg-white text-black rounded-none focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-bold uppercase tracking-wide mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-black bg-white text-black rounded-none focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3 border border-black bg-black text-white font-bold uppercase tracking-wide hover:bg-white hover:text-black transition-all"
              >
                Send Letter
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer Quote */}
      <footer className="border-t border-black py-8 text-center text-sm italic text-black/70">
        Est. 1920 · Publishing your voices for over a century
      </footer>
    </div>
  )
}
