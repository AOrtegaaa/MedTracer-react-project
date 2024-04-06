import './App.css';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import MedsPage from './pages/MedsPage';
import MedsLogPage from './pages/MedsLogPage';
import Footer from './components/Footer';

function App() {
  const [currentView, setCurrentView] = useState('Home');
  return (
    <div>
      {currentView === 'Home' && <HomePage />}
      {currentView === 'Meds' && <MedsPage />}
      {currentView === 'MedsLog' && <MedsLogPage />}
      <Footer
        onHomeClick={() => setCurrentView('Home')}
        onMedsClick={() => setCurrentView('Meds')}
        onMedsLogClick={() => setCurrentView('MedsLog')}
      />
    </div>
  );
}

export default App;