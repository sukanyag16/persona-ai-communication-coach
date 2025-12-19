import React from 'react';
import { Play, Clock, TrendingUp, Calendar } from 'lucide-react';
import { format } from 'date-fns';

interface SessionCardProps {
  id: string;
  title: string;
  type: 'TED Talk' | 'Pitch' | 'Interview' | 'General';
  duration: number;
  score: number;
  date: Date;
  thumbnail?: string;
  onPlay: (id: string) => void;
}

const SessionCard: React.FC<SessionCardProps> = ({
  id,
  title,
  type,
  duration,
  score,
  date,
  thumbnail,
  onPlay,
}) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'TED Talk':
        return 'bg-red-100 text-red-700';
      case 'Pitch':
        return 'bg-blue-100 text-blue-700';
      case 'Interview':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-violet-100 text-violet-700';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <div className="relative">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-48 object-cover rounded-t-xl"
          />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-violet-100 to-purple-100 rounded-t-xl flex items-center justify-center">
            <Play className="w-12 h-12 text-violet-400" />
          </div>
        )}
        <button
          onClick={() => onPlay(id)}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-200 rounded-t-xl group"
        >
          <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Play className="w-6 h-6 text-violet-600 ml-1" />
          </div>
        </button>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(type)}`}>
            {type}
          </span>
          <div className="flex items-center space-x-1 text-gray-500 text-sm">
            <Calendar className="w-4 h-4" />
            <span>{format(date, 'MMM d, yyyy')}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, '0')}</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <TrendingUp className="w-4 h-4" />
            <span className={`font-medium ${getScoreColor(score)}`}>
              {score}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionCard;