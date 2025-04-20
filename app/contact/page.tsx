'use client';

import { useState, useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { submitContactForm, type ContactFormState } from './actions';

// SubmitButton component to show pending state
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button 
      type="submit" 
      className="w-full btn-primary disabled:opacity-50" 
      disabled={pending}
    >
      {pending ? 'Sending...' : 'Send Message'}
    </button>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Use useFormState to manage form submission state and results
  const initialState: ContactFormState = null;
  const [state, formAction] = useFormState(submitContactForm, initialState);

  // Reset form on successful submission
  useEffect(() => {
    if (state?.message === 'Message sent successfully!') {
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }
  }, [state]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-red-500">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Get in touch with Summit Pro Painting for your painting needs in Colorado Springs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaPhone className="text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">214-930-6540</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaEnvelope className="text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">info@summitpropainting.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-600">Colorado Springs, CO</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaClock className="text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Service Area</h2>
              <p className="text-gray-600 mb-4">
                We proudly serve the following areas in Colorado:
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Colorado Springs</li>
                <li>Manitou Springs</li>
                <li>Monument</li>
                <li>Fountain</li>
                <li>Pueblo</li>
                <li>And surrounding areas</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            
            {/* Bind the server action to the form */}
            <form action={formAction} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                  minLength={2}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone <span className="text-xs text-gray-500">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                  minLength={10}
                />
              </div>
              
              {/* Display success/error messages */}
              {state?.message && (
                <div className={`p-4 rounded-md border text-sm ${
                  state.issues 
                    ? 'bg-red-50 border-red-300 text-red-700'
                    : 'bg-green-50 border-green-300 text-green-700'
                }`}>
                  <p className="font-medium">{state.message}</p>
                  {state.issues && (
                    <ul className="list-disc list-inside mt-2">
                      {state.issues.map((issue, index) => <li key={index}>{issue}</li>)}
                    </ul>
                  )}
                </div>
              )}

              <SubmitButton />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 