import { MapPin, Phone, Mail, Facebook, Instagram, Heart } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Root Canal Treatment', 'Dental Implants', 'Braces & Orthodontics',
    'Teeth Whitening', 'Smile Designing', 'Tooth Extraction',
  ];

  return (
    <footer className="bg-gray-950 text-white">
      {/* Top CTA band */}
      <div className="bg-gradient-to-r from-[#1565C0] via-[#1E88E5] to-[#26A69A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-extrabold text-white mb-1">Ready for a healthier smile?</h3>
              <p className="text-white/80 text-sm">Book your appointment today — Mon to Sat, 9:30 AM – 9 PM</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="tel:+917350075545"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1565C0] rounded-xl font-bold text-sm hover:scale-105 hover:shadow-xl transition-all duration-300">
                <Phone size={16} />Call Now
              </a>
              <a href="#appointment"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/15 border border-white/30 text-white rounded-xl font-bold text-sm hover:bg-white/25 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                Book Online
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-2xl overflow-hidden ring-2 ring-white/10">
                <img src="Chougule_logo.jpg" alt="Chougule Dental" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-bold text-white leading-tight">Chougule Dental</p>
                <p className="text-[11px] text-[#42A5F5] font-semibold tracking-wide uppercase">Multispeciality Clinic</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Most Trusted Dental Clinic in Ashta — providing advanced, painless, and affordable dental care since 2019.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/chouguledentalclinic/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:bg-[#1E88E5] hover:border-[#1E88E5] flex items-center justify-center transition-all duration-300" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="https://www.instagram.com/chougule_dental_clinic5?igsh=cm5icXE2Zm5xaGJv" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:bg-[#E1306C] hover:border-[#E1306C] flex items-center justify-center transition-all duration-300" aria-label="Instagram">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href}
                    className="text-gray-400 hover:text-[#42A5F5] text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {services.map(service => (
                <li key={service}>
                  <a href="#services" className="text-gray-400 hover:text-[#42A5F5] text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#42A5F5] flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm leading-relaxed">Chougule Multispeciality Dental Clinic, Ashta, Sangli, Maharashtra 416301</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#4DB6AC] flex-shrink-0" />
                <a href="tel:+917350075545" className="text-gray-400 hover:text-[#42A5F5] text-sm transition-colors">+91 73500 75545</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#42A5F5] flex-shrink-0" />
                <a href="mailto:chouguledentalclinic5@gmail.com" className="text-gray-400 hover:text-[#42A5F5] text-sm transition-colors break-all">chouguledentalclinic5@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            © 2026 Chougule Multispeciality Dental Clinic. All Rights Reserved.
          </p>
          <p className="text-gray-600 text-xs flex items-center gap-1.5">
            Made with <Heart size={12} className="text-red-400 fill-red-400" /> in Ashta, Maharashtra
          </p>
        </div>
      </div>
    </footer>
  );
}
