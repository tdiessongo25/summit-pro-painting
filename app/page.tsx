import Image from 'next/image';
import Link from 'next/link';
import { FaPaintRoller, FaHome, FaBuilding, FaBrush, FaQuoteLeft } from 'react-icons/fa';

export default function Home() {
  const services = [
    {
      icon: <FaPaintRoller className="text-4xl text-primary" />,
      title: 'Interior Painting',
      description: 'Transform your living spaces with our professional interior painting services.',
    },
    {
      icon: <FaHome className="text-4xl text-primary" />,
      title: 'Exterior Painting',
      description: 'Protect and enhance your home\'s curb appeal with our exterior painting solutions.',
    },
    {
      icon: <FaBuilding className="text-4xl text-primary" />,
      title: 'Commercial Painting',
      description: 'Professional painting services for businesses and commercial properties.',
    },
    {
      icon: <FaBrush className="text-4xl text-primary" />,
      title: 'Cabinet Refinishing',
      description: 'Give your kitchen a fresh look with our cabinet refinishing services.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="/images/hero-bg.png"
          alt="Painting Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container-custom relative h-full flex flex-col justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Professional Painting Services in Colorado Springs
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Transform your space with our expert painting services. Quality workmanship guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/free-estimate" className="btn-primary">
              Get a Free Estimate
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-red-500">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">{service.title}</h3>
                <p className="text-base text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Summit Pro Painting Section (New) */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Why Summit Pro Painting</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            At Summit Pro Painting, we know that finding the right team for your painting project can be overwhelming.
            With our professionals by your side, the process will be easy and convenient — leaving you time for what matters most.
          </p>
        </div>
      </section>

      {/* Key Features Section (New) */}
      <section className="pt-8 pb-16 bg-blue-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {[ 
              { label: "Your Local Painters", imageSrc: "/images/local_painters.png" },
              { label: "We Warranty Our Work", imageSrc: "/images/work_guaranteed.png" },
              { label: "Free Color Consultation", imageSrc: "/images/free_consultations.png" },
              { label: "Payment Plans Available", imageSrc: "/images/payment_plans.png" },
              { label: "Licensed & Insured", imageSrc: "/images/licensed_insured.png" } 
            ].map((feature) => (
              <div key={feature.label}>
                <Image 
                  src={feature.imageSrc}
                  alt={feature.label}
                  width={1200}
                  height={1200}
                  className="mx-auto mb-4 rounded-md object-cover"
                />
                <p className="text-2xl font-medium">
                  {feature.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section (New) */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-8 text-red-500">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: 'Summit Pro Painting did an amazing job on our home\'s exterior!',
                name: 'Sarah Johnson',
                project: 'Exterior Painting',
              },
              {
                quote: 'Our kitchen looks brand new after the cabinet refinishing.',
                name: 'Michael Brown',
                project: 'Cabinet Refinishing',
              },
              {
                quote: 'The interior painting of our home was precise and beautiful.',
                name: 'Emily Davis',
                project: 'Interior Painting',
              },
            ].map((t, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <FaQuoteLeft className="text-4xl text-summit-red mb-4" />
                <p className="text-gray-700 mb-4">"{t.quote}"</p>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-500">{t.project}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 text-summit-teal">
            Contact us today for a free estimate and let's bring your vision to life.
          </p>
          <Link 
            href="/free-estimate" 
            className="btn-primary"
          >
            Get Your Free Estimate
          </Link>
        </div>
      </section>
    </div>
  );
} 