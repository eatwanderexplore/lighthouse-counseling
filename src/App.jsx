import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BioSection from './components/biosection';
import Footer from './components/footer';
import ContactSection from './components/contactsection';

// Simple Button Component
function Button({ children, className }) {
  return (
    <button className={`px-6 py-3 font-semibold rounded-full shadow-lg ${className}`}>
      {children}
    </button>
  );
}

// Simple Card Component
function Card({ children, className }) {
  return (
    <div className={`p-6 text-center shadow-lg border rounded-lg ${className}`}>
      {children}
    </div>
  );
}

// Header Component
function Header() {
  return <header className="bg-blue-900 text-white p-6 text-2xl font-bold">Lighthouse Counseling</header>;
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="bg-blue-500 text-white py-20 text-center" style={{ backgroundImage: "url('./src/assets/therapist-writing-notes.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
      <h1 className="text-5xl font-bold mb-4">Counseling Care</h1>
      <p className="text-xl mb-6">Talk with a professional</p>
      <Button className="bg-white text-blue-600 hover:bg-gray-200">Book an Appointment</Button>
    </section>
  );
}

// Services Section Component
function ServicesSection() {
  const services = ["Counseling", "Therapy", "Group Sessions"];
  return (
    <section className="py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map(service => (
        <Card key={service}>
          <h3 className="text-2xl font-bold mb-2">{service}</h3>
          <p className="text-gray-600">Quality care tailored to your needs.</p>
        </Card>
      ))}
    </section>
  );
}

// Main Application Component with Default Route
function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-screen bg-gray-100 font-sans">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <BioSection />
              <ServicesSection />
              <ContactSection />
            </>
          } />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
