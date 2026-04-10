import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{url: string; alt: string} | null>(null);

  const images = [
    { url: '/Doctor_chair.jpg', alt: 'Doctor Consultation Area' },
    { url: '/Dental_chair2.jpg', alt: 'Advanced Dental Treatment Setup' },
    { url: '/Dental_chair.jpg', alt: 'Modern Dental Equipment' },
    { url: '/clinic_reception.jpg', alt: 'Reception & Welcome Area' },
    { url: '/clinic_indoor.jpg', alt: 'Clinic Interior & Hygiene' },
    { url: '/Treatment_room.jpg', alt: 'Premium Treatment Room' },
  ];

  return (
    <section id="gallery" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1E88E5]/8 dark:bg-[#1E88E5]/15 rounded-full px-5 py-2 mb-5">
            <span className="text-[#1E88E5] font-semibold text-sm">Our Clinic</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-5">Clinic Gallery</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our modern infrastructure and hygienic environment
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((image, index) => (
            <div key={index} onClick={() => setSelectedImage(image)}
              className="group relative overflow-hidden rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-400 cursor-pointer aspect-[4/3]">
              <img src={image.url} alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-3">
                  <ZoomIn size={22} className="text-white" />
                </div>
              </div>
              <p className="absolute bottom-0 left-0 right-0 p-4 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                {image.alt}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/92 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}>
          <button className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 text-white rounded-2xl p-2.5 transition-all duration-200 backdrop-blur-sm">
            <X size={22} />
          </button>
          <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <img src={selectedImage.url} alt={selectedImage.alt}
              className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl" />
            <p className="text-white/70 text-center mt-4 text-sm">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}
