import { Award, Shield, Heart, CheckCircle2 } from 'lucide-react';

export function About() {
  const features = [
    { icon: Award, title: '5+ Years Experience', description: 'Trusted by thousands of patients across Sangli district', color: '#1E88E5' },
    { icon: Shield, title: 'Advanced Technology', description: 'State-of-the-art digital X-ray and sterilization equipment', color: '#26A69A' },
    { icon: Heart, title: 'Compassionate Care', description: 'Gentle, patient-first approach for all age groups', color: '#1E88E5' },
  ];

  const highlights = ['Painless Procedures', 'Affordable Pricing', 'ISO Hygienic Standards', 'Emergency Care'];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image Side */}
          <div className="relative order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipOSjywzAKRfHftz9m3H9Bn0Pzc9LhRk1XFXgIWN=s1360-w1360-h1020-rw"
                alt="Chougule Dental Clinic Interior"
                className="w-full h-[420px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D47A1]/40 to-transparent"></div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-gradient-to-br from-[#1E88E5] to-[#26A69A] text-white rounded-3xl p-6 sm:p-7 shadow-2xl shadow-[#1E88E5]/30">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black mb-1">10K+</div>
                <div className="text-xs sm:text-sm font-medium opacity-90">Happy Patients</div>
              </div>
            </div>

            {/* Second floating badge */}
            <div className="absolute -top-4 -left-4 sm:-left-6 bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1E88E5]/10 flex items-center justify-center">
                  <Award size={20} className="text-[#1E88E5]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Qualified</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">MDS Specialists</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-2">
            <div className="inline-flex items-center gap-2 bg-[#1E88E5]/8 dark:bg-[#1E88E5]/15 rounded-full px-5 py-2 mb-6">
              <span className="text-[#1E88E5] font-semibold text-sm">About Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 leading-tight">
              Chougule Multispeciality
              <span className="block text-[#1E88E5]">Dental Clinic</span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Most Trusted Dental Clinic in Ashta, Maharashtra. We deliver advanced, painless, and affordable dental care — combining modern technology with genuine compassion.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle2 size={17} className="text-[#26A69A] flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-200 group">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${feature.color}12`, boxShadow: `0 4px 12px ${feature.color}20` }}>
                    <feature.icon size={22} style={{ color: feature.color }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-[#1E88E5] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
