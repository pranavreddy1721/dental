import { useState, useEffect } from 'react';
import { Calendar, User, Phone, MessageSquare, Send, Clock, Stethoscope } from 'lucide-react';
import emailjs from "@emailjs/browser";

export function Appointment() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '', date: '', time: '', service: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const selected = localStorage.getItem("selectedService");
    if (selected) setFormData(prev => ({ ...prev, service: selected }));
  }, []);

  const handleChange = (e: any) => {
    if (e.target.name === "date") {
      const day = new Date(e.target.value).getDay();
      if (day === 0) { alert("Clinic is closed on Sunday"); return; }
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs.send("service_qrumx55", "template_908dksu", formData, "2mDLcruOZfH0K_PBA")
      .then(() => {
        alert('Appointment request sent successfully ✅');
        setFormData({ name: '', phone: '', message: '', date: '', time: '', service: '' });
      })
      .catch(() => alert('Something went wrong ❌ Please try again.'))
      .finally(() => setIsSubmitting(false));
  };

  const inputClass = "w-full px-5 py-3.5 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#1E88E5] dark:focus:border-[#42A5F5] transition-colors duration-200 text-sm";
  const labelClass = "flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2";

  return (
    <section id="appointment" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1E88E5]/8 dark:bg-[#1E88E5]/15 rounded-full px-5 py-2 mb-5">
            <span className="text-[#1E88E5] font-semibold text-sm">Easy Booking</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-5">
            Book Your Appointment
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Schedule your visit for a healthy and confident smile
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Info panels */}
          <div className="space-y-4">
            {[
              { icon: Clock, title: 'Working Hours', lines: ['Mon–Sat: 9:30 AM – 2 PM', 'Mon–Sat: 4:30 PM – 9 PM', 'Sunday: Closed'], color: '#1E88E5' },
              { icon: Phone, title: 'Call Us', lines: ['+91 73500 75545'], color: '#26A69A' },
              { icon: Stethoscope, title: 'All Services', lines: ['Walk-in & Appointments', 'Emergency Available'], color: '#1E88E5' },
            ].map(({ icon: Icon, title, lines, color }) => (
              <div key={title} className="bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${color}12` }}>
                    <Icon size={18} style={{ color }} />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm">{title}</h3>
                </div>
                {lines.map(line => (
                  <p key={line} className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{line}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-7 sm:p-9 border border-gray-100 dark:border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}><User size={16} className="text-[#1E88E5]" />Full Name</label>
                    <input name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}><Phone size={16} className="text-[#1E88E5]" />Phone Number</label>
                    <input name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className={labelClass}><Stethoscope size={16} className="text-[#1E88E5]" />Service</label>
                  <select name="service" value={formData.service} onChange={handleChange} className={inputClass}>
                    <option value="">Select a service</option>
                    {['Root Canal Treatment','Dental Implants','Braces & Orthodontics','Teeth Cleaning & Whitening','Tooth Extraction','Smile Designing','General Checkup','Other'].map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}><Calendar size={16} className="text-[#1E88E5]" />Appointment Date</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required
                      min={new Date().toISOString().split("T")[0]} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}><Clock size={16} className="text-[#1E88E5]" />Time Slot</label>
                    <select name="time" value={formData.time} onChange={handleChange} required className={inputClass}>
                      <option value="">Select time slot</option>
                      <optgroup label="Morning (9:30 AM – 2 PM)">
                        {['09:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM','12:00 PM','12:30 PM','01:00 PM','01:30 PM'].map(t => <option key={t}>{t}</option>)}
                      </optgroup>
                      <optgroup label="Evening (4:30 PM – 9 PM)">
                        {['04:30 PM','05:00 PM','05:30 PM','06:00 PM','06:30 PM','07:00 PM','07:30 PM','08:00 PM','08:30 PM'].map(t => <option key={t}>{t}</option>)}
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass}><MessageSquare size={16} className="text-[#1E88E5]" />Message (Optional)</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Any additional information or concerns..."
                    className={`${inputClass} resize-none`} />
                </div>

                <button type="submit" disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#1E88E5] to-[#26A69A] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-[#1E88E5]/30 hover:scale-[1.01] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed">
                  <Send size={19} />
                  {isSubmitting ? 'Sending...' : 'Book Appointment Now'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
