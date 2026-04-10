import { Users, Building2, Shield, DollarSign, Zap, Clock } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    { icon: Users, title: 'MDS Specialists', description: '5+ years with dedicated orthodontic & endodontic experts', color: '#1E88E5', stat: '2 Doctors' },
    { icon: Building2, title: 'Modern Facility', description: 'Digital X-ray, rotary endodontics, autoclave sterilization', color: '#26A69A', stat: 'ISO Clean' },
    { icon: Shield, title: 'Trusted by Thousands', description: '10,000+ patients treated across Ashta and Sangli region', color: '#1E88E5', stat: '10K+ Patients' },
    { icon: DollarSign, title: 'Affordable Pricing', description: 'Quality dental care at the most reasonable costs in Ashta', color: '#26A69A', stat: 'Best Value' },
    { icon: Zap, title: 'Painless Treatment', description: 'Latest anesthesia & rotary techniques for zero discomfort', color: '#1E88E5', stat: '0 Pain' },
    { icon: Clock, title: 'Flexible Hours', description: 'Morning and evening slots — Mon to Saturday for your ease', color: '#26A69A', stat: 'Mon–Sat' },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1E88E5]/8 dark:bg-[#1E88E5]/15 rounded-full px-5 py-2 mb-5">
            <span className="text-[#1E88E5] font-semibold text-sm">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-5">
            Most Trusted Dental Clinic in Ashta
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We combine expertise, modern technology, and heartfelt care
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div key={index}
              className="group bg-white dark:bg-gray-800 rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-1 border border-gray-100 dark:border-gray-700 relative overflow-hidden">

              {/* Background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-5 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2"
                style={{ background: reason.color }}></div>

              <div className="flex items-start gap-4 mb-4">
                <div className="w-13 h-13 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${reason.color}12`, boxShadow: `0 4px 15px ${reason.color}20` }}>
                  <reason.icon size={24} style={{ color: reason.color }} />
                </div>
                <span className="ml-auto text-xs font-bold px-3 py-1 rounded-full mt-1"
                  style={{ backgroundColor: `${reason.color}12`, color: reason.color }}>
                  {reason.stat}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#1E88E5] dark:group-hover:text-[#42A5F5] transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
