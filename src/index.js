import React from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import App from './App.js';

import {ThemeContextProvider} from "./themeContext.js"


const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<ThemeContextProvider>
              <App />
            </ThemeContextProvider>);



// After react 18

/* import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); 
root.render(<App tab="home" />); */
