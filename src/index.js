import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './layout/layout';
import Team from "./pages/team";
import Goal from "./pages/goal";
import Videos from "./pages/video";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HashRouter } from "react-router-dom";
import { Component } from 'react';
import { render } from 'react-dom';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

/*export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Team />} />
          <Route path="/video" element={<Videos />} />
          <Route path="/goal" element={<Goal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}*/

export default function App() {
  return (
    <HashRouter>
      <Routes>
      <Route path="/" element={<Team/>}/>
      <Route path="/videos" element={<Videos/>} />
      <Route path="/goal" element={<Goal/>} />
      </Routes>
    </HashRouter>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
    
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
