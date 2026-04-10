import { ArrowRight } from 'lucide-react';

export function Services() {
  const scrollToAppointment = (serviceTitle: string) => {
    localStorage.setItem("selectedService", serviceTitle);
    setTimeout(() => {
      const section = document.getElementById("appointment");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const services = [
    { image: "/root_canal.jpg", title: 'Root Canal Treatment', description: 'Advanced, painless root canal therapy using modern rotary techniques and apex locators.', color: '#1E88E5', tag: 'Most Popular' },
    { image: "/dental_implant.png", title: 'Dental Implants', description: 'Permanent, natural-looking tooth replacement solutions with titanium precision implants.', color: '#26A69A', tag: 'Long Lasting' },
    { image: "/braces.jpg", title: 'Braces & Orthodontics', description: 'Metal, ceramic, and clear aligner options for perfect smile alignment.', color: '#1E88E5', tag: 'For All Ages' },
    { image: "/teeth_whitening.jpg", title: 'Teeth Cleaning & Whitening', description: 'Professional scaling, polishing, and whitening for a brighter, healthier smile.', color: '#26A69A', tag: 'Quick Results' },
    { image: "/tooth_extraction.jpg", title: 'Tooth Extraction', description: 'Safe, comfortable removal procedures including wisdom tooth surgery.', color: '#1E88E5', tag: 'Pain-Free' },
    { image: "/smile_Designing.jpg", title: 'Smile Designing', description: 'Cosmetic dentistry to craft your perfect dream smile with veneers and composites.', color: '#26A69A', tag: 'Transform' },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1E88E5]/8 dark:bg-[#1E88E5]/15 rounded-full px-5 py-2 mb-5">
            <span className="text-[#1E88E5] font-semibold text-sm">Expert Care</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-5">Our Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive dental care tailored to your every need
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#1E88E5]/10 transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">

              {/* Image header */}
              <div className="relative h-44 overflow-hidden">
                <img src={service.image} alt={service.title} loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                <span className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 text-xs font-bold px-3 py-1 rounded-full"
                  style={{ color: service.color }}>
                  {service.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#1E88E5] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">{service.description}</p>
                <button onClick={() => scrollToAppointment(service.title)}
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group/btn"
                  style={{ color: service.color }}>
                  Book Appointment
                  <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
