// INTER Trading Group chatbot knowledge base.
// Every fact below is sourced from public pages on inter.sa (crawled 2026).
// Sources keyed by entry: homepage, inter in brief, vision, mission, core values,
// service detail pages, business pages, contact page.

export const CONTACT = {
  phone: '+966 13 857 3030',
  phoneHref: 'tel:+966138573030',
  emailInfo: 'info@inter.sa',
  emailMarketing: 'marketing@inter.sa',
  address: 'AL-Raka, King Saud Road, Dammam 34222, Kingdom of Saudi Arabia',
  hours: 'Saturday–Thursday, 8:00–17:00. Closed on Fridays.',
  homepage: 'https://inter.sa/default.aspx',
  arabic: 'https://inter.sa/ar/',
  catalog: 'https://inter.sa/images/filelib/MOBIAKTECHNICALCATALOGUE.pdf',
  gallery: 'https://inter.sa/images/Gallery/screen/?lang=EN',
};

export const knowledge = [
  {
    id: 'about',
    title: 'About INTER',
    keywords: ['about', 'inter', 'company', 'who', 'history', 'story', 'founded', 'established', 'saudi', 'dhahran', 'background', 'group', 'brief', 'tell'],
    answer:
      'INTER Trading Group is a **100% Saudi-owned company** established in **1988 in Dhahran**, widely known in the Kingdom for contracting services in civil, mechanical and electrical engineering construction. It began as a small contracting business building villas and commercial buildings in Dhahran, Khobar and Dammam, and today counts **300+ professionals, 100+ projects delivered and 500+ satisfied clients** across the Kingdom. INTER is an approved contractor of Saudi Aramco.',
    chips: ['Who are your clients?', 'What is your vision?', 'What businesses does INTER have?'],
  },
  {
    id: 'vision',
    title: 'Our Vision',
    keywords: ['vision', 'aspire', 'goal', 'leader', 'future'],
    answer:
      'INTER envisions itself as **a leader in providing high-quality trading and contracting services** — the preeminent provider of superior services by consistently improving quality and adding value for clients through innovation, foresight, integrity and aggressive performance.',
    chips: ['What is your mission?', 'What are your core values?'],
  },
  {
    id: 'mission',
    title: 'Our Mission',
    keywords: ['mission', 'purpose', 'pledge', 'relationships'],
    answer:
      'The mission is to **provide value-added trading and contracting services** while maintaining the highest levels of professionalism, integrity, honesty and fairness with suppliers, subcontractors, associates and clients — establishing long-lasting relationships by exceeding expectations and earning trust through exceptional performance.',
    chips: ['What are your core values?', 'What is your vision?'],
  },
  {
    id: 'core-values',
    title: 'Core Values',
    keywords: ['values', 'core', 'culture', 'principles', 'ethics', 'safety', 'excellence', 'teamwork', 'innovation'],
    answer:
      'INTER\u2019s six core values: **Safety** (culture of safety, health and care for our people), **Excellence** (highest standards in everything), **Fairness & Integrity** (highest ethical standards), **Teamwork** (working as one team), **Responsiveness** (timely response to customers and partners), and **Innovation & Technology** (proactively applying creative solutions).',
    chips: ['What is your mission?', 'About INTER'],
  },
  {
    id: 'businesses',
    title: 'Group businesses',
    keywords: ['business', 'businesses', 'divisions', 'sectors', 'group', 'branches', 'what do you do', 'companies', 'subsidiaries', 'capabilities'],
    answer:
      'INTER Trading Group runs **six complementary businesses**:\n1. **Inter Construction** — civil & electro-mechanical contracting\n2. **Inter Safety Equipment** — fire, safety & protection systems\n3. **Inter Car & Equipment** — vehicles, machinery & equipment leasing\n4. **Inter Services Enterprise** — trading, supply & shipping\n5. **Global National Exhibitions (GNE)** — exhibitions & events\n6. **National Training Institute (NTI)** — training & workforce development',
    chips: ['Tell me about Inter Construction', 'What services do you offer?', 'Where are you located?'],
  },
  {
    id: 'inter-construction',
    title: 'Inter Construction',
    keywords: ['construction', 'civil', 'mechanical', 'electrical', 'electromechanical', 'building', 'buildings', 'pipeline', 'pipelines', 'steel', 'welding', 'peb', 'asphalt', 'roads', 'substations', 'contracting', 'structur'],
    answer:
      '**Inter Construction** fields a professional team of highly qualified engineers and technicians for all civil and electromechanical construction: buildings (public, residential, commercial), metal structures, pipelines, treatment plants and sewage systems, HVAC, electrical substations and networks, fire-prevention systems, asphalt paving and parking. It has extensive experience **welding, steel manufacturing and oil & gas pipelines to Saudi Aramco standards**, plus well-head valve maintenance, PEB erection, blasting/painting/insulation, scaffolding and hydro testing.',
    chips: ['What services do you offer?', 'Who are your clients?'],
  },
  {
    id: 'inter-safety',
    title: 'Inter Safety Equipment',
    keywords: ['safety', 'fire', 'firefighting', 'protection', 'equipment', 'extinguish', 'pump', 'pumps', 'mob', 'pump systems', 'diesel', 'accident', 'hazard', 'extinguisher', 'truck', 'security'],
    answer:
      '**Inter Safety Equipment Co.** is a leading supplier of fire equipment, fire protection, security and safety engineering systems. It is accredited by the **Saudi Ministry of Interior** and is the **exclusive representative of MOBIAK** (fire safety equipment). It is the **exclusive and instant distributor of advanced mobile diesel fire pump systems across Saudi Arabia & the GCC**, serving industrial facilities, oil & gas sites, construction projects and large commercial operations — with nationwide availability and technical support.',
    chips: ['Can I see a product catalog?', 'What businesses does INTER have?'],
  },
  {
    id: 'inter-car-equipment',
    title: 'Inter Car & Equipment',
    keywords: ['car', 'cars', 'machinery', 'leasing', 'rental', 'rent', 'heavy', 'forklift', 'crane', 'cranes', 'excavator', 'generator', 'compressor', 'dig', 'equipment leasing'],
    answer:
      '**Inter Car & Equipment** helps customers reach the highest operational efficiency through **equipment leasing and flexible leasing solutions** that reduce capital costs. It serves oil & gas, construction and infrastructure clients with cars and heavy equipment: soil excavators and dumpsters, sliding slings, rear plows, drills, compressors and power generators — proudly representing the world\u2019s finest makers of construction equipment, cranes and forklifts.',
    chips: ['What businesses does INTER have?', 'Who are your clients?'],
  },
  {
    id: 'inter-services',
    title: 'Inter Services Enterprise',
    keywords: ['services', 'enterprise', 'shipping', 'freight', 'supply', 'procurement', 'logistics', 'trading', 'sourcing', 'import', 'cargo'],
    answer:
      '**Inter Services Enterprise** focuses on supply services for construction and electrical domains, backed by an **excellent freight/shipping management system** and a dedicated procurement division with a reliable sourcing network across the **USA, Europe, China, India and the Middle East** — coordinating with renowned manufacturers for quality and price competitiveness, and passing cost savings directly to clients.',
    chips: ['What does the Trading Department supply?', 'How can I contact INTER?'],
  },
  {
    id: 'gne',
    title: 'Global National Exhibitions',
    keywords: ['exhibition', 'exhibitions', 'events', 'gne', 'stand', 'stands', 'conference', 'conferences', 'brand', 'booth'],
    answer:
      '**Global National Exhibitions (GNE)** — the newest branch of INTER — aligns with **Saudi Vision 2030** to help make the Kingdom a hub for international companies and events. GNE organizes exhibitions, conferences and events, crafting custom stands and immersive environments with bold design and flawless execution.',
    chips: ['What businesses does INTER have?', 'About INTER'],
  },
  {
    id: 'training',
    title: 'National Training Institute & training fields',
    keywords: ['training', 'institute', 'nti', 'gnti', 'firefighting training', 'skills', 'workforce', 'courses', 'certified', 'certification', 'licenses', 'ministry'],
    answer:
      'The **National Training Institute (NTI/GNTI)** delivers professional training and workforce development, with Ministry-licensed training activity (certificates issued under the Ministry of Human Resources & Social Development). INTER also provides **expertly designed firefighting training fields** meeting international standards — equipped with modern fire simulators, realistic props and fuel-control systems so trainees can safely practice essential firefighting techniques.',
    chips: ['What services do you offer?', 'What are your core values?'],
  },
  {
    id: 'trading-department',
    title: 'Trading Department',
    keywords: ['trading', 'materials', 'building materials', 'chemicals', 'lubricants', 'greases', 'it products', 'marine', 'consumables', 'access control', 'departments'],
    answer:
      'The **Trading Department** renders supply services to construction and electrical domains with channel partnerships across reputed brands. Sourcing lines include: **building materials, industrial equipment and consumables, marine support products, chemicals, lubricants and greases, IT products & services, and key management / access control systems**. An in-house product database enables quick quotations.',
    chips: ['What services do you offer?', 'Who are your clients?'],
  },
  {
    id: 'services',
    title: 'All services at a glance',
    keywords: ['service', 'services', 'offer', 'offering', 'department', 'departments', 'what can you do', 'solutions'],
    answer:
      'Services offered by INTER:\n1. **Trading Department** — supply & sourcing\n2. **Electrical Construction** — substations, cabling, ATS, commissioning\n3. **Electro-Mechanical Construction** — pipelines, steel, PEBs, Aramco-standard QA/QC\n4. **Civil Construction** — buildings, roads, drainage, landscaping\n5. **HR Management Services** — staffing & workforce solutions\n6. **HVAC Projects** — design, chillers, ducts, maintenance contracts\n7. **Indoor Air Quality** — robotic duct cleaning (Roboclean)',
    chips: ['Tell me about civil construction', 'What is electro-mechanical construction?', 'How can I contact INTER?'],
  },
  {
    id: 'civil-construction',
    title: 'Civil Construction service',
    keywords: ['civil', 'villas', 'residential', 'commercial', 'renovation', 'landscaping', 'turf', 'drainage', 'sewer', 'quality'],
    answer:
      '**Civil Construction**: INTER\u2019s team handles projects of any size and complexity — general building construction, renovation, recreational facilities, landscaping, residential and commercial buildings, drainage and sewer lines, asphalting and road work, artificial turfs. The company maintains high quality and safety standards Kingdom-wide, with strictly maintained completion schedules.',
    chips: ['What is electro-mechanical construction?', 'What projects have you completed?'],
  },
  {
    id: 'electrical-construction',
    title: 'Electrical Construction service',
    keywords: ['electrical', 'substation', 'sub station', 'cable', 'cables', 'termination', 'ats', 'commissioning', 'calibration', 'instruments', 'loop', 'generator'],
    answer:
      '**Electrical Construction**: construction of substations, cable laying and termination, ATS installation, pre-commissioning and commissioning of electrical equipment, instrument calibration, installation/loop-checking & commissioning of instruments. The team is capable of industrial electrification, erection of generators, switchgears, transformers and underground cable laying.',
    chips: ['What is electro-mechanical construction?', 'What services do you offer?'],
  },
  {
    id: 'electromechanical-construction',
    title: 'Electro-Mechanical Construction service',
    keywords: ['electromechanical', 'electro', 'fabrication', 'qa', 'qc', 'hydro', 'scaffolding', 'blasting', 'coating', 'insulation', 'shutdown', 'shut', 'ustrial', 'maintenance'],
    answer:
      '**Electro-Mechanical Construction**: INTER runs a medium-sized welding & steel fabrication facility with qualified welders and pipe/structural fabricators. QA/QC documentation follows **Saudi Aramco standards**. Capabilities: cross-country pipelines, process plants, hook-up lines to flow lines, PEB structures, underground RTR/FRP/GRP firefighting pipelines and testing, well-head valve maintenance, fabrication & erection of pipe networks/supports/racks, steel structures, blasting/coating/insulation, shutdown maintenance work (T&I), scaffolding and hydro testing.',
    chips: ['What is civil construction?', 'What services do you offer?'],
  },
  {
    id: 'hr-management',
    title: 'HR Management Services',
    keywords: ['hr', 'human', 'manpower', 'staffing', 'recruitment', 'engineers', 'personnel', 'hiring', 'jobs', 'careers'],
    answer:
      '**HR Management Services** provide tailor-made solutions beyond sourcing and hiring — skills development and benefits administration with statutory compliance. Disciplines staffed include **Engineering** (civil, architectural, structural, HVAC, mechanical & piping, CAD), **Procurement**, **Quality Control** (NDT, welding inspectors AWS/CWI, QA/QC managers), **Project Management** (planners, construction & site managers), **Construction** (safety officers, multi-skilled technicians) and **Operations & Maintenance** (shutdown specialists, maintenance engineers).',
    chips: ['What services do you offer?', 'About INTER'],
  },
  {
    id: 'hvac',
    title: 'HVAC Projects',
    keywords: ['hvac', 'chiller', 'chillers', 'cooling', 'heating', 'duct', 'ducts', 'air conditioning', 'cold storage', 'refrigerant', 'balancing'],
    answer:
      '**HVAC Projects** include design & installation of HVAC networks, preventive maintenance, installation & maintenance of chillers, system performance checks, refrigerant leak detection and conversions, testing & commissioning, cold storage/distribution centers, design/fabrication & installation of insulated ducts, air balancing, spare parts and annual maintenance contracts.',
    chips: ['What services do you offer?', 'What is indoor air quality service?'],
  },
  {
    id: 'air-quality',
    title: 'Indoor Air Quality service',
    keywords: ['air quality', 'robotic', 'roboclean', 'duct renovation', 'energy', 'hygiene', 'cleaning', 'air handling'],
    answer:
      '**Indoor Air Quality Services** use robotic cleaning technology (Roboclean) to maintain the air you breathe in buildings and large industrial units — meeting international hygiene standards and conserving electricity per Energy Star standards. Services span duct renovation, AHU optimization under the Energy Management Program, annual maintenance for industrial/commercial units, environment management and chemical & design services.',
    chips: ['What services do you offer?', 'What projects have you completed?'],
  },
  {
    id: 'clients',
    title: 'Clients',
    keywords: ['client', 'clients', 'customers', 'aramco', 'sabic', 'electricity', 'royal commission', 'jubail', 'yanbu', 'water', 'ministry of water', 'who do you work', 'portfolio', 'experience'],
    answer:
      'INTER caters to clients such as **Saudi Aramco, SABIC, Saudi Electricity Co., the Royal Commission of Jubail & Yanbu and the Ministry of Water**. INTER is an **approved contractor of Aramco** with several successfully completed projects across the Kingdom, including work done directly for Aramco.',
    chips: ['What projects have you completed?', 'About INTER'],
  },
  {
    id: 'projects',
    title: 'Completed projects',
    keywords: ['project', 'projects', 'completed', 'portfolio', 'gallery', 'work', 'villas', 'oil', 'gas'],
    answer:
      'INTER has completed **more than 100 projects**, including offices, commercial buildings, villas and petrochemical process plants — as a subcontractor and directly for Saudi Aramco. Current capabilities extend to petrochemical process plants, pipelines, well-head maintenance, support services to oil drilling rigs and well-head hook-ups. A selection of project photos is in the public gallery.',
    chips: ['Who are your clients?', 'What businesses does INTER have?'],
  },
  {
    id: 'contact',
    title: 'Contact details',
    keywords: ['contact', 'phone', 'email', 'mail', 'call', 'reach', 'location', 'address', 'dammam', 'office hours', 'hours', 'timing', 'open', 'closed', 'friday', 'working', 'visit'],
    answer:
      `**Main Office:** AL-Raka, King Saud Road, Dammam 34222, Kingdom of Saudi Arabia\n**Phone:** ${CONTACT.phone}\n**Email:** info@inter.sa or marketing@inter.sa\n**Hours:** Saturday–Thursday 8:00–17:00 (Friday closed).`,
    links: [
      { label: 'Call us', href: CONTACT.phoneHref },
      { label: 'Email us', href: `mailto:${CONTACT.emailInfo}` },
    ],
    chips: ['What services do you offer?', 'What businesses does INTER have?'],
  },
  {
    id: 'catalog',
    title: 'Product catalog',
    keywords: ['catalog', 'catalogue', 'brochure', 'download', 'shop', 'products', 'pdf', 'price'],
    answer:
      'You can browse INTER Safety Equipment\u2019s full fire & safety product range in the **MOBIAK technical catalog** (PDF). INTER shares pricing and quotations on request — contact the team for prompt competitive quotations on any requirement.',
    links: [{ label: 'Download catalog (PDF)', href: CONTACT.catalog }],
    chips: ['What services do you offer?', 'How can I contact INTER?'],
  },
  {
    id: 'arabic',
    title: 'Arabic website',
    keywords: ['arabic', 'عربي', 'عربية', 'language', 'اللغة'],
    answer: 'The full INTER website is available in Arabic as well — the Arabic version opens here:',
    links: [{ label: 'inter.sa بالعربية', href: CONTACT.arabic }],
    chips: ['How can I contact INTER?', 'About INTER'],
  },
  {
    id: 'stats',
    title: 'Company numbers',
    keywords: ['how many', 'employees', 'professionals', 'projects', 'workers', 'engineers', 'years', 'experience', 'size', 'big', 'satisfied', 'numbers', 'figures'],
    answer: 'Key figures from the site: **300+ well-trained professionals**, **100+ completed projects**, **500+ satisfied clients**, **99% delivered on time**, and a reputation for high-quality services and 100% satisfied client support.',
    chips: ['Who are your clients?', 'About INTER'],
  },
];

/** Frequently asked questions — used for the suggestion chips. */
export const faqs = [
  { q: 'What businesses does INTER have?', ref: 'businesses' },
  { q: 'What services do you offer?', ref: 'services' },
  { q: 'Who are your clients?', ref: 'clients' },
  { q: 'How can I contact INTER?', ref: 'contact' },
  { q: 'What are your office hours?', ref: 'contact' },
  { q: 'Where are you located?', ref: 'contact' },
  { q: 'Is INTER Saudi-owned?', ref: 'about' },
  { q: 'What is your vision and mission?', ref: 'vision' },
  { q: 'Who are the core values?', ref: 'core-values' },
  { q: 'Do you sell fire pumps and trucks?', ref: 'inter-safety' },
  { q: 'Can I rent equipment?', ref: 'inter-car-equipment' },
  { q: 'Do you provide HVAC services?', ref: 'hvac' },
  { q: 'What is the Roboclean air-quality service?', ref: 'air-quality' },
  { q: 'Do you offer firefighting training fields?', ref: 'training' },
  { q: 'Can I download the product catalog?', ref: 'catalog' },
  { q: 'Tell me about GNE exhibitions', ref: 'gne' },
  { q: 'What projects have you completed?', ref: 'projects' },
  { q: 'How many employees does INTER have?', ref: 'stats' },
];

/** Smalltalk & intents the engine answers directly. */
export const intents = [
  {
    match: /^(hi+|hello+|hey+|salam|assalam|marhaba|good (morning|afternoon|evening))\b/i,
    answer: 'Hello 👋 I\u2019m the INTER assistant. Ask me anything about INTER Trading Group — our businesses, services, projects, clients or contact details.',
    chips: ['What businesses does INTER have?', 'What services do you offer?', 'How can I contact INTER?'],
  },
  {
    match: /^(thanks|thank you|shukran|appreciate|great|nice|perfect|cool|awesome)\b/i,
    answer: 'You\u2019re most welcome! If there\u2019s anything else about INTER you\u2019d like to know, just ask.',
    chips: ['Who are your clients?', 'What are your office hours?'],
  },
  {
    match: /\b(who are you|what are you|your name|what can you do as a bot|chatbot)\b/i,
    answer:
      'I\u2019m the **INTER website assistant** — a prototype chatbot trained on the public pages of inter.sa (about, services, businesses, contact). I answer questions about INTER Trading Group from that knowledge base.',
    chips: ['What businesses does INTER have?', 'How can I contact INTER?'],
  },
  {
    match: /\b(job|jobs|hiring|vacanc|career|resume|cv|apply)\b/i,
    answer:
      'INTER recruits through its **HR Management Services** division — they handle sourcing, skills development and benefits administration. To introduce yourself for engineering, technician or management roles, email:',
    links: [{ label: 'Email INTER Recruitment (info@inter.sa)', href: 'mailto:info@inter.sa?subject=Career%20Enquiry' }],
    chips: ['What is HR Management Services?', 'How can I contact INTER?'],
  },
  {
    match: /\b(quotation|quote|rfq|proposal|bid|tender)\b/i,
    answer:
      'For quotations, INTER maintains a large in-house data enabling **prompt and competitive quotations** on any customer requirement — the Trading Department or the relevant business will follow up directly.',
    links: [{ label: 'Request via Email', href: `mailto:${CONTACT.emailInfo}?subject=Quotation%20Request` }],
    chips: ['What services do you offer?', 'How can I contact INTER?'],
  },
  {
    match: /\b(owner|own|ownership|saudi-owned|nationals?)\b/i,
    answer: 'INTER Trading Group is **100% Saudi-owned**, established in 1988 in Dhahran by its founding leadership, and today employs 300+ professionals',
    chips: ['About INTER', 'What is your vision?'],
  },
  {
    match: /\b(dark|light|theme|night|mode)\b/i,
    answer: 'Done — I\u2019ve flipped the site\u2019s theme for you! ☀/☾ Tap the sun icon in the header anytime you\u2019d like to switch back.',
    action: 'toggle-theme',
    chips: ['What businesses does INTER have?', 'How can I contact INTER?'],
  },
];
