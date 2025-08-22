import React, { useState } from 'react';
import { 
  Calendar, 
  User, 
  Clock, 
  Tag,
  Search,
  TrendingUp,
  MessageCircle,
  Heart,
  Share2,
  BookOpen
} from 'lucide-react';
import { clsx } from 'clsx';

export const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 127 },
    { id: 'startup-tips', name: 'Startup Tips', count: 34 },
    { id: 'fundraising', name: 'Fundraising', count: 23 },
    { id: 'growth', name: 'Growth', count: 28 },
    { id: 'leadership', name: 'Leadership', count: 19 },
    { id: 'technology', name: 'Technology', count: 23 },
  ];

  const featuredPost = {
    id: 1,
    title: 'The Complete Guide to Raising Your Series A in 2025',
    excerpt: 'Everything you need to know about preparing for and successfully raising your Series A funding round, from term sheets to investor relations.',
    content: '',
    author: 'Sarah Chen',
    authorAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    publishedAt: '2025-01-15',
    readTime: 12,
    category: 'fundraising',
    tags: ['Series A', 'Fundraising', 'Investor Relations'],
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    likes: 156,
    comments: 23,
    shares: 45,
    featured: true,
  };

  const posts = [
    {
      id: 2,
      title: 'Building a Remote-First Culture That Actually Works',
      excerpt: 'Practical strategies for creating and maintaining a strong company culture in a distributed team environment.',
      author: 'Marcus Rodriguez',
      authorAvatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      publishedAt: '2025-01-12',
      readTime: 8,
      category: 'leadership',
      tags: ['Remote Work', 'Culture', 'Management'],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      likes: 89,
      comments: 15,
      shares: 28,
      featured: false,
    },
    {
      id: 3,
      title: 'Growth Hacking Strategies That Scale',
      excerpt: 'Proven growth tactics that have helped startups achieve sustainable, scalable growth without breaking the bank.',
      author: 'Emily Watson',
      authorAvatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      publishedAt: '2025-01-10',
      readTime: 10,
      category: 'growth',
      tags: ['Growth Hacking', 'Marketing', 'Scaling'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      likes: 134,
      comments: 31,
      shares: 52,
      featured: false,
    },
    {
      id: 4,
      title: 'The AI Revolution: How Startups Can Leverage Machine Learning',
      excerpt: 'Understanding how artificial intelligence can transform your business and practical steps to implement AI solutions.',
      author: 'David Kumar',
      authorAvatar: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      publishedAt: '2025-01-08',
      readTime: 15,
      category: 'technology',
      tags: ['AI', 'Machine Learning', 'Innovation'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      likes: 201,
      comments: 42,
      shares: 78,
      featured: false,
    },
    {
      id: 5,
      title: 'Customer Discovery: The Foundation of Product-Market Fit',
      excerpt: 'A step-by-step guide to conducting effective customer discovery interviews and validating your product assumptions.',
      author: 'Jennifer Martinez',
      authorAvatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      publishedAt: '2025-01-05',
      readTime: 9,
      category: 'startup-tips',
      tags: ['Customer Discovery', 'Product-Market Fit', 'Validation'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      likes: 112,
      comments: 18,
      shares: 34,
      featured: false,
    },
    {
      id: 6,
      title: 'Equity Distribution: A Fair Approach for Co-Founders',
      excerpt: 'Navigate the complex world of equity splits and create fair compensation structures for your founding team.',
      author: 'Michael Chen',
      authorAvatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      publishedAt: '2025-01-03',
      readTime: 11,
      category: 'startup-tips',
      tags: ['Equity', 'Co-founders', 'Legal'],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      likes: 98,
      comments: 25,
      shares: 41,
      featured: false,
    },
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'startup-tips': 'bg-blue-100 text-blue-700',
      'fundraising': 'bg-green-100 text-green-700',
      'growth': 'bg-purple-100 text-purple-700',
      'leadership': 'bg-orange-100 text-orange-700',
      'technology': 'bg-teal-100 text-teal-700',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Entrepreneur Blog</h1>
          <p className="text-gray-600">
            Insights, strategies, and stories from successful entrepreneurs and industry experts.
          </p>
        </div>

        {/* Search and Categories */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-600">
                <TrendingUp className="h-4 w-4 mr-2" />
                Trending Topics
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
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
                {category.name}
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <BookOpen className="h-6 w-6 mr-2" />
            Featured Article
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className={clsx(
                    'px-3 py-1 rounded-full text-xs font-medium mr-3',
                    getCategoryColor(featuredPost.category)
                  )}>
                    {featuredPost.category.replace('-', ' ')}
                  </span>
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium">
                    Featured
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 cursor-pointer">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img
                      src={featuredPost.authorAvatar}
                      alt={featuredPost.author}
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{featuredPost.author}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(featuredPost.publishedAt)}
                        <span className="mx-2">•</span>
                        <Clock className="h-3 w-3 mr-1" />
                        {featuredPost.readTime} min read
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Heart className="h-4 w-4 mr-1" />
                      {featuredPost.likes}
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      {featuredPost.comments}
                    </div>
                    <div className="flex items-center">
                      <Share2 className="h-4 w-4 mr-1" />
                      {featuredPost.shares}
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className={clsx(
                    'absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium',
                    getCategoryColor(post.category)
                  )}>
                    {post.category.replace('-', ' ')}
                  </span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 cursor-pointer transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center mb-4">
                    <img
                      src={post.authorAvatar}
                      alt={post.author}
                      className="w-8 h-8 rounded-full object-cover mr-3"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{post.author}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(post.publishedAt)}
                        <span className="mx-2">•</span>
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime} min
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Heart className="h-4 w-4 mr-1" />
                        {post.likes}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        {post.comments}
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Stay Updated with Latest Insights
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get weekly entrepreneur insights, growth strategies, and success stories delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};