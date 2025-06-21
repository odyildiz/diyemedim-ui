import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './AppRoutes';
import { LanguageProvider } from './contexts/LanguageContext';
import './App.css';
import './index.css';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-teal-50 to-purple-50">
        <Navbar />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;