import { Phone, Calendar, ChevronDown, Shield, Clock, Star } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { StatsBarDark } from './StatsBar';

export function Hero() {
  const { t } = useLang();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068"
          alt="Modern Dental Clinic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D47A1]/92 via-[#1565C0]/85 to-[#00695C]/80" />
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, #26A69A 0%, transparent 50%), radial-gradient(circle at 80% 20%, #42A5F5 0%, transparent 50%)' }} />
      </div>

      {/* Tooth watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden xl:block">
        <svg width="500" height="500" viewBox="0 0 100 100" fill="white">
          <path d="M50 5 C30 5, 10 20, 10 40 C10 55, 15 65, 20 75 C25 85, 30 95, 40 95 C45 95, 48 90, 50 85 C52 90, 55 95, 60 95 C70 95, 75 85, 80 75 C85 65, 90 55, 90 40 C90 20, 70 5, 50 5Z"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
              <span className="text-white/90 text-sm font-semibold">{t('hero.badge')}</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.05]">
              {t('hero.title1')}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#80DEEA] to-[#81D4FA]">
                {t('hero.title2')}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-lg leading-relaxed">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a href="tel:+917350075545"
                className="group inline-flex items-center gap-3 px-7 py-4 bg-white text-[#1565C0] rounded-2xl font-bold hover:shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300">
                <Phone size={20} className="group-hover:rotate-12 transition-transform" />
                {t('hero.callNow')}
              </a>
              <a href="https://wa.me/917350075545" target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-7 py-4 bg-[#25D366] text-white rounded-2xl font-bold hover:shadow-2xl hover:shadow-[#25D366]/30 hover:scale-105 transition-all duration-300">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t('hero.whatsapp')}
              </a>
              <a href="#appointment"
                className="group inline-flex items-center gap-3 px-7 py-4 border-2 border-white/30 text-white rounded-2xl font-bold hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                <Calendar size={20} />
                {t('hero.bookAppt')}
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-5">
              {[
                { icon: Shield, key: 'hero.trust1' },
                { icon: Clock,  key: 'hero.trust2' },
                { icon: Star,   key: 'hero.trust3' },
              ].map(({ icon: Icon, key }) => (
                <div key={key} className="flex items-center gap-2 text-white/70">
                  <Icon size={15} className="text-[#80DEEA]" />
                  <span className="text-sm">{t(key)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stats panel replacing static numbers */}
          <div className="hidden lg:block">
            <StatsBarDark />
          </div>
        </div>

        {/* Mobile stats strip */}
        <div className="lg:hidden mt-10">
          <StatsBarDark />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/50 animate-bounce">
        <ChevronDown size={20} />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-gray-950 to-transparent z-10" />
    </section>
  );
}
