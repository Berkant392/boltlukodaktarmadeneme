import React from 'react';
import { ArrowLeft, Award, Flame, Target, Calendar, Trophy, Star, BookOpen } from 'lucide-react';
import { Badge } from '../types';

interface ProfileProps {
  completedTopics: string[];
  streak: number;
  onBack: () => void;
}

export const Profile: React.FC<ProfileProps> = ({
  completedTopics,
  streak,
  onBack
}) => {
  const totalCompleted = completedTopics.length;
  const studyDays = Math.max(streak, 1);
  
  // Badge calculations
  const badges: Badge[] = [
    {
      id: 'first-topic',
      name: 'İlk Adım',
      description: 'İlk konunu tamamladın!',
      icon: '🎯',
      earned: totalCompleted >= 1,
      earnedDate: totalCompleted >= 1 ? '2024-01-15' : undefined
    },
    {
      id: 'ten-topics',
      name: 'Çalışkan',
      description: '10 konu tamamladın!',
      icon: '📚',
      earned: totalCompleted >= 10,
      earnedDate: totalCompleted >= 10 ? '2024-01-20' : undefined
    },
    {
      id: 'fifty-topics',
      name: 'Bilgin',
      description: '50 konu tamamladın!',
      icon: '🧠',
      earned: totalCompleted >= 50,
      earnedDate: totalCompleted >= 50 ? '2024-02-01' : undefined
    },
    {
      id: 'week-streak',
      name: 'Kararlı',
      description: '7 gün üst üste çalıştın!',
      icon: '🔥',
      earned: streak >= 7,
      earnedDate: streak >= 7 ? '2024-01-22' : undefined
    },
    {
      id: 'month-streak',
      name: 'Efsane',
      description: '30 gün üst üste çalıştın!',
      icon: '👑',
      earned: streak >= 30,
      earnedDate: streak >= 30 ? '2024-02-15' : undefined
    },
    {
      id: 'hundred-topics',
      name: 'Uzman',
      description: '100 konu tamamladın!',
      icon: '⭐',
      earned: totalCompleted >= 100,
      earnedDate: totalCompleted >= 100 ? '2024-02-20' : undefined
    }
  ];

  const earnedBadges = badges.filter(badge => badge.earned);
  const upcomingBadges = badges.filter(badge => !badge.earned);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20" />
        <div className="relative px-6 py-8">
          <div className="flex items-center space-x-4 mb-6">
            <button
              onClick={onBack}
              className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-white">Profilim</h1>
              <p className="text-gray-300">YKS yolculuğundaki başarıların</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="px-6 mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-6 rounded-2xl border border-cyan-500/30">
            <div className="flex items-center space-x-3 mb-2">
              <Target className="w-8 h-8 text-cyan-400" />
              <span className="text-3xl font-bold text-white">{totalCompleted}</span>
            </div>
            <p className="text-gray-300">Tamamlanan Konu</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 p-6 rounded-2xl border border-orange-500/30">
            <div className="flex items-center space-x-3 mb-2">
              <Flame className="w-8 h-8 text-orange-400" />
              <span className="text-3xl font-bold text-white">{streak}</span>
            </div>
            <p className="text-gray-300">Günlük Seri</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-6 rounded-2xl border border-green-500/30">
            <div className="flex items-center space-x-3 mb-2">
              <Calendar className="w-8 h-8 text-green-400" />
              <span className="text-3xl font-bold text-white">{studyDays}</span>
            </div>
            <p className="text-gray-300">Çalışma Günü</p>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-500/20 to-amber-500/20 p-6 rounded-2xl border border-yellow-500/30">
            <div className="flex items-center space-x-3 mb-2">
              <Trophy className="w-8 h-8 text-yellow-400" />
              <span className="text-3xl font-bold text-white">{earnedBadges.length}</span>
            </div>
            <p className="text-gray-300">Kazanılan Rozet</p>
          </div>
        </div>
      </div>

      {/* Earned Badges */}
      <div className="px-6 mb-8">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Award className="w-8 h-8 mr-3 text-yellow-400" />
          Kazanılan Rozetler
        </h2>
        
        {earnedBadges.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {earnedBadges.map((badge) => (
              <div
                key={badge.id}
                className="bg-gradient-to-br from-yellow-500/20 to-amber-500/20 p-6 rounded-2xl border border-yellow-500/30 relative overflow-hidden"
              >
                <div className="absolute top-2 right-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">{badge.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{badge.name}</h3>
                  <p className="text-gray-300 text-sm mb-3">{badge.description}</p>
                  {badge.earnedDate && (
                    <p className="text-yellow-400 text-xs">
                      Kazanıldı: {new Date(badge.earnedDate).toLocaleDateString('tr-TR')}
                    </p>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent rounded-2xl" />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 py-12">
            <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>Henüz rozet kazanmadın. Çalışmaya başla!</p>
          </div>
        )}
      </div>

      {/* Upcoming Badges */}
      {upcomingBadges.length > 0 && (
        <div className="px-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Target className="w-8 h-8 mr-3 text-gray-400" />
            Sonraki Rozetler
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingBadges.map((badge) => (
              <div
                key={badge.id}
                className="bg-white/5 p-6 rounded-2xl border border-white/10 relative"
              >
                <div className="text-center opacity-60">
                  <div className="text-4xl mb-3">{badge.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{badge.name}</h3>
                  <p className="text-gray-300 text-sm">{badge.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600/10 to-transparent rounded-2xl" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Motivational Quote */}
      <div className="px-6 pb-8">
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-6 rounded-2xl border border-purple-500/30 text-center">
          <div className="text-2xl mb-3">💪</div>
          <p className="text-white font-semibold text-lg mb-2">
            "Başarı, sürekli küçük çabaların toplamıdır."
          </p>
          <p className="text-gray-300 text-sm">
            Her tamamladığın konu, hayalindeki üniversiteye bir adım daha yaklaştırıyor seni!
          </p>
        </div>
      </div>
    </div>
  );
};