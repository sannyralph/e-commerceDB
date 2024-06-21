import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import OrderManagement from './components/OrderManagement';
import OrderDetails from './components/OrderDetails';
import DeliveryTracking from './components/DeliveryTracking';
import Analytics from './components/Analytics';
import './App.css'; // Import the CSS file

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/orders" element={<OrderManagement />} />
            <Route path="/order/:orderId" element={<OrderDetails />} />
            <Route path="/delivery" element={<DeliveryTracking />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
