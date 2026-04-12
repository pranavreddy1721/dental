import { useCountUp } from '../hooks/useCountUp';
import { useLang } from '../App';
import { Users, Sparkles, Star, Clock } from 'lucide-react';

const STATS = [
  { target: 10000, suffix: '+', labelKey: 'stats.patients',   Icon: Users,    color: '#1E88E5', duration: 2200 },
  { target: 200,   suffix: '+', labelKey: 'stats.implants',   Icon: Sparkles, color: '#26A69A', duration: 1800 },
  { target: 350,   suffix: '+', labelKey: 'stats.reviews',    Icon: Star,     color: '#1E88E5', duration: 1600 },
  { target: 5,     suffix: '+', labelKey: 'stats.experience', Icon: Clock,    color: '#26A69A', duration: 1200 },
];

/* ── Single animated stat card (light bg) ── */
function StatCard({ target, suffix, labelKey, Icon, color, duration }: typeof STATS[0]) {
  const { count, ref } = useCountUp(target, duration);
  const { t } = useLang();
  return (
    <div ref={ref} className="flex flex-col items-center text-center group">
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${color}12`, boxShadow: `0 4px 20px ${color}18` }}>
        <Icon size={24} style={{ color }} />
      </div>
      <div className="flex items-end gap-0.5 leading-none mb-1.5">
        <span className="text-3xl sm:text-4xl font-black tabular-nums" style={{ color }}>
          {count.toLocaleString()}
        </span>
        <span className="text-xl sm:text-2xl font-black mb-0.5" style={{ color }}>{suffix}</span>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">{t(labelKey)}</p>
    </div>
  );
}

/* ── Single animated stat card (dark/hero bg) ── */
function StatCardDark({ target, suffix, labelKey, Icon, duration }: typeof STATS[0]) {
  const { count, ref } = useCountUp(target, duration);
  const { t } = useLang();
  return (
    <div ref={ref} className="flex flex-col items-center text-center group">
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 bg-white/15 group-hover:bg-white/25 transition-all duration-300">
        <Icon size={21} className="text-white" />
      </div>
      <div className="flex items-end gap-0.5 leading-none mb-1">
        <span className="text-3xl font-black text-white tabular-nums">{count.toLocaleString()}</span>
        <span className="text-xl font-black text-white mb-0.5">{suffix}</span>
      </div>
      <p className="text-white/70 text-sm font-semibold">{t(labelKey)}</p>
    </div>
  );
}

/* ── Light variant — white card, used under About / below hero ── */
export function StatsBar() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-10 px-6 bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800">
      {STATS.map((s, i) => (
        <div key={s.labelKey} className="relative">
          {i < STATS.length - 1 && (
            <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-gray-100 dark:bg-gray-800" />
          )}
          <StatCard {...s} />
        </div>
      ))}
    </div>
  );
}

/* ── Dark variant — used inside Hero (glass bg) ── */
export function StatsBarDark() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl px-6 py-7">
      {STATS.map((s, i) => (
        <div key={s.labelKey} className="relative">
          {i < STATS.length - 1 && (
            <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-white/15" />
          )}
          <StatCardDark {...s} />
        </div>
      ))}
    </div>
  );
}
