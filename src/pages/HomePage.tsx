import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Target, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  CheckCircle,
  Star,
  Play,
  BarChart3,
  Lightbulb,
  Network
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Business Planning Tools',
      description: 'Smart templates and guided workflows to validate your ideas and create comprehensive business plans.',
    },
    {
      icon: Users,
      title: 'Community & Networking',
      description: 'Connect with fellow entrepreneurs, mentors, and investors in our thriving ecosystem.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Analytics',
      description: 'Track your progress with advanced analytics and get personalized insights for scaling your business.',
    },
    {
      icon: Shield,
      title: 'Legal & Compliance',
      description: 'Access legal templates, compliance checklists, and expert guidance for business registration.',
    },
    {
      icon: BarChart3,
      title: 'Financial Management',
      description: 'Comprehensive tools for budgeting, invoicing, expense tracking, and financial reporting.',
    },
    {
      icon: Lightbulb,
      title: 'Funding Support',
      description: 'Connect with investors, access crowdfunding platforms, and discover grant opportunities.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechStart',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'EntrepreneurHub transformed how I approach business planning. The templates and community support were game-changers.',
      rating: 5,
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Founder, GreenVenture',
      avatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Found my co-founder and first investor through this platform. The networking features are incredibly powerful.',
      rating: 5,
    },
    {
      name: 'Emily Watson',
      role: 'CEO, HealthTech Pro',
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The mentorship program connected me with industry experts who guided me through critical early-stage decisions.',
      rating: 5,
    },
  ];

  const stats = [
    { number: '50K+', label: 'Active Entrepreneurs' },
    { number: '$2.5B+', label: 'Funding Raised' },
    { number: '10K+', label: 'Businesses Launched' },
    { number: '98%', label: 'Success Rate' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Build Your Dream
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Business
                </span>
                With Confidence
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Join thousands of entrepreneurs who use our comprehensive platform to validate ideas, 
                connect with mentors, secure funding, and scale their businesses successfully.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/dashboard"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center group"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center group">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-yellow-300">{stat.number}</div>
                      <div className="text-blue-100 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools, resources, and support you need 
              to turn your entrepreneurial vision into reality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-gradient-to-r from-blue-500 to-teal-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Successful Entrepreneurs
            </h2>
            <p className="text-xl text-gray-600">
              See what our community members say about their journey with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of entrepreneurs who are already using our platform to turn their ideas into thriving businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/dashboard"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center group"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/resources"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Explore Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};