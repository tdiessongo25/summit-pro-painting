'use client';

import { useState } from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Colorado Springs',
    rating: 5,
    date: '2024-02-15',
    title: 'Excellent Exterior Painting',
    content: 'Summit Pro Painting did an amazing job on our home\'s exterior. The team was professional, efficient, and the results exceeded our expectations. The attention to detail was impressive, and they left the property spotless.',
    project: 'Exterior Painting'
  },
  {
    id: 2,
    name: 'Michael Brown',
    location: 'Manitou Springs',
    rating: 5,
    date: '2024-02-10',
    title: 'Kitchen Cabinet Transformation',
    content: 'Our kitchen looks brand new after the cabinet refinishing. The team was careful with our belongings and completed the job on time. The quality of work is outstanding, and we couldn\'t be happier with the results.',
    project: 'Cabinet Refinishing'
  },
  {
    id: 3,
    name: 'Emily Davis',
    location: 'Colorado Springs',
    rating: 5,
    date: '2024-02-05',
    title: 'Professional Interior Painting',
    content: 'The interior painting of our home was done with great care and precision. The team was respectful of our space and completed the job ahead of schedule. The colors look perfect, and the finish is flawless.',
    project: 'Interior Painting'
  },
  {
    id: 4,
    name: 'David Wilson',
    location: 'Monument',
    rating: 5,
    date: '2024-01-28',
    title: 'Commercial Space Makeover',
    content: 'Summit Pro Painting transformed our office space. They worked around our business hours and completed the project with minimal disruption. The results are professional and have significantly improved our workspace.',
    project: 'Commercial Painting'
  },
  {
    id: 5,
    name: 'Jennifer Lee',
    location: 'Colorado Springs',
    rating: 5,
    date: '2024-01-20',
    title: 'Historic Home Restoration',
    content: 'The team did an incredible job restoring our historic home\'s exterior. They were knowledgeable about period-appropriate techniques and materials. The attention to detail was remarkable.',
    project: 'Exterior Painting'
  },
  {
    id: 6,
    name: 'Robert Taylor',
    location: 'Fountain',
    rating: 5,
    date: '2024-01-15',
    title: 'Complete Home Makeover',
    content: 'We hired Summit Pro Painting for both interior and exterior work. The team was professional, efficient, and the results are stunning. They made the entire process stress-free and delivered exceptional quality.',
    project: 'Interior & Exterior Painting'
  }
];

const filters = [
  { id: 'all', name: 'All Reviews' },
  { id: 'interior', name: 'Interior Painting' },
  { id: 'exterior', name: 'Exterior Painting' },
  { id: 'commercial', name: 'Commercial Projects' },
  { id: 'cabinet', name: 'Cabinet Refinishing' }
];

export default function Reviews() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredReviews = reviews.filter(review => {
    const matchesFilter = selectedFilter === 'all' || 
                         review.project.toLowerCase().includes(selectedFilter.toLowerCase());
    const matchesSearch = review.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         review.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         review.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Customer Reviews</h1>
          <p className="text-xl text-gray-600">
            See what our customers have to say about our services
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search reviews..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              />
              <FaQuoteLeft className="absolute left-3 top-3 text-gray-400" />
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-4 py-2 rounded-md ${
                    selectedFilter === filter.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredReviews.map(review => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5" />
                  ))}
                </div>
                <span className="text-gray-600">{review.date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{review.title}</h3>
              <p className="text-gray-600 mb-4">{review.content}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-gray-600">{review.location}</p>
                </div>
                <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                  {review.project}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredReviews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No reviews found matching your criteria.</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Quality Service?</h2>
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