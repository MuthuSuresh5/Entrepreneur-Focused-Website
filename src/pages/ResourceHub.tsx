import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Search, 
  Filter, 
  BookOpen, 
  Video, 
  Target,
  DollarSign,
  Users,
  Lightbulb,
  Star,
  Play
} from 'lucide-react';
import { clsx } from 'clsx';

export const ResourceHub: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Resources', icon: BookOpen },
    { id: 'templates', name: 'Templates', icon: FileText },
    { id: 'guides', name: 'Guides', icon: BookOpen },
    { id: 'videos', name: 'Videos', icon: Video },
    { id: 'tools', name: 'Tools', icon: Target },
  ];

  const resources = [
    {
      id: 1,
      title: 'Complete Business Plan Template',
      description: 'A comprehensive business plan template with detailed sections for market analysis, financial projections, and strategy.',
      category: 'templates',
      type: 'template',
      rating: 4.9,
      downloads: 15420,
      icon: FileText,
      featured: true,
    },
    {
      id: 2,
      title: 'Startup Financial Model',
      description: 'Excel template for creating detailed financial projections, including revenue forecasting and expense planning.',
      category: 'templates',
      type: 'template',
      rating: 4.8,
      downloads: 8760,
      icon: DollarSign,
      featured: false,
    },
    {
      id: 3,
      title: 'Market Research Guide',
      description: 'Step-by-step guide to conducting effective market research and competitive analysis for your startup.',
      category: 'guides',
      type: 'guide',
      rating: 4.7,
      downloads: 12300,
      icon: Target,
      featured: true,
    },
    {
      id: 4,
      title: 'Pitch Deck Masterclass',
      description: '2-hour video course on creating compelling investor presentations that get results.',
      category: 'videos',
      type: 'video',
      rating: 4.9,
      downloads: 5640,
      icon: Play,
      featured: true,
    },
    {
      id: 5,
      title: 'Customer Persona Template',
      description: 'Define your ideal customers with this detailed persona template and research framework.',
      category: 'templates',
      type: 'template',
      rating: 4.6,
      downloads: 9830,
      icon: Users,
      featured: false,
    },
    {
      id: 6,
      title: 'Innovation Workshop Toolkit',
      description: 'Complete toolkit for running ideation sessions and innovation workshops with your team.',
      category: 'tools',
      type: 'tool',
      rating: 4.8,
      downloads: 3420,
      icon: Lightbulb,
      featured: false,
    },
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredResources = resources.filter(resource => resource.featured);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Resource Hub</h1>
          <p className="text-gray-600">
            Access our comprehensive library of business templates, guides, tools, and educational content 
            to accelerate your entrepreneurial journey.
          </p>
        </div>

        {/* Featured Resources */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredResources.map((resource) => (
              <div key={resource.id} className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold">
                  Featured
                </div>
                <resource.icon className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                <p className="text-blue-100 text-sm mb-4">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-300 fill-current mr-1" />
                    <span className="text-sm">{resource.rating}</span>
                  </div>
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors flex items-center">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-600">Filter by:</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={clsx(
                  'flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}
              >
                <category.icon className="h-4 w-4 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Resource Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <resource.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-right">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-medium">{resource.rating}</span>
                  </div>
                  <div className="text-xs text-gray-500">{resource.downloads.toLocaleString()} downloads</div>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{resource.description}</p>
              
              <div className="flex items-center justify-between">
                <span className={clsx(
                  'px-3 py-1 rounded-full text-xs font-medium',
                  resource.type === 'template' ? 'bg-green-100 text-green-700' :
                  resource.type === 'guide' ? 'bg-blue-100 text-blue-700' :
                  resource.type === 'video' ? 'bg-purple-100 text-purple-700' :
                  'bg-orange-100 text-orange-700'
                )}>
                  {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                </span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📄</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No resources found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};