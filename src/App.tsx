import React from 'react';
import Header from './components/Header';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <Header />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default App;