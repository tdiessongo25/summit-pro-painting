'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Modern Home Exterior',
    category: 'exterior',
    image: '/images/gallery/exterior-1.jpg',
    description: 'Complete exterior painting of a modern home in Colorado Springs'
  },
  {
    id: 2,
    title: 'Kitchen Cabinet Refinishing',
    category: 'interior',
    image: '/images/gallery/cabinet-1.jpg',
    description: 'Cabinet refinishing project in a contemporary kitchen'
  },
  {
    id: 3,
    title: 'Office Building',
    category: 'commercial',
    image: '/images/gallery/commercial-1.jpg',
    description: 'Commercial painting project for a downtown office building'
  },
  {
    id: 4,
    title: 'Living Room Makeover',
    category: 'interior',
    image: '/images/gallery/interior-1.jpg',
    description: 'Complete interior painting of a living room'
  },
  {
    id: 5,
    title: 'Historic Home Restoration',
    category: 'exterior',
    image: '/images/gallery/exterior-2.jpg',
    description: 'Exterior restoration of a historic home'
  },
  {
    id: 6,
    title: 'Restaurant Interior',
    category: 'commercial',
    image: '/images/gallery/commercial-2.jpg',
    description: 'Interior painting for a local restaurant'
  },
  {
    id: 7,
    title: 'Master Bedroom',
    category: 'interior',
    image: '/images/gallery/interior-2.jpg',
    description: 'Master bedroom painting project'
  },
  {
    id: 8,
    title: 'Retail Space',
    category: 'commercial',
    image: '/images/gallery/commercial-3.jpg',
    description: 'Commercial painting for a retail space'
  }
];

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'interior', name: 'Interior Painting' },
  { id: 'exterior', name: 'Exterior Painting' },
  { id: 'commercial', name: 'Commercial Projects' }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-red-500">Our Projects</h1>
          <p className="text-xl text-gray-600">
            Browse through our completed projects to see the quality of our work
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-md ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                  {categories.find(cat => cat.id === project.category)?.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No projects found matching your criteria.</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to discuss your painting project.
          </p>
          <a href="/free-estimate" className="btn-primary">
            Get a Free Estimate
          </a>
        </div>
      </div>
    </div>
  );
} 