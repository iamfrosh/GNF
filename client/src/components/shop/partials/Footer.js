 import React from "react";
import moment from "moment";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Brand About Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">GNF Clothing</h2>
          <p className="text-sm leading-relaxed">
            GNF Clothing represents every believer, dreamer, and hustler who never gave up — 
            because they knew, <span className="text-white font-medium">God Never Fails.</span> 
            Our style speaks boldness, our message speaks faith. This is 
            <span className="text-white font-medium"> streetwear with a purpose.</span>
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#shop" className="hover:text-white transition-colors">Shop</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            <li><a href="#faq" className="hover:text-white transition-colors">FAQs</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Get in Touch</h2>
          <p className="text-sm">Have questions or want to collaborate?</p>
          <p className="text-sm mt-2">
            📞 <span className="font-medium">+234 810 529 9120</span>
          </p>
          <p className="text-sm">
            📧 <a href="mailto:info@gnfclothing.com" className="hover:text-white">info@gnfclothing.com</a>
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="#" className="hover:text-white transition-colors">🌍</a>
            <a href="#" className="hover:text-white transition-colors">🔥</a>
            <a href="#" className="hover:text-white transition-colors">💫</a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 mt-10 pt-4 text-center text-sm text-gray-400">
        © {moment().format("YYYY")} GNF Clothing. Designed & Developed by FroshX.
      </div>
    </footer>
  );
};

export default Footer;
