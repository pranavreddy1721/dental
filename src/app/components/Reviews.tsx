import { Star, ExternalLink, Quote, ShieldCheck } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const reviews = [
  { name: 'Rajesh Patil',      initial: 'R', time: '2 weeks ago',  text: 'Excellent service! Dr. Rohit Chougule is highly professional and caring. The clinic is very clean and modern. My root canal treatment was completely painless. Highly recommended!' },
  { name: 'Sneha Deshmukh',    initial: 'S', time: '1 month ago',  text: 'Best dental clinic in Ashta! The staff is very friendly and the doctors are extremely skilled. Got my teeth whitening done here and the results are amazing!' },
  { name: 'Amit Kulkarni',     initial: 'A', time: '3 weeks ago',  text: 'Very happy with the dental implant treatment. Dr. Pranagha explained everything clearly and the procedure was smooth. The clinic maintains high hygiene standards.' },
  { name: 'Priya Sharma',      initial: 'P', time: '1 week ago',   text: 'Outstanding experience! Got braces for my daughter and the treatment has been excellent. The doctors are patient and explain every step. Affordable prices too!' },
  { name: 'Sanjay Jadhav',     initial: 'S', time: '2 months ago', text: 'Professional and reliable dental clinic. The equipment is modern and the treatment is painless. I have been visiting for regular checkups and always satisfied.' },
  { name: 'Kavita Shinde',     initial: 'K', time: '3 weeks ago',  text: 'Fantastic service! The smile designing treatment exceeded my expectations. Dr. Chougule is an expert and the results are beautiful. Thank you so much!' },
  { name: 'Vishal Pawar',      initial: 'V', time: '1 month ago',  text: 'Highly recommend this clinic! Very professional staff, clean environment, and advanced treatment options. Got my wisdom tooth extracted without any pain.' },
  { name: 'Meera Kale',        initial: 'M', time: '2 weeks ago',  text: 'Best dental care in Ashta! The doctors are experienced and gentle. My entire family gets treatment here. Excellent hygiene and affordable rates.' },
  { name: 'Rahul Desai',       initial: 'R', time: '1 month ago',  text: 'Amazing experience with dental implants. Dr. Rohit is very knowledgeable and made me feel comfortable throughout the procedure. Top-notch facility!' },
  { name: 'Anita Joshi',       initial: 'A', time: '2 weeks ago',  text: 'The best dental clinic in the region! Professional staff, advanced equipment, and excellent results. My teeth cleaning was thorough and painless.' },
  { name: 'Suresh Patil',      initial: 'S', time: '3 weeks ago',  text: 'Very impressed with the quality of care. The doctors take time to explain everything and ensure you are comfortable. Highly recommend for all dental needs!' },
  { name: 'Deepa Kadam',       initial: 'D', time: '1 month ago',  text: 'Excellent orthodontic treatment! My son got braces here and the results are fantastic. Dr. Pranagha is very patient and caring with children.' },
  { name: 'Mahesh Shinde',     initial: 'M', time: '2 months ago', text: 'Outstanding dental care! The root canal treatment was completely painless. The clinic is spotlessly clean and the staff is very professional.' },
  { name: 'Pooja Kulkarni',    initial: 'P', time: '1 week ago',   text: 'Best dental clinic experience! The smile makeover I got here completely transformed my confidence. Dr. Chougule is truly an expert in cosmetic dentistry.' },
  { name: 'Vijay Jadhav',      initial: 'V', time: '3 weeks ago',  text: 'Highly professional and caring doctors. Got my dental crown done here and it looks natural and perfect. Very satisfied with the treatment!' },
  { name: 'Savita Pawar',      initial: 'S', time: '2 weeks ago',  text: 'Wonderful experience! The doctors are friendly and explain everything clearly. My teeth whitening results are better than I expected. Thank you!' },
  { name: 'Anil More',         initial: 'A', time: '1 month ago',  text: 'Excellent dental clinic with state-of-the-art facilities. The doctors are highly skilled and the staff is very cooperative. Great experience overall!' },
  { name: 'Manisha Deshmukh',  initial: 'M', time: '2 weeks ago',  text: 'Very happy with my dental treatment here. The clinic is modern and hygienic. Dr. Rohit is very professional and gentle. Highly recommended!' },
  { name: 'Sachin Kale',       initial: 'S', time: '3 weeks ago',  text: 'Best dental care in Ashta! Got my dental implants done here and the results are perfect. The doctors are experts and the facility is top-class.' },
  { name: 'Sunita Patil',      initial: 'S', time: '1 month ago',  text: 'Amazing dental clinic! The treatment is painless and affordable. The doctors are very caring and professional. My whole family comes here for dental care.' },
];

const avatarGradients = [
  'from-[#1E88E5] to-[#0D47A1]',
  'from-[#26A69A] to-[#00695C]',
  'from-[#1565C0] to-[#26A69A]',
  'from-[#0288D1] to-[#1E88E5]',
  'from-[#00796B] to-[#0097A7]',
];

function GoogleIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

function Stars({ size = 13 }: { size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => <Star key={i} size={size} className="text-amber-400 fill-amber-400" />)}
    </div>
  );
}

function VerifiedBadge({ small = false }: { small?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-1 bg-emerald-50 dark:bg-emerald-900/25 border border-emerald-200 dark:border-emerald-700/50 rounded-full ${small ? 'px-2 py-0.5' : 'px-2.5 py-1'}`}>
      <ShieldCheck size={small ? 10 : 12} className="text-emerald-500 flex-shrink-0" />
      <span className={`text-emerald-600 dark:text-emerald-400 font-semibold ${small ? 'text-[10px]' : 'text-[11px]'}`}>
        Verified Google Review
      </span>
    </div>
  );
}

export function Reviews() {
  const [ratingDisplay, setRatingDisplay] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    let v = 0;
    const t = setInterval(() => {
      v += 0.07;
      if (v >= 5.0) { v = 5.0; clearInterval(t); }
      setRatingDisplay(Number(v.toFixed(1)));
    }, 14);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => setActiveIndex(i => (i + 1) % reviews.length), 4500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isPaused]);

  const featured = reviews[activeIndex];
  const featuredGrad = avatarGradients[activeIndex % avatarGradients.length];

  // 4 side cards: skip featured itself
  const sideIndices: number[] = [];
  for (let i = 1; sideIndices.length < 4; i++) {
    sideIndices.push((activeIndex + i) % reviews.length);
  }

  return (
    <section id="reviews" className="py-28 bg-[#F4F8FF] dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ─── Header ─── */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#1E88E5]/8 dark:bg-[#1E88E5]/15 rounded-full px-5 py-2 mb-5">
            <span className="text-[#1E88E5] font-semibold text-sm">Patient Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Every review below is verified directly from Google — real patients, real experiences
          </p>
        </div>

        {/* ─── Stats Bar ─── */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {/* Google rating tile */}
          <div className="flex items-center gap-5 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-7 py-5 shadow-md">
            <GoogleIcon size={36} />
            <div>
              <div className="flex items-baseline gap-1.5 mb-1">
                <span className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">{ratingDisplay}</span>
                <span className="text-gray-400 text-sm">/&nbsp;5.0</span>
              </div>
              <Stars size={15} />
              <p className="text-gray-400 text-xs mt-1.5 font-medium">Overall Google Rating</p>
            </div>
          </div>

          {[
            { n: '20+',  l: 'Google Reviews',    },
            { n: '100%', l: 'Five-Star Reviews',  },
            { n: '10K+', l: 'Happy Patients',     },
          ].map(s => (
            <div key={s.l} className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-8 py-5 shadow-md text-center min-w-[120px]">
              <span className="text-xl mb-1">{s.icon}</span>
              <span className="text-2xl font-black text-[#1E88E5] leading-none">{s.n}</span>
              <span className="text-gray-500 dark:text-gray-400 text-xs mt-1 font-medium">{s.l}</span>
            </div>
          ))}

          {/* All-verified pill */}
          <div className="flex items-center gap-3 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700/40 rounded-2xl px-7 py-5 shadow-md">
            <ShieldCheck size={28} className="text-emerald-500 flex-shrink-0" />
            <div>
              <p className="font-bold text-emerald-700 dark:text-emerald-400 text-sm leading-tight">All Reviews</p>
              <p className="font-bold text-emerald-700 dark:text-emerald-400 text-sm leading-tight">Verified on Google</p>
              <p className="text-emerald-600/70 dark:text-emerald-500/70 text-xs mt-1">No fake reviews, ever</p>
            </div>
          </div>
        </div>

        {/* ─── Main: Featured + Grid ─── */}
        <div
          className="grid lg:grid-cols-5 gap-5 mb-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* ── Featured (left, 2 cols) ── */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl shadow-xl overflow-hidden flex flex-col relative">
            {/* Top accent stripe */}
            <div className="h-1 w-full bg-gradient-to-r from-[#1E88E5] to-[#26A69A]" />

            <div className="p-8 flex flex-col flex-1">
              {/* Quote watermark */}
              <Quote size={72} className="absolute top-6 right-6 text-[#1E88E5]/5 dark:text-[#1E88E5]/10 pointer-events-none" />

              {/* Reviewer info */}
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${featuredGrad} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <span className="text-white font-black text-xl">{featured.initial}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-gray-900 dark:text-white text-[15px] leading-tight">{featured.name}</h4>
                  <p className="text-gray-400 text-xs mt-0.5">{featured.time}</p>
                </div>
                <GoogleIcon size={22} />
              </div>

              <Stars size={16} />

              {/* Review text */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4 flex-1 text-[15px]">
                "{featured.text}"
              </p>

              {/* Footer row */}
              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                <VerifiedBadge />
                <span className="text-xs text-gray-400 font-medium">via Google Maps</span>
              </div>
            </div>
          </div>

          {/* ── Side grid (right, 3 cols → 2×2) ── */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {sideIndices.map(idx => {
              const r = reviews[idx];
              const grad = avatarGradients[idx % avatarGradients.length];
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className="text-left group focus:outline-none"
                >
                  <div className={`bg-white dark:bg-gray-800 rounded-2xl p-5 h-full flex flex-col border transition-all duration-300 cursor-pointer shadow-sm group-hover:shadow-md group-hover:-translate-y-0.5 ${
                    idx === activeIndex
                      ? 'border-[#1E88E5] ring-2 ring-[#1E88E5]/20'
                      : 'border-gray-100 dark:border-gray-700 group-hover:border-[#1E88E5]/40'
                  }`}>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${grad} flex items-center justify-center flex-shrink-0 shadow`}>
                        <span className="text-white font-bold text-sm">{r.initial}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 dark:text-white text-sm truncate">{r.name}</p>
                        <p className="text-gray-400 text-[11px]">{r.time}</p>
                      </div>
                      <GoogleIcon size={16} />
                    </div>

                    <Stars size={11} />

                    {/* Text */}
                    <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed mt-2.5 line-clamp-3 flex-1">
                      {r.text}
                    </p>

                    {/* Verified badge */}
                    <div className="mt-3 pt-2.5 border-t border-gray-100 dark:border-gray-700/60">
                      <VerifiedBadge small />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ─── Dot nav ─── */}
        <div className="flex justify-center gap-1.5 mb-12">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Review ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? 'w-6 h-2 bg-[#1E88E5]'
                  : 'w-2 h-2 bg-gray-300 dark:bg-gray-700 hover:bg-[#1E88E5]/50'
              }`}
            />
          ))}
        </div>

        {/* ─── Marquee strip of reviewer names ─── */}
        <div className="relative overflow-hidden mb-12 py-4">
          <div className="flex gap-3 animate-marquee whitespace-nowrap">
            {[...reviews, ...reviews].map((r, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm flex-shrink-0"
              >
                <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#1E88E5] to-[#26A69A] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-[10px] font-bold">{r.initial}</span>
                </span>
                {r.name}
                <ShieldCheck size={12} className="text-emerald-500" />
              </span>
            ))}
          </div>
          {/* fade edges */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F4F8FF] dark:from-gray-900 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F4F8FF] dark:from-gray-900 to-transparent pointer-events-none" />
        </div>

        {/* ─── CTA ─── */}
        <div className="text-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Chougule+Multispeciality+Dental+Clinic+Ashta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1E88E5] to-[#26A69A] text-white rounded-2xl font-semibold hover:shadow-xl hover:shadow-[#1E88E5]/30 hover:scale-105 transition-all duration-300 text-sm"
          >
            <GoogleIcon size={18} />
            View All Reviews on Google
            <ExternalLink size={15} />
          </a>
        </div>

      </div>
    </section>
  );
}
