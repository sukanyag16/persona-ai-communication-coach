import React from 'react';
import { Presentation, Briefcase, Users, MessageSquare } from 'lucide-react';

interface SessionType {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  focus: string[];
}

interface SessionTypeSelectorProps {
  selectedType: string;
  onTypeSelect: (type: string) => void;
}

const SessionTypeSelector: React.FC<SessionTypeSelectorProps> = ({
  selectedType,
  onTypeSelect,
}) => {
  const sessionTypes: SessionType[] = [
    {
      id: 'ted',
      name: 'TED Talk',
      description: 'Practice storytelling and engaging presentations',
      icon: Presentation,
      color: 'red',
      focus: ['Storytelling', 'Engagement', 'Stage Presence', 'Narrative Flow'],
    },
    {
      id: 'pitch',
      name: 'Business Pitch',
      description: 'Perfect your business presentations and proposals',
      icon: Briefcase,
      color: 'blue',
      focus: ['Clarity', 'Persuasion', 'Data Presentation', 'Confidence'],
    },
    {
      id: 'interview',
      name: 'Job Interview',
      description: 'Prepare for interviews with confidence building',
      icon: Users,
      color: 'green',
      focus: ['Confidence', 'Articulation', 'Body Language', 'Professionalism'],
    },
    {
      id: 'general',
      name: 'General Practice',
      description: 'Improve overall communication skills',
      icon: MessageSquare,
      color: 'violet',
      focus: ['Voice Quality', 'Gestures', 'Eye Contact', 'Overall Delivery'],
    },
  ];

  const getColorClasses = (color: string, isSelected: boolean) => {
    const colors = {
      red: isSelected
        ? 'border-red-500 bg-red-50 text-red-700'
        : 'border-gray-200 hover:border-red-300 hover:bg-red-50',
      blue: isSelected
        ? 'border-blue-500 bg-blue-50 text-blue-700'
        : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50',
      green: isSelected
        ? 'border-green-500 bg-green-50 text-green-700'
        : 'border-gray-200 hover:border-green-300 hover:bg-green-50',
      violet: isSelected
        ? 'border-violet-500 bg-violet-50 text-violet-700'
        : 'border-gray-200 hover:border-violet-300 hover:bg-violet-50',
    };
    return colors[color as keyof typeof colors];
  };

  const getIconColor = (color: string) => {
    const colors = {
      red: 'text-red-500',
      blue: 'text-blue-500',
      green: 'text-green-500',
      violet: 'text-violet-500',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Session Type</h2>
      <p className="text-gray-600 mb-6">
        Select the type of practice session that matches your goals. Each type focuses on different aspects of communication.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sessionTypes.map((type) => {
          const Icon = type.icon;
          const isSelected = selectedType === type.id;
          
          return (
            <button
              key={type.id}
              onClick={() => onTypeSelect(type.id)}
              className={`p-6 rounded-lg border-2 text-left transition-all duration-200 ${getColorClasses(
                type.color,
                isSelected
              )}`}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg bg-white shadow-sm ${getIconColor(type.color)}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {type.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {type.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {type.focus.map((focus, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {selectedType && (
        <div className="mt-6 p-4 bg-violet-50 rounded-lg">
          <h4 className="font-medium text-violet-900 mb-2">AI Analysis Focus</h4>
          <p className="text-sm text-violet-700">
            Based on your selection, our AI will provide specialized feedback tailored to{' '}
            <strong>{sessionTypes.find(t => t.id === selectedType)?.name}</strong> scenarios.
            The analysis will emphasize the key areas that matter most for this type of presentation.
          </p>
        </div>
      )}
    </div>
  );
};

export default SessionTypeSelector;