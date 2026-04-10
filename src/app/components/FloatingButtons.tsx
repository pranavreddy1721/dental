import { Phone } from 'lucide-react';

export function FloatingButtons() {
  const message = encodeURIComponent(
    "Hello Doctor, I would like to book an appointment.\n\nName:\nPreferred Date:\nPreferred Time:\nService:"
  );

  return (
    <div className="fixed bottom-6 right-5 flex flex-col gap-3 z-40">
      {/* WhatsApp */}
      <div className="relative group">
        <a href={`https://wa.me/917350075545?text=${message}`} target="_blank" rel="noopener noreferrer"
          className="w-13 h-13 w-[52px] h-[52px] rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 animate-softPulse"
          aria-label="Chat on WhatsApp">
          <svg viewBox="0 0 32 32" className="w-6 h-6 fill-white">
            <path d="M16.001 2.003c-7.732 0-14 6.268-14 14 0 2.472.645 4.79 1.772 6.803L2 30l7.366-1.732a13.944 13.944 0 006.635 1.685h.001c7.732 0 14-6.268 14-14s-6.268-13.95-14-13.95zm0 25.41h-.001a11.39 11.39 0 01-5.803-1.585l-.416-.247-4.37 1.028 1.166-4.257-.27-.436a11.387 11.387 0 01-1.747-6.053c0-6.292 5.121-11.413 11.414-11.413 3.047 0 5.908 1.186 8.06 3.339a11.344 11.344 0 013.354 8.074c-.003 6.292-5.124 11.413-11.387 11.413zm6.25-8.563c-.341-.171-2.015-.994-2.327-1.107-.312-.114-.539-.171-.767.171-.228.341-.881 1.107-1.081 1.335-.2.228-.398.257-.739.086-.341-.171-1.438-.53-2.739-1.689-1.013-.904-1.697-2.02-1.897-2.361-.2-.341-.021-.525.15-.696.153-.152.341-.398.512-.597.171-.2.228-.341.341-.569.114-.228.057-.427-.028-.597-.086-.171-.767-1.848-1.051-2.53-.277-.665-.559-.575-.767-.585-.2-.01-.427-.012-.654-.012-.228 0-.597.086-.909.427-.312.341-1.194 1.167-1.194 2.848 0 1.681 1.223 3.307 1.393 3.534.171.228 2.407 3.675 5.832 5.154.815.352 1.451.562 1.947.719.817.261 1.561.224 2.15.136.656-.098 2.015-.823 2.3-1.618.284-.795.284-1.477.2-1.618-.085-.142-.312-.228-.654-.398z"/>
          </svg>
        </a>
        <span className="absolute right-[60px] top-1/2 -translate-y-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none shadow-lg">
          Chat on WhatsApp
        </span>
      </div>

      {/* Call */}
      <div className="relative group">
        <a href="tel:+917350075545"
          className="w-[52px] h-[52px] rounded-2xl bg-gradient-to-br from-[#1E88E5] to-[#1565C0] text-white flex items-center justify-center shadow-lg shadow-[#1E88E5]/30 hover:scale-110 hover:shadow-xl hover:shadow-[#1E88E5]/40 transition-all duration-300 animate-softPulse"
          style={{ animationDelay: '0.4s' }}
          aria-label="Call Now">
          <Phone size={22} />
        </a>
        <span className="absolute right-[60px] top-1/2 -translate-y-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none shadow-lg">
          Call Now
        </span>
      </div>
    </div>
  );
}
