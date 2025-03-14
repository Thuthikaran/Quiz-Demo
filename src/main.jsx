import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Quiz from './components/Quiz.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/footer.jsx';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex-grow">
        <App />
        <Quiz />
      </div>
      <Footer />
    </div>
  </StrictMode>
);
