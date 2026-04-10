import { useState } from 'react';
import { X, Award, Calendar } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certifications = [
    {
      image: '/mds-certificate.jpg',
      title: 'Master of Dental Surgery (MDS)',
      description: 'Orthodontics and Dentofacial Orthopaedics – MUHS, Nashik',
      year: '2021',
      doctor: 'Dr. Rohit Chougule',
      color: '#1E88E5',
    },
    {
      image: '/MDS_Degree.jpeg',
      title: 'Master of Dental Surgery (MDS)',
      description: 'Endodontics – Specialized training in advanced root canal procedures',
      year: '2021',
      doctor: 'Dr. Pranagha Chougule',
      color: '#26A69A',
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1E88E5]/8 dark:bg-[#1E88E5]/15 rounded-full px-5 py-2 mb-5">
            <span className="text-[#1E88E5] font-semibold text-sm">Professional Excellence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-5">
            Certifications & Qualifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Recognized credentials and advanced training from MUHS, Nashik
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} onClick={() => setSelectedImage(cert.image)}
              className="cursor-pointer group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">

              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <ImageWithFallback src={cert.image} alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-bold text-gray-900">
                    Click to View
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="flex items-center gap-1.5 text-white text-xs font-bold px-3 py-1.5 rounded-full"
                    style={{ background: `linear-gradient(135deg, ${cert.color}, ${cert.color}cc)` }}>
                    <Calendar size={11} />
                    Certified {cert.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: `${cert.color}12` }}>
                    <Award size={20} style={{ color: cert.color }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#1E88E5] dark:group-hover:text-[#42A5F5] transition-colors leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold mt-1" style={{ color: cert.color }}>{cert.doctor}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed ml-13">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 text-white rounded-2xl p-2.5 transition-all duration-200">
              <X size={22} />
            </button>
            <img src={selectedImage} alt="Certificate Preview"
              className="w-full h-auto rounded-2xl shadow-2xl" />
          </div>
        </div>
      )}
    </section>
  );
}
