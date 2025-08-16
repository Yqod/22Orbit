import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { useEffect } from "react";
import Navbar from "../components/Navbar";

const Kontakt = () => {
    useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_company: '',
    user_phone: '',
    project_type: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Ersetze diese Werte mit deinen EmailJS Credentials
    emailjs.sendForm(
      'YOUR_SERVICE_ID',        // Deine EmailJS Service ID
      'YOUR_TEMPLATE_ID',       // Deine EmailJS Template ID
      form.current,
      'YOUR_PUBLIC_KEY'         // Dein EmailJS Public Key
    )
    .then((result) => {
      console.log(result.text);
      setSubmitStatus('success');
      setFormData({
        user_name: '', user_email: '', user_company: '', user_phone: '', 
        project_type: '', budget: '', timeline: '', message: ''
      });
    }, (error) => {
      console.log(error.text);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  const projectTypes = [
    'Landing Page',
    'Online Shop',
    'Web Application',
    'Mobile App',
    'Custom Software',
    'Beratung',
    'Wartung/Support',
    'Sonstiges'
  ];

  const budgetRanges = [
    'Unter 2.500€',
    '2.500€ - 5.000€', 
    '5.000€ - 10.000€',
    '10.000€ - 25.000€',
    'Über 25.000€',
    'Noch unklar'
  ];

  const timelines = [
    'Sofort',
    'In den nächsten 4 Wochen',
    'In 2-3 Monaten',
    'In 6 Monaten',
    'Noch unklar'
  ];

  if (submitStatus === 'success') {
    return (
      <section className="min-h-screen bg-gradient-to-b from-[#0d1321] to-[#1d2d44] flex flex-col items-center justify-center py-12 sm:py-20 px-4">
        <div className="w-full max-w-2xl mx-auto text-center">
          <div className="bg-[#3e5c76]/20 backdrop-blur-md rounded-3xl p-12 border border-[#748cab]/30">
            <div className="text-6xl text-green-400 mb-6">✓</div>
            <h2 className="font-bebas text-3xl sm:text-4xl text-[#f0ebd8] mb-4 tracking-wide">
              Nachricht gesendet!
            </h2>
            <p className="text-[#748cab] text-lg mb-8">
              Danke für deine Anfrage! Wir melden uns innerhalb von 24 Stunden bei dir zurück.
            </p>
            <button
              onClick={() => setSubmitStatus(null)}
              className="bg-gradient-to-r from-[#748cab] to-[#3e5c76] text-[#f0ebd8] font-bebas text-lg px-8 py-4 rounded-full hover:scale-105 transition-all duration-300"
            >
              Neue Nachricht senden
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (submitStatus === 'error') {
    return (
      <section className="min-h-screen bg-gradient-to-b from-[#0d1321] to-[#1d2d44] flex flex-col items-center justify-center py-12 sm:py-20 px-4">
        <div className="w-full max-w-2xl mx-auto text-center">
          <div className="bg-[#3e5c76]/20 backdrop-blur-md rounded-3xl p-12 border border-red-500/30">
            <div className="text-6xl text-red-400 mb-6">⚠</div>
            <h2 className="font-bebas text-3xl sm:text-4xl text-[#f0ebd8] mb-4 tracking-wide">
              Fehler beim Senden
            </h2>
            <p className="text-[#748cab] text-lg mb-8">
              Entschuldige, beim Senden ist ein Fehler aufgetreten. Versuche es erneut oder schreib uns direkt eine E-Mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setSubmitStatus(null)}
                className="bg-gradient-to-r from-[#748cab] to-[#3e5c76] text-[#f0ebd8] font-bebas text-lg px-8 py-4 rounded-full hover:scale-105 transition-all duration-300"
              >
                Erneut versuchen
              </button>
              <a
                href="mailto:hallo@22orbit.de"
                className="bg-[#3e5c76]/20 border-2 border-[#748cab]/50 text-[#f0ebd8] font-bebas text-lg px-8 py-4 rounded-full hover:bg-[#3e5c76]/40 transition-all duration-300"
              >
                Direkt E-Mail senden
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
    <Navbar />
    <section className="min-h-screen bg-gradient-to-b from-[#0d1321] to-[#1d2d44] py-24 sm:py-20 px-4">
          <div className="w-full max-w-7xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                  <h1 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f0ebd8] font-bold tracking-widest drop-shadow-lg mb-6">
                      Kontakt
                  </h1>
                  <p className="text-[#748cab] text-lg sm:text-xl md:text-2xl font-light max-w-4xl mx-auto">
                      Bereit für dein nächstes digitales Projekt? Lass uns darüber sprechen!
                  </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                  {/* Contact Form */}
                  <div className="bg-[#3e5c76]/20 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-[#748cab]/30">
                      <h2 className="font-bebas text-2xl text-[#f0ebd8] mb-8 tracking-wide">
                          Projekt anfragen
                      </h2>

                      <form ref={form} onSubmit={sendEmail} className="space-y-6">
                          {/* Basic Info */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                  <label className="block font-bebas text-lg text-[#f0ebd8] mb-2 tracking-wide">
                                      Name *
                                  </label>
                                  <input
                                      type="text"
                                      name="user_name"
                                      value={formData.user_name}
                                      onChange={handleChange}
                                      required
                                      className="w-full bg-[#1d2d44]/50 border border-[#748cab]/30 rounded-xl px-4 py-3 text-[#f0ebd8] focus:border-[#748cab]/60 focus:outline-none focus:ring-2 focus:ring-[#748cab]/20 transition-all duration-300"
                                      placeholder="Dein Name" />
                              </div>
                              <div>
                                  <label className="block font-bebas text-lg text-[#f0ebd8] mb-2 tracking-wide">
                                      E-Mail *
                                  </label>
                                  <input
                                      type="email"
                                      name="user_email"
                                      value={formData.user_email}
                                      onChange={handleChange}
                                      required
                                      className="w-full bg-[#1d2d44]/50 border border-[#748cab]/30 rounded-xl px-4 py-3 text-[#f0ebd8] focus:border-[#748cab]/60 focus:outline-none focus:ring-2 focus:ring-[#748cab]/20 transition-all duration-300"
                                      placeholder="deine@email.de" />
                              </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                  <label className="block font-bebas text-lg text-[#f0ebd8] mb-2 tracking-wide">
                                      Unternehmen
                                  </label>
                                  <input
                                      type="text"
                                      name="user_company"
                                      value={formData.user_company}
                                      onChange={handleChange}
                                      className="w-full bg-[#1d2d44]/50 border border-[#748cab]/30 rounded-xl px-4 py-3 text-[#f0ebd8] focus:border-[#748cab]/60 focus:outline-none focus:ring-2 focus:ring-[#748cab]/20 transition-all duration-300"
                                      placeholder="Dein Unternehmen (optional)" />
                              </div>
                              <div>
                                  <label className="block font-bebas text-lg text-[#f0ebd8] mb-2 tracking-wide">
                                      Telefon
                                  </label>
                                  <input
                                      type="tel"
                                      name="user_phone"
                                      value={formData.user_phone}
                                      onChange={handleChange}
                                      className="w-full bg-[#1d2d44]/50 border border-[#748cab]/30 rounded-xl px-4 py-3 text-[#f0ebd8] focus:border-[#748cab]/60 focus:outline-none focus:ring-2 focus:ring-[#748cab]/20 transition-all duration-300"
                                      placeholder="Für Rückfragen (optional)" />
                              </div>
                          </div>

                          {/* Project Details */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              <div>
                                  <label className="block font-bebas text-lg text-[#f0ebd8] mb-2 tracking-wide">
                                      Projekt Art *
                                  </label>
                                  <select
                                      name="project_type"
                                      value={formData.project_type}
                                      onChange={handleChange}
                                      required
                                      className="w-full bg-[#1d2d44]/50 border border-[#748cab]/30 rounded-xl px-4 py-3 text-[#f0ebd8] focus:border-[#748cab]/60 focus:outline-none focus:ring-2 focus:ring-[#748cab]/20 transition-all duration-300"
                                  >
                                      <option value="">Wählen...</option>
                                      {projectTypes.map((type, index) => (
                                          <option key={index} value={type} className="bg-[#1d2d44]">
                                              {type}
                                          </option>
                                      ))}
                                  </select>
                              </div>

                              <div>
                                  <label className="block font-bebas text-lg text-[#f0ebd8] mb-2 tracking-wide">
                                      Zeitrahmen
                                  </label>
                                  <select
                                      name="timeline"
                                      value={formData.timeline}
                                      onChange={handleChange}
                                      className="w-full bg-[#1d2d44]/50 border border-[#748cab]/30 rounded-xl px-4 py-3 text-[#f0ebd8] focus:border-[#748cab]/60 focus:outline-none focus:ring-2 focus:ring-[#748cab]/20 transition-all duration-300"
                                  >
                                      <option value="">Wählen...</option>
                                      {timelines.map((time, index) => (
                                          <option key={index} value={time} className="bg-[#1d2d44]">
                                              {time}
                                          </option>
                                      ))}
                                  </select>
                              </div>
                          </div>

                          {/* Message */}
                          <div>
                              <label className="block font-bebas text-lg text-[#f0ebd8] mb-2 tracking-wide">
                                  Dein Projekt *
                              </label>
                              <textarea
                                  name="message"
                                  value={formData.message}
                                  onChange={handleChange}
                                  required
                                  rows="6"
                                  className="w-full bg-[#1d2d44]/50 border border-[#748cab]/30 rounded-xl px-4 py-3 text-[#f0ebd8] focus:border-[#748cab]/60 focus:outline-none focus:ring-2 focus:ring-[#748cab]/20 transition-all duration-300 resize-none"
                                  placeholder="Erzähl uns von deinem Projekt! Was möchtest du erreichen? Welche Features brauchst du? Je detaillierter, desto besser können wir dir helfen."
                              ></textarea>
                          </div>

                          {/* Submit Button */}
                          <div className="text-center pt-6">
                              <button
                                  type="submit"
                                  disabled={isSubmitting}
                                  className={`inline-flex items-center justify-center bg-gradient-to-r from-[#748cab] to-[#3e5c76] text-[#f0ebd8] font-bebas text-xl px-12 py-5 rounded-full shadow-xl tracking-widest transition-all duration-300 ${isSubmitting
                                          ? 'opacity-70 cursor-not-allowed'
                                          : 'hover:scale-105 hover:shadow-2xl'}`}
                              >
                                  {isSubmitting ? (
                                      <>
                                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#f0ebd8] mr-3"></div>
                                          Wird gesendet...
                                      </>
                                  ) : (
                                      <>
                                          🚀 Nachricht senden
                                      </>
                                  )}
                              </button>
                          </div>

                          <p className="text-[#748cab] text-sm text-center">
                              Mit dem Absenden stimmst du unseren <a href="/datenschutz" className="underline hover:text-[#f0ebd8] transition-colors">Datenschutzbestimmungen</a> zu.
                          </p>
                      </form>
                  </div>

                  {/* Contact Info & Map */}
                  <div className="space-y-8">
                      {/* Contact Information */}
                      <div className="bg-[#3e5c76]/20 backdrop-blur-sm rounded-2xl p-8 border border-[#748cab]/30">
                          <h2 className="font-bebas text-2xl text-[#f0ebd8] mb-6 tracking-wide">
                              Kontakt Informationen
                          </h2>

                          <div className="space-y-6">
                              <div className="flex items-start gap-4">
                                  <div className="w-12 h-12 bg-[#748cab]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                      <span className="text-[#f0ebd8] text-xl">📧</span>
                                  </div>
                                  <div>
                                      <h3 className="font-bebas text-lg text-[#f0ebd8] tracking-wide mb-1">E-Mail</h3>
                                      <a href="mailto:info@22orbit.de" className="text-[#748cab] hover:text-[#f0ebd8] transition-colors text-lg">
                                          info@22orbit.de
                                      </a>
                                      <p className="text-[#748cab] text-sm mt-1">
                                          Antwort meist innerhalb von 24h
                                      </p>
                                  </div>
                              </div>

                              <div className="flex items-start gap-4">
                                  <div className="w-12 h-12 bg-[#748cab]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                      <span className="text-[#f0ebd8] text-xl">📞</span>
                                  </div>
                                  <div>
                                      <h3 className="font-bebas text-lg text-[#f0ebd8] tracking-wide mb-1">Telefon</h3>
                                      <a href="tel:+4917664637327" className="text-[#748cab] hover:text-[#f0ebd8] transition-colors text-lg">
                                          +49 17664637327
                                      </a>
                                      <p className="text-[#748cab] text-sm mt-1">
                                          Mo-Fr 9:00-20:00 Uhr
                                          Sa-So 10:00-16:00 Uhr
                                      </p>
                                  </div>
                              </div>

                              <div className="flex items-start gap-4">
                                  <div className="w-12 h-12 bg-[#748cab]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                      <span className="text-[#f0ebd8] text-xl">📍</span>
                                  </div>
                                  <div>
                                      <h3 className="font-bebas text-lg text-[#f0ebd8] tracking-wide mb-1">Adresse</h3>
                                      <p className="text-[#748cab] text-lg">
                                          Nicolaistraße 5<br />
                                          39124 Magdeburg<br />
                                          Deutschland
                                      </p>
                                  </div>
                              </div>

                              <div className="flex items-start gap-4">
                                  <div className="w-12 h-12 bg-[#748cab]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                      <span className="text-[#f0ebd8] text-xl">⚡</span>
                                  </div>
                                  <div>
                                      <h3 className="font-bebas text-lg text-[#f0ebd8] tracking-wide mb-1">Schnelle Hilfe</h3>
                                      <p className="text-[#748cab]">
                                          Kostenloses Beratungsgespräch<br />
                                          Unverbindliches Angebot
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>

                      {/* Google Maps */}
                      <div className="bg-[#3e5c76]/20 backdrop-blur-sm rounded-2xl p-8 border border-[#748cab]/30">
                          <h2 className="font-bebas text-2xl text-[#f0ebd8] mb-6 tracking-wide">
                              Unser Standort
                          </h2>

                          <div className="rounded-xl overflow-hidden border border-[#748cab]/30">
                              <iframe
                                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.5678901234567!2d11.6277659!3d52.1205167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47af5f5f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2sNicolaistra%C3%9Fe%205%2C%2039124%20Magdeburg!5e0!3m2!1sde!2sde!4v1672531200000!5m2!1sde!2sde"
                                  width="100%"
                                  height="300"
                                  style={{ border: 0 }}
                                  allowFullScreen=""
                                  loading="lazy"
                                  referrerPolicy="no-referrer-when-downgrade"
                                  className="filter grayscale hover:grayscale-0 transition-all duration-500"
                              ></iframe>
                          </div>

                          <div className="mt-4 text-center">
                              <p className="text-[#748cab] text-sm">
                                  Klicke auf die Karte für eine größere Ansicht
                              </p>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Social Media & Additional Contact */}
              <div className="bg-[#3e5c76]/20 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-[#748cab]/30 text-center">
                  <h2 className="font-bebas text-2xl sm:text-3xl text-[#f0ebd8] mb-6 tracking-wide">
                      Folge uns auch hier
                  </h2>

                  <div className="flex justify-center space-x-6 mb-8">
                      <a
                          href="https://github.com/22orbit"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-[#748cab]/20 rounded-full flex items-center justify-center text-[#748cab] hover:text-[#f0ebd8] hover:bg-[#748cab]/40 transition-all duration-300 hover:scale-110"
                      >
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                      </a>
                      <a
                          href="https://linkedin.com/company/22orbit"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-[#748cab]/20 rounded-full flex items-center justify-center text-[#748cab] hover:text-[#f0ebd8] hover:bg-[#748cab]/40 transition-all duration-300 hover:scale-110"
                      >
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                      </a>
                      <a
                          href="https://twitter.com/22orbit"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-[#748cab]/20 rounded-full flex items-center justify-center text-[#748cab] hover:text-[#f0ebd8] hover:bg-[#748cab]/40 transition-all duration-300 hover:scale-110"
                      >
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                      </a>
                  </div>

                  <p className="text-[#748cab]">
                      Oder schreib uns direkt auf unseren sozialen Kanälen – wir freuen uns auf deine Nachricht! 🚀
                  </p>
              </div>
          </div>
      </section></>
  );
};

export default Kontakt;