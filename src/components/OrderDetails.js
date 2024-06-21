import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './OrderDetails.css';

// Sample warehouse address
const warehouseAddress = '123 Warehouse Lane, Skincare City, SC 12345';

// Sample order details (you can replace this with actual data)
const orders = [
  { id: 783292, customer: 'John Doe', phone: '555-1234', address: '123 Main St, Anytown, AT 12345', items: [{ name: 'Moisturizer', quantity: 2, weight: '200g' }, { name: 'Face Wash', quantity: 1, weight: '150g' }] },
  { id: 792404, customer: 'Jane Smith', phone: '555-5678', address: '456 Elm St, Othertown, OT 67890', items: [{ name: 'Sunscreen', quantity: 3, weight: '300g' }, { name: 'Toner', quantity: 1, weight: '100g' }] },
  // ...other orders
];

function OrderDetails() {
  const { orderId } = useParams();
  const order = orders.find(order => order.id === parseInt(orderId));

  if (!order) {
    return <div>Order not found</div>;
  }

  return (
    <div className="order-details-container">
      <h2>Order Details for {order.customer}</h2>
      <div className="details-section">
        <h3>Warehouse Address:</h3>
        <p>{warehouseAddress}</p>
      </div>
      <div className="details-section">
        <h3>Customer Details:</h3>
        <p><strong>Name:</strong> {order.customer}</p>
        <p><strong>Phone Number:</strong> {order.phone}</p>
        <p><strong>Delivery Address:</strong> {order.address}</p>
      </div>
      <div className="details-section">
        <h3>Items:</h3>
        <ul>
          {order.items.map((item, index) => (
            <li key={index}>
              {item.name} - Quantity: {item.quantity}, Weight: {item.weight}
            </li>
          ))}
        </ul>
      </div>
      <Link to="/" className="back-link">Back to Order Management</Link>
    </div>
  );
}

export default OrderDetails;