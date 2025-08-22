import React, { useState } from 'react';
import { 
  DollarSign, 
  TrendingUp, 
  Building, 
  Users, 
  Target,
  Search,
  Filter,
  ExternalLink,
  Calendar,
  MapPin,
  CheckCircle,
  AlertCircle,
  Clock
} from 'lucide-react';
import { clsx } from 'clsx';

export const Funding: React.FC = () => {
  const [activeTab, setActiveTab] = useState('opportunities');

  const fundingOpportunities = [
    {
      id: 1,
      title: 'TechVentures Seed Fund',
      type: 'Venture Capital',
      stage: 'Seed',
      amount: '$250K - $2M',
      location: 'San Francisco, CA',
      industries: ['SaaS', 'AI/ML', 'FinTech'],
      applicationDeadline: '2025-02-15',
      matchScore: 95,
      logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      description: 'Early-stage fund focused on B2B SaaS and AI-driven solutions.',
      requirements: ['Revenue traction', 'Strong team', 'Scalable business model'],
      status: 'Active',
    },
    {
      id: 2,
      title: 'Innovation Grant Program',
      type: 'Grant',
      stage: 'Pre-seed',
      amount: '$50K - $100K',
      location: 'Austin, TX',
      industries: ['CleanTech', 'HealthTech', 'EdTech'],
      applicationDeadline: '2025-01-30',
      matchScore: 87,
      logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      description: 'Government-backed grant program for innovative tech startups.',
      requirements: ['Tech innovation', 'Social impact', 'US-based company'],
      status: 'Active',
    },
    {
      id: 3,
      title: 'Angel Network Plus',
      type: 'Angel Investment',
      stage: 'Seed',
      amount: '$100K - $500K',
      location: 'New York, NY',
      industries: ['E-commerce', 'SaaS', 'Consumer'],
      applicationDeadline: '2025-03-01',
      matchScore: 78,
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      description: 'Network of experienced angel investors and entrepreneurs.',
      requirements: ['MVP ready', 'Customer validation', 'Clear go-to-market'],
      status: 'Active',
    },
  ];

  const investors = [
    {
      id: 1,
      name: 'Sarah Goldman',
      title: 'Managing Partner',
      firm: 'TechVentures Capital',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      location: 'San Francisco, CA',
      focus: ['B2B SaaS', 'AI/ML', 'FinTech'],
      checkSize: '$500K - $5M',
      stage: 'Seed to Series A',
      portfolio: 47,
      exits: 12,
      verified: true,
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Angel Investor',
      firm: 'Independent',
      avatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      location: 'Austin, TX',
      focus: ['CleanTech', 'HealthTech', 'Consumer'],
      checkSize: '$25K - $100K',
      stage: 'Pre-seed to Seed',
      portfolio: 23,
      exits: 5,
      verified: true,
    },
    {
      id: 3,
      name: 'Jennifer Martinez',
      title: 'Principal',
      firm: 'Growth Partners VC',
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      location: 'New York, NY',
      focus: ['E-commerce', 'MarketPlace', 'Consumer Tech'],
      checkSize: '$1M - $10M',
      stage: 'Series A to B',
      portfolio: 34,
      exits: 8,
      verified: true,
    },
  ];

  const pitchDecks = [
    {
      id: 1,
      title: 'Buffer - Social Media Management Platform',
      category: 'SaaS',
      stage: 'Series A',
      amountRaised: '$3.5M',
      slides: 13,
      views: 12540,
      downloads: 3420,
      rating: 4.8,
    },
    {
      id: 2,
      title: 'Airbnb - Home Sharing Platform',
      category: 'Marketplace',
      stage: 'Seed',
      amountRaised: '$7.2M',
      slides: 11,
      views: 45230,
      downloads: 8760,
      rating: 4.9,
    },
    {
      id: 3,
      title: 'Uber - Ride Sharing Service',
      category: 'Transportation',
      stage: 'Series A',
      amountRaised: '$11M',
      slides: 15,
      views: 67890,
      downloads: 12450,
      rating: 4.7,
    },
  ];

  const tabs = [
    { id: 'opportunities', label: 'Funding Opportunities' },
    { id: 'investors', label: 'Investor Network' },
    { id: 'pitchdecks', label: 'Pitch Deck Examples' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'text-green-600 bg-green-50';
      case 'Closing Soon':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-red-600 bg-red-50';
    }
  };

  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-50';
    if (score >= 70) return 'text-blue-600 bg-blue-50';
    return 'text-yellow-600 bg-yellow-50';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Funding Hub</h1>
          <p className="text-gray-600">
            Discover funding opportunities, connect with investors, and access successful pitch deck examples.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">$2.5B+</div>
                <div className="text-sm text-gray-600">Total Funding Raised</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <Building className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">350+</div>
                <div className="text-sm text-gray-600">Active VCs</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">1,200+</div>
                <div className="text-sm text-gray-600">Angel Investors</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="bg-orange-100 p-3 rounded-lg mr-4">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">85%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div className="flex space-x-1 mb-4 sm:mb-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={clsx(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </button>
            </div>
          </div>

          {/* Funding Opportunities Tab */}
          {activeTab === 'opportunities' && (
            <div className="space-y-6">
              {fundingOpportunities.map((opportunity) => (
                <div key={opportunity.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <img
                        src={opportunity.logo}
                        alt={opportunity.title}
                        className="w-12 h-12 rounded-lg object-cover mr-4"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{opportunity.title}</h3>
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-gray-600">{opportunity.type}</span>
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                            {opportunity.stage}
                          </span>
                          <span className={clsx(
                            'px-2 py-1 rounded-full text-xs font-medium',
                            getStatusColor(opportunity.status)
                          )}>
                            {opportunity.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={clsx(
                        'px-3 py-1 rounded-full text-sm font-bold mb-2',
                        getMatchScoreColor(opportunity.matchScore)
                      )}>
                        {opportunity.matchScore}% Match
                      </div>
                      <div className="text-lg font-bold text-gray-900">{opportunity.amount}</div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{opportunity.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <MapPin className="h-4 w-4 mr-2" />
                        {opportunity.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        Deadline: {opportunity.applicationDeadline}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Industries:</p>
                      <div className="flex flex-wrap gap-1">
                        {opportunity.industries.map((industry, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs"
                          >
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Requirements:</p>
                      <ul className="space-y-1">
                        {opportunity.requirements.slice(0, 2).map((req, index) => (
                          <li key={index} className="flex items-center text-xs text-gray-600">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                      View Details
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </button>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Investors Tab */}
          {activeTab === 'investors' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {investors.map((investor) => (
                <div key={investor.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <img
                      src={investor.avatar}
                      alt={investor.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{investor.name}</h3>
                      <p className="text-gray-600 text-sm">{investor.title}</p>
                      <p className="text-blue-600 text-sm font-medium">{investor.firm}</p>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    {investor.location}
                  </div>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Focus Areas:</p>
                      <div className="flex flex-wrap gap-1">
                        {investor.focus.map((area, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Check Size:</p>
                        <p className="font-medium">{investor.checkSize}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Stage:</p>
                        <p className="font-medium">{investor.stage}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Portfolio:</p>
                        <p className="font-medium">{investor.portfolio} companies</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Exits:</p>
                        <p className="font-medium">{investor.exits} successful</p>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Connect
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Pitch Decks Tab */}
          {activeTab === 'pitchdecks' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pitchDecks.map((deck) => (
                <div key={deck.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{deck.title}</h3>
                    <div className="flex items-center space-x-3">
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                        {deck.category}
                      </span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        {deck.stage}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Amount Raised:</span>
                      <span className="font-medium text-green-600">{deck.amountRaised}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Slides:</span>
                      <span className="font-medium">{deck.slides}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Views:</span>
                      <span className="font-medium">{deck.views.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Downloads:</span>
                      <span className="font-medium">{deck.downloads.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm font-medium ml-1">{deck.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">PDF Format</span>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Pitch Deck
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};