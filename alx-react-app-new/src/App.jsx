// src/App.jsx
import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* Task 1: WelcomeMessage */}
      <WelcomeMessage />

      {/* Task 2: Header, MainContent, Footer */}
      <Header />
      <MainContent />
      <Footer />

      {/* Task 3: UserProfile */}
      <UserProfile
        name="Alice"
        age={25}
        bio="Loves hiking and photography"
      />
      <Counter />

    </div>
  );
}

export default App;
