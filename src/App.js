// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Login2 from './screens/Login2';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Define routes for Login and Signup */}
          <Route path="/" element={<Login />} />
          <Route path="/createuser" element={<Signup />} />
          <Route path="/logindoctor" element={<Login2 />} />
          {/* Define a route for the root URL */}
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;


