import React from 'react';
import { Award, Target, TrendingUp, Calendar, Star, Trophy } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Progress: React.FC = () => {
  const achievements = [
    {
      id: 1,
      title: 'First Steps',
      description: 'Complete your first practice session',
      icon: Target,
      earned: true,
      earnedDate: '2025-01-10',
      color: 'bg-green-500',
    },
    {
      id: 2,
      title: 'Clear Speaker',
      description: 'Achieve 75+ voice clarity score',
      icon: Award,
      earned: true,
      earnedDate: '2025-01-12',
      color: 'bg-blue-500',
    },
    {
      id: 3,
      title: 'Confident Presenter',
      description: 'Maintain good posture for entire session',
      icon: TrendingUp,
      earned: true,
      earnedDate: '2025-01-15',
      color: 'bg-purple-500',
    },
    {
      id: 4,
      title: 'Consistent Performer',
      description: 'Complete 10 practice sessions',
      icon: Calendar,
      earned: false,
      progress: 7,
      total: 10,
      color: 'bg-yellow-500',
    },
    {
      id: 5,
      title: 'Excellence Badge',
      description: 'Score 90+ in any session',
      icon: Star,
      earned: false,
      color: 'bg-red-500',
    },
    {
      id: 6,
      title: 'Master Communicator',
      description: 'Achieve 85+ average score across all skills',
      icon: Trophy,
      earned: false,
      color: 'bg-indigo-500',
    },
  ];

  const milestones = [
    {
      title: 'First Session Completed',
      date: '2025-01-10',
      description: 'Started your journey with a General Practice session',
      type: 'session',
    },
    {
      title: 'Voice Clarity Improved',
      date: '2025-01-12',
      description: 'Achieved 75+ score in voice clarity analysis',
      type: 'improvement',
    },
    {
      title: 'TED Talk Practice',
      date: '2025-01-14',
      description: 'Completed your first TED Talk style presentation',
      type: 'session',
    },
    {
      title: 'Body Language Mastery',
      date: '2025-01-15',
      description: 'Maintained excellent posture throughout entire session',
      type: 'achievement',
    },
  ];

  const skillProgress = [
    { skill: 'Voice Clarity', current: 85, target: 90, improvement: '+12%' },
    { skill: 'Body Language', current: 78, target: 85, improvement: '+8%' },
    { skill: 'Eye Contact', current: 82, target: 88, improvement: '+15%' },
    { skill: 'Content Flow', current: 75, target: 80, improvement: '+10%' },
    { skill: 'Engagement', current: 70, target: 85, improvement: '+5%' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Progress</h1>
          <p className="text-gray-600">Track your achievements and see how far you've come</p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Sessions Completed</h3>
              <Calendar className="w-6 h-6 text-violet-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">24</div>
            <div className="text-sm text-green-600 flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" />
              +12% this month
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Average Score</h3>
              <Target className="w-6 h-6 text-violet-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">78</div>
            <div className="text-sm text-green-600 flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" />
              +8 points improved
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Badges Earned</h3>
              <Award className="w-6 h-6 text-violet-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">3</div>
            <div className="text-sm text-gray-600">
              3 more to unlock
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Achievements */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={achievement.id}
                    className={`flex items-center p-4 rounded-lg border ${
                      achievement.earned
                        ? 'bg-green-50 border-green-200'
                        : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      achievement.earned ? achievement.color : 'bg-gray-300'
                    }`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className={`font-semibold ${
                        achievement.earned ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {achievement.title}
                      </h4>
                      <p className={`text-sm ${
                        achievement.earned ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {achievement.description}
                      </p>
                      {achievement.earned && achievement.earnedDate && (
                        <p className="text-xs text-green-600 mt-1">
                          Earned on {achievement.earnedDate}
                        </p>
                      )}
                      {!achievement.earned && achievement.progress && (
                        <div className="mt-2">
                          <div className="flex justify-between text-xs text-gray-600 mb-1">
                            <span>Progress</span>
                            <span>{achievement.progress}/{achievement.total}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-violet-600 h-2 rounded-full"
                              style={{ width: `${(achievement.progress! / achievement.total!) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Milestones */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Milestones</h3>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-3 h-3 rounded-full mt-2 ${
                    milestone.type === 'achievement' ? 'bg-yellow-500' :
                    milestone.type === 'improvement' ? 'bg-green-500' :
                    'bg-blue-500'
                  }`}></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-900">{milestone.title}</h4>
                      <span className="text-sm text-gray-500">{milestone.date}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Progress */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Skill Development</h3>
          <div className="space-y-6">
            {skillProgress.map((skill, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{skill.skill}</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-green-600 font-medium">{skill.improvement}</span>
                    <span className="text-sm text-gray-600">
                      {skill.current}/{skill.target}
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-violet-500 to-purple-600 h-3 rounded-full relative"
                    style={{ width: `${(skill.current / 100) * 100}%` }}
                  >
                    <div
                      className="absolute right-0 top-0 h-3 w-1 bg-gray-400 rounded-full"
                      style={{ right: `${100 - skill.target}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Current: {skill.current}%</span>
                  <span>Target: {skill.target}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Progress;