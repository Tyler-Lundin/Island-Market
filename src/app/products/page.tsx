'use client'

import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export default function Products() {
  const categories = [
    {
      title: 'Local Craft Products',
      description: "Unique items from Utah's finest artisans and craftsmen",
      items: ['Handmade Soaps', 'Local Honey', 'Artisan Breads', 'Craft Jams'],
    },
    {
      title: 'Fresh Produce',
      description: 'Locally sourced fruits and vegetables',
      items: ['Seasonal Fruits', 'Fresh Vegetables', 'Local Herbs', 'Organic Options'],
    },
    {
      title: 'Grocery Staples',
      description: 'Essential items for your daily needs',
      items: ['Dairy Products', 'Bread & Bakery', 'Canned Goods', 'Snacks'],
    },
    {
      title: 'Fresh Coffee',
      description: 'Locally roasted coffee and tea selections',
      items: ['Local Roasts', 'Specialty Blends', 'Organic Teas', 'Coffee Accessories'],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100/90 backdrop-blur-sm text-black font-serif">
      {/* Hero Header */}
      <section className="border-b border-black py-16 text-center">
        <h1 className={`${playfair.className} text-5xl md:text-6xl font-bold uppercase tracking-wide mb-4`}>
          General Store Offerings
        </h1>
        <p className="text-lg italic text-black/60">
          Handpicked goods from your local community
        </p>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="border border-black bg-white p-6 shadow-sm"
              >
                <h2 className="text-2xl font-bold uppercase mb-2 tracking-wide">
                  {category.title}
                </h2>
                <p className="italic text-black/60 mb-4">{category.description}</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="border-t border-black py-16 text-center">
        <h2 className="text-3xl font-bold uppercase tracking-wide mb-4">
          Visit Our Storefront
        </h2>
        <p className="text-lg italic text-black/60 mb-6">
          A warm smile, helpful hands, and good old-fashioned service await.
        </p>
        <a
          href="/contact"
          className="inline-block border border-black text-black px-6 py-3 uppercase tracking-wide hover:bg-black hover:text-white transition-colors"
        >
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-xs text-black/50 italic">
        Published Weekly · Market St. Mercantile · Est. 1918
      </footer>
    </div>
  )
}
