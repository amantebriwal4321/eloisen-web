import { Instagram, Mail, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-eloisen-green text-eloisen-cream pt-24 pb-12 border-t border-eloisen-gold/10">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-serif tracking-widest mb-6">ELOISEN</h2>
            <p className="text-sm font-light leading-relaxed opacity-80 max-w-sm mb-8">
              The Art of Luxury Scented Candles. Hand-poured with pure soy wax to elevate your everyday rituals into memorable experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/eloisencandles" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-eloisen-cream/30 flex items-center justify-center hover:bg-eloisen-gold hover:border-eloisen-gold transition-colors duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="mailto:eloisencandles@gmail.com" className="w-10 h-10 rounded-full border border-eloisen-cream/30 flex items-center justify-center hover:bg-eloisen-gold hover:border-eloisen-gold transition-colors duration-300">
                <Mail className="w-4 h-4" />
              </a>
              <a href="tel:+917060002415" className="w-10 h-10 rounded-full border border-eloisen-cream/30 flex items-center justify-center hover:bg-eloisen-gold hover:border-eloisen-gold transition-colors duration-300">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="uppercase tracking-widest text-eloisen-gold text-xs font-semibold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm font-light opacity-80">
              <li><a href="#collection" className="hover:text-eloisen-gold transition-colors">Our Collection</a></li>
              <li><a href="#story" className="hover:text-eloisen-gold transition-colors">Brand Story</a></li>
              <li><a href="#experience" className="hover:text-eloisen-gold transition-colors">Scent Experience</a></li>
              <li><a href="#" className="hover:text-eloisen-gold transition-colors">Candle Care</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="uppercase tracking-widest text-eloisen-gold text-xs font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm font-light opacity-80 mb-8">
              <li><a href="mailto:eloisencandles@gmail.com" className="hover:text-eloisen-gold transition-colors">eloisencandles@gmail.com</a></li>
              <li><a href="tel:+917060002415" className="hover:text-eloisen-gold transition-colors">+91 7060002415</a></li>
              <li><a href="tel:+918433011143" className="hover:text-eloisen-gold transition-colors">+91 8433011143</a></li>
            </ul>
            <a href="https://wa.me/917060002415" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center space-x-2 w-full px-6 py-3 bg-[#25D366] hover:bg-[#1DA851] text-white text-sm font-semibold transition-colors duration-300">
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-eloisen-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-light opacity-60">
          <p>&copy; {new Date().getFullYear()} Eloisen Luxury Candles. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-eloisen-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-eloisen-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
