import Image from 'next/image';
import Link from 'next/link';
import { FaCheck, FaPaintRoller, FaUsers, FaAward, FaHandshake } from 'react-icons/fa';

const values = [
  {
    icon: <FaPaintRoller className="text-4xl text-primary" />,
    title: 'Quality Workmanship',
    description: 'We take pride in delivering exceptional results on every project.'
  },
  {
    icon: <FaUsers className="text-4xl text-primary" />,
    title: 'Customer Satisfaction',
    description: 'Your satisfaction is our top priority. We listen to your needs and deliver accordingly.'
  },
  {
    icon: <FaAward className="text-4xl text-primary" />,
    title: 'Professional Excellence',
    description: 'Our team consists of skilled professionals with years of experience.'
  },
  {
    icon: <FaHandshake className="text-4xl text-primary" />,
    title: 'Trust & Reliability',
    description: 'We build lasting relationships with our clients through honesty and reliability.'
  }
];

const team = [
  {
    name: 'John Smith',
    position: 'Owner & Lead Painter',
    image: '/images/team/john.jpg',
    bio: 'With over 15 years of experience in the painting industry, John leads our team with expertise and dedication.'
  },
  {
    name: 'Sarah Johnson',
    position: 'Project Manager',
    image: '/images/team/sarah.jpg',
    bio: 'Sarah ensures every project runs smoothly and meets our high standards of quality.'
  },
  {
    name: 'Mike Davis',
    position: 'Senior Painter',
    image: '/images/team/mike.jpg',
    bio: 'Mike brings 10 years of experience and attention to detail to every project.'
  }
];

export default function About() {
  return (
    <div className="py-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-red-500">About Summit Pro Painting</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serving Colorado Springs with quality painting services. We take pride in transforming spaces and exceeding customer expectations.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative h-96">
            <Image
              src="/images/our_story.png"
              alt="Our Story"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Summit Pro Painting was founded in 2010 with a simple mission: to provide exceptional painting services to the Colorado Springs community. What started as a small local business has grown into a trusted name in the painting industry.
            </p>
            <p className="text-gray-600 mb-6">
              Our commitment to quality, customer satisfaction, and attention to detail has earned us a reputation for excellence. We take pride in every project we undertake, whether it's a small residential job or a large commercial project.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <FaCheck className="text-primary mr-2" />
                <span>Licensed and insured</span>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-primary mr-2" />
                <span>10+ years of experience</span>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-primary mr-2" />
                <span>100+ projects completed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to discuss your painting project.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
} 