import React from 'react';
import { TrendingUp, TrendingDown, Minus, Award, AlertCircle } from 'lucide-react';

interface AnalysisScore {
  category: string;
  score: number;
  feedback: string;
  improvement: string;
  trend?: 'up' | 'down' | 'stable';
}

interface AnalysisResultsProps {
  overallScore: number;
  scores: AnalysisScore[];
  sessionType: string;
  duration: number;
}

const AnalysisResults: React.FC<AnalysisResultsProps> = ({
  overallScore,
  scores,
  sessionType,
  duration,
}) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-50 border-green-200';
    if (score >= 60) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const getOverallScoreColor = (score: number) => {
    if (score >= 80) return 'from-green-500 to-emerald-600';
    if (score >= 60) return 'from-yellow-500 to-orange-600';
    return 'from-red-500 to-pink-600';
  };

  const getTrendIcon = (trend?: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      default:
        return <Minus className="w-4 h-4 text-gray-400" />;
    }
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-violet-500 to-purple-600 px-6 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Session Analysis</h2>
            <p className="text-violet-100 mt-1">
              {sessionType} • {formatDuration(duration)}
            </p>
          </div>
          <div className="text-right">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${getOverallScoreColor(overallScore)} text-white`}>
              <span className="text-2xl font-bold">{overallScore}</span>
            </div>
            <p className="text-violet-100 text-sm mt-2">Overall Score</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Score Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {scores.map((item, index) => (
            <div key={index} className={`p-4 rounded-lg border ${getScoreColor(item.score)}`}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">{item.category}</h3>
                <div className="flex items-center space-x-2">
                  {getTrendIcon(item.trend)}
                  <span className="text-2xl font-bold">{item.score}</span>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-2">{item.feedback}</p>
              <div className="flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-blue-700">{item.improvement}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg p-6 mb-6">
          <div className="flex items-center space-x-3 mb-4">
            <Award className="w-6 h-6 text-violet-600" />
            <h3 className="text-lg font-semibold text-gray-900">Achievements Unlocked</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {overallScore >= 80 && (
              <div className="flex items-center space-x-2 bg-white rounded-lg p-3">
                <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-yellow-600" />
                </div>
                <span className="text-sm font-medium text-gray-900">Excellence Badge</span>
              </div>
            )}
            {scores.some(s => s.category === 'Voice Clarity' && s.score >= 75) && (
              <div className="flex items-center space-x-2 bg-white rounded-lg p-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-900">Clear Speaker</span>
              </div>
            )}
            {scores.some(s => s.category === 'Body Language' && s.score >= 75) && (
              <div className="flex items-center space-x-2 bg-white rounded-lg p-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-sm font-medium text-gray-900">Confident Presenter</span>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex-1 bg-violet-600 text-white py-3 px-6 rounded-lg hover:bg-violet-700 transition-colors font-medium">
            Download Detailed Report
          </button>
          <button className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors font-medium">
            Start New Session
          </button>
          <button className="flex-1 bg-blue-100 text-blue-700 py-3 px-6 rounded-lg hover:bg-blue-200 transition-colors font-medium">
            View Progress
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResults;