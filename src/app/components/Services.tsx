import { useState } from 'react';
import { ArrowRight, Clock, CheckCircle2, RotateCcw, CalendarCheck } from 'lucide-react';

interface Service {
  image: string;
  title: string;
  shortDesc: string;
  color: string;
  tag: string;
  flipable: true;
  duration: string;
  details: string[];
  note: string;
  bookable?: never;
}
interface BookableService {
  image: string;
  title: string;
  shortDesc: string;
  color: string;
  tag: string;
  flipable?: never;
  bookable: true;
  duration?: never;
  details?: never;
  note?: never;
}
type ServiceItem = Service | BookableService;

export function Services() {
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});

  const scrollToAppointment = (serviceTitle: string) => {
    localStorage.setItem('selectedService', serviceTitle);
    setTimeout(() => {
      document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const services: ServiceItem[] = [
    {
      image: '/root_canal.jpg',
      title: 'Root Canal Treatment',
      shortDesc: 'Advanced, painless root canal therapy using modern rotary techniques.',
      color: '#1E88E5',
      tag: 'Most Popular',
      flipable: true,
      duration: '60–90 min',
      details: [
        'Completely painless under local anaesthesia',
        'Rotary endodontics for precision & speed',
        'Digital apex locator for accuracy',
        'Same-day crown placement available',
        'Preserves your natural tooth structure',
      ],
      note: 'Performed by Dr. Pranagha Chougule — MDS Endodontics',
    },
    {
      image: '/dental_implant.png',
      title: 'Dental Implants',
      shortDesc: 'Permanent, natural-looking tooth replacement with titanium implants.',
      color: '#26A69A',
      tag: 'Long Lasting',
      bookable: true,
    },
    {
      image: '/braces.jpg',
      title: 'Braces & Orthodontics',
      shortDesc: 'Metal, ceramic & clear aligner options for perfect smile alignment.',
      color: '#1E88E5',
      tag: 'For All Ages',
      flipable: true,
      duration: '12–24 months',
      details: [
        'Traditional metal & ceramic braces',
        'Invisible clear aligners available',
        'Damon self-ligating braces option',
        'Retainers provided post-treatment',
        'Child, teen & adult treatment plans',
      ],
      note: 'Performed by Dr. Rohit Chougule — MDS Orthodontics',
    },
    {
      image: '/teeth_whitening.jpg',
      title: 'Teeth Cleaning & Whitening',
      shortDesc: 'Professional scaling, polishing and whitening for a brighter smile.',
      color: '#26A69A',
      tag: 'Quick Results',
      bookable: true,
    },
    {
      image: '/tooth_extraction.jpg',
      title: 'Tooth Extraction',
      shortDesc: 'Safe, comfortable removal procedures including wisdom tooth surgery.',
      color: '#1E88E5',
      tag: 'Pain-Free',
      flipable: true,
      duration: '20–45 min',
      details: [
        'Simple & surgical extractions',
        'Atraumatic wisdom tooth removal',
        'Advanced anaesthesia for zero pain',
        'Post-op care & recovery guidance',
        'Same-day replacement options discussed',
      ],
      note: 'All extractions handled with utmost care & precision',
    },
    {
      image: '/smile_Designing.jpg',
      title: 'Smile Designing',
      shortDesc: 'Cosmetic dentistry to craft your perfect dream smile.',
      color: '#26A69A',
      tag: 'Transform',
      bookable: true,
    },
  ];

  const toggleFlip = (i: number) => {
    setFlipped(prev => ({ ...prev, [i]: !prev[i] }));
  };

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1E88E5]/8 dark:bg-[#1E88E5]/15 rounded-full px-5 py-2 mb-5">
            <span className="text-[#1E88E5] font-semibold text-sm">Expert Care</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Our Services</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive dental care tailored to your every need
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-3 flex items-center justify-center gap-1.5">
            <RotateCcw size={13} />
            Tap cards with a flip icon to learn more about the treatment
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const isFlipped = !!flipped[index];
            const isFlipable = 'flipable' in service && service.flipable;

            return (
              <div
                key={index}
                className="relative"
                style={{ perspective: '1200px', minHeight: '380px' }}
              >
                {/* Flip container */}
                <div
                  className="w-full h-full transition-transform duration-700"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    minHeight: '380px',
                  }}
                >

                  {/* ── FRONT FACE ── */}
                  <div
                    className="absolute inset-0 rounded-3xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-shadow duration-300"
                    style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                  >
                    {/* Image */}
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      {/* Tag */}
                      <span
                        className="absolute top-3.5 right-3.5 text-xs font-bold px-3 py-1 rounded-full bg-white/93 dark:bg-gray-900/90 backdrop-blur-sm"
                        style={{ color: service.color }}
                      >
                        {service.tag}
                      </span>
                      {/* Flip hint badge */}
                      {isFlipable && (
                        <span className="absolute top-3.5 left-3.5 bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm text-gray-600 dark:text-gray-300 text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                          <RotateCcw size={10} />
                          Flip for info
                        </span>
                      )}
                    </div>

                    {/* Body */}
                    <div className="p-6 flex flex-col h-[calc(100%-11rem)]">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed flex-1">
                        {service.shortDesc}
                      </p>

                      <div className="mt-5 flex items-center gap-3">
                        {/* Book Appointment — for bookable cards */}
                        {'bookable' in service && service.bookable && (
                          <button
                            onClick={() => scrollToAppointment(service.title)}
                            className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group/btn"
                            style={{ color: service.color }}
                          >
                            Book Appointment
                            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        )}

                        {/* Flip to info — for flipable cards */}
                        {isFlipable && (
                          <button
                            onClick={() => toggleFlip(index)}
                            className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl text-white transition-all duration-200 hover:scale-105 ml-auto"
                            style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}cc)` }}
                          >
                            <RotateCcw size={13} />
                            Learn More
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Bottom accent */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-0.5"
                      style={{ background: `linear-gradient(90deg, ${service.color}60, transparent)` }}
                    />
                  </div>

                  {/* ── BACK FACE (only for flipable) ── */}
                  {isFlipable && (
                    <div
                      className="absolute inset-0 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-lg flex flex-col"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        background: `linear-gradient(145deg, ${service.color}08, ${service.color}18)`,
                      }}
                    >
                      {/* Back header */}
                      <div
                        className="px-6 py-5 flex items-center justify-between"
                        style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}cc)` }}
                      >
                        <div>
                          <p className="text-white/80 text-xs font-semibold uppercase tracking-wider mb-0.5">Treatment Details</p>
                          <h3 className="text-white font-bold text-base leading-tight">{service.title}</h3>
                        </div>
                        <button
                          onClick={() => toggleFlip(index)}
                          className="w-9 h-9 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors flex-shrink-0"
                          aria-label="Flip back"
                        >
                          <RotateCcw size={16} className="text-white" />
                        </button>
                      </div>

                      {/* Back body */}
                      <div className="flex-1 px-6 py-5 flex flex-col bg-white dark:bg-gray-800">
                        {/* Duration */}
                        <div
                          className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 self-start"
                          style={{ backgroundColor: `${service.color}12`, color: service.color }}
                        >
                          <Clock size={11} />
                          Approx. {(service as Service).duration}
                        </div>

                        {/* Bullet list */}
                        <ul className="space-y-2.5 flex-1">
                          {(service as Service).details.map((point, pi) => (
                            <li key={pi} className="flex items-start gap-2.5">
                              <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: service.color }} />
                              <span className="text-gray-700 dark:text-gray-300 text-sm leading-snug">{point}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Note */}
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 italic">
                          {(service as Service).note}
                        </p>

                        {/* Book from back */}
                        <button
                          onClick={() => scrollToAppointment(service.title)}
                          className="mt-4 w-full inline-flex items-center justify-center gap-2 text-sm font-semibold py-3 rounded-xl text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
                          style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}cc)`, boxShadow: `0 4px 15px ${service.color}30` }}
                        >
                          <CalendarCheck size={15} />
                          Book Appointment
                        </button>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
