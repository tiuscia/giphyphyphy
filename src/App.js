import React from 'react';
import {Helmet} from "react-helmet";
import SearchLayout from './layouts/SearchLayout/SearchLayout.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
    <Helmet>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"/>
    </Helmet>
    <SearchLayout />
    </div>
  );
}

export default App;