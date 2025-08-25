import React, { useState } from 'react';
import { Subject, Topic } from '../types';
import { ArrowLeft, CheckCircle, Circle, Star } from 'lucide-react';

interface SubjectDetailProps {
  subject: Subject;
  completedTopics: string[];
  onTopicToggle: (topicId: string) => void;
  onBack: () => void;
}

export const SubjectDetail: React.FC<SubjectDetailProps> = ({
  subject,
  completedTopics,
  onTopicToggle,
  onBack
}) => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  
  const completedCount = subject.topics.filter(topic => 
    completedTopics.includes(topic.id)
  ).length;
  const totalCount = subject.topics.length;
  const progress = (completedCount / totalCount) * 100;

  const isTopicCompleted = (topicId: string) => completedTopics.includes(topicId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r ${subject.color} opacity-20`} />
        <div className="relative px-6 py-8">
          <div className="flex items-center space-x-4 mb-6">
            <button
              onClick={onBack}
              className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            <div className="flex items-center space-x-3">
              <span className="text-3xl">{subject.icon}</span>
              <div>
                <h1 className="text-3xl font-bold text-white">{subject.name}</h1>
                <p className="text-gray-300">
                  {completedCount}/{totalCount} konu tamamlandı
                </p>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-white/10 rounded-full h-3 mb-2">
            <div 
              className={`bg-gradient-to-r ${subject.color} h-3 rounded-full transition-all duration-500`}
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white font-semibold">%{Math.round(progress)} tamamlandı</p>
        </div>
      </div>

      {/* Skill Tree */}
      <div className="px-6 pb-8">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 min-h-[500px]">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            🗺️ Konu Haritası
          </h2>
          
          {/* Topic Grid - Skill Tree Style */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {subject.topics.map((topic, index) => {
              const isCompleted = isTopicCompleted(topic.id);
              const isSelected = selectedTopic === topic.id;
              
              return (
                <div
                  key={topic.id}
                  className="relative"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {/* Connection lines for skill tree effect */}
                  {index > 0 && (
                    <div className={`
                      absolute -left-4 top-1/2 w-4 h-0.5 
                      ${completedTopics.includes(subject.topics[index - 1]?.id) 
                        ? 'bg-gradient-to-r from-green-400 to-cyan-400' 
                        : 'bg-gray-600'
                      }
                      transition-colors duration-300
                    `} />
                  )}
                  
                  <div
                    onClick={() => {
                      setSelectedTopic(isSelected ? null : topic.id);
                      onTopicToggle(topic.id);
                    }}
                    className={`
                      relative p-4 rounded-xl cursor-pointer transition-all duration-300
                      border-2 transform hover:scale-105
                      ${isCompleted 
                        ? `bg-gradient-to-br ${subject.color} border-white/30 shadow-lg shadow-green-500/20` 
                        : 'bg-white/5 border-white/10 hover:border-white/30'
                      }
                      ${isSelected ? 'ring-2 ring-cyan-400' : ''}
                    `}
                  >
                    {/* Completion indicator */}
                    <div className="flex items-center justify-between mb-2">
                      {isCompleted ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <Circle className="w-5 h-5 text-gray-400" />
                      )}
                      {isCompleted && <Star className="w-4 h-4 text-yellow-400" />}
                    </div>

                    {/* Topic name */}
                    <h3 className={`
                      text-sm font-semibold leading-tight
                      ${isCompleted ? 'text-white' : 'text-gray-300'}
                    `}>
                      {topic.name}
                    </h3>

                    {/* Glow effect for completed topics */}
                    {isCompleted && (
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-xl" />
                    )}
                  </div>

                  {/* Particle effect for completed topics */}
                  {isCompleted && (
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-2 right-2 w-1 h-1 bg-yellow-400 rounded-full animate-pulse" />
                      <div className="absolute bottom-2 left-2 w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Achievement message */}
          {progress === 100 && (
            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl p-6 border border-yellow-500/30">
                <div className="text-4xl mb-2">🎉</div>
                <h3 className="text-2xl font-bold text-white mb-2">Tebrikler!</h3>
                <p className="text-gray-300">{subject.name} dersini tamamen bitirdin!</p>
              </div>
            </div>
          )}

          {/* Progress stats */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
              <div className="text-lg font-bold text-white">{completedCount}</div>
              <div className="text-xs text-gray-400">Tamamlanan</div>
            </div>
            <div className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
              <div className="text-lg font-bold text-white">{totalCount - completedCount}</div>
              <div className="text-xs text-gray-400">Kalan</div>
            </div>
            <div className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
              <div className="text-lg font-bold text-white">{Math.round(progress)}%</div>
              <div className="text-xs text-gray-400">İlerleme</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};