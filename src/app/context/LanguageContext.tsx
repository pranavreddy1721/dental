import { createContext, useContext, useState } from 'react';

export type Lang = 'en' | 'mr';

interface LangCtx { lang: Lang; setLang: (l: Lang) => void; t: (key: string) => string; }

const translations: Record<string, Record<Lang, string>> = {
  // Nav
  'nav.home':             { en: 'Home',            mr: 'मुख्यपृष्ठ' },
  'nav.about':            { en: 'About',           mr: 'आमच्याबद्दल' },
  'nav.services':         { en: 'Services',        mr: 'सेवा' },
  'nav.doctors':          { en: 'Doctors',         mr: 'डॉक्टर' },
  'nav.gallery':          { en: 'Gallery',         mr: 'गॅलरी' },
  'nav.certifications':   { en: 'Certifications',  mr: 'प्रमाणपत्रे' },
  'nav.reviews':          { en: 'Reviews',         mr: 'समीक्षा' },
  'nav.contact':          { en: 'Contact',         mr: 'संपर्क' },
  'nav.bookNow':          { en: 'Book Now',        mr: 'बुक करा' },

  // Hero
  'hero.badge':           { en: 'Most Trusted Dental Clinic in Ashta', mr: 'अष्ट्यातील सर्वात विश्वसनीय दंत क्लिनिक' },
  'hero.title1':          { en: 'Your Smile,',     mr: 'तुमचे हास्य,' },
  'hero.title2':          { en: 'Our Priority',    mr: 'आमची प्राथमिकता' },
  'hero.subtitle':        { en: 'Advanced, painless & affordable dental care in Ashta, Maharashtra — delivered by MDS specialists.', mr: 'अष्टा, महाराष्ट्रात MDS तज्ज्ञांद्वारे प्रगत, वेदनारहित आणि परवडणारी दंत काळजी.' },
  'hero.callNow':         { en: 'Call Now',        mr: 'आता कॉल करा' },
  'hero.whatsapp':        { en: 'WhatsApp',        mr: 'व्हॉट्सअ‍ॅप' },
  'hero.bookAppt':        { en: 'Book Appointment', mr: 'अपॉइंटमेंट बुक करा' },
  'hero.trust1':          { en: 'Painless Treatment', mr: 'वेदनारहित उपचार' },
  'hero.trust2':          { en: 'Mon–Sat: 9:30am–9pm', mr: 'सोम–शनि: सकाळी ९:३०–रात्री ९' },
  'hero.trust3':          { en: '5.0 Google Rating', mr: '५.० गुगल रेटिंग' },

  // Stats
  'stats.patients':       { en: 'Happy Patients',       mr: 'समाधानी रुग्ण' },
  'stats.implants':       { en: 'Successful Implants',  mr: 'यशस्वी इम्प्लांट' },
  'stats.reviews':        { en: 'Google Reviews',       mr: 'गुगल समीक्षा' },
  'stats.experience':     { en: 'Years Experience',     mr: 'वर्षांचा अनुभव' },

  // About
  'about.badge':          { en: 'About Us',        mr: 'आमच्याबद्दल' },
  'about.title1':         { en: 'Chougule Multispeciality', mr: 'चौगुले मल्टिस्पेशालिटी' },
  'about.title2':         { en: 'Dental Clinic',   mr: 'डेंटल क्लिनिक' },
  'about.desc':           { en: 'Most Trusted Dental Clinic in Ashta, Maharashtra. We deliver advanced, painless, and affordable dental care — combining modern technology with genuine compassion.', mr: 'अष्टा, महाराष्ट्रातील सर्वात विश्वसनीय दंत क्लिनिक. आम्ही आधुनिक तंत्रज्ञान आणि खरी सहानुभूती एकत्र करून प्रगत, वेदनारहित आणि परवडणारी दंत काळजी देतो.' },
  'about.h1':             { en: 'Painless Procedures',  mr: 'वेदनारहित प्रक्रिया' },
  'about.h2':             { en: 'Affordable Pricing',   mr: 'परवडणारी किंमत' },
  'about.h3':             { en: 'ISO Hygienic Standards', mr: 'ISO स्वच्छता मानके' },
  'about.h4':             { en: 'Emergency Care',       mr: 'आपत्कालीन काळजी' },
  'about.f1title':        { en: '5+ Years Experience',  mr: '५+ वर्षांचा अनुभव' },
  'about.f1desc':         { en: 'Trusted by thousands of patients across Sangli district', mr: 'सांगली जिल्ह्यातील हजारो रुग्णांचा विश्वास' },
  'about.f2title':        { en: 'Advanced Technology',  mr: 'प्रगत तंत्रज्ञान' },
  'about.f2desc':         { en: 'State-of-the-art digital X-ray and sterilization equipment', mr: 'अत्याधुनिक डिजिटल एक्स-रे आणि निर्जंतुकीकरण उपकरणे' },
  'about.f3title':        { en: 'Compassionate Care',   mr: 'सहानुभूतीपूर्ण काळजी' },
  'about.f3desc':         { en: 'Gentle, patient-first approach for all age groups', mr: 'सर्व वयोगटांसाठी सौम्य, रुग्ण-प्रथम दृष्टिकोन' },
  'about.qualified':      { en: 'Qualified',            mr: 'पात्र' },
  'about.mds':            { en: 'MDS Specialists',      mr: 'MDS तज्ज्ञ' },
};

const LangContext = createContext<LangCtx>({
  lang: 'en', setLang: () => {}, t: (k) => k,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const t = (key: string) => translations[key]?.[lang] ?? key;
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
