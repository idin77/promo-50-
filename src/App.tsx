/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Bonus from './components/Bonus';
import Packages from './components/Packages';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-950 dark:bg-slate-950 light:bg-slate-50 font-sans text-slate-200 dark:text-slate-200 light:text-slate-900 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Benefits />
          <Bonus />
          <Packages />
          <Portfolio />
          <Testimonials />
          <FAQ />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </ThemeProvider>
  );
}
