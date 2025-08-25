import React from 'react';
import { Subject } from '../types';
import { ProgressCircle } from './ProgressCircle';

interface SubjectCardProps {
  subject: Subject;
  completedTopics: string[];
  onClick: () => void;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({
  subject,
  completedTopics,
  onClick
}) => {
  const completedCount = subject.topics.filter(topic => 
    completedTopics.includes(topic.id)
  ).length;
  const totalCount = subject.topics.length;
  const percentage = (completedCount / totalCount) * 100;

  return (
    <div 
      onClick={onClick}
      className={`
        bg-gradient-to-br ${subject.color} p-6 rounded-2xl cursor-pointer
        transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
        border border-white/10 backdrop-blur-sm
        relative overflow-hidden group
      `}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{subject.icon}</span>
            <h3 className="text-lg font-bold text-white">{subject.name}</h3>
          </div>
          <div className="text-sm text-white/80">
            {completedCount}/{totalCount}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="bg-black/20 rounded-full h-2 mb-2">
              <div 
                className="bg-white h-2 rounded-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <p className="text-sm text-white/90">
              {percentage === 100 ? '🎉 Tamamlandı!' : `${Math.round(percentage)}% tamamlandı`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};