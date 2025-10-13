// src/components/SEO.jsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage = 'https://22orbit.de/22Orbit4X4Logo.jpg',
  article = false 
}) => {
  const location = useLocation();
  const baseUrl = 'https://22orbit.de';
  const canonicalUrl = `${baseUrl}${location.pathname}`;
  
  const fullTitle = title 
    ? `${title} |  Webentwicklung Magdeburg` 
    : '22Orbit - Webentwicklung & Digitale Lösungen aus Magdeburg';

  useEffect(() => {
    document.title = fullTitle;

    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', '22Orbit');
    updateMetaTag('og:title', fullTitle, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:url', canonicalUrl, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:type', article ? 'article' : 'website', 'property');
    
    updateMetaTag('twitter:title', fullTitle, 'name');
    updateMetaTag('twitter:description', description, 'name');
    updateMetaTag('twitter:image', ogImage, 'name');
    
    updateCanonicalLink(canonicalUrl);

  }, [fullTitle, description, keywords, canonicalUrl, ogImage, article]);

  return null;
};

const updateMetaTag = (name, content, attribute = 'name') => {
  if (!content) return;
  
  let element = document.querySelector(`meta[${attribute}="${name}"]`);
  
  if (element) {
    element.setAttribute('content', content);
  } else {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    element.setAttribute('content', content);
    document.head.appendChild(element);
  }
};

const updateCanonicalLink = (url) => {
  let link = document.querySelector('link[rel="canonical"]');
  
  if (link) {
    link.setAttribute('href', url);
  } else {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    document.head.appendChild(link);
  }
};

export default SEO;

export const seoConfig = {
  home: {
    title: 'Startseite | Webseiten aus Magdeburg 22Orbit',
    description: '🚀 Moderne Webseiten, Online-Shops & Software-Lösungen von 22Orbit. Kein Baukasten, sondern maßgeschneidert für Ihr Geschäft. Schnell, mobilfreundlich, sicher.',
    keywords: 'Webentwicklung, Websites, Webseiten, Landing Page, React, Online-Shop, Web-Anwendung, Software-Entwicklung, Frontend, Backend, UI/UX Design, Webagentur, Magdeburg'
  },
  
  services: {
    title: 'Unsere Leistungen | 22Orbit Magdeburg',
    description: 'Von der Website über Online-Shops bis zur individuellen Software-Lösung. Entdecken Sie unser vollständiges Leistungsportfolio für digitale Projekte.',
    keywords: 'Webentwicklung Services, Website Erstellung, Online-Shop Entwicklung, E-Commerce, Custom Software, Web-App Entwicklung, Responsive Design, SEO-Optimierung'
  },
  
  webentwicklung: {
    title: 'Webentwicklung | 22Orbit Magdeburg',
    description: 'Professionelle Webentwicklung mit modernsten Technologien. Responsive, schnell und SEO-optimiert. Von der Konzeption bis zur Wartung.',
    keywords: 'Webentwicklung, React, Vue, JavaScript, Responsive Design, Mobile First, Progressive Web Apps, Frontend Entwicklung, Backend Entwicklung'
  },
    socialmedia: {
    title: "Social Media Marketing - Reichweite & Wachstum | 22Orbit Magdeburg",
    description: "Professionelles Social Media Marketing von 22Orbit. Strategie, Content Creation, Community Management und Paid Advertising für maximale Reichweite.",
    keywords: "Social Media Marketing, Instagram Marketing, Facebook Werbung, Content Creation, Community Management, Influencer Marketing, Social Media Strategie"
  },
  
  software: {
    title: "Softwareentwicklung - Individuelle Lösungen | 22Orbit Magdeburg", 
    description: "Maßgeschneiderte Softwareentwicklung von 22Orbit. Web Applications, APIs, Automatisierung und AI-Lösungen für Ihr Unternehmen.",
    keywords: "Softwareentwicklung, Web Applications, API Development, Automatisierung, Custom Software, AI Lösungen, Cloud Integration"
  },

  onlineShop: {
    title: 'Online-Shop Entwicklung | 22Orbit Magdeburg',
    description: 'Erfolgreiche E-Commerce Lösungen: Maßgeschneiderte Online-Shops mit optimaler User Experience, sicheren Zahlungssystemen und effektivem Warenwirtschaftssystem.',
    keywords: 'Online-Shop erstellen, E-Commerce Entwicklung, Shopify, WooCommerce, Webshop, Payment Integration, Warenwirtschaft, Verkaufsoptimierung'
  },
  

  
  impressum: {
    title: 'Impressum | 22Orbit Magdeburg',
    description: 'Impressum und Kontaktinformationen von 22Orbit - Webentwicklung & Digitale Lösungen aus Magdeburg.',
    keywords: '22Orbit Impressum, Kontakt, Magdeburg Webentwicklung'
  },
  
  datenschutz: {
    title: 'Datenschutzerklärung | 22Orbit Magdeburg',
    description: 'Datenschutzerklärung von 22Orbit. Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.',
    keywords: 'Datenschutz, DSGVO, Datenschutzerklärung, Privacy Policy'
  },

  kontakt: {
    title: 'Kontakt | 22Orbit Magdeburg',
    description: 'Nehmen Sie Kontakt mit 22Orbit auf. Wir beraten Sie gerne zu Ihrem Webprojekt. Telefon: +4917664637327 | Email: info@22orbit.de',
    keywords: 'Kontakt 22Orbit, Webentwicklung Anfrage, Projekt Beratung, Magdeburg Webagentur'
  }
};