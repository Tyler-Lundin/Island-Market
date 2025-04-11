'use client'

import Link from 'next/link'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gray-100/90 backdrop-blur-sm text-black font-serif">
      <div className="container mx-auto px-4 pt-16">
        {/* Page Title */}
        <h1 className={`${playfair.className} text-5xl md:text-6xl font-bold text-center uppercase mb-8 tracking-wide`}>
          The Island Community Ledger
        </h1>

        {/* Quick Stats (newspaper block style) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-t border-b border-black py-8 mb-12">
          {[
            ['24', 'Active Events'],
            ['156', 'Items for Sale'],
            ['42', 'Local Services'],
            ['89', 'Community Posts'],
          ].map(([count, label]) => (
            <div key={label} className="text-center">
              <h3 className="text-3xl font-bold">{count}</h3>
              <p className="text-sm uppercase tracking-widest text-black/60">{label}</p>
            </div>
          ))}
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Upcoming Events',
              items: [
                ['Farmers Market', 'Saturday, 9:00 AM - 2:00 PM', 'Local farmers and artisans showcase their products'],
                ['Cooking Class', 'Thursday, 6:00 PM', 'Learn to make traditional local dishes'],
              ],
              href: '/community/events',
            },
            {
              title: 'Items for Sale',
              items: [
                ['Vintage Kitchen Table', '$150', 'Solid oak, great condition'],
                ['Garden Tools Set', '$45', 'Complete set, barely used'],
              ],
              href: '/community/items',
            },
            {
              title: 'Local Services',
              items: [
                ['Home Repair', "John's Handyman Services", 'Licensed and insured, 20 years experience'],
                ['Tutoring', "Sarah's Learning Center", 'K-12 subjects, flexible scheduling'],
              ],
              href: '/community/services',
            },
            {
              title: 'Community Board',
              items: [
                ['Looking for Carpool', 'Posted 2 days ago', 'Need ride to SLC on weekends'],
                ['Book Club Meeting', 'Posted 1 week ago', 'Next meeting at the library'],
              ],
              href: '/community/board',
            },
            {
              title: 'Lost & Found',
              items: [
                ['Lost Dog', 'Posted yesterday', 'Golden Retriever, last seen near Main St.'],
                ['Found Keys', 'Posted 3 days ago', 'Set of car keys found in parking lot'],
              ],
              href: '/community/lost-found',
            },
            {
              title: 'Volunteer',
              items: [
                ['Food Bank Help', 'Every Saturday', 'Sorting and packing food donations'],
                ['Park Cleanup', 'Next Sunday', 'Community park maintenance'],
              ],
              href: '/community/volunteer',
            },
          ].map(({ title, items, href }) => (
            <div key={title} className="border border-black bg-white p-6">
              <h2 className="text-xl font-bold uppercase tracking-wide mb-4">{title}</h2>
              <div className="space-y-4 text-sm">
                {items.map(([header, sub, desc], idx) => (
                  <div key={idx} className="border-b border-dashed border-black pb-3">
                    <h3 className="font-semibold">{header}</h3>
                    <p className="text-black/60 italic">{sub}</p>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link
                  href={href}
                  className="text-sm uppercase font-bold underline hover:text-black/70 transition-colors"
                >
                  View All →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 border-t border-black py-8 text-center text-xs text-black/60 italic ">
          Printed Weekly by Island Market Publications · Est. 1920
        </footer>
      </div>
    </div>
  )
}
