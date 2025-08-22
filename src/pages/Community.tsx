import React, { useState } from 'react';
import { 
  Users, 
  MapPin, 
  Calendar, 
  MessageCircle, 
  Star, 
  Plus,
  Search,
  Filter,
  UserPlus,
  Award,
  TrendingUp,
  Building
} from 'lucide-react';
import { clsx } from 'clsx';

export const Community: React.FC = () => {
  const [activeTab, setActiveTab] = useState('entrepreneurs');

  const entrepreneurs = [
    {
      id: 1,
      name: 'Sarah Chen',
      title: 'CEO & Founder',
      company: 'TechStart',
      location: 'San Francisco, CA',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      industry: 'SaaS',
      stage: 'Series A',
      expertise: ['Product Management', 'Fundraising', 'Team Building'],
      rating: 4.9,
      connections: 245,
      verified: true,
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      title: 'Founder',
      company: 'GreenVenture',
      location: 'Austin, TX',
      avatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      industry: 'CleanTech',
      stage: 'Seed',
      expertise: ['Sustainability', 'Operations', 'Marketing'],
      rating: 4.8,
      connections: 189,
      verified: true,
    },
    {
      id: 3,
      name: 'Emily Watson',
      title: 'Co-founder & CTO',
      company: 'HealthTech Pro',
      location: 'Boston, MA',
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      industry: 'HealthTech',
      stage: 'Pre-seed',
      expertise: ['Technology', 'Product Development', 'AI/ML'],
      rating: 4.7,
      connections: 156,
      verified: false,
    },
  ];

  const discussions = [
    {
      id: 1,
      title: 'Best strategies for early-stage customer acquisition?',
      author: 'Alex Johnson',
      replies: 23,
      likes: 45,
      category: 'Marketing',
      timeAgo: '2 hours ago',
      avatar: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
    },
    {
      id: 2,
      title: 'How to structure equity for co-founders?',
      author: 'Maria Garcia',
      replies: 18,
      likes: 67,
      category: 'Legal',
      timeAgo: '4 hours ago',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
    },
    {
      id: 3,
      title: 'Thoughts on remote team management?',
      author: 'David Kim',
      replies: 31,
      likes: 89,
      category: 'Operations',
      timeAgo: '6 hours ago',
      avatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
    },
  ];

  const events = [
    {
      id: 1,
      title: 'Startup Pitch Night',
      date: '2025-01-25',
      time: '6:00 PM PST',
      location: 'San Francisco, CA',
      attendees: 127,
      type: 'In-person',
      category: 'Networking',
    },
    {
      id: 2,
      title: 'SaaS Growth Strategies Webinar',
      date: '2025-01-28',
      time: '2:00 PM EST',
      location: 'Virtual',
      attendees: 89,
      type: 'Virtual',
      category: 'Education',
    },
    {
      id: 3,
      title: 'Women in Tech Meetup',
      date: '2025-02-02',
      time: '7:00 PM EST',
      location: 'New York, NY',
      attendees: 156,
      type: 'In-person',
      category: 'Community',
    },
  ];

  const tabs = [
    { id: 'entrepreneurs', label: 'Entrepreneurs', icon: Users },
    { id: 'discussions', label: 'Discussions', icon: MessageCircle },
    { id: 'events', label: 'Events', icon: Calendar },
  ];

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Pre-seed':
        return 'bg-gray-100 text-gray-700';
      case 'Seed':
        return 'bg-green-100 text-green-700';
      case 'Series A':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Community</h1>
          <p className="text-gray-600">
            Connect with fellow entrepreneurs, join discussions, and discover networking events.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Entrepreneurs</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <MessageCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">12K+</div>
                <div className="text-sm text-gray-600">Discussions</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Events/Month</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="bg-orange-100 p-3 rounded-lg mr-4">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">95%</div>
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
                    'flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  )}
                >
                  <tab.icon className="h-4 w-4 mr-2" />
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
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center text-sm">
                <Plus className="h-4 w-4 mr-2" />
                {activeTab === 'entrepreneurs' ? 'Connect' : 
                 activeTab === 'discussions' ? 'New Post' : 'Create Event'}
              </button>
            </div>
          </div>

          {/* Entrepreneurs Tab */}
          {activeTab === 'entrepreneurs' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {entrepreneurs.map((entrepreneur) => (
                <div key={entrepreneur.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <img
                      src={entrepreneur.avatar}
                      alt={entrepreneur.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h3 className="text-lg font-semibold text-gray-900">{entrepreneur.name}</h3>
                        {entrepreneur.verified && (
                          <Award className="h-4 w-4 text-blue-500 ml-2" />
                        )}
                      </div>
                      <p className="text-gray-600 text-sm">{entrepreneur.title}</p>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Building className="h-3 w-3 mr-1" />
                        {entrepreneur.company}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    {entrepreneur.location}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className={clsx(
                      'px-3 py-1 rounded-full text-xs font-medium',
                      getStageColor(entrepreneur.stage)
                    )}>
                      {entrepreneur.stage}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      {entrepreneur.rating}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {entrepreneur.expertise.slice(0, 2).map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                      {entrepreneur.expertise.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs">
                          +{entrepreneur.expertise.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {entrepreneur.connections} connections
                    </span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors flex items-center">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Connect
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Discussions Tab */}
          {activeTab === 'discussions' && (
            <div className="space-y-4">
              {discussions.map((discussion) => (
                <div key={discussion.id} className="border border-gray-200 rounded-xl p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start space-x-4">
                    <img
                      src={discussion.avatar}
                      alt={discussion.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 hover:text-blue-600 cursor-pointer">
                            {discussion.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            by {discussion.author} • {discussion.timeAgo}
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                          {discussion.category}
                        </span>
                      </div>
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          {discussion.replies} replies
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 mr-1" />
                          {discussion.likes} likes
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <div key={event.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className={clsx(
                      'px-3 py-1 rounded-full text-xs font-medium',
                      event.type === 'Virtual' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                    )}>
                      {event.type}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      {event.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{event.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date} at {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      {event.attendees} attending
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Join Event
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