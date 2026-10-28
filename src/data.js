// Central content model for the INTER Trading Group homepage concept.
// All image paths live under /public/images — see SOURCES.txt for provenance.

export const businesses = [
  {
    name: 'Inter Construction',
    label: 'Construction & Engineering',
    description:
      'Civil, mechanical and electrical construction backed by experienced project teams across the Kingdom.',
    image: '/images/construction-banner.jpg',
    alt: 'Inter Construction team on site with heavy machinery',
    stat: { value: '120+', label: 'Projects delivered' },
  },
  {
    name: 'Inter Safety Equipment',
    label: 'Safety & Fire Protection',
    description:
      'Fire protection systems and safety equipment for demanding industrial and commercial environments.',
    image: '/images/construction-banner.jpg',
    alt: 'INTER Safety mobile diesel fire pump system on display',
    stat: { value: '37 yrs', label: 'Safety expertise' },
  },
  {
    name: 'Inter Car & Equipment',
    label: 'Equipment & Machinery',
    description:
      'Equipment and machinery solutions for construction and industrial customers, backed by dependable support.',
    image: '/images/fire-truck.png',
    alt: 'INTER fire apparatus built to customer specification',
    stat: { value: '24/7', label: 'Operational support' },
  },
  {
    name: 'Inter Services Enterprise',
    label: 'Supply & Logistics',
    description:
      'Supply, shipping and operational support connecting clients with key destinations across the region.',
    image: '/images/services.jpg',
    alt: 'Port logistics and shipping operations at sunset',
    stat: { value: '4+', label: 'Decades of supply' },
  },
  {
    name: 'Global National Exhibitions',
    label: 'Exhibitions & Events',
    description:
      'Custom exhibition stands and event environments delivered end to end by GNE.',
    image: '/images/inter-banner.jpg',
    alt: 'GNE team building a custom exhibition stand',
    stat: { value: '100+',
      label: 'Stands delivered' },
  },
  {
    name: 'National Training Institute',
    label: 'Training & Workforce',
    description:
      'Professional training and workforce development through the National Training Institute.',
    image: '/images/training.jpg',
    alt: 'National Training Institute (GNTI) facility',
    stat: { value: '300+', label: 'Group workforce' },
  },
]

// Delivery services — the tabbed "What we deliver" section.
export const services = [
  {
    tab: 'Trading & Supply',
    title: 'Trading & Supply',
    lead: 'Sourcing and delivery from a vetted international network.',
    description:
      'The Trading Department supplies the construction and electrical domains with channel partnerships across reputed brands — backed by an excellent freight and shipping management system and cost savings passed directly to clients.',
    points: [
      'Sourcing network across the USA, Europe, China, India & the Middle East',
      'In-house product database for rapid, competitive quotations',
      'Freight, shipping and procurement managed end to end',
    ],
    stat: { value: '5', label: 'sourcing regions' },
    image: '/images/services.jpg',
    alt: 'Port shipping operations at sunset',
  },
  {
    tab: 'Civil',
    title: 'Civil Construction',
    lead: 'General building and infrastructure of any size and complexity.',
    description:
      'From residential villas to commercial complexes, INTER\u2019s civil team delivers full building packages with strictly maintained schedules and high safety standards across the Kingdom.',
    points: [
      'Public, residential & commercial buildings',
      'Roads, asphalting and parking areas',
      'Drainage, sewer lines and landscaping',
    ],
    stat: { value: '100+', label: 'projects delivered' },
    image: '/images/construction.jpg',
    alt: 'Construction site with heavy machinery',
  },
  {
    tab: 'Electro-Mech',
    title: 'Electro-Mechanical Construction',
    lead: 'Pipeline & steel packages built to Saudi Aramco standards.',
    description:
      'A medium-sized welding and steel fabrication facility with qualified welders and pipe/structural fabricators — QA/QC documentation follows Saudi Aramco standards.',
    points: [
      'Cross-country pipelines, process plants & hook-up lines',
      'PEB erection, blasting, coating & insulation',
      'Shutdown (T&I) maintenance, scaffolding & hydro testing',
    ],
    stat: { value: 'QC', label: 'to Aramco standards' },
    image: '/images/construction-project.jpg',
    alt: 'Electro-mechanical construction site',
  },
  {
    tab: 'Electrical',
    title: 'Electrical Construction',
    lead: 'Substations to instrument commissioning — full electrification.',
    description:
      'Capability across industrial electrification and distribution: erecting generators, switchgears and transformers, plus underground cable laying for demanding clients.',
    points: [
      'Substations, switchgear & transformers',
      'ATS installation, pre-commissioning & commissioning',
      'Instrument calibration, installation & loop-checking',
    ],
    stat: { value: '24/7', label: 'site support' },
    image: '/images/documents.jpg',
    alt: 'Approved electrical documentation and certifications',
  },
  {
    tab: 'HR',
    title: 'HR Management Services',
    lead: 'Workforce solutions from sourcing to statutory compliance.',
    description:
      'Tailor-made staffing solutions with skills development and benefits administration — supplying disciplines across engineering, quality, project management and operations.',
    points: [
      'Engineering: civil, structural, HVAC, mechanical & piping, CAD',
      'QC inspectors (NDT, AWS/CWI) & QA/QC managers',
      'Planners, site managers, safety officers & maintenance engineers',
    ],
    stat: { value: '300+', label: 'professionals' },
    image: '/images/project-team.jpg',
    alt: 'INTER project team on site',
  },
  {
    tab: 'HVAC',
    title: 'HVAC Projects',
    lead: 'Design, installation and lifetime maintenance of HVAC networks.',
    description:
      'HVAC design and installation, preventive maintenance and annual maintenance contracts — from chillers to insulated ducts, with testing, commissioning and air balancing.',
    points: [
      'Chiller installation & maintenance, refrigerant conversions',
      'Industrial & commercial annual maintenance contracts',
      'Air duct design, fabrication & balancing',
    ],
    stat: { value: 'AMC', label: 'annual contracts' },
    image: '/images/enterprise.jpg',
    alt: 'Commercial building served by INTER HVAC',
  },
  {
    tab: 'Air Quality',
    title: 'Indoor Air Quality',
    lead: 'Robotic duct hygiene for the air you breathe indoors.',
    description:
      'Roboclean robotic cleaning technology maintains duct health in buildings and large industrial units to international hygiene standards while conserving electricity.',
    points: [
      'Robotic duct cleaning (Roboclean)',
      'AHU optimization under the Energy Management Program',
      'Duct renovation and environment management services',
    ],
    stat: { value: 'Energy', label: 'Star aligned' },
    image: '/images/dental-center.jpg',
    alt: 'Interior environment with clean air systems',
  },
];

export const projects = [
  {
    title: 'Dental Center',
    category: 'Construction',
    scope: 'Complete fit-out and clinical facilities delivery.',
    image: '/images/dental-center.jpg',
    alt: 'Dental Center project building',
    url: 'https://inter.sa/images/Gallery/Albums/022.jpg',
  },
  {
    title: 'Fire Protection Systems',
    category: 'Safety systems',
    scope: 'Design, supply and commissioning of engineered fire systems.',
    image: '/images/project-team.jpg',
    alt: 'Engineering drawing of a custom fire apparatus',
    url: 'https://inter.sa/intersafety.aspx',
  },
  {
    title: 'Marine Complex',
    category: 'Construction',
    scope: 'Marine infrastructure executed to coastal standards.',
    image: '/images/marine-complex.jpg',
    alt: 'Marine complex building',
    url: 'https://inter.sa/images/Gallery/Albums/a7dc41.jpg',
  },
  {
    title: 'Structural Works',
    category: 'Construction',
    scope: 'Concrete and steel packages for industrial clients.',
    image: '/images/construction-05.jpg',
    alt: 'Structural works at an industrial site',
    url: 'https://inter.sa/images/Gallery/Albums/05.jpg',
  },
  {
    title: 'Certified & Approved',
    category: 'Quality',
    scope: 'Ministry and Vision 2030 aligned certification records.',
    image: '/images/documents.jpg',
    alt: 'Ministry-approved training and compliance certificates',
    url: 'https://inter.sa/about/interinbrief.aspx',
  },
  {
    title: 'Safety Operations',
    category: 'Field teams',
    scope: 'Multi-site safety operations supported from the Eastern Province.',
    image: '/images/safty.jpg',
    alt: 'Personal protective equipment and site cranes',
    url: 'https://inter.sa/about/interinbrief.aspx',
  },
]

export const groupStats = [
  { value: 1988, label: 'Established in Dhahran', plain: true },
  { value: 6, label: 'Complementary businesses', suffix: '' },
  { value: 300, label: 'Workforce across the group*', suffix: '+' },
  { value: 38, label: 'Years of delivery in the Kingdom', suffix: '' },
]

export const clientNames = [
  'Saudi Aramco',
  'SABIC',
  'Saudi Electricity',
  'Royal Commission',
  'Ministry of Water',
  'Marafiq',
]

export const contact = {
  phone: '+966 13 857 3030',
  phoneHref: 'tel:+966138573030',
  email: 'info@inter.sa',
  address: ['Al Raka, King Saud Road', 'Dammam 34222, Saudi Arabia'],
  hours: 'Saturday–Thursday · 8:00–17:00',
  arabicSite: 'https://inter.sa/ar/',
}
