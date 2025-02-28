import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useNavigate, Links } from 'react-router-dom';

//Fontes
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


// Componentes ou páginas
import Home from './Pages/Home';
import About from './Pages/About';
import RootLayout from './RootLayout';
import LoginPage from './Pages/LoginPage';
import PageLayout from './Layouts/PageLayout';
import ProtectedRoute from './components/ProtectedRoute';
import { LoadingProvider } from './contexts/LoadingContext';
import LoadingOverlay from './components/LoadingOverlay';
import Usuarios from './Pages/Usuarios';
import CustomLinks from './Pages/CustomLinks';
import LinkRedirect from './Pages/LinkRedirect';

const getToken = () => {
  return localStorage.getItem('token');
}

const isAuthenticated = () => {
  const res = getToken() !== null;
  return res;
} 

function App() {
  const authenticated = isAuthenticated();
  return (
    <LoadingProvider>
      <RootLayout>
        <BrowserRouter>
        <LoadingOverlay />
        {/* <Sidebar> */}
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/:slug" element={<LinkRedirect />} />
            <Route path="/" element={<ProtectedRoute element={PageLayout}><Home /></ProtectedRoute>} />
            <Route path="/about" element={<ProtectedRoute element={PageLayout}><About /></ProtectedRoute>} />
            <Route path="/usuarios" element={<ProtectedRoute element={PageLayout}><Usuarios /></ProtectedRoute>} />
            <Route path="/links" element={<ProtectedRoute element={PageLayout}><CustomLinks /></ProtectedRoute>} />
            
          </Routes>
          {/* </Sidebar> */}
        </BrowserRouter>
      </RootLayout>
    </LoadingProvider>
  ); 
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
