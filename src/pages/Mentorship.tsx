import React, { useState } from 'react';
import { 
  User, 
  Star, 
  Clock, 
  DollarSign, 
  Calendar, 
  Filter,
  Search,
  MessageCircle,
  Video,
  CheckCircle,
  Award,
  MapPin
} from 'lucide-react';
import { clsx } from 'clsx';

export const Mentorship: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const mentors = [
    {
      id: 1,
      name: 'Jennifer Martinez',
      title: 'Serial Entrepreneur & Investor',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      expertise: ['Product Strategy', 'Fundraising', 'Team Building'],
      experience: '15+ years',
      companies: ['TechCorp', 'StartupX', 'InnovateLab'],
      rating: 4.9,
      reviews: 127,
      hourlyRate: 150,
      location: 'San Francisco, CA',
      availability: 'Available',
      category: 'strategy',
      verified: true,
      languages: ['English', 'Spanish'],
      mentees: 89,
      sessionType: ['Video Call', '1-on-1', 'Group'],
    },
    {
      id: 2,
      name: 'David Kumar',
      title: 'CTO & Tech Leadership Expert',
      avatar: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      expertise: ['Technical Leadership', 'Product Development', 'Scaling Teams'],
      experience: '12+ years',
      companies: ['Google', 'Meta', 'TechStart'],
      rating: 4.8,
      reviews: 94,
      hourlyRate: 200,
      location: 'Seattle, WA',
      availability: 'Limited',
      category: 'technology',
      verified: true,
      languages: ['English', 'Hindi'],
      mentees: 67,
      sessionType: ['Video Call', '1-on-1', 'Code Review'],
    },
    {
      id: 3,
      name: 'Rachel Thompson',
      title: 'Marketing & Growth Strategist',
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      expertise: ['Growth Hacking', 'Digital Marketing', 'Brand Building'],
      experience: '10+ years',
      companies: ['HubSpot', 'Airbnb', 'GrowthCo'],
      rating: 4.7,
      reviews: 156,
      hourlyRate: 120,
      location: 'Austin, TX',
      availability: 'Available',
      category: 'marketing',
      verified: true,
      languages: ['English'],
      mentees: 123,
      sessionType: ['Video Call', '1-on-1', 'Workshop'],
    },
    {
      id: 4,
      name: 'Michael Chen',
      title: 'Finance & Investment Expert',
      avatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      expertise: ['Financial Modeling', 'Venture Capital', 'M&A'],
      experience: '18+ years',
      companies: ['Goldman Sachs', 'Kleiner Perkins', 'FinanceFirst'],
      rating: 4.9,
      reviews: 89,
      hourlyRate: 250,
      location: 'New York, NY',
      availability: 'Available',
      category: 'finance',
      verified: true,
      languages: ['English', 'Mandarin'],
      mentees: 45,
      sessionType: ['Video Call', '1-on-1', 'Document Review'],
    },
  ];

  const categories = [
    { id: 'all', name: 'All Mentors' },
    { id: 'strategy', name: 'Strategy' },
    { id: 'technology', name: 'Technology' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'finance', name: 'Finance' },
  ];

  const filteredMentors = selectedCategory === 'all' 
    ? mentors 
    : mentors.filter(mentor => mentor.category === selectedCategory);

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'Available':
        return 'text-green-600 bg-green-50';
      case 'Limited':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-red-600 bg-red-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Mentorship Hub</h1>
          <p className="text-gray-600">
            Connect with experienced entrepreneurs and industry experts who can guide your business journey.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Expert Mentors</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <MessageCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Sessions Completed</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">4.8</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="bg-orange-100 p-3 rounded-lg mr-4">
                <CheckCircle className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">92%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search mentors by name, expertise, or company..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Experience Levels</option>
                <option>5-10 years</option>
                <option>10-15 years</option>
                <option>15+ years</option>
              </select>
              <select className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Price Ranges</option>
                <option>$50-100/hour</option>
                <option>$100-150/hour</option>
                <option>$150-200/hour</option>
                <option>$200+/hour</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={clsx(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredMentors.map((mentor) => (
            <div key={mentor.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="w-20 h-20 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-xl font-semibold text-gray-900">{mentor.name}</h3>
                      {mentor.verified && (
                        <Award className="h-5 w-5 text-blue-500 ml-2" />
                      )}
                    </div>
                    <p className="text-gray-600 mb-2">{mentor.title}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      {mentor.location}
                    </div>
                  </div>
                </div>
                <span className={clsx(
                  'px-3 py-1 rounded-full text-xs font-medium',
                  getAvailabilityColor(mentor.availability)
                )}>
                  {mentor.availability}
                </span>
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <div className="flex items-center mr-4">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-medium">{mentor.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({mentor.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    {mentor.experience}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Expertise:</p>
                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Previous Companies:</p>
                  <p className="text-sm text-gray-800">{mentor.companies.join(', ')}</p>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>{mentor.mentees} mentees</span>
                  <span>{mentor.languages.join(', ')}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-gray-600 mr-1" />
                  <span className="text-lg font-semibold text-gray-900">
                    ${mentor.hourlyRate}/hour
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message
                  </button>
                  <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Session
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Connect with world-class mentors who have built successful companies and can guide you through every challenge.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Start Your Mentorship Journey
          </button>
        </div>
      </div>
    </div>
  );
};