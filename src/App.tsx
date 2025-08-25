import React, { useState, useEffect } from 'react';
import { Dashboard } from './components/Dashboard';
import { SubjectDetail } from './components/SubjectDetail';
import { Profile } from './components/Profile';
import { TYT_SUBJECTS, AYT_SUBJECTS } from './data/subjects';
import { Subject, UserProgress } from './types';

type CurrentView = 'dashboard' | 'subject' | 'profile';

function App() {
  const [currentView, setCurrentView] = useState<CurrentView>('dashboard');
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [userProgress, setUserProgress] = useState<UserProgress>({
    completedTopics: [],
    streak: 1,
    lastStudyDate: new Date().toISOString().split('T')[0],
    badges: []
  });

  // Load progress from localStorage on component mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('yks-progress');
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress));
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('yks-progress', JSON.stringify(userProgress));
  }, [userProgress]);

  // Update streak based on study activity
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const lastStudyDate = userProgress.lastStudyDate;
    
    if (lastStudyDate !== today && userProgress.completedTopics.length > 0) {
      const lastDate = new Date(lastStudyDate);
      const currentDate = new Date(today);
      const timeDiff = currentDate.getTime() - lastDate.getTime();
      const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      
      if (dayDiff === 1) {
        // Consecutive day - increment streak
        setUserProgress(prev => ({
          ...prev,
          streak: prev.streak + 1,
          lastStudyDate: today
        }));
      } else if (dayDiff > 1) {
        // Gap in studying - reset streak
        setUserProgress(prev => ({
          ...prev,
          streak: 1,
          lastStudyDate: today
        }));
      }
    }
  }, [userProgress.completedTopics.length]);

  const handleSubjectClick = (subject: Subject) => {
    setSelectedSubject(subject);
    setCurrentView('subject');
  };

  const handleTopicToggle = (topicId: string) => {
    setUserProgress(prev => {
      const isCurrentlyCompleted = prev.completedTopics.includes(topicId);
      const newCompletedTopics = isCurrentlyCompleted
        ? prev.completedTopics.filter(id => id !== topicId)
        : [...prev.completedTopics, topicId];

      return {
        ...prev,
        completedTopics: newCompletedTopics,
        lastStudyDate: new Date().toISOString().split('T')[0]
      };
    });
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setSelectedSubject(null);
  };

  const handleProfileClick = () => {
    setCurrentView('profile');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'subject':
        return selectedSubject ? (
          <SubjectDetail
            subject={selectedSubject}
            completedTopics={userProgress.completedTopics}
            onTopicToggle={handleTopicToggle}
            onBack={handleBackToDashboard}
          />
        ) : (
          <Dashboard
            tytSubjects={TYT_SUBJECTS}
            aytSubjects={AYT_SUBJECTS}
            completedTopics={userProgress.completedTopics}
            streak={userProgress.streak}
            onSubjectClick={handleSubjectClick}
            onProfileClick={handleProfileClick}
          />
        );
      case 'profile':
        return (
          <Profile
            completedTopics={userProgress.completedTopics}
            streak={userProgress.streak}
            onBack={handleBackToDashboard}
          />
        );
      default:
        return (
          <Dashboard
            tytSubjects={TYT_SUBJECTS}
            aytSubjects={AYT_SUBJECTS}
            completedTopics={userProgress.completedTopics}
            streak={userProgress.streak}
            onSubjectClick={handleSubjectClick}
            onProfileClick={handleProfileClick}
          />
        );
    }
  };

  return (
    <div className="App">
      {renderCurrentView()}
    </div>
  );
}

export default App;