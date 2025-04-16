import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './i18n';
import Home from './Home.jsx';

createRoot(document.getElementById('root')).render(
    <Home />
)
