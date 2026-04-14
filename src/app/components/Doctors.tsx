import { GraduationCap, Stethoscope } from 'lucide-react';

export function Doctors() {
  const doctors = [
    {
      name: 'Dr. Rohit Chougule',
      designation: 'Dental Surgeon',
      qualification: 'BDS, MDS (Orthodontics)',
      image: '/mds-certificate.jpg',
      description: 'Orthodontic Specialist focused on advanced teeth alignment, braces, and bite correction using latest techniques.',
      speciality: 'Orthodontics',
      color: '#1E88E5',
    },
    {
      name: 'Dr. Pranagha Chougule',
      designation: 'Dental Surgeon',
      qualification: 'BDS, MDS (Endodontics)',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800',
      description: 'Endodontic expert providing completely painless root canal treatments and comprehensive restorative care.',
      speciality: 'Endodontics',
      color: '#26A69A',
    },
  ];

  return (
    <section id="doctors" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1E88E5]/8 dark:bg-[#1E88E5]/15 rounded-full px-5 py-2 mb-5">
            <span className="text-[#1E88E5] font-semibold text-sm">Our Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-5">Meet Our Doctors</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            MDS specialists committed to your dental health and perfect smile
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {doctors.map((doctor, index) => (
            <div key={index}
              className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">

              {/* Photo */}
              <div className="relative h-72 overflow-hidden">
                <img src={doctor.image} alt={doctor.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                {/* Speciality badge */}
                <span className="absolute top-4 left-4 text-white text-xs font-bold px-4 py-1.5 rounded-full"
                  style={{ background: `linear-gradient(135deg, ${doctor.color}, ${doctor.color}cc)` }}>
                  {doctor.speciality}
                </span>

                {/* Name overlay */}
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-xl font-bold text-white mb-0.5">{doctor.name}</h3>
                  <p className="text-white/80 text-sm">{doctor.designation}</p>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4 p-3 rounded-2xl bg-gray-50 dark:bg-gray-700/50">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${doctor.color}15` }}>
                    <GraduationCap size={18} style={{ color: doctor.color }} />
                  </div>
                  <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm">{doctor.qualification}</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{doctor.description}</p>
                <a href="#appointment"
                  className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${doctor.color}, ${doctor.color}dd)`, boxShadow: `0 4px 15px ${doctor.color}30` }}>
                  <Stethoscope size={15} />
                  Book Consultation
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
