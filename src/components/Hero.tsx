import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
});

export default function Hero() {
  return (
    <section className="relative pb-24 pt-8 flex flex-col items-center  overflow-hidden">
      {/* Background - faded newspaper vibe */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpeg"
          alt="Island Market"
          fill
          className="object-cover object-center scale-110"
          priority
        />
        <div className="absolute inset-0 bg-white/75" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 py-12 max-w-2xl w-full text-center">
        {/* "Masthead" */}
        <div className="border-y border-black py-4 mb-8">
          <h1 className={`${playfair.className} text-5xl font-bold uppercase tracking-wide text-black`}>
            Island Market
          </h1>
          <p className={`${playfair.className} text-lg italic text-black/80 mt-2`}>
            A century of community, tradition, and quality
          </p>
        </div>

        {/* Feature Story Blurb */}
        <p className="text-base text-black/90 leading-relaxed mb-10">
          Since 1920, we’ve been more than just a grocery store. We’re a gathering place, 
          a supporter of local artisans, and a cornerstone of the Logan community.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 w-full">
          <Link 
            href="/products" 
            className="w-full py-3 bg-black text-white font-semibold tracking-wide uppercase rounded-none border border-black hover:bg-white hover:text-black transition-all"
          >
            Shop Local
          </Link>
          <Link 
            href="/about" 
            className="w-full py-3 bg-white text-black border border-black font-semibold tracking-wide uppercase rounded-none hover:bg-black hover:text-white transition-all"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-black/70 text-sm">
          <div className="w-4 h-8 border-2 border-black rounded-full flex items-center justify-center">
            <div className="w-1 h-3 bg-black rounded-full animate-bounce" />
          </div>
          <span className="mt-1">Scroll</span>
        </div>
      </div>
    </section>
  );
}
