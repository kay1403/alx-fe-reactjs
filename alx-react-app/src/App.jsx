// src/App.jsx
import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  return (
    <div>
      {/* Task 1: WelcomeMessage */}
      <WelcomeMessage />

      {/* Task 2: Header, MainContent, Footer */}
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
