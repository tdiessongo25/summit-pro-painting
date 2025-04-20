import Image from 'next/image';
import Link from 'next/link';
import { FaPaintRoller, FaHome, FaBuilding, FaBrush, FaSprayCan, FaTint } from 'react-icons/fa';

const services = [
  {
    title: 'Interior Painting',
    icon: <FaPaintRoller className="text-4xl text-primary" />,
    description: 'Transform your living spaces with our professional interior painting services. We use high-quality paints and expert techniques to create beautiful, long-lasting results.',
    image: '/images/our_services_gallery/interior_painting.png',
    features: [
      'Wall painting and finishing',
      'Ceiling painting',
      'Trim and molding work',
      'Color consultation',
      'Surface preparation',
      'Clean-up and protection'
    ]
  },
  {
    title: 'Exterior Painting',
    icon: <FaHome className="text-4xl text-primary" />,
    description: 'Protect and enhance your home\'s curb appeal with our exterior painting solutions. We use weather-resistant paints and proper preparation techniques to ensure lasting results.',
    image: '/images/our_services_gallery/exterior_painting.png',
    features: [
      'House painting',
      'Deck and fence staining',
      'Surface preparation',
      'Pressure washing',
      'Weather-resistant coatings',
      'Trim and detail work'
    ]
  },
  {
    title: 'Commercial Painting',
    icon: <FaBuilding className="text-4xl text-primary" />,
    description: 'Professional painting services for businesses and commercial properties. We work around your schedule to minimize disruption to your operations.',
    image: '/images/our_services_gallery/commercial_painting.png',
    features: [
      'Office buildings',
      'Retail spaces',
      'Restaurants',
      'Industrial facilities',
      'After-hours service',
      'Minimal disruption'
    ]
  },
  {
    title: 'Cabinet Refinishing',
    icon: <FaBrush className="text-4xl text-primary" />,
    description: 'Give your kitchen a fresh look with our cabinet refinishing services. We can transform your existing cabinets without the cost of replacement.',
    image: '/images/our_services_gallery/cabinet_refinishing.png',
    features: [
      'Cabinet painting',
      'Hardware replacement',
      'Surface preparation',
      'Custom finishes',
      'Color matching',
      'Quick turnaround'
    ]
  },
  {
    title: 'Pressure Washing',
    icon: <FaSprayCan className="text-4xl text-primary" />,
    description: 'Restore your property\'s exterior with our professional pressure washing services. We remove dirt, grime, and mildew to prepare surfaces for painting.',
    image: '/images/our_services_gallery/power_washing.png',
    features: [
      'House washing',
      'Deck cleaning',
      'Driveway cleaning',
      'Sidewalk cleaning',
      'Fence cleaning',
      'Roof cleaning'
    ]
  },
  {
    title: 'Color Consultation',
    icon: <FaTint className="text-4xl text-primary" />,
    description: 'Not sure what colors to choose? Our color consultation service helps you select the perfect colors for your space.',
    image: '/images/our_services_gallery/color_consultation.png',
    features: [
      'Color selection',
      'Color matching',
      'Trend analysis',
      'Lighting considerations',
      'Room flow planning',
      'Sample application'
    ]
  }
];

export default function Services() {
  return (
    <div className="py-16">
      <div className="container-custom">
        <h1 className="text-4xl font-bold text-center mb-4 text-red-500">Our Services</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Professional painting services for your home or business in Colorado Springs
        </p>

        <div className="grid grid-cols-1 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:w-1/2">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h2 className="text-2xl font-bold ml-4">{service.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-primary mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/free-estimate"
                    className="btn-primary inline-block"
                  >
                    Get a Free Estimate
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today for a free estimate and let's discuss your project.
          </p>
          <Link href="/free-estimate" className="btn-primary">
            Request a Free Estimate
          </Link>
        </div>
      </div>
    </div>
  );
} 