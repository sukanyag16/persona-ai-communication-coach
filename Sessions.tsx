import React, { useState } from 'react';
import { Plus, Filter, Search } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SessionCard from '../components/SessionCard';
import { Link } from 'react-router-dom';

const Sessions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  // Mock session data
  const sessions = [
    {
      id: '1',
      title: 'Product Launch Presentation',
      type: 'Pitch' as const,
      duration: 180,
      score: 85,
      date: new Date('2025-01-15'),
      thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '2',
      title: 'Climate Change Awareness Talk',
      type: 'TED Talk' as const,
      duration: 420,
      score: 92,
      date: new Date('2025-01-14'),
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '3',
      title: 'Software Engineer Interview',
      type: 'Interview' as const,
      duration: 300,
      score: 78,
      date: new Date('2025-01-13'),
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '4',
      title: 'Team Meeting Practice',
      type: 'General' as const,
      duration: 150,
      score: 71,
      date: new Date('2025-01-12'),
      thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  const filteredSessions = sessions.filter(session => {
    const matchesSearch = session.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || session.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const handlePlaySession = (id: string) => {
    console.log('Playing session:', id);
    // Navigate to session player or analysis view
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Practice Sessions</h1>
            <p className="text-gray-600">Review your past sessions and start new practice rounds</p>
          </div>
          <Link
            to="/sessions/new"
            className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition-colors shadow-lg"
          >
            <Plus className="w-5 h-5 mr-2" />
            New Session
          </Link>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search sessions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="TED Talk">TED Talk</option>
                <option value="Pitch">Pitch</option>
                <option value="Interview">Interview</option>
                <option value="General">General</option>
              </select>
            </div>
          </div>
        </div>

        {/* Sessions Grid */}
        {filteredSessions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSessions.map((session) => (
              <SessionCard
                key={session.id}
                {...session}
                onPlay={handlePlaySession}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No sessions found</h3>
            <p className="text-gray-600 mb-6">
              {searchTerm || filterType !== 'all' 
                ? 'Try adjusting your search or filter criteria'
                : 'Start your first practice session to see it here'
              }
            </p>
            <Link
              to="/sessions/new"
              className="inline-flex items-center px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition-colors"
            >
              <Plus className="w-5 h-5 mr-2" />
              Start New Session
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Sessions;