import Hero from '@/components/Hero';
import InstagramCard from '@/components/InstagramCard';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Instagram Section */}
      <section className="py-16 bg-gray-100/90 border-y border-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#2C3E50]">Community & Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Instagram Embed */}
              <InstagramCard />

              {/* Community Highlights */}
              <div className="space-y-6">
                <div className="bg-white/90 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-[#2C3E50]">Featured Products</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#FFC107] rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                      <p className="text-sm text-[#7F8C8D]">Local Honey</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <p className="text-sm text-[#7F8C8D]">Fresh Bread</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/90 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-[#2C3E50]">Upcoming Events</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#FF9800] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">15</span>
                      </div>
                      <div>
                        <p className="font-medium text-[#2C3E50]">Local Farmers Market</p>
                        <p className="text-sm text-[#7F8C8D]">Saturday, 9 AM - 2 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#FF9800] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">22</span>
                      </div>
                      <div>
                        <p className="font-medium text-[#2C3E50]">Artisan Showcase</p>
                        <p className="text-sm text-[#7F8C8D]">Saturday, 10 AM - 4 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Local Products */}
            <div className="text-center p-6 bg-white/90 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#FFC107] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#2C3E50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#2C3E50]">Local Craft Products</h3>
              <p className="text-[#7F8C8D]">
                Discover unique local products from Utah&apos;s finest craftsmen and artisans.
              </p>
            </div>

            {/* Fresh Produce */}
            <div className="text-center p-6 bg-white/90 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#2C3E50]">Fresh Produce</h3>
              <p className="text-[#7F8C8D]">
                Quality fresh fruits and vegetables sourced from local farmers.
              </p>
            </div>

            {/* Community Focus */}
            <div className="text-center p-6 bg-white/90 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#FF9800] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#2C3E50]">Community First</h3>
              <p className="text-[#7F8C8D]">
                Proudly serving the Logan community for over a century.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Store Hours Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-[#2C3E50]">Store Hours</h2>
            <div className="space-y-2 text-lg text-[#2C3E50]">
              <p>Monday - Thursday: 7:00 AM - 10:00 PM</p>
              <p>Friday - Saturday: 7:00 AM - 11:00 PM</p>
              <p>Sunday: 8:00 AM - 10:00 PM</p>
            </div>
            <div className="mt-8">
              <p className="text-[#2C3E50]">
                We accept SNAP/EBT, credit cards, and debit cards
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
