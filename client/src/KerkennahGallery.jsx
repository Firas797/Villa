import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './KerkennahGallery.css';

// Import only 5 images as requested
import k1 from './assets/kerkennah/k1.jpg';
import k2 from './assets/kerkennah/k2.jpg';
import k3 from './assets/kerkennah/k3.jpg';
import k4 from './assets/kerkennah/k4.jpg';
import k5 from './assets/kerkennah/k5.jpg';

const KerkennahGallery = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('fr'); // 'fr' for French, 'en' for English

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Gallery images - only 5 images
  const galleryImages = [k1, k2, k3, k4, k5];

  // French translations
  const fr = {
    // Hero
    heroTitle: "Kerkennah",
    heroSubtitle: "Découvrez l'Authentique Archipel de Tunisie",
    
    // Back button
    back: "Retour Accueil",
    
    // Introduction
    welcomeTitle: "Bienvenue à Kerkennah",
    introText: "Un groupe d'îles situé au large de la côte est de la Tunisie dans le golfe de Gabès. Les îles sont de basse altitude, ne dépassant pas 13 mètres au-dessus du niveau de la mer. Les îles principales sont Chergui et Othnia. L'archipel a une superficie de 160 kilomètres carrés et une population de 15 301 habitants.",
    location: "Emplacement : Golfe de Gabès, Tunisie",
    mainIslands: "Îles principales : Chergui & Othnia",
    terrain: "Terrain de basse altitude, max 13m au-dessus du niveau de la mer",
    quote: "Un voyage extraordinaire dans le temps. Découvrez un archipel authentique préservé dans sa beauté naturelle.",
    
    // Places section
    placesTitle: "Découvrez les Lieux Historiques",
    placesSubtitle: "Explorez le riche patrimoine et les monuments historiques de Kerkennah",
    learnMore: "En savoir plus",
    
    // Gallery section
    galleryTitle: "Galerie de Kerkennah",
    gallerySubtitle: "Plongez dans les paysages époustouflants et le patrimoine culturel",
    
    // Facts section
    factsTitle: "Le Saviez-Vous ?",
    fact1: "Kerkennah est connue pour ses techniques de pêche traditionnelles, notamment la méthode unique de pêche 'charfia'",
    fact2: "L'archipel compte plus de 25 marabouts (tombes de saints) qui sont d'importants lieux de pèlerinage",
    fact3: "Les îles ont joué un rôle important dans le mouvement d'indépendance de la Tunisie",
    fact4: "Le terrain de basse altitude de Kerkennah le rend vulnérable à l'élévation du niveau de la mer, mais crée également des écosystèmes côtiers uniques",
    
    // CTA section
    ctaTitle: "Planifiez Votre Visite",
    ctaText: "Découvrez la beauté authentique et la riche histoire de l'archipel de Kerkennah",
    bookTour: "Réserver une visite",
    contactUs: "Contactez-nous",
    
    // Place titles
    place1Title: "Borj El Hassar",
    place1Desc: "Les vastes ruines de Borj el-Hassar suggèrent néanmoins une certaine polarisation urbaine autour de la ville portuaire de Cirena. L'occupation de ce centre remonte à la période punique, comme en témoigne la collection céramique du front de mer ainsi que les tombes lithoponiques, signalées à 500 m au sud du borj.",
    place1Period: "Période Punique",
    
    place2Title: "Borj Melilla",
    place2Desc: "Tour de Sidi Youssef située à Melilla. Une tour historique offrant des vues panoramiques sur l'archipel environnant.",
    place2Period: "Tour Historique",
    
    place3Title: "Ennajet : Le bateau de survie de Bourguiba",
    place3Desc: "En 1945, le leader Bourguiba se réfugie à Kerkennah comme étape précédant son exil en Égypte. Il a emprunté un bateau que l'on peut toujours voir sur l'île.",
    place3Period: "1945",
    
    place4Title: "Marabouts de Kerkennah",
    place4Desc: "Il y a plus de 25 marabouts correspondant à des tombes de saints qui apparaissent en partie dans la toponymie locale : Sidi Youssef, Sidi Fredj, etc. Ces sites sacrés sont d'importantes destinations de pèlerinage.",
    place4Period: "Sites Sacrés",
    
    place5Title: "Musée d'Abbassia",
    place5Desc: "Le musée d'El Abbassia est un établissement où sont rassemblés, classés et conservés des objets insulaires d'intérêt historique et ethnographique.",
    place5Period: "Patrimoine Culturel",
    
    // Stats
    area: "Superficie",
    population: "Population",
    maxElevation: "Altitude max",
    marabouts: "Marabouts",
    historicalYear: "Année Historique",
    
    // Island names
    mainIslandsLabel: "Chergui & Othnia"
  };

  // English translations
  const en = {
    // Hero
    heroTitle: "Kerkennah",
    heroSubtitle: "Discover the Authentic Archipelago of Tunisia",
    
    // Back button
    back: "Back Home",
    
    // Introduction
    welcomeTitle: "Welcome to Kerkennah",
    introText: "A group of islands lying off the east coast of Tunisia in the Gulf of Gabes. The islands are low-lying being no more than 13 metres above sea level. The main islands are Chergui and Othnia, the archipelago has an area of 160 square kilometres and a population of 15,301.",
    location: "Location: Gulf of Gabes, Tunisia",
    mainIslands: "Main Islands: Chergui & Othnia",
    terrain: "Low-lying terrain, max 13m above sea level",
    quote: "A tremendous journey through time. Discover an authentic archipelago preserved in its natural beauty.",
    
    // Places section
    placesTitle: "Discover Historic Places",
    placesSubtitle: "Explore the rich heritage and historical landmarks of Kerkennah",
    learnMore: "Learn More",
    
    // Gallery section
    galleryTitle: "Gallery of Kerkennah",
    gallerySubtitle: "Immerse yourself in the stunning landscapes and cultural heritage",
    
    // Facts section
    factsTitle: "Did You Know?",
    fact1: "Kerkennah is known for its traditional fishing techniques, especially the unique 'charfia' fishing method",
    fact2: "The archipelago has over 25 marabouts (tombs of saints) that are important pilgrimage sites",
    fact3: "The islands played a significant role in Tunisia's independence movement",
    fact4: "Kerkennah's low-lying terrain makes it vulnerable to sea-level rise, but also creates unique coastal ecosystems",
    
    // CTA section
    ctaTitle: "Plan Your Visit",
    ctaText: "Experience the authentic beauty and rich history of Kerkennah Archipelago",
    bookTour: "Book a Tour",
    contactUs: "Contact Us",
    
    // Place titles
    place1Title: "Borj El Hassar",
    place1Desc: "The extensive ruins of Borj el-Hassar nevertheless suggest a certain urban polarization around the port city of Cirena. The occupation of this center dates back to the Punic period, as evidenced by the ceramic collection on the waterfront as well as the lithoponic tombs, reported 500 m south of the borj.",
    place1Period: "Punic Period",
    
    place2Title: "Borj Melilla",
    place2Desc: "Tower of Sidi Youssef located in Melilla. A historic tower offering panoramic views of the surrounding archipelago.",
    place2Period: "Historic Tower",
    
    place3Title: "Ennajet: The survival boat of Bourguiba",
    place3Desc: "In 1945, the leader Bourguiba took refuge in Kerkennah as a stage preceding his exile in Egypt. He has borrowed a boat which can always be seen on the island.",
    place3Period: "1945",
    
    place4Title: "Marabouts of Kerkennah",
    place4Desc: "There are more than 25 marabouts corresponding to tombs of saints which appear in part in local toponymy: Sidi Youssef, Sidi Fredj, etc. These sacred sites are important pilgrimage destinations.",
    place4Period: "Sacred Sites",
    
    place5Title: "Abbassia Museum",
    place5Desc: "The museum of El Abbassia is an establishment where are gathered, classified and conserved island objects of historical, ethnographic interest.",
    place5Period: "Cultural Heritage",
    
    // Stats
    area: "Area",
    population: "Population",
    maxElevation: "Max Elevation",
    marabouts: "Marabouts",
    historicalYear: "Historical Year",
    
    // Island names
    mainIslandsLabel: "Chergui & Othnia"
  };

  const t = language === 'fr' ? fr : en;

  // Places data
  const places = [
    {
      id: 1,
      title: t.place1Title,
      description: t.place1Desc,
      image: k1,
      period: t.place1Period,
      icon: "🏛️"
    },
    {
      id: 2,
      title: t.place2Title,
      description: t.place2Desc,
      image: k2,
      period: t.place2Period,
      icon: "🗼"
    },
    {
      id: 3,
      title: t.place3Title,
      description: t.place3Desc,
      image: k3,
      period: t.place3Period,
      icon: "⛵"
    },
    {
      id: 4,
      title: t.place4Title,
      description: t.place4Desc,
      image: k4,
      period: t.place4Period,
      icon: "🕌"
    },
    {
      id: 5,
      title: t.place5Title,
      description: t.place5Desc,
      image: k5,
      period: t.place5Period,
      icon: "🏺"
    }
  ];

  return (
    <div className="kerkennah-gallery-page" dir={language === 'fr' ? 'ltr' : 'ltr'}>
      {/* Hero Section */}
      <div className="kerkennah-gallery-hero">
        {/* Sticky Back Button - now follows when scrolling */}
        <div className="sticky-nav">
          <button className="back-button" onClick={() => navigate('/')}>
            <i className="fas fa-arrow-left"></i> {t.back}
          </button>
          
          {/* Language Toggle Button */}
          <button 
            className="language-toggle"
            onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
          >
            {language === 'fr' ? '🇬🇧 English' : '🇫🇷 Français'}
          </button>
        </div>
        
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">{t.heroTitle}</h1>
          <p className="hero-subtitle">{t.heroSubtitle}</p>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">160 km²</span>
              <span className="stat-label">{t.area}</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">15,301</span>
              <span className="stat-label">{t.population}</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">13 m</span>
              <span className="stat-label">{t.maxElevation}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2>{t.welcomeTitle}</h2>
              <div className="title-line"></div>
              <p>{t.introText}</p>
              <div className="info-grid-small">
                <div className="info-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{t.location}</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-water"></i>
                  <span>{t.mainIslands}</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-mountain"></i>
                  <span>{t.terrain}</span>
                </div>
              </div>
            </div>
            <div className="intro-quote">
              <i className="fas fa-quote-left"></i>
              <p>{t.quote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Places Grid Section */}
      <section className="places-section">
        <div className="container">
          <div className="section-header">
            <h2>{t.placesTitle}</h2>
            <div className="title-line"></div>
            <p>{t.placesSubtitle}</p>
          </div>
          <div className="places-grid">
            {places.map(place => (
              <div key={place.id} className="place-card">
                <div className="place-image">
                  <img src={place.image} alt={place.title} />
                  <div className="place-icon">{place.icon}</div>
                  <div className="place-period">{place.period}</div>
                </div>
                <div className="place-content">
                  <h3>{place.title}</h3>
                  <p>{place.description}</p>
                  <div className="place-footer">
                    <button className="read-more-btn">
                      {t.learnMore} <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Commented out as per your code */}
      {/* <section className="gallery-section">
        <div className="container">
          <div className="section-header">
            <h2>{t.galleryTitle}</h2>
            <div className="title-line"></div>
            <p>{t.gallerySubtitle}</p>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((img, index) => (
              <div key={index} className="gallery-item">
                <img src={img} alt={`Kerkennah ${index + 1}`} />
                <div className="gallery-overlay">
                  <i className="fas fa-search-plus"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Quick Facts Section */}
      <section className="facts-section">
        <div className="container">
          <div className="facts-content">
            <div className="facts-text">
              <h2>{t.factsTitle}</h2>
              <div className="title-line"></div>
              <ul>
                <li>
                  <i className="fas fa-check-circle"></i>
                  <span>{t.fact1}</span>
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  <span>{t.fact2}</span>
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  <span>{t.fact3}</span>
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  <span>{t.fact4}</span>
                </li>
              </ul>
            </div>
            <div className="facts-image">
              <div className="facts-stats">
                <div className="fact-stat">
                  <span className="fact-number">25+</span>
                  <span className="fact-label">{t.marabouts}</span>
                </div>
                <div className="fact-stat">
                  <span className="fact-number">+</span>
                  <span className="fact-label">{t.area}</span>
                </div>
                <div className="fact-stat">
                  <span className="fact-number">1945</span>
                  <span className="fact-label">{t.historicalYear}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Commented out as per your code */}
      {/* <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>{t.ctaTitle}</h2>
            <p>{t.ctaText}</p>
            <div className="cta-buttons">
              <button className="cta-btn primary">{t.bookTour}</button>
              <button className="cta-btn secondary">{t.contactUs}</button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default KerkennahGallery;