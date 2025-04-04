import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// BrowserRouter es un componente interactua y mantiene en
// memoria la historia del navegador para que puedas tener
// diferentes paginas en React
// Siempre tiene que envolver tu aplicacion con el
import { BrowserRouter } from 'react-router';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);
