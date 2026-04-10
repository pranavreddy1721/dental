import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1E88E5]/8 dark:bg-[#1E88E5]/15 rounded-full px-5 py-2 mb-5">
            <span className="text-[#1E88E5] font-semibold text-sm">Visit Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-5">
            Contact & Location
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get in touch or visit us at our clinic in Ashta, Sangli
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Contact Info */}
          <div className="space-y-4">
            {[
              {
                icon: MapPin, color: '#1E88E5',
                title: 'Clinic Address',
                content: (
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    First Floor, above DCC Bank (Jilha Madhyawarti Bank),<br />
                    near Chandu Wadapav, Amruta Awati,<br />
                    Ashta, Sangli, Maharashtra – 416301
                  </p>
                )
              },
              {
                icon: Phone, color: '#26A69A',
                title: 'Phone Number',
                content: (
                  <a href="tel:+917350075545" className="text-gray-700 dark:text-gray-300 font-semibold hover:text-[#1E88E5] transition-colors text-sm">
                    +91 73500 75545
                  </a>
                )
              },
              {
                icon: Mail, color: '#1E88E5',
                title: 'Email Address',
                content: (
                  <a href="mailto:chouguledentalclinic5@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-[#1E88E5] transition-colors text-sm break-all">
                    chouguledentalclinic5@gmail.com
                  </a>
                )
              },
              {
                icon: Clock, color: '#26A69A',
                title: 'Working Hours',
                content: (
                  <div className="space-y-1.5 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Monday – Saturday</span>
                      <span className="font-semibold text-[#1E88E5]">9:30 AM – 2 PM</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Evening</span>
                      <span className="font-semibold text-[#1E88E5]">4:30 PM – 9 PM</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Sunday</span>
                      <span className="font-semibold text-red-500">Closed</span>
                    </div>
                  </div>
                )
              },
            ].map(({ icon: Icon, color, title, content }) => (
              <div key={title} className="flex gap-4 p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-[#1E88E5]/30 transition-colors duration-300">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${color}12` }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1.5">{title}</p>
                  {content}
                </div>
              </div>
            ))}

            <a href="https://maps.app.goo.gl/inbBThmYUqL7f3RL7" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-gradient-to-r from-[#1E88E5] to-[#26A69A] text-white font-semibold hover:shadow-xl hover:shadow-[#1E88E5]/30 hover:scale-[1.02] transition-all duration-300 text-sm">
              <Navigation size={18} />
              Get Directions on Google Maps
            </a>
          </div>

          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 h-[500px]">
            <iframe
              title="Chougule Dental Clinic Location"
              src="https://www.google.com/maps?q=Chougule%20Dental%20Clinic%20Ashta%20Sangli&output=embed"
              width="100%" height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
