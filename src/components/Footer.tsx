import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#f3f1eb] text-black border-t border-black font-serif">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold uppercase">Island Market</h3>
            <p className="text-black/70 leading-relaxed text-sm">
              Serving Logan, Utah since 1919. Your local source for fresh produce, handmade goods, and old-fashioned community service.
            </p>
            <div className="flex space-x-4 text-black/70">
              <a href="#" className="hover:text-black">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-black">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-black">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {['Home', 'Products', 'Community', 'About Us', 'Contact'].map((text, idx) => (
                <li key={idx}>
                  <Link href={`/${text === 'Home' ? '' : text.toLowerCase().replace(/\s/g, '')}`} className="hover:underline">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold uppercase mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-black/80">
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-black/60" />
                <span>400 E Center St, Logan, UT 84321</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-black/60" />
                <span>(435) 555-1234</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-black/60" />
                <span>info@islandmarket.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-black mt-12 pt-6 text-center text-xs text-black/60 italic">
          <p>Island Market &middot; Est. 1919 &middot; Logan, Utah</p>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
