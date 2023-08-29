import { createRoot} from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import App from './App.jsx';
import './main.css';


const root = createRoot(document.getElementById('root'));
root.render(<App />);
