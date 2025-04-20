'use client';

import { useState, useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { submitEstimateForm, type EstimateFormState } from './actions';
import { FaHome, FaBuilding, FaPaintRoller, FaCalendarAlt } from 'react-icons/fa';

// SubmitButton component to show pending state
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button 
      type="submit" 
      className="w-full btn-primary disabled:opacity-50" 
      disabled={pending}
    >
      {pending ? 'Submitting Request...' : 'Request Free Estimate'}
    </button>
  );
}

export default function FreeEstimate() {
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    projectType: '',
    serviceType: '',
    projectSize: '',
    preferredDate: '',
    message: '',
  });

  const initialState: EstimateFormState = null;
  const [state, formAction] = useFormState(submitEstimateForm, initialState);

  useEffect(() => {
    if (state?.message.startsWith('Estimate request sent successfully')) {
      setFormFields({
        name: '',
        email: '',
        phone: '',
        address: '',
        projectType: '',
        serviceType: '',
        projectSize: '',
        preferredDate: '',
        message: '',
      });
    }
  }, [state]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormFields(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Free Estimate</h1>
          <p className="text-xl text-gray-600">
            Fill out the form below to receive a free, no-obligation estimate for your painting project
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form action={formAction} className="space-y-8">
            {/* Personal Information */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formFields.name}
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
                    value={formFields.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formFields.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    required
                    minLength={10}
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formFields.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    required
                    minLength={5}
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Project Details</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formFields.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    required
                  >
                    <option value="">Select Project Type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Type
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formFields.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    required
                  >
                    <option value="">Select Service</option>
                    <option value="interior">Interior Painting</option>
                    <option value="exterior">Exterior Painting</option>
                    <option value="cabinet">Cabinet Refinishing</option>
                    <option value="commercial">Commercial Painting</option>
                    <option value="pressure">Pressure Washing</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="projectSize" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Size
                  </label>
                  <select
                    id="projectSize"
                    name="projectSize"
                    value={formFields.projectSize}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    required
                  >
                    <option value="">Select Size</option>
                    <option value="small">Small (1-2 rooms)</option>
                    <option value="medium">Medium (3-4 rooms)</option>
                    <option value="large">Large (5+ rooms)</option>
                    <option value="whole-house">Whole House</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Start Date <span className="text-xs text-gray-500">(Optional)</span>
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formFields.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Details <span className="text-xs text-gray-500">(Optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formFields.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Please provide any additional details about your project..."
                />
              </div>
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
  );
} 