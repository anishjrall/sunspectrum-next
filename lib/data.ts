export const site = {
  name: "Sunspectrum Enterprises",
  phone: "+91 83292 98004",
  phoneHref: "tel:+918329298004",
  secondaryPhone: "+91 73531 31310",
  secondaryPhoneHref: "tel:+917353131310",
  whatsapp: "https://wa.me/918329298004",
  email: "sunspectrum01@gmail.com",
  maps: "https://maps.google.com/maps?q=12.2840129%2C76.6166227&z=17&hl=en",
  address:
    "1088, 6th Main, E and F Block, Ramakrishna Nagar, Mysore - 570022",
  landmark: "Near Andolana Circle",
  hours: "Monday to Saturday, 9:00 AM to 8:00 PM",
};

export const services = [
  {
    title: "Solar solutions",
    text: "On-grid, rooftop and hybrid solar systems for commercial and industrial sites.",
    href: "/products/panel",
    code: "01",
  },
  {
    title: "Water treatment",
    text: "RO plants, water softeners and purification systems for reliable water output.",
    href: "/products/ro",
    code: "02",
  },
  {
    title: "Pumping systems",
    text: "Solar and electric pumping systems for agriculture, process water and buildings.",
    href: "/products/pump",
    code: "03",
  },
  {
    title: "EPC services",
    text: "Design, procurement, installation, commissioning and handover under one contract.",
    href: "/#contact",
    code: "04",
  },
  {
    title: "Electrical solutions",
    text: "Panels, controls and integration support for industrial power and utility systems.",
    href: "/#contact",
    code: "05",
  },
];

export const industries = [
  ["Manufacturing", "Process utilities and energy savings."],
  ["Hospitals", "Reliable hot water and purification systems."],
  ["Hotels", "Guest comfort with efficient plant design."],
  ["Educational institutions", "Campus-scale solar and water infrastructure."],
  ["Commercial buildings", "Lower operating costs and dependable systems."],
  ["Government projects", "Documented execution and disciplined delivery."],
  ["Agriculture", "Solar pumping and utility solutions for farms."],
];

export const projects = [
  {
    title: "400 kW Rooftop Solar Plant",
    client: "Manufacturing Unit",
    location: "Mysuru",
    problem: "High energy bills and peak load pressure.",
    solution: "On-grid rooftop solar with monitoring support.",
    tech: "Solar modules, inverter integration, net metering.",
    measure: "400 kW executed in 8 weeks.",
    result: "Significant operating cost reduction.",
    image: "/images/products/solar-pv/solar-panels.png",
  },

  {
    title: "2000 LPH RO Water Plant",
    client: "Educational Campus",
    location: "Bagalkote",
    problem: "Inconsistent drinking water quality for students.",
    solution: "Multi-stage purification with storage and dosing.",
    tech: "RO skid, food-grade tanks, filtration controls.",
    measure: "Delivered within 3 months.",
    result: "Clean water for large campus operations.",
    image: "/images/products/ro-plant/ro-plant.png",
  },

  {
    title: "Solar Pumping System for Farm Irrigation",
    client: "Agricultural Estate",
    location: "Mandya",
    problem: "Unreliable power for irrigation pumping.",
    solution: "Solar pump set with automatic control logic.",
    tech: "DC pumping, panel array, protection systems.",
    measure: "5 HP equivalent system.",
    result: "Zero dependency on grid electricity.",
    image: "/images/products/pumps/solar-pump-set.png",
  },

  {
    title: "Industrial Water Softener Upgrade",
    client: "Hospitality Property",
    location: "Bengaluru",
    problem: "Hard water damaging fixtures and hot-water equipment.",
    solution: "Commercial softening plant with low-salt operation.",
    tech: "FRP vessels, valves, regeneration controls.",
    measure: "Installed and commissioned in 4 weeks.",
    result: "Better equipment life and guest experience.",
    image: "/images/products/commercial-water-softener/commercial-water-softener.png",
  },
];

export const faqs = [
  [
    "Which sectors do you serve?",
    "We work with manufacturing, hospitals, hotels, educational institutions, commercial buildings, government projects and agriculture.",
  ],

  [
    "Do you provide turnkey EPC execution?",
    "Yes. We can manage design, procurement, installation, testing and commissioning under a turnkey scope.",
  ],

  [
    "Can you inspect the site before quoting?",
    "Site inspection is part of the standard process because accurate proposals depend on real site conditions and load requirements.",
  ],

  [
    "Do you support AMC and after-sales service?",
    "Yes. We provide AMC support, service response and maintenance planning for installed systems.",
  ],

  [
    "Can solar, water and pumping work be combined?",
    "They can be engineered as a unified package when the project requires energy and utility integration.",
  ],

  [
    "How do I request a quotation?",
    "Use the form below, call us, or send a WhatsApp message with your site location, capacity requirement and timeline.",
  ],
];

export const products = {
  softener: {
    title: "Water Softener",
    desc: "Hard water treatment system for homes and apartments.",
    specs: [
      "Removes hardness from water",
      "Reduces scale on taps & geysers",
      "Low maintenance",
      "Suitable for villas & apartments",
      "Available in multiple capacities",
    ],
    image: "/images/products/domestic-water-softener/domestic-water-softener.png",
  },

  ro: {
    title: "RO Plant",
    desc: "Domestic and commercial RO systems.",
    specs: [
      "Multi-stage purification",
      "High TDS reduction",
      "Food grade tanks",
      "Wall & floor mount",
      "Commercial options available",
    ],
    image: "/images/products/ro-plant/ro-plant.png",
  },

  solar: {
    title: "Solar Water Heater",
    desc: "Residential and commercial solar heaters.",
    specs: [
      "High efficiency collectors",
      "ISI certified tanks",
      "Low power usage",
      "Long life",
      "Multiple litre options",
    ],
    image: "/images/products/solar-water-heater/solar-water-heater.png",
  },

  commercial: {
    title: "Commercial Water Softener",
    desc: "Industrial & hotel water softening solutions.",
    specs: [
      "High flow rate",
      "For hotels & industries",
      "Automatic regeneration",
      "Durable FRP tanks",
      "Low salt consumption",
    ],
    image: "/images/products/commercial-water-softener/commercial-water-softener.png",
  },

  heatpump: {
    title: "Heat Pump",
    desc: "Energy efficient hot water solution.",
    specs: [
      "Cuts electricity cost by 70%",
      "Works in all weather",
      "Eco-friendly refrigerant",
      "Compact design",
      "5 year warranty",
    ],
    image: "/images/products/air-source-heat-pump-domestic/air-source-heat-pump.png",
  },

  commercialHeatpump: {
    title: "Commercial Air Source Heat Pump",
    desc: "High-capacity air-source heat pump systems for commercial hot water.",
    specs: [
      "Efficient commercial hot water",
      "Lower operating costs",
      "Works in all weather",
      "Suitable for hotels and institutions",
      "Professional installation support",
    ],
    image:
      "/images/products/air-source-heat-pump-commercial/commercial-air-source-heat-pump.png",
  },

  panel: {
    title: "Solar Panels",
    desc: "On-grid and off-grid solar solutions.",
    specs: [
      "High efficiency mono perc cells",
      "25 year performance warranty",
      "Available from 3kW to 100kW",
      "Net metering support",
      "Government subsidy eligible",
    ],
    image: "/images/products/solar-pv/solar-panels.png",
  },

  purifier: {
    title: "Water Purifier",
    desc: "Advanced drinking water systems.",
    specs: [
      "RO + UV + UF technology",
      "TDS controller",
      "Copper/zinc mineralization",
      "Wall mount design",
      "Yearly maintenance contract",
    ],
    image: "/images/products/domestic-water-purifier/domestic-water-purifier.png",
  },

  pump: {
    title: "Solar Pump Set",
    desc: "Agricultural solar pumping solutions.",
    specs: [
      "No electricity bills",
      "Available from 2HP to 20HP",
      "AC/DC options",
      "Automatic start/stop",
      "5 year pump warranty",
    ],
    image: "/images/products/pumps/solar-pump-set.png",
  },

  commercialSolar: {
    title: "Commercial Solar Water Heater",
    desc: "Solar hot water systems for commercial and institutional use.",
    specs: [
      "Large-capacity hot water generation",
      "Reduces electricity consumption",
      "Suitable for hotels and campuses",
      "Reliable collector and tank system",
      "Installation and commissioning support",
    ],
    image:
      "/images/products/commercial-solar-water-heater/commercial-solar-water-heater.png",
  },

  solarHeatpump: {
    title: "Solar With Air Source Heat Pump",
    desc: "Integrated solar and heat pump hot water solution for homes.",
    specs: [
      "Solar and heat pump integration",
      "Efficient hot water throughout the year",
      "Reduced power consumption",
      "Compact domestic application",
      "Professional installation support",
    ],
    image:
      "/images/products/solar-with-air-source-heat-pump-domestic/solar-air-source-heat-pump.png",
  },

  amc: {
    title: "AMC & Service",
    desc: "Maintenance and after-sales support for solar and water systems.",
    specs: [
      "Preventive maintenance visits",
      "System inspection and cleaning",
      "Troubleshooting support",
      "Genuine replacement components",
      "Service plans for homes and businesses",
    ],
    image: "/images/products/amc-and-service/amc-and-service.png",
  },
} as const;

export type ProductSlug = keyof typeof products;

export const clients = [
  [
    "JSS Mahavidyapeetha",
    "/images/clients/jss-mahavidyapeetha-mysore.png",
  ],

  [
    "BVV Sangha Bagalkote",
    "/images/clients/bvv-sangha-bagalkote.png",
  ],

  [
    "Emmvee Solar",
    "/images/clients/emmvee-solar-bengaluru.png",
  ],

  [
    "Dayananda Sagar University",
    "/images/clients/dayananda-sagar-university-harohalli.png",
  ],

  [
    "Saurdarshan Solar",
    "/images/clients/saurdharshan-solar.png",
  ],
];

export const whyUs = [
  [
    "01",
    "Site-first advice",
    "Load analysis and practical guidance before equipment is selected.",
  ],

  [
    "02",
    "Experienced installation",
    "Installation, testing and commissioning handled by field teams.",
  ],

  [
    "03",
    "Practical equipment",
    "Components selected around site conditions, performance and serviceability.",
  ],

  [
    "04",
    "Support after handover",
    "AMC, service response and technical follow-up continue after installation.",
  ],
];

export const deliverySteps = [
  [
    "01",
    "Consultation",
    "Understand load, site constraints and project goal.",
  ],

  [
    "02",
    "Design",
    "Develop the appropriate technical scope and system.",
  ],

  [
    "03",
    "Procurement",
    "Coordinate equipment, materials and project logistics.",
  ],

  [
    "04",
    "Execution",
    "Install, test, commission and document the system.",
  ],

  [
    "05",
    "Support",
    "Service, AMC and maintenance planning after handover.",
  ],
];