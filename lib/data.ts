export const site = {
  name: 'Sunspectrum Enterprises',
  phone: '+91 83292 98004',
  phoneHref: 'tel:+918329298004',
  whatsapp: 'https://wa.me/918329298004',
  email: 'sunspectrum01@gmail.com',
  maps: 'https://maps.app.goo.gl/EAXRKwYfNcxUNZA88',
  address: 'No.124, Kasaba Hobli, Rayankere Post, Kote Hundi, Mysuru, Karnataka 570008',
  hours: 'Monday to Saturday, 9:00 AM to 8:00 PM',
};

export const services = [
  { title: 'Solar solutions', text: 'On-grid, rooftop and hybrid solar systems for commercial and industrial sites.', href: '/products/panel', code: '01' },
  { title: 'Water treatment', text: 'RO plants, water softeners and purification systems for reliable water output.', href: '/products/ro', code: '02' },
  { title: 'Pumping systems', text: 'Solar and electric pumping systems for agriculture, process water and buildings.', href: '/products/pump', code: '03' },
  { title: 'EPC services', text: 'Design, procurement, installation, commissioning and handover under one contract.', href: '/#contact', code: '04' },
  { title: 'Electrical solutions', text: 'Panels, controls and integration support for industrial power and utility systems.', href: '/#contact', code: '05' },
];

export const industries = [
  ['Manufacturing', 'Process utilities and energy savings.'],
  ['Hospitals', 'Reliable hot water and purification systems.'],
  ['Hotels', 'Guest comfort with efficient plant design.'],
  ['Educational institutions', 'Campus-scale solar and water infrastructure.'],
  ['Commercial buildings', 'Lower operating costs and dependable systems.'],
  ['Government projects', 'Documented execution and disciplined delivery.'],
  ['Agriculture', 'Solar pumping and utility solutions for farms.'],
];

export const projects = [
  {
    title: '400 kW Rooftop Solar Plant', client: 'Manufacturing Unit', location: 'Mysuru',
    problem: 'High energy bills and peak load pressure.', solution: 'On-grid rooftop solar with monitoring support.', tech: 'Solar modules, inverter integration, net metering.', measure: '400 kW executed in 8 weeks.', result: 'Significant operating cost reduction.', image: '/images/products/solar-panels/rooftop-solar-panel.webp'
  },
  {
    title: '2000 LPH RO Water Plant', client: 'Educational Campus', location: 'Bagalkote',
    problem: 'Inconsistent drinking water quality for students.', solution: 'Multi-stage purification with storage and dosing.', tech: 'RO skid, food-grade tanks, filtration controls.', measure: 'Delivered within 3 months.', result: 'Clean water for large campus operations.', image: '/images/products/ro-plant/commercial-ro-plant.webp'
  },
  {
    title: 'Solar Pumping System for Farm Irrigation', client: 'Agricultural Estate', location: 'Mandya',
    problem: 'Unreliable power for irrigation pumping.', solution: 'Solar pump set with automatic control logic.', tech: 'DC pumping, panel array, protection systems.', measure: '5 HP equivalent system.', result: 'Zero dependency on grid electricity.', image: '/images/products/solar-pump/solar-pump-set-agriculture.webp'
  },
  {
    title: 'Industrial Water Softener Upgrade', client: 'Hospitality Property', location: 'Bengaluru',
    problem: 'Hard water damaging fixtures and hot-water equipment.', solution: 'Commercial softening plant with low-salt operation.', tech: 'FRP vessels, valves, regeneration controls.', measure: 'Installed and commissioned in 4 weeks.', result: 'Better equipment life and guest experience.', image: '/images/products/commercial-water-softener/commercial-water-softener.webp'
  },
];

export const faqs = [
  ['Which sectors do you serve?', 'We work with manufacturing, hospitals, hotels, educational institutions, commercial buildings, government projects and agriculture.'],
  ['Do you provide turnkey EPC execution?', 'Yes. We can manage design, procurement, installation, testing and commissioning under a turnkey scope.'],
  ['Can you inspect the site before quoting?', 'Site inspection is part of the standard process because accurate proposals depend on real site conditions and load requirements.'],
  ['Do you support AMC and after-sales service?', 'Yes. We provide AMC support, service response and maintenance planning for installed systems.'],
  ['Can solar, water and pumping work be combined?', 'They can be engineered as a unified package when the project requires energy and utility integration.'],
  ['How do I request a quotation?', 'Use the form below, call us, or send a WhatsApp message with your site location, capacity requirement and timeline.'],
];

export const products = {
  softener: { title: 'Water Softener', desc: 'Hard water treatment system for homes and apartments.', specs: ['Removes hardness from water', 'Reduces scale on taps & geysers', 'Low maintenance', 'Suitable for villas & apartments', 'Available in multiple capacities'], image: '/images/products/water-softener/water-softener-system.webp' },
  ro: { title: 'RO Plant', desc: 'Domestic and commercial RO systems.', specs: ['Multi-stage purification', 'High TDS reduction', 'Food grade tanks', 'Wall & floor mount', 'Commercial options available'], image: '/images/products/ro-plant/commercial-ro-plant.webp' },
  solar: { title: 'Solar Water Heater', desc: 'Residential and commercial solar heaters.', specs: ['High efficiency collectors', 'ISI certified tanks', 'Low power usage', 'Long life', 'Multiple litre options'], image: '/images/products/solar-water-heater/solar-water-heater-system.webp' },
  commercial: { title: 'Commercial Water Softener', desc: 'Industrial & hotel water softening solutions.', specs: ['High flow rate', 'For hotels & industries', 'Automatic regeneration', 'Durable FRP tanks', 'Low salt consumption'], image: '/images/products/commercial-water-softener/commercial-water-softener.webp' },
  heatpump: { title: 'Heat Pump', desc: 'Energy efficient hot water solution.', specs: ['Cuts electricity cost by 70%', 'Works in all weather', 'Eco-friendly refrigerant', 'Compact design', '5 year warranty'], image: '/images/products/heat-pump/heat-pump-water-heater.webp' },
  panel: { title: 'Solar Panels', desc: 'On-grid and off-grid solar solutions.', specs: ['High efficiency mono perc cells', '25 year performance warranty', 'Available from 3kW to 100kW', 'Net metering support', 'Government subsidy eligible'], image: '/images/products/solar-panels/rooftop-solar-panel.webp' },
  purifier: { title: 'Water Purifier', desc: 'Advanced drinking water systems.', specs: ['RO + UV + UF technology', 'TDS controller', 'Copper/zinc mineralization', 'Wall mount design', 'Yearly maintenance contract'], image: '/images/products/purifier/domestic-water-purifier.webp' },
  pump: { title: 'Solar Pump Set', desc: 'Agricultural solar pumping solutions.', specs: ['No electricity bills', 'Available from 2HP to 20HP', 'AC/DC options', 'Automatic start/stop', '5 year pump warranty'], image: '/images/products/solar-pump/solar-pump-set-agriculture.webp' },
} as const;

export type ProductSlug = keyof typeof products;
