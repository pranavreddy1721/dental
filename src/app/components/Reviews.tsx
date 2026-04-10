import { Star, ExternalLink, Quote } from 'lucide-react';
import { useEffect, useState, useRef } from "react";

const reviews = [
  { name:'Rajesh Patil', rating:5, text:'Excellent service! Dr. Rohit Chougule is highly professional and caring. The clinic is very clean and modern. My root canal treatment was completely painless. Highly recommended!', time:'2 weeks ago', initial:'R' },
  { name:'Sneha Deshmukh', rating:5, text:'Best dental clinic in Ashta! The staff is very friendly and the doctors are extremely skilled. Got my teeth whitening done here and the results are amazing!', time:'1 month ago', initial:'S' },
  { name:'Amit Kulkarni', rating:5, text:'Very happy with the dental implant treatment. Dr. Pranagha explained everything clearly and the procedure was smooth. The clinic maintains high hygiene standards.', time:'3 weeks ago', initial:'A' },
  { name:'Priya Sharma', rating:5, text:'Outstanding experience! Got braces for my daughter and the treatment has been excellent. The doctors are patient and explain every step. Affordable prices too!', time:'1 week ago', initial:'P' },
  { name:'Sanjay Jadhav', rating:5, text:'Professional and reliable dental clinic. The equipment is modern and the treatment is painless. I have been visiting for regular checkups and always satisfied.', time:'2 months ago', initial:'S' },
  { name:'Kavita Shinde', rating:5, text:'Fantastic service! The smile designing treatment exceeded my expectations. Dr. Chougule is an expert and the results are beautiful. Thank you so much!', time:'3 weeks ago', initial:'K' },
  { name:'Vishal Pawar', rating:5, text:'Highly recommend this clinic! Very professional staff, clean environment, and advanced treatment options. Got my wisdom tooth extracted without any pain.', time:'1 month ago', initial:'V' },
  { name:'Meera Kale', rating:5, text:'Best dental care in Ashta! The doctors are experienced and gentle. My entire family gets treatment here. Excellent hygiene and affordable rates.', time:'2 weeks ago', initial:'M' },
  { name:'Rahul Desai', rating:5, text:'Amazing experience with dental implants. Dr. Rohit is very knowledgeable and made me feel comfortable throughout the procedure. Top-notch facility!', time:'1 month ago', initial:'R' },
  { name:'Anita Joshi', rating:5, text:'The best dental clinic in the region! Professional staff, advanced equipment, and excellent results. My teeth cleaning was thorough and painless.', time:'2 weeks ago', initial:'A' },
  { name:'Suresh Patil', rating:5, text:'Very impressed with the quality of care. The doctors take time to explain everything and ensure you are comfortable. Highly recommend for all dental needs!', time:'3 weeks ago', initial:'S' },
  { name:'Deepa Kadam', rating:5, text:'Excellent orthodontic treatment! My son got braces here and the results are fantastic. Dr. Pranagha is very patient and caring with children.', time:'1 month ago', initial:'D' },
  { name:'Mahesh Shinde', rating:5, text:'Outstanding dental care! The root canal treatment was completely painless. The clinic is spotlessly clean and the staff is very professional.', time:'2 months ago', initial:'M' },
  { name:'Pooja Kulkarni', rating:5, text:'Best dental clinic experience! The smile makeover I got here completely transformed my confidence. Dr. Chougule is truly an expert in cosmetic dentistry.', time:'1 week ago', initial:'P' },
  { name:'Vijay Jadhav', rating:5, text:'Highly professional and caring doctors. Got my dental crown done here and it looks natural and perfect. Very satisfied with the treatment!', time:'3 weeks ago', initial:'V' },
  { name:'Savita Pawar', rating:5, text:'Wonderful experience! The doctors are friendly and explain everything clearly. My teeth whitening results are better than I expected. Thank you!', time:'2 weeks ago', initial:'S' },
  { name:'Anil More', rating:5, text:'Excellent dental clinic with state-of-the-art facilities. The doctors are highly skilled and the staff is very cooperative. Great experience overall!', time:'1 month ago', initial:'A' },
  { name:'Manisha Deshmukh', rating:5, text:'Very happy with my dental treatment here. The clinic is modern and hygienic. Dr. Rohit is very professional and gentle. Highly recommended!', time:'2 weeks ago', initial:'M' },
  { name:'Sachin Kale', rating:5, text:'Best dental care in Ashta! Got my dental implants done here and the results are perfect. The doctors are experts and the facility is top-class.', time:'3 weeks ago', initial:'S' },
  { name:'Sunita Patil', rating:5, text:'Amazing dental clinic! The treatment is painless and affordable. The doctors are very caring and professional. My whole family comes here for dental care.', time:'1 month ago', initial:'S' },
];

const avatarColors = [
  'from-[#1E88E5] to-[#1565C0]',
  'from-[#26A69A] to-[#00796B]',
  'from-[#1E88E5] to-[#26A69A]',
  'from-[#0D47A1] to-[#1E88E5]',
  'from-[#00796B] to-[#26A69A]',
];

function StarRow({ count = 5, size = 14 }: { count?: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={size} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export function Reviews() {
  const [ratingDisplay, setRatingDisplay] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Animate rating number
  useEffect(() => {
    let start = 0;
    const timer = setInterval(() => {
      start += 0.08;
      if (start >= 5.0) { start = 5.0; clearInterval(timer); }
      setRatingDisplay(Number(start.toFixed(1)));
    }, 16);
    return () => clearInterval(timer);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setActiveIndex(i => (i + 1) % reviews.length);
    }, 4000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isPaused]);

  // Show 3 visible cards around active
  const visibleCount = 5;
  const getVisible = () => {
    const out = [];
    for (let i = 0; i < visibleCount; i++) {
      out.push((activeIndex + i) % reviews.length);
    }
    return out;
  };

  const visible = getVisible();
  const featured = reviews[activeIndex];
  const featuredColor = avatarColors[activeIndex % avatarColors.length];

  return (
    <section id="reviews" className="py-28 bg-[#F8FAFF] dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1E88E5]/8 dark:bg-[#1E88E5]/15 rounded-full px-5 py-2 mb-5">
            <span className="text-[#1E88E5] font-semibold text-sm">Patient Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Hundreds of happy families trust Chougule Dental Clinic for all their dental needs
          </p>
        </div>

        {/* ── Rating Summary Bar ── */}
        <div className="flex flex-wrap justify-center gap-6 mb-14">
          {/* Google badge */}
          <div className="flex items-center gap-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-7 py-5 shadow-md">
            <svg width="32" height="32" viewBox="0 0 24 24" className="flex-shrink-0">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-black text-gray-900 dark:text-white">{ratingDisplay}</span>
                <span className="text-gray-400 text-sm font-medium">/ 5.0</span>
              </div>
              <StarRow size={15} />
              <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 font-medium">Google Rating</p>
            </div>
          </div>

          {/* Stats */}
          {[
            { value: '20+', label: 'Verified Reviews' },
            { value: '100%', label: '5-Star Rating' },
            { value: '10K+', label: 'Happy Patients' },
          ].map(stat => (
            <div key={stat.label} className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-8 py-5 shadow-md text-center">
              <span className="text-2xl font-black text-[#1E88E5] mb-0.5">{stat.value}</span>
              <span className="text-gray-500 dark:text-gray-400 text-xs font-medium">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* ── Featured Review + Side Cards ── */}
        <div className="grid lg:grid-cols-5 gap-6 mb-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}>

          {/* Featured card — left large */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl p-8 shadow-xl relative overflow-hidden flex flex-col">
            {/* Decorative quote bg */}
            <Quote size={80} className="absolute -top-4 -right-4 text-[#1E88E5]/6 dark:text-[#1E88E5]/10 pointer-events-none" />

            <div className="flex items-center gap-4 mb-6">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${featuredColor} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <span className="text-white font-black text-xl">{featured.initial}</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-base">{featured.name}</h4>
                <p className="text-gray-400 text-xs mt-0.5">{featured.time}</p>
              </div>
              <div className="ml-auto">
                <svg width="20" height="20" viewBox="0 0 24 24" className="opacity-60">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
            </div>

            <StarRow size={17} />

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4 flex-1 text-[15px]">
              "{featured.text}"
            </p>

            <div className="mt-6 pt-5 border-t border-gray-100 dark:border-gray-700 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Verified Google Review</span>
            </div>
          </div>

          {/* Right side — 2x2 grid of smaller cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {visible.slice(1, 5).map((idx) => {
              const r = reviews[idx];
              const col = avatarColors[idx % avatarColors.length];
              return (
                <button key={idx} onClick={() => setActiveIndex(idx)} className="text-left group">
                  <div className={`bg-white dark:bg-gray-800 border rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col cursor-pointer ${
                    idx === activeIndex
                      ? 'border-[#1E88E5] ring-1 ring-[#1E88E5]/30'
                      : 'border-gray-100 dark:border-gray-700 hover:border-[#1E88E5]/40'
                  }`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${col} flex items-center justify-center flex-shrink-0`}>
                        <span className="text-white font-bold text-sm">{r.initial}</span>
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-900 dark:text-white text-sm truncate">{r.name}</p>
                        <p className="text-gray-400 text-xs">{r.time}</p>
                      </div>
                    </div>
                    <StarRow size={12} />
                    <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed mt-2.5 line-clamp-3 flex-1">
                      {r.text}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Dot indicators ── */}
        <div className="flex justify-center gap-1.5 mb-10">
          {reviews.map((_, i) => (
            <button key={i} onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? 'w-6 h-2 bg-[#1E88E5]'
                  : 'w-2 h-2 bg-gray-300 dark:bg-gray-700 hover:bg-[#1E88E5]/50'
              }`}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="text-center">
          <a href="https://www.google.com/maps/search/?api=1&query=Chougule+Multispeciality+Dental+Clinic+Ashta"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1E88E5] to-[#26A69A] text-white rounded-2xl font-semibold hover:shadow-xl hover:shadow-[#1E88E5]/30 hover:scale-105 transition-all duration-300 text-sm">
            <ExternalLink size={17} />
            View All Reviews on Google
          </a>
        </div>

      </div>
    </section>
  );
}
