import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {BrowserRouter, Routes, Route} from "react-router-dom";

// App Component: Main application container for InstaNews
const App =()=> {
  // Configuration constants
  const pageSize = 10; // Number of articles per page
  const apiKey = process.env.REACT_APP_NEWS_API // API key from environment variables
  
  // State to manage loading progress
  const [progress, setProgress] = useState(0);

  return (
    <div>
      {/* Browser Router for client-side routing */}
      <BrowserRouter>
        {/* Navigation bar */}
        <Navbar />

        {/* Top loading progress bar */}
        <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}
        />

        {/* Route configuration for different news categories */}
        <Routes>
          {/* Each Route renders News component with specific category */}
          <Route 
            exact path="/" 
            element={
              <News 
                setProgress={setProgress} 
                apiKey={apiKey} 
                key="general" 
                pageSize={pageSize} 
                country={"us"} 
                category="general" 
              />
            } 
          />
          <Route 
            exact path="/business" 
            element={
              <News 
                setProgress={setProgress} 
                apiKey={apiKey} 
                key="business" 
                pageSize={pageSize} 
                country={"us"} 
                category="business" 
              />
            } 
          />
          {/* Similar routes for other news categories */}
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country={"us"} category="entertainment" />} />
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={"us"} category="general" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country={"us"} category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country={"us"} category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country={"us"} category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country={"us"} category="technology" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;