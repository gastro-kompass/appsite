// Global Constants for Gastrokompass

export const CONTACT_INFO = {
  email: 'info@gastrokompass.at',
  phone: '+43 660 7676484',
  phoneLink: 'tel:+436607676484',
  whatsappLink: 'https://wa.me/436607676484',
  address: 'Döblinger Straße 82/2a, 1190 Wien, Österreich',
  addressShort: 'Döblinger Straße 82/2a\n1190 Wien, Österreich',
  addressStreet: 'Döblinger Straße 82/2a',
  addressCity: '1190 Wien, Österreich',
  wkoPartnerLabel: 'WKO Wien Partner',
  website: 'www.gastrokompass.at',
  websiteUrl: 'https://gastrokompass.at',
};

export const OFFICE_HOURS = [
  { day: 'Mo - Do', hours: '09:00 - 18:00 Uhr' },
  { day: 'Fr', hours: '09:00 - 15:00 Uhr' },
  { day: 'Sa - So', hours: 'Geschlossen' },
];

export const IMAGES = {
  logo: '/assets/images/logo.jpeg',
  heroBg: '/assets/images/hero-bg.png',
  aboutOwner: '/assets/images/about-owner.png',
  aboutOffice: '/assets/images/about-office.png',
  testimonialOwner: '/assets/images/testimonial-owner.png',
  testimonialHeadshot: '/assets/images/testimonial-headshot.png',
  heroImage1: '/assets/images/hero-image-1.png',
  heroImage2: '/assets/images/hero-image-2.png',
  processImage1: '/assets/images/process-image-1.png',
  processImage2: '/assets/images/process-image-2.png',
};

export const VISION_ITEMS = [
  {
    icon: 'ShieldCheckIcon' as const,
    title: 'Bürokratie-Entlastung',
    text: 'Wir navigieren durch alle behördlichen Anforderungen.',
  },
  {
    icon: 'StarIcon' as const,
    title: 'Fokus auf Gastronomie',
    text: 'Ihr Kerngeschäft steht im Mittelpunkt.',
  },
  {
    icon: 'MapIcon' as const,
    title: 'Strukturierte Orientierung',
    text: 'Klare Schritte, starke Partner.',
  },
  {
    icon: 'BuildingStorefrontIcon' as const,
    title: 'Exklusiv für Gastro',
    text: 'Spezialisiert auf Wien & Österreich.',
  },
];

export const SERVICE_OPTIONS = [
  'Standort & Lokalfindung',
  'Gründung & Rechtsform',
  'Förderungen & Finanzierung',
  'Betriebsanlagengenehmigung',
  'Registrierkasse & Payment',
  'Steuerliche Expertise',
  'Ausstattung & Bau',
  'Marketing & Digitale Präsenz',
  'Das Rundum-Paket',
  'Sonstiges',
];

export const COMPASS_SEGMENTS = [
  {
    id: 'standort',
    label: 'Standort &',
    sublabel: 'Lokalfindung',
    href: '#leistungen',
    angle: -67.5,
    icon: 'MapPinIcon' as const,
    color: '#9DC40E',
  },
  {
    id: 'gruendung',
    label: 'Gründung &',
    sublabel: 'Rechtsform',
    href: '#leistungen',
    angle: -22.5,
    icon: 'DocumentTextIcon' as const,
    color: '#7ab80d',
  },
  {
    id: 'foerderungen',
    label: 'Förderungen &',
    sublabel: 'Finanzierung',
    href: '#leistungen',
    angle: 22.5,
    icon: 'BanknotesIcon' as const,
    color: '#5a9e0a',
  },
  {
    id: 'genehmigung',
    label: 'Betriebsanlagen-',
    sublabel: 'Genehmigung',
    href: '#leistungen',
    angle: 67.5,
    icon: 'ClipboardDocumentCheckIcon' as const,
    color: '#9DC40E',
  },
  {
    id: 'kassensysteme',
    label: 'Kassensysteme',
    sublabel: '& Payment',
    href: '#leistungen',
    angle: 112.5,
    icon: 'ComputerDesktopIcon' as const,
    color: '#7ab80d',
  },
  {
    id: 'steuer',
    label: 'Steuerliche',
    sublabel: 'Betreuung',
    href: '#leistungen',
    angle: 157.5,
    icon: 'CalculatorIcon' as const,
    color: '#5a9e0a',
  },
  {
    id: 'ausstattung',
    label: 'Ausstattung',
    sublabel: '& Bau',
    href: '#leistungen',
    angle: 202.5,
    icon: 'WrenchScrewdriverIcon' as const,
    color: '#9DC40E',
  },
  {
    id: 'marketing',
    label: 'Marketing &',
    sublabel: 'Digitale Präsenz',
    href: '#leistungen',
    angle: 247.5,
    icon: 'DevicePhoneMobileIcon' as const,
    color: '#7ab80d',
  },
  {
    id: 'rundum',
    label: 'Rundum-',
    sublabel: 'Paket',
    href: '#leistungen',
    angle: 292.5,
    icon: 'CubeIcon' as const,
    color: '#5a9e0a',
  },
];

export const EXTRA_SEGMENTS = [
  {
    id: 'versicherungen',
    label: 'Versicherungen',
    sublabel: '(Best-Preis)',
    href: '#partner',
    angle: 270,
  },
  {
    id: 'strom',
    label: 'Stromanbieter',
    sublabel: '(Best-Preis)',
    href: '#partner',
    angle: 315,
  },
];

export const SERVICES_LIST = [
  {
    icon: 'MapPinIcon' as const,
    title: 'Standort & Lokal',
    photo: '/assets/images/service-standort.png',
    photoAlt: 'Cozy restaurant interior with warm lighting in Vienna',
    tag: 'Immobilien',
    size: 'large',
  },
  {
    icon: 'DocumentTextIcon' as const,
    title: 'Gründung',
    photo: '/assets/images/service-gruendung.png',
    photoAlt: 'Business handshake over a signed contract',
    tag: 'Gründung',
    size: 'medium',
  },
  {
    icon: 'BanknotesIcon' as const,
    title: 'Förderungen',
    photo: '/assets/images/service-foerderungen.png',
    photoAlt: 'Financial planning documents with euro banknotes',
    tag: 'Finanzen',
    size: 'medium',
  },
  {
    icon: 'ClipboardDocumentCheckIcon' as const,
    title: 'Genehmigungen',
    photo: '/assets/images/service-genehmigungen.png',
    photoAlt: 'Official documents being signed',
    tag: 'Behörden',
    size: 'small',
  },
  {
    icon: 'ComputerDesktopIcon' as const,
    title: 'Registrierkasse',
    photo: 'https://images.unsplash.com/photo-1734825562426-86fa5777d38b',
    photoAlt: 'Modern POS payment terminal on restaurant counter',
    tag: 'Technologie',
    size: 'small',
  },
  {
    icon: 'CalculatorIcon' as const,
    title: 'Steuerberatung',
    photo: '/assets/images/service-steuerberatung.png',
    photoAlt: 'Accountant reviewing financial charts on laptop',
    tag: 'Steuern',
    size: 'small',
  },
  {
    icon: 'WrenchScrewdriverIcon' as const,
    title: 'Ausstattung & Bau',
    photo: 'https://images.unsplash.com/photo-1647695822638-a40e238ddc39',
    photoAlt: 'Elegant restaurant interior with modern design',
    tag: 'Design',
    size: 'medium',
  },
  {
    icon: 'DevicePhoneMobileIcon' as const,
    title: 'Marketing & Digital',
    photo: '/assets/images/service-marketing.png',
    photoAlt: 'Smartphone showing social media marketing content',
    tag: 'Digital',
    size: 'medium',
  },
  {
    icon: 'CubeIcon' as const,
    title: 'Rundum-Paket',
    photo: '/assets/images/service-rundum.png',
    photoAlt: 'Busy upscale restaurant with happy diners',
    tag: 'Komplett',
    size: 'large',
  },
];

export const STATS_ITEMS = [
  {
    value: 9,
    suffix: '+',
    label: 'Leistungsbereiche',
    icon: 'Squares2X2Icon' as const,
    desc: 'Spezialisierte Bereiche',
  },
  {
    value: 100,
    suffix: '+',
    label: 'Partnerbetriebe',
    icon: 'BuildingOffice2Icon' as const,
    desc: 'Starke Kooperationen',
  },
  {
    value: 0,
    suffix: '',
    label: 'Wien & Österreich',
    icon: 'MapPinIcon' as const,
    desc: 'Ihr Einzugsgebiet',
    isText: true,
    textValue: 'Wien',
  },
  {
    value: 0,
    suffix: '',
    label: 'WKO-Partner',
    icon: 'ShieldCheckIcon' as const,
    desc: 'Offiziell zertifiziert',
    isText: true,
    textValue: 'WKO',
  },
];

export const STATS_CATEGORIES = [
  { label: 'Alle Leistungen', href: '#leistungen' },
  { label: 'Gründung', href: '#leistungen' },
  { label: 'Finanzen', href: '#leistungen' },
  { label: 'Marketing', href: '#leistungen' },
  { label: 'Versicherung', href: '#partner' },
  { label: 'Energie', href: '#partner' },
];

export const INSURANCE_PARTNERS = [
  {
    name: 'Allianz',
    desc: 'Betriebshaftpflicht & Gewerbeversicherung',
    logo: 'https://images.unsplash.com/photo-1588440925730-962768a4a36b',
    logoAlt: 'Modern office building representing Allianz insurance company',
    benefit: 'Exklusivkonditionen für Gastronomiebetriebe',
  },
  {
    name: 'UNIQA',
    desc: 'Betriebshaftpflicht & Sachversicherung',
    logo: 'https://images.unsplash.com/photo-1670877127452-e113e18eb70d',
    logoAlt: 'Glass office building representing UNIQA insurance',
    benefit: 'Sonderrabatte für WKO-Mitglieder',
  },
  {
    name: 'Wiener Städtische',
    desc: 'Vollschutz für Gastronomie',
    logo: '/assets/images/partner-wiener-staedtische.png',
    logoAlt: 'Vienna city skyline representing Wiener Städtische insurance',
    benefit: 'Maßgeschneiderte Gastro-Pakete',
  },
];

export const ENERGY_PARTNERS = [
  {
    name: 'Verbund',
    desc: '100% Ökostrom',
    logo: '/assets/images/partner-verbund.png',
    logoAlt: 'Wind turbines representing Verbund renewable energy',
    benefit: 'Grünstrom zu Gewerbepreisen',
  },
  {
    name: 'Kelag',
    desc: 'Gewerbestrom Wien',
    logo: '/assets/images/partner-kelag.png',
    logoAlt: 'Hydroelectric power plant representing Kelag energy',
    benefit: 'Günstige Gewerbekonditionen',
  },
  {
    name: 'Montana',
    desc: 'Gastronomie-Energietarif',
    logo: '/assets/images/partner-montana.png',
    logoAlt: 'Solar panels representing Montana energy solutions',
    benefit: 'Spezialtarif für Gastrobetriebe',
  },
  {
    name: 'Gekko-Strom',
    desc: 'Günstig & grün',
    logo: '/assets/images/partner-gekko.png',
    logoAlt: 'Green energy concept with solar panels',
    benefit: 'Niedrigste Kilowattpreise',
  },
  {
    name: 'ÖKO-Strom',
    desc: '100% Erneuerbare Enegie',
    logo: '/assets/images/partner-oeko.png',
    logoAlt: 'Wind turbines at sunset representing ÖKO-Strom',
    benefit: 'Zertifizierter Ökostrom',
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    icon: 'ChatBubbleLeftRightIcon' as const,
    title: 'Erstgespräch',
    description: 'Kostenlose Beratung — wir verstehen Ihre Ziele.',
  },
  {
    number: '02',
    icon: 'MagnifyingGlassIcon' as const,
    title: 'Analyse & Planung',
    description: 'Maßgeschneiderter Aktionsplan mit klaren Meilensteinen.',
  },
  {
    number: '03',
    icon: 'RocketLaunchIcon' as const,
    title: 'Umsetzung',
    description: 'Wir koordinieren Behörden, Anbieter und Dienstleister.',
  },
  {
    number: '04',
    icon: 'ArrowPathIcon' as const,
    title: 'Laufende Begleitung',
    description: 'Langfristige Partnerschaft für nachhaltiges Wachstum.',
  },
];
