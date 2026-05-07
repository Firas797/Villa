import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';

// Import local images correctly
import c3 from './assets/cover/c3.jpg';
import c2 from './assets/cover/c2.jpg';
import c1 from './assets/cover/c5.jpg';
import c4 from './assets/cover/c4.jpg';
import logoo from './assets/loggo.png'
import n1 from './assets/cover/nuit1.jpg'
import n2 from './assets/cover/nuit2.jpg'


// Import inside images (replace with your actual images)
import inside1 from './assets/cover/inside1.jpg';
import inside2 from './assets/cover/inside2.jpg';
import inside3 from './assets/cover/inside3.jpg';
import inside4 from './assets/cover/inside4.jpg';

// Import rooms images (replace with your actual images)
import room1 from './assets/cover/new/s1.jpg';
import room2 from './assets/cover/new/s2.jpg';
import room3 from './assets/cover/new/s3.jpg';
import room4 from './assets/cover/new/s4.jpg';
import room5 from './assets/cover/new/c11.jpg'; // Add this if you have a 5th room image

import b1 from './assets/cover/new/ts1.jpg';
import b2 from './assets/cover/new/ts2.jpg';
import b3 from './assets/cover/new/ts3.jpg';
import b4 from './assets/cover/new/ts4.jpg';
import c11 from './assets/cover/new/c11.jpg';
import c22 from './assets/cover/new/c12.jpg';


// Translation datas
const translations = {
  fr: {
    aboutPropertyTitle: "À PROPOS DU LOGEMENT",
    hostLabel: "Hôte",
    hostName: "Ramzi",
    hostSince: "Hôte depuis 6 ans",
    aboutDesc1: "Ce logement paisible et luxueux offre un séjour détente pour toute la famille.",
    aboutDesc2: "Une demeure exceptionnelle conçue pour offrir confort, intimité et élégance avec des espaces généreux.",
    aboutDesc3: "Profitez d'une vue panoramique à couper le souffle.",
    readMore: "Lire la suite",
    whatOffers: "Ce que propose ce logement",
    beachAccess: "Accès à la plage",
    wifi: "Wifi",
    workspace: "Espace de travail dédié",
    smokeDetector: "Détecteur de fumée",
    parking: "Parking privé",
    security: "Sécurité 24h/24",
    // Header
    freePhone: "GRATUIT 1-800-1234-567",
    addressLeft: "2130 Fulton Street",
    inHouse: "KYRANIS",
    phoneRight: "1-800-8763-765",
    addressRight: "San Diego, CA 94117-1080",
    home: "ACCUEIL",
    about: "À PROPOS",
    contacts: "CONTACTS",
    requestCall: "DEMANDER UN APPEL",
    easily: "FACILEMENT",
    rentSale: "LOUER & ENJOY",
    description: "Grâce à nos services et solutions de gestion immobilière, vous pouvez facilement louer ou vendre n'importe quelle maison ou appartement.",
    viewProperties: "VOIR LES BIENS",
    // Gallery Section Titles
    outside: "EXTÉRIEUR",
    inside: "INTÉRIEUR",
    roomsAndBeds: "SUITES & CHAMBRES",
    // Properties section
    popularProperties: "SALLES DE BAINS & BATHROOMS",
    viewAll: "VOIR TOUS LES BIENS",
    // Property 1
    prop1Title: "5619 Walnut Hill Ln, Dallas, TX 75229",
    prop1Price: "$1500/mois",
    prop1Sqft: "30 m²",
    prop1Beds: "3 Chambres",
    prop1Desc: "Une propriété résidentielle confortable située dans un quartier calme et agréable.",
    // Property 2
    prop2Title: "1808 Bolingbroke Pl, Fort Worth, TX 76140",
    prop2Price: "$1300/mois",
    prop2Sqft: "40 m²",
    prop2Beds: "2 Chambres",
    prop2Desc: "Parfait pour ceux qui aiment à la fois la vie urbaine et la campagne.",
    // Property 3
    prop3Title: "924 Bel Air Rd, Los Angeles, CA 90077",
    prop3Price: "$1800/mois",
    prop3Sqft: "50 m²",
    prop3Beds: "4 Chambres",
    prop3Desc: "Situé en plein centre-ville, ce bien est idéal pour tout le monde.",
    // Property 4
    prop4Title: "13510 W Cheery Lynn Rd, Avondale, AZ 85392",
    prop4Price: "$2700/mois",
    prop4Sqft: "90 m²",
    prop4Beds: "2 Chambres",
    prop4Desc: "Un manoir de luxe pour les personnes qui apprécient les équipements haut de gamme.",
    // New translations
    propertyDetails: "DÉTAILS DU LOGEMENT",
    propertyType: "Type de propriété",
    propertyTypeValue: "Villa",
    capacity: "Capacité d'accueil",
    capacityValue: "15 Membres",
    bedrooms: "Chambres",
    bedroomsValue: "5 chambres",
    beds: "Lits",
    bedsValue: "10 Lits",
    bathrooms: "Salle de bain",
    bathroomsValue: "6 / Privé",
    equipments: "Équipements",
    essentials: "Essentials",
    tv: "TV",
    hotWater: "Hot Water",
    ac: "Climatisation / AC",
    heating: "Heating",
    kitchen: "Kitchen",
    washer: "Washer",
    pool: "Pool",
    freeParking: "Free Parking on Premises",
    familyKidFriendly: "Family/Kid Friendly",
    smokingAllowed: "Smoking Allowed",
    pricing: "Prix",
    prixx:"1000 TND",
    extraPeople: "Personnes supplémentaires",
    extraPeopleValue: "Non",
    weekendPrice: "Prix du Week-end",
    weekendPriceValue: "TND 1,100 / fin de semaine",
    cancellation: "Annulation",
    cancellationValue: "Strictes",
    description: "Description",
    propertyDescription: "Le logement",
    propertyDescText: "Notre villa, conçue avec beaucoup d'amour à Kerkennah, offre un cadre paisible et chaleureux pour un séjour inoubliable. Nous vous remercions de respecter les lieux et de contribuer à préserver leur intégrité.",
    guestAccess: "Accès clients",
    guestAccessText: "Les invités ont accès à l'ensemble de la maison, à l'exception de quelques placards privés fermés à clé. Merci de respecter ces espaces réservés.",
    seeMore: "Voir plus",
    houseRules: "Règles de la maison",
    rule1: "Merci de respecter le calme du voisinage, en particulier en soirée.",
    rule2: "La vaisselle doit être nettoyée après usage.",
    rule3: "Merci de sortir les poubelles avant votre départ.",
    rule4: "Il est interdit de déplacer les meubles",
    safetyDevices: "Dispositifs de sécurité",
    fireExtinguisher: "Extincteur",
    privateEntrance: "Entrée privée",
    composition: "COMPOSITION DU LOGEMENT",
    compositionDesc: "Découvrez l'agencement et les espaces de cette magnifique villa",
    // Contact section translations
    contactUs: "CONTACTEZ-NOUS",
    contactDesc: "Une question ? Besoin d'informations supplémentaires ? Notre équipe est à votre écoute.",
    phoneLabel: "Téléphone",
    emailLabel: "Email",
    addressLabel: "Adresse",
    whatsappMsg: "Bonjour! Je suis intéressé par la villa, pourriez-vous me donner plus d'informations ?",
    footerDesc: "Villa de prestige avec vue imprenable, piscine et équipements luxueux.",
    followUs: "Suivez-nous",
    rights: "© 2025 Villa Luxe - Tous droits réservés.",
    // Kerkennah section translations
    kerkennahTitle: "DÉCOUVREZ KERKENNAH",
    kerkennahSubtitle: "Un archipel préservé aux eaux cristallines, entre tradition et authenticité tunisienne",
    kerkennahDesc: "Kerkennah est un archipel tunisien situé dans la mer Méditerranée, au large de Sfax. Connu pour ses paysages sauvages, ses plages de sable fin et son patrimoine unique, c'est une destination de paix et de beauté naturelle.",
    kerkennahFeature1: "Plages préservées",
    kerkennahFeature2: "Pêche traditionnelle",
    kerkennahFeature3: "Ensoleillement 300 jours/an",
    kerkennahGallery: "Galerie de Kerkennah",
    satisfactionRate: "Taux de satisfaction",
    satisfiedCustomers: "Clients satisfaits",
  },
  en: {
    aboutPropertyTitle: "ABOUT THE PROPERTY",
    hostLabel: "Host",
    hostName: "Ramzi",
    hostSince: "Host for 6 years",
    aboutDesc1: "This peaceful and luxurious property offers a relaxing stay for the whole family.",
    aboutDesc2: "An exceptional residence designed to provide comfort, privacy, and elegance with spacious living areas.",
    aboutDesc3: "Enjoy a breathtaking panoramic view.",
    readMore: "Read More",
    whatOffers: "What this property offers",
    beachAccess: "Beach Access",
    wifi: "Wifi",
    workspace: "Dedicated Workspace",
    smokeDetector: "Smoke Detector",
    parking: "Private Parking",
    security: "24/7 Security",
    freePhone: "FREE 1-800-1234-567",
    addressLeft: "2130 Fulton Street",
    inHouse: "inHouse",
    phoneRight: "1-800-8763-765",
    addressRight: "San Diego, CA 94117-1080",
    home: "HOME",
    about: "ABOUT US",
    contacts: "CONTACTS",
    requestCall: "REQUEST A CALL",
    easily: "EASILY",
    rentSale: "RENT & SALE",
    description: "With the help of our services and property management solutions, you can easily rent or sell any house or apartment.",
    viewProperties: "VIEW PROPERTIES",
    // Gallery Section Titles
    composition: "PROPERTY COMPOSITION",
    compositionDesc: "Discover the layout and spaces of this magnificent villa",
    outside: "OUTSIDE",
    inside: "INSIDE",
    roomsAndBeds: "SUITES & ROOMS",
    popularProperties: "POPULAR PROPERTIES",
    viewAll: "VIEW ALL PROPERTIES",
    prop1Title: "5619 Walnut Hill Ln, Dallas, TX 75229",
    prop1Price: "$1500/mon",
    prop1Sqft: "30 Sq. Ft.",
    prop1Beds: "3 Bedrooms",
    prop1Desc: "A comfortable residential property located in a quiet and cozy area.",
    prop2Title: "1808 Bolingbroke Pl, Fort Worth, TX 76140",
    prop2Price: "$1300/mon",
    prop2Sqft: "40 Sq. Ft.",
    prop2Beds: "2 Bedrooms",
    prop2Desc: "Perfect for those who love both city life and the countryside.",
    prop3Title: "924 Bel Air Rd, Los Angeles, CA 90077",
    prop3Price: "$1800/mon",
    prop3Sqft: "50 Sq. Ft.",
    prop3Beds: "4 Bedrooms",
    prop3Desc: "Located in a prime downtown, this property is great for anyone.",
    prop4Title: "13510 W Cheery Lynn Rd, Avondale, AZ 85392",
    prop4Price: "$2700/mon",
    prop4Sqft: "90 Sq. Ft.",
    prop4Beds: "2 Bedrooms",
    prop4Desc: "A luxury mansion for people who enjoy the high-end amenities.",
    // New translations
    propertyDetails: "PROPERTY DETAILS",
    propertyType: "Property Type",
    propertyTypeValue: "Villa",
    capacity: "Capacity",
    capacityValue: "15 Members",
    bedrooms: "Bedrooms",
    bedroomsValue: "5 bedrooms",
    beds: "Beds",
    bedsValue: "10 Beds",
    bathrooms: "Bathroom",
    bathroomsValue: "6 / Private",
    equipments: "Amenities",
    essentials: "Essentials",
    tv: "TV",
    hotWater: "Hot Water",
    ac: "Air Conditioning / AC",
    heating: "Heating",
    kitchen: "Kitchen",
    washer: "Washer",
    pool: "Pool",
    freeParking: "Free Parking on Premises",
    familyKidFriendly: "Family/Kid Friendly",
    smokingAllowed: "Smoking Allowed",
    pricing: "Pricing",
    extraPeople: "Extra People",
    extraPeopleValue: "No",
    weekendPrice: "Weekend Price",
    weekendPriceValue: "TND 1,100 / weekend",
    cancellation: "Cancellation",
    cancellationValue: "Strict",
    description: "Description",
    propertyDescription: "The Property",
    propertyDescText: "Our villa, designed with lots of love in Kerkennah, offers a peaceful and warm setting for an unforgettable stay. We thank you for respecting the premises and helping to preserve their integrity.",
    guestAccess: "Guest Access",
    guestAccessText: "Guests have access to the entire house, except for a few private locked closets. Please respect these reserved spaces.",
    seeMore: "See more",
    houseRules: "House Rules",
    rule1: "Please respect the neighborhood's quiet, especially in the evening.",
    rule2: "Dishes must be cleaned after use.",
    rule3: "Please take out the trash before your departure.",
    rule4: "Moving furniture is not allowed",
    safetyDevices: "Safety Devices",
    fireExtinguisher: "Fire Extinguisher",
    privateEntrance: "Private entrance",
    // Contact section translations
    contactUs: "CONTACT US",
    contactDesc: "Any questions? Need more info? Our team is here to help.",
    phoneLabel: "Phone",
    emailLabel: "Email",
    addressLabel: "Address",
    whatsappMsg: "Hello! I'm interested in the villa, could you give me more information?",
    footerDesc: "Prestige villa with breathtaking view, pool and luxury amenities.",
    followUs: "Follow us",
    rights: "© 2025 Villa Luxe - All rights reserved.",
    // Kerkennah section translations
    kerkennahTitle: "DISCOVER KERKENNAH",
    kerkennahSubtitle: "A preserved archipelago with crystal clear waters, between tradition and Tunisian authenticity",
    kerkennahDesc: "Kerkennah is a Tunisian archipelago located in the Mediterranean Sea, off the coast of Sfax. Known for its wild landscapes, fine sandy beaches and unique heritage, it is a destination of peace and natural beauty.",
    kerkennahFeature1: "Preserved beaches",
    kerkennahFeature2: "Traditional fishing",
    kerkennahFeature3: "300 days of sunshine/year",
    kerkennahGallery: "Kerkennah Gallery",
    satisfactionRate: "Satisfaction rate",
    satisfiedCustomers: "Satisfied customers",
  }
};

const content = {
  fr: [
    {
      title: "Employés Qualifiés",
      text: "Notre équipe est composée de plus de 20 agents immobiliers et gestionnaires expérimentés prêts à vous aider."
    },
    {
      title: "Consultations Gratuites",
      text: "Notre relation avec le client commence toujours par une consultation gratuite afin de comprendre le type de bien recherché."
    },
    {
      title: "Garantie 100%",
      text: "Tous les résultats que vous obtenez de nos agents sont garantis pour vous offrir les meilleures propriétés disponibles."
    }
  ],
  en: [
    {
      title: "Qualified Employees",
      text: "Our team consists of more than 20 qualified and experienced real estate brokers and property managers ready to help you."
    },
    {
      title: "Free Consultations",
      text: "Our relationship with a client always begins with a free consultation to find out what kind of property they are looking for."
    },
    {
      title: "100% Guaranteed",
      text: "All the results you get from our realtors are guaranteed to offer you the best choice of properties."
    }
  ]
};

// Floating WhatsApp Button Component
const FloatingWhatsApp = ({ phoneNumber, message }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <a href={whatsappUrl} className="float-whatsapp" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

// Footer Component
const Footer = ({ t, phoneNumber, whatsappMsg }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h4>VILLA KERKENNAH</h4>
          <p>{t.footerDesc}</p>
        </div>
        <div className="footer-col">
          <h4>{t.followUs}</h4>
          <div className="footer-social">
            <a href="https://www.facebook.com/profile.php?id=61582236082971" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMsg)}`} target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
        <div className="footer-col">
          <h4>{t.contactUs}</h4>
          <p>📞 +216 29 900 508</p>
          <p>✉️ contact@villakerkennah.tn</p>
        </div>
      </div>
      <div className="copyright">
        <p>{t.rights}</p>
      </div>
    </footer>
  );
};
// Contact Section Component
const ContactSection = ({ t, phoneNumber, whatsappMsg }) => {
  return (
    <div id="contact-section" className="contact-section-modern">
      <div className="contact-wrapper-modern">
        <div className="contact-image-modern"></div>
        <div className="contact-info-modern">
          <h2><i className="fas fa-envelope-open-text"></i> {t.contactUs}</h2>
          <p className="contact-desc">{t.contactDesc}</p>
          <div className="contact-details">
            <p><i className="fas fa-phone-alt"></i> <strong>{t.phoneLabel}:</strong> +216 29 900 508</p>
            <p><i className="fas fa-envelope"></i> <strong>{t.emailLabel}:</strong> contact@villakerkennah.tn</p>
            <p><i className="fas fa-map-marker-alt"></i> <strong>{t.addressLabel}:</strong> Ouled Yaneg, Kerkennah, Tunisie</p>
          </div>
          <div className="social-icons-modern">
            <a href="https://www.facebook.com/profile.php?id=61582236082971" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/villa_kyranis/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMsg)}`} className="whatsapp-btn-icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
          </div>
          <a href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMsg)}`} className="whatsapp-direct-btn" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i> WhatsApp Direct
          </a>
        </div>
      </div>
    </div>
  );
};

// Kerkennah Location Section Component
const KerkennahLocationSection = ({ t }) => {
  const navigate = useNavigate(); // This is fine, but make sure it's imported at the top of App.jsx

  const handleGalleryClick = () => {
    // Navigate to gallery page
    navigate('/kerkennah-gallery');
  };
  
  // Google Maps URL for Kerkennah
  const googleMapsUrl = "https://www.google.com/maps/place/Ouled+Yaneg/data=!4m2!3m1!1s0x13004d1286823b27:0xc3a4d590880555ad?sa=X&ved=1t:242&ictx=111";
  
  const handleMapClick = () => {
    window.open(googleMapsUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="kerkennah-location-section">
      <div className="kerkennah-container">
        <div className="kerkennah-header">
          <h2 className="kerkennah-title">{t.kerkennahTitle}</h2>
          <p className="kerkennah-subtitle">{t.kerkennahSubtitle}</p>
          <div className="kerkennah-line"></div>
        </div>
        
        <div className="kerkennah-content">
          <div className="kerkennah-info">
            <p className="kerkennah-description">{t.kerkennahDesc}</p>
            <div className="kerkennah-features">
              <div className="kerkennah-feature">
                <i className="fas fa-umbrella-beach"></i>
                <span>{t.kerkennahFeature1}</span>
              </div>
              <div className="kerkennah-feature">
                <i className="fas fa-fish"></i>
                <span>{t.kerkennahFeature2}</span>
              </div>
              <div className="kerkennah-feature">
                <i className="fas fa-sun"></i>
                <span>{t.kerkennahFeature3}</span>
              </div>
            </div>
            <button onClick={handleGalleryClick} className="kerkennah-gallery-link">
              <i className="fas fa-images"></i>
              {t.kerkennahGallery}
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
          
          <div className="kerkennah-map" onClick={handleMapClick} style={{ cursor: "pointer" }}>
            <div className="map-placeholder">
              <i className="fas fa-map-marked-alt"></i>
              <p>📍 Localisation Kerkennah, Tunisie</p>
              <small>Archipel de 12 îles • Distance: 20km de Sfax</small>
              <div className="map-click-hint">
                <i className="fas fa-external-link-alt"></i> Cliquez pour voir sur Google Maps
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Satisfaction Gauge Component with logo colors
const SatisfactionGauge = ({ value = 92, label = "Satisfaction" }) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  
  return (
    <div className="chart-container">
      <h3 className="chart-title">
        <i className="fas fa-chart-line" style={{ color: '#04B59F' }}></i>
        Taux de satisfaction
      </h3>
      <div className="chart-wrapper">
        <svg viewBox="0 0 200 120" className="gauge">
          <circle cx="100" cy="100" r={radius} className="gauge__background" />
          <circle 
            cx="100" 
            cy="100" 
            r={radius} 
            className="gauge__value"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform="rotate(-90 100 100)"
          />
          <text x="100" y="95" className="gauge__label">{value}%</text>
          <text x="100" y="118" className="gauge__sub-label">{label}</text>
        </svg>
      </div>
    </div>
  );
};

// Stats Row with logo colors
const StatsRow = ({ t }) => {
  const stats = [
    { number: "150+", label: "Séjours réussis", icon: "fa-calendar-check" },
    { number: "98%", label: t.satisfiedCustomers || "Clients satisfaits", icon: "fa-smile" },
    { number: "24/7", label: "Assistance", icon: "fa-headset" },
    { number: "5★", label: "Note moyenne", icon: "fa-star" }
  ];
  
  return (
    <div className="stats-row">
     
    </div>
  );
};

// Reusable Gallery Component with Titles
const GallerySection = ({ title, images, imageTitles }) => (
  <div className="modern-gallery-section">
    <div className="modern-gallery-header">
      <h2 className="modern-gallery-title">{title}</h2>
      <div className="modern-gallery-line"></div>
    </div>
    <div className="modern-gallery-grid">
      {images.map((image, index) => (
        <div key={index} className="modern-gallery-card">
          <div className="modern-gallery-image">
            <img src={image} alt={`${title} ${index + 1}`} />
            <div className="modern-gallery-overlay">
              {/* <span>View Gallery</span> */}
            </div>
          </div>
          {imageTitles && imageTitles[index] && (
            <div className="modern-gallery-caption">
              <h3 className="gallery-image-title">{imageTitles[index]}</h3>
              <div className="gallery-title-line"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

// New Dual Image Component for Suits & Bathrooms with Chambre (Room n°5) using c11 and c12
// New Dual Image Component for Suits & Bathrooms with Chambre (Room n°5) using c11 and c22
const SuitsAndBathsSection = ({ title, suitsImages, bathsImages, suitsTitles, bathsTitles }) => {
  // Combine images into pairs (suit + bathroom) with combined titles
  const pairs = suitsImages.map((suitImage, index) => ({
    suit: suitImage,
    bath: bathsImages[index % bathsImages.length],
    combinedTitle: `${suitsTitles[index] || `Suite ${index + 1}`  }`,
    combinedSubtitle: "Luxueuse suite avec salle de bain attenante"
  }));

  return (
    <div className="modern-gallery-section">
      <div className="modern-gallery-header">
        <h2 className="modern-gallery-title">{title}</h2>
        <div className="modern-gallery-line"></div>
      </div>
      <div className="suits-baths-grid">
        {pairs.map((pair, idx) => (
          <div key={idx} className="suite-row">
            {/* Two Images Side by Side */}
            <div className="suite-images-wrapper">
              {/* Suite Image */}
              <div className="suite-image-container">
                <div className="modern-gallery-image">
                  <img src={pair.suit} alt={`Suite ${idx + 1}`} />
                  <div className="modern-gallery-overlay">
                    <span>View Suite</span>
                  </div>
                  <span className="image-badge">SUITE</span>
                  <div className="image-overlay-icon">
                    <i className="fas fa-bed"></i>
                  </div>
                </div>
              </div>
              
              {/* Bathroom Image */}
              <div className="bath-image-container">
                <div className="modern-gallery-image">
                  <img src={pair.bath} alt={`Bathroom ${idx + 1}`} />
                  <div className="modern-gallery-overlay">
                    <span>View Bathroom</span>
                  </div>
                  <span className="image-badge">BATHROOM</span>
                  <div className="image-overlay-icon">
                    <i className="fas fa-bath"></i>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Combined Description for Both Images */}
            <div className="combined-caption">
              <h3 className="combined-title">
                {pair.combinedTitle}
              </h3>
              <p className="combined-subtitle">{pair.combinedSubtitle}</p>
              <div className="combined-line"></div>
            </div>
          </div>
        ))}
        
        {/* CHAMBRE ROW (Room n°5) - TWO IMAGES side by side using c11 and c22 */}
        <div className="suite-row chambre-row">
          {/* Two Images Side by Side for Chambre */}
          <div className="suite-images-wrapper">
            {/* First Chambre Image - c11 */}
            <div className="suite-image-container">
              <div className="modern-gallery-image">
                <img src={c11} alt="Chambre Vue 1" />
                <div className="modern-gallery-overlay">
                  <span>View Room</span>
                </div>
                <span className="image-badge chambre-badge">CHAMBRE</span>
                <div className="image-overlay-icon">
                  <i className="fas fa-bed"></i>
                  <i className="fas fa-bed" style={{ marginLeft: '8px' }}></i>
                </div>
              </div>
            </div>
            
            {/* Second Chambre Image - c22 */}
            <div className="bath-image-container">
              <div className="modern-gallery-image">
                <img src={c22} alt="Chambre Vue 2" />
                <div className="modern-gallery-overlay">
                  <span>View Room</span>
                </div>
                <span className="image-badge chambre-badge">CHAMBRE</span>
                <div className="image-overlay-icon">
                  <i className="fas fa-bed"></i>
                  <i className="fas fa-bed" style={{ marginLeft: '8px' }}></i>
                </div>
              </div>
            </div>
          </div>
          
          {/* Description for the Chambre */}
          <div className="combined-caption">
            <h3 className="combined-title">
              Chambre Familiale
            </h3>
            <p className="combined-subtitle">Chambre confortable avec 2 lits, parfaite pour la famille</p>
            <div className="combined-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [language, setLanguage] = useState('fr');
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });
  const t = translations[language];
  
  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);
  
  // Refs for smooth scrolling
  const exteriorRef = useRef(null);
  const compositionRef = useRef(null);
  const contactRef = useRef(null);

  const frontImages = [c3, c2, c1, c4];
  
  // Inside images array - 3 images
  const insideImages = [inside2, inside1, b2];
  
  // Inside image titles
  const insideImageTitles = ["Salon", "Cuisine", "Salle de bain"];
  
  // Suits images (rooms)
  const suitsImages = [room1, room2, room3, room4];
  const suitsTitles = ["Suite 1", "Suite 2", "Suite 3", "Suite 4"];
  
  // Bathrooms images
  const bathsImages = [b1, b2, b3, b4];
  const bathsTitles = ["Salle de bain Spa", "Salle de bain Moderne", "Salle de bain Luxe", "Salle de bain Privée"];

  // WhatsApp configuration
  const phoneNumber = "📞 +216 29 900 508";
  const whatsappMsg = t.whatsappMsg;

  const properties = [
    {
      id: 1,
      title: t.prop1Title,
      price: t.prop1Price,
      sqft: t.prop1Sqft,
      beds: t.prop1Beds,
      desc: t.prop1Desc,
      image: b1  
    },
    {
      id: 2,
      title: t.prop2Title,
      price: t.prop2Price,
      sqft: t.prop2Sqft,
      beds: t.prop2Beds,
      desc: t.prop2Desc,
      image: b2
    },
    {
      id: 3,
      title: t.prop3Title,
      price: t.prop3Price,
      sqft: t.prop3Sqft,
      beds: t.prop3Beds,
      desc: t.prop3Desc,
      image: b3    
    },
    {
      id: 4,
      title: t.prop4Title,
      price: t.prop4Price,
      sqft: t.prop4Sqft,
      beds: t.prop4Beds,
      desc: t.prop4Desc,
      image: b4     
    }
  ];

  // Smooth scroll handlers
  const scrollToExterior = () => {
    exteriorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const scrollToComposition = () => {
    compositionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const safetyDevices = [
    { key: 'fireExtinguisher', icon: '🧯' },
    { key: 'privateEntrance', icon: '🚪' },
    { key: 'smokeDetector', icon: '🚨' },
  ];
  

  // Update WhatsApp message when language changes
  useEffect(() => {
    // This will trigger re-render of WhatsApp links
  }, [language]);

  return (
    <div className={`app ${darkMode ? 'dark-mode-app' : ''}`}>
      {/* Language Switcher & Dark Mode Toggle */}
      <div className="language-switcher">
        <button 
          className={`lang-btn ${language === 'fr' ? 'active' : ''}`} 
          onClick={() => setLanguage('fr')}
        >
          FR
        </button>
        <span className="lang-divider">|</span>
        <button 
          className={`lang-btn ${language === 'en' ? 'active' : ''}`} 
          onClick={() => setLanguage('en')}
        >
          EN
        </button>
        <span className="lang-divider">|</span>
        <button 
          className={`dark-mode-btn ${darkMode ? 'active' : ''}`} 
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div> 

      {/* Hero Section - Full Screen Header */}
      <header className="hero-header">
        <nav className="nav">
          <div className="logo-container">
            <img 
              src={logoo}
              alt="Property Logo"
              className="logo-image"
            />
          </div>
          <div className="nav-links">
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToExterior(); }}>{t.home}</a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToComposition(); }}>{t.about}</a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToContact(); }}>{t.contacts}</a>
          </div>
          <button className="request-btn">{t.requestCall}</button>
        </nav>

        <div className="hero-content">
          <h1 className="easily">{t.easily}</h1>
          <h2 className="rent-sale">{t.rentSale}</h2>
          <p className="description">{t.description}</p>
          <button className="view-btn">{t.viewProperties}</button>
        </div>
      </header>
      <br/>
      <br/>
      <br/>

      {/* KERKENNAH LOCATION SECTION */}
      <KerkennahLocationSection t={t} />

      {/* Stats Row with logo colors */}
      <StatsRow t={t} />

      {/* COMPOSITION DU LOGEMENT Section */}
      <div ref={compositionRef} className="composition-section">
        <div className="modern-gallery-header">
          <h2 className="modern-gallery-title">{t.composition}</h2>
          <div className="modern-gallery-line"></div>
          <p className="composition-subtitle">{t.compositionDesc}</p>
        </div>
      </div>
      
      <section className="property_details_section_x88">
        <div className="property_details_container_x88">
          <div className="details_grid_x88">
            <div className="detail_item_x88">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12L12 3L21 12L12 21L3 12Z" />
              </svg>
              <div className="detail_text_x88">
                <span className="detail_label_x88">{t.propertyType}</span>
                <span className="detail_value_x88">{t.propertyTypeValue}</span>
              </div>
            </div>
            
            <div className="detail_item_x88">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <div className="detail_text_x88">
                <span className="detail_label_x88">{t.capacity}</span>
                <span className="detail_value_x88">{t.capacityValue}</span>
              </div>
            </div>
            
            <div className="detail_item_x88">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <line x1="9" y1="8" x2="15" y2="8" />
              </svg>
              <div className="detail_text_x88">
                <span className="detail_label_x88">{t.bedrooms}</span>
                <span className="detail_value_x88">{t.bedroomsValue}</span>
              </div>
            </div>
            
            <div className="detail_item_x88">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <circle cx="9.5" cy="11.5" r="1.5" />
                <circle cx="14.5" cy="11.5" r="1.5" />
              </svg>
              <div className="detail_text_x88">
                <span className="detail_label_x88">{t.beds}</span>
                <span className="detail_value_x88">{t.bedsValue}</span>
              </div>
            </div>
            
            <div className="detail_item_x88">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              <div className="detail_text_x88">
                <span className="detail_label_x88">{t.bathrooms}</span>
                <span className="detail_value_x88">{t.bathroomsValue}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* OUTSIDE Gallery Section */}
      <div ref={exteriorRef}>
        <GallerySection title={t.outside} images={frontImages} />
      </div>

      {/* INSIDE Gallery Section */}
      <GallerySection title={t.inside} images={insideImages} imageTitles={insideImageTitles} />

      {/* SUITS & BATHROOMS Section - with new Chambre (Room n°5) */}
      <SuitsAndBathsSection 
        title={t.roomsAndBeds}
        suitsImages={suitsImages}
        bathsImages={bathsImages}
        suitsTitles={suitsTitles}
        bathsTitles={bathsTitles}
      />

      {/* About Property Section */}
      <section className="frs_about_property_section_x77">
        <div className="frs_about_container_x77">
          <div className="frs_about_content_x77">
            <div className="frs_about_left_x77">
              <h2 className="frs_about_title_x77">
                <svg className="frs_title_icon_x77" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12L12 3L21 12L12 21L3 12Z" />
                  <path d="M12 7L12 12L15 15" />
                  <circle cx="12" cy="16" r="2" />
                </svg>
                {t.aboutPropertyTitle}
              </h2>

              <div className="frs_about_text_box_x77">
                <p>
                  <svg className="frs_check_icon_x77" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {t.aboutDesc1}
                </p>
                <p>
                  <svg className="frs_check_icon_x77" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {t.aboutDesc2}
                </p>
                <p>
                  <svg className="frs_check_icon_x77" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {t.aboutDesc3}
                </p>
              </div>

              <button className="frs_about_read_btn_x77">
                {t.readMore}
                <svg className="frs_arrow_icon_x77" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

              <div className="frs_about_features_x77">
                <h3>
                  <svg className="frs_features_title_icon_x77" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {t.whatOffers}
                </h3>

                <div className="frs_features_grid_x77">
                  <span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    {t.beachAccess}
                  </span>
                  <span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                      <line x1="12" y1="20" x2="12.01" y2="20" />
                    </svg>
                    {t.wifi}
                  </span>
                  <span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <line x1="9" y1="8" x2="15" y2="8" />
                      <line x1="9" y1="16" x2="15" y2="16" />
                    </svg>
                    {t.workspace}
                  </span>
                  <span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    {t.smokeDetector}
                  </span>
                  <span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="8" width="18" height="13" rx="2" />
                      <path d="M7 5V8" />
                      <path d="M17 5V8" />
                      <circle cx="8.5" cy="13.5" r="1.5" />
                      <circle cx="15.5" cy="13.5" r="1.5" />
                    </svg>
                    {t.parking}
                  </span>
                  <span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    {t.security}
                  </span>
                </div>
              </div>
            </div>

            <div className="frs_about_right_x77">
              <div className="frs_image_wrapper_x77">
                <img 
                  src={n1}
                  alt="Property"
                  className="frs_about_image_x77"
                />
                <div className="frs_image_overlay_x77"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section with Image */}
      <section className="amenities_section_x89">
        <div className="amenities_container_x89">
          <div className="amenities_content_x89">
            {/* Left Side - Image */}
            <div className="amenities_left_x89">
              <div className="amenities_image_wrapper_x89">
                <img 
                  src={c2}
                  alt="Property Amenities"
                  className="amenities_image_x89"
                />
                <div className="amenities_image_overlay_x89"></div>
                <div className="amenities_text_overlay_x89">
                  {t.equipments}
                </div>
              </div>
            </div>

            {/* Right Side - Amenities Details */}
            <div className="amenities_right_x89">
              <div className="amenities_grid_x89">
                <div className="amenity_item_x89">
                  <span className="amenity_icon_x89">🏠</span>
                  <span className="amenity_name_x89">{t.essentials}</span>
                </div>
                <div className="amenity_item_x89">
                  <span className="amenity_icon_x89">📺</span>
                  <span className="amenity_name_x89">{t.tv}</span>
                </div>
                <div className="amenity_item_x89">
                  <span className="amenity_icon_x89">💧</span>
                  <span className="amenity_name_x89">{t.hotWater}</span>
                </div>
                <div className="amenity_item_x89">
                  <span className="amenity_icon_x89">❄️</span>
                  <span className="amenity_name_x89">{t.ac}</span>
                </div>
                <div className="amenity_item_x89">
                  <span className="amenity_icon_x89">🔥</span>
                  <span className="amenity_name_x89">{t.heating}</span>
                </div>
                <div className="amenity_item_x89">
                  <span className="amenity_icon_x89">🍳</span>
                  <span className="amenity_name_x89">{t.kitchen}</span>
                </div>
                <div className="amenity_item_x89">
                  <span className="amenity_icon_x89">🧺</span>
                  <span className="amenity_name_x89">{t.washer}</span>
                </div>
                <div className="amenity_item_x89">
                  <span className="amenity_icon_x89">🏊</span>
                  <span className="amenity_name_x89">{t.pool}</span>
                </div>
                <div className="amenity_item_x89">
                  <span className="amenity_icon_x89">🅿️</span>
                  <span className="amenity_name_x89">{t.freeParking}</span>
                </div>
                <div className="amenity_item_x89">
                  <span className="amenity_icon_x89">👨‍👩‍👧‍👦</span>
                  <span className="amenity_name_x89">{t.familyKidFriendly}</span>
                </div>
                <div className="amenity_item_x89">
                  <span className="amenity_icon_x89">🚬</span>
                  <span className="amenity_name_x89">{t.smokingAllowed}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="description_section_x91">
        <div className="description_container_x91">
          <h2 className="description_title_x91">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            {t.description}
          </h2>
          
          <div className="description_content_x91">
            <div className="description_block_x91">
              <h3>{t.propertyDescription}</h3>
              <p>{t.propertyDescText}</p>
            </div>
            
            <div className="description_block_x91">
              <h3>{t.guestAccess}</h3>
              <p>{t.guestAccessText}</p>
              <button className="see_more_btn_x91">{t.seeMore}</button>
            </div>
          </div>
        </div>
      </section>

      {/* House Rules Section */}
      <section className="rules_section_x92">
        <div className="rules_container_x92">
          <h2 className="rules_title_x92">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            {t.houseRules}
          </h2>
          
          <div className="rules_list_x92">
            <div className="rule_item_x92">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{t.rule1}</span>
            </div>
            <div className="rule_item_x92">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{t.rule2}</span>
            </div>
            <div className="rule_item_x92">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{t.rule3}</span>
            </div>
            <div className="rule_item_x92">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{t.rule4}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Devices Section */}
      <section className="safety_section_x93">
        <div className="safety_container_x93">
          <h2 className="safety_title_x93">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            {t.safetyDevices}
          </h2>
          
          <div className="safety_grid_x93">
            {safetyDevices.map((device) => (
              <div key={device.key} className="safety_item_x93">
                <span className="safety_icon_x93">{device.icon}</span>
                <span className="safety_name_x93">{t[device.key]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Section - REMOVED - replaced with Suits & Baths section */}
      
      {/* CONTACT SECTION */}
      <div ref={contactRef}>
        <ContactSection t={t} phoneNumber={phoneNumber} whatsappMsg={whatsappMsg} />
      </div>

      {/* FOOTER */}
      <Footer t={t} phoneNumber={phoneNumber} whatsappMsg={whatsappMsg} />

      {/* FLOATING WHATSAPP BUTTON */}
      <FloatingWhatsApp phoneNumber={phoneNumber} message={whatsappMsg} />
    </div>
  );
}

export default App;