import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-[1080px] mx-auto px-4 lg:px-8 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-12">

          {/* Column 1: About, Privacy, Features */}
          <div className="flex flex-col space-y-5">
            <Link href="/about" className="text-xl text-gray-800 hover:text-blue-600 transition-colors duration-200">
              About Us
            </Link>
            <Link href="/privacy" className="text-xl text-gray-800 hover:text-blue-600 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/features" className="text-xl text-gray-800 hover:text-blue-600 transition-colors duration-200">
              New Release Features
            </Link>
          </div>

          {/* Column 2: Contact, FAQs */}
          <div className="flex flex-col space-y-5">
            <Link href="/contact" className="text-xl text-gray-800 hover:text-blue-600 transition-colors duration-200">
              Contact Us
            </Link>
            <Link href="/faq" className="text-xl text-gray-800 hover:text-blue-600 transition-colors duration-200">
              FAQs
            </Link>
          </div>

          {/* Column 3: Help Center */}
          <div className="flex flex-col space-y-5">
            <Link href="/helpcenter" className="text-xl text-gray-800 hover:text-blue-600 transition-colors duration-200">
              Help Center
            </Link>
          </div>

          {/* Column 4: Logos */}
          <div className="flex flex-col items-start space-y-3">
            {/* Boat Logo Placeholder */}
            <Image
              src="/boat-logo.svg"
              alt="NavyGo Boat Logo"
              width={290}
              height={116}
              priority
            />
            {/* NavyGo Text Logo Placeholder */}
            <Image
              src="/navygo-logo.svg"
              alt="NavyGo Logo"
              width={300}
              height={58}
            />
          </div>

        </div>

        {/* Download Section - Below the grid */}
        <div className="flex flex-col items-center w-fit">
          <h3 className="text-2xl font-semibold text-gray-900 mb-5">
            Download NavyGo
          </h3>
          <div className="flex items-center space-x-4">
            {/* Google Play Badge Placeholder */}
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <Image
                src="/google-play-placeholder.svg"
                alt="Get it on Google Play"
                width={150}
                height={44}
              />
            </Link>
            {/* App Store Badge Placeholder */}
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <Image
                src="/app-store-placeholder.svg"
                alt="Download on the App Store"
                width={130}
                height={40}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;