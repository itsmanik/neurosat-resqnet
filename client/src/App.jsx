// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Reports from './pages/Reports';
import './App.css';

function App() {
  return (
    // Use the dark theme styles from the previous update
    <div className="App min-h-screen bg-slate-900 text-white">
      <Header />
      {/* The main content area now uses the browser's URL to determine what to show */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
