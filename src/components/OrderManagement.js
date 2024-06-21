import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './OrderManagement.css';

// Function to generate random dates for demonstration
const getRandomDate = () => {
  const start = new Date(2021, 0, 1);
  const end = new Date();
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

// Generate random orders
const generateRandomOrders = (count) => {
  const customers = ['John Doe', 'Jane Smith', 'Sam Johnson', 'Alice Brown', 'Bob White'];
  const statuses = ['Pending', 'Delivered', 'Dispatched'];
  const types = ['Same Day', 'Inter State', 'International'];
  const orders = [];

  for (let i = 0; i < count; i++) {
    const customer = customers[Math.floor(Math.random() * customers.length)];
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const type = types[Math.floor(Math.random() * types.length)];
    const total = (Math.random() * 5000 + 1000).toFixed(2);
    orders.push({
      id: Math.floor(Math.random() * 1000000),
      customer,
      status,
      total,
      type,
      orderDate: getRandomDate(),
    });
  }

  return orders;
};

// Update orders with random dates
const initialOrders = [
  { id: 783292, customer: 'John Doe', status: 'Pending', total: 5099.99, type: "Same Day", orderDate: getRandomDate() },
  { id: 792404, customer: 'Jane Smith', status: 'Delivered', total: 2149.99, type: "Inter State", orderDate: getRandomDate() },
  { id: 329383, customer: 'Sam Johnson', status: 'Dispatched', total: 1589.99, type: "International", orderDate: getRandomDate() },
];

// Combine initial orders with random orders
const orders = [...initialOrders, ...generateRandomOrders(15)];

// Convert dates to ISO string for consistent formatting
const formattedOrders = orders.map(order => ({
  ...order,
  orderDate: order.orderDate.toISOString().split('T')[0],
}));

// Sort orders by date in descending order
formattedOrders.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate));

const getOrderRowClass = (type) => {
  switch (type) {
    case 'Same Day':
      return 'same-day';
    case 'Inter State':
      return 'inter-state';
    case 'International':
      return 'international';
    default:
      return '';
  }
};

function OrderManagement() {
  const [filter, setFilter] = useState('All');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredOrders = formattedOrders.filter(order => {
    if (filter === 'All') {
      return true;
    }
    return order.type === filter || order.status === filter;
  });

  return (
    <div>
      <h2>Order Management</h2>
      <div className="filter-container">
        <label htmlFor="filter">Filter by:</label>
        <select id="filter" value={filter} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Same Day">Same Day</option>
          <option value="Inter State">Inter State</option>
          <option value="International">International</option>
          <option value="Pending">Pending</option>
          <option value="Delivered">Delivered</option>
          <option value="Dispatched">Dispatched</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Order Date</th>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Order Type</th>
            <th>Status</th>
            <th>Total (Naira)</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map(order => (
            <tr key={order.id} className={getOrderRowClass(order.type)}>
              <td>{order.orderDate}</td>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.type}</td>
              <td>{order.status}</td>
              <td>{order.total}</td>
              <td><Link to={`/order/${order.id}`}>View Details</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderManagement;
