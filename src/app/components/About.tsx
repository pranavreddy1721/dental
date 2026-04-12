import { Award, Shield, Heart, CheckCircle2 } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { StatsBar } from './StatsBar';

export function About() {
  const { t } = useLang();

  const features = [
    { icon: Award, titleKey: 'about.f1title', descKey: 'about.f1desc', color: '#1E88E5' },
    { icon: Shield, titleKey: 'about.f2title', descKey: 'about.f2desc', color: '#26A69A' },
    { icon: Heart, titleKey: 'about.f3title', descKey: 'about.f3desc', color: '#1E88E5' },
  ];

  const highlightKeys = ['about.h1', 'about.h2', 'about.h3', 'about.h4'];

  return (
    <section id="about" className="pt-24 pb-16 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">

          {/* Image Side */}
          <div className="relative order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipOSjywzAKRfHftz9m3H9Bn0Pzc9LhRk1XFXgIWN=s1360-w1360-h1020-rw"
                alt="Chougule Dental Clinic Interior"
                className="w-full h-[420px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D47A1]/40 to-transparent" />
            </div>

            {/* Floating badges */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-gradient-to-br from-[#1E88E5] to-[#26A69A] text-white rounded-3xl p-6 sm:p-7 shadow-2xl shadow-[#1E88E5]/30">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black mb-1">10K+</div>
                <div className="text-xs sm:text-sm font-medium opacity-90">{t('stats.patients')}</div>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 sm:-left-6 bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1E88E5]/10 flex items-center justify-center">
                  <Award size={20} className="text-[#1E88E5]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t('about.qualified')}</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{t('about.mds')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-2">
            <div className="inline-flex items-center gap-2 bg-[#1E88E5]/8 dark:bg-[#1E88E5]/15 rounded-full px-5 py-2 mb-6">
              <span className="text-[#1E88E5] font-semibold text-sm">{t('about.badge')}</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 leading-tight">
              {t('about.title1')}
              <span className="block text-[#1E88E5]">{t('about.title2')}</span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              {t('about.desc')}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlightKeys.map(key => (
                <div key={key} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle2 size={17} className="text-[#26A69A] flex-shrink-0" />
                  <span className="text-sm font-medium">{t(key)}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-200 group">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${f.color}12`, boxShadow: `0 4px 12px ${f.color}20` }}>
                    <f.icon size={22} style={{ color: f.color }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-[#1E88E5] transition-colors">
                      {t(f.titleKey)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{t(f.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Animated Stats Bar — full width below ── */}
        <StatsBar />
      </div>
    </section>
  );
}
