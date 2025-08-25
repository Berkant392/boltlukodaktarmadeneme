import React from 'react';
import { Subject } from '../types';
import { SubjectCard } from './SubjectCard';
import { ProgressCircle } from './ProgressCircle';
import { User, Award, Flame, Target } from 'lucide-react';

interface DashboardProps {
  tytSubjects: Subject[];
  aytSubjects: Subject[];
  completedTopics: string[];
  streak: number;
  onSubjectClick: (subject: Subject) => void;
  onProfileClick: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  tytSubjects,
  aytSubjects,
  completedTopics,
  streak,
  onSubjectClick,
  onProfileClick
}) => {
  const totalTopics = [...tytSubjects, ...aytSubjects].reduce(
    (sum, subject) => sum + subject.topics.length, 0
  );
  const totalCompleted = completedTopics.length;
  const overallProgress = (totalCompleted / totalTopics) * 100;

  const tytCompleted = tytSubjects.reduce(
    (sum, subject) => sum + subject.topics.filter(topic => 
      completedTopics.includes(topic.id)).length, 0
  );
  const tytTotal = tytSubjects.reduce((sum, subject) => sum + subject.topics.length, 0);
  const tytProgress = (tytCompleted / tytTotal) * 100;

  const aytCompleted = aytSubjects.reduce(
    (sum, subject) => sum + subject.topics.filter(topic => 
      completedTopics.includes(topic.id)).length, 0
  );
  const aytTotal = aytSubjects.reduce((sum, subject) => sum + subject.topics.length, 0);
  const aytProgress = (aytCompleted / aytTotal) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20" />
        <div className="relative px-6 py-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Merhaba, YKS Savaşçısı! 👋
              </h1>
              <p className="text-gray-300">Bugün hangi konuları fethedeceksin?</p>
            </div>
            <button
              onClick={onProfileClick}
              className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
            >
              <User className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center space-x-2">
                <Flame className="w-5 h-5 text-orange-400" />
                <span className="text-white font-semibold">{streak}</span>
              </div>
              <p className="text-gray-300 text-xs mt-1">Gün serisi</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-green-400" />
                <span className="text-white font-semibold">{totalCompleted}</span>
              </div>
              <p className="text-gray-300 text-xs mt-1">Tamamlanan</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-semibold">{Math.floor(totalCompleted / 10)}</span>
              </div>
              <p className="text-gray-300 text-xs mt-1">Rozet</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
                <span className="text-white font-semibold">{Math.round(overallProgress)}%</span>
              </div>
              <p className="text-gray-300 text-xs mt-1">Genel</p>
            </div>
          </div>

          {/* Overall Progress */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <ProgressCircle 
                percentage={overallProgress} 
                size={140} 
                color="text-gradient-to-r from-cyan-400 to-purple-400"
                label="Genel İlerleme"
              />
            </div>
          </div>
        </div>
      </div>

      {/* TYT Section */}
      <div className="px-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">TYT İlerlemen</h2>
          <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
            <span className="text-cyan-400 font-semibold">{Math.round(tytProgress)}%</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tytSubjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              completedTopics={completedTopics}
              onClick={() => onSubjectClick(subject)}
            />
          ))}
        </div>
      </div>

      {/* AYT Section */}
      <div className="px-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">AYT İlerlemen</h2>
          <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
            <span className="text-purple-400 font-semibold">{Math.round(aytProgress)}%</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {aytSubjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              completedTopics={completedTopics}
              onClick={() => onSubjectClick(subject)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};