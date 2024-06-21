import React from 'react';
import { Link } from 'react-router-dom';

const deliveries = [
  { id: 1, courier: 'Whoosh Ruby', status: 'Out for delivery', eta: '738323920', reprintLabel: 'path/to/label_2bdf3668-37a5-48c6-8e75-d1f4d5caced7_1717671214537_1.pdf' },
  { id: 2, courier: 'Whoosh Emerald', status: 'Delivered', eta: '738329320', reprintLabel: 'path/to/label_2bdf3668-37a5-48c6-8e75-d1f4d5caced7_1717671214537_1.pdf' },
  { id: 3, courier: 'Whoosh Diamond', status: 'Dispatched', eta: '7383244920', reprintLabel: 'path/to/label_2bdf3668-37a5-48c6-8e75-d1f4d5caced7_1717671214537_1.pdf' },
];

function DeliveryTracking() {
  return (
    <div>
      <h2>Delivery Tracking</h2>
      <table>
        <thead>
          <tr>
            <th>Delivery ID</th>
            <th>Courier</th>
            <th>Status</th>
            <th>Track Order</th>
            <th>Label</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map(delivery => (
            <tr key={delivery.id}>
              <td>{delivery.id}</td>
              <td>{delivery.courier}</td>
              <td>{delivery.status}</td>
              <td><Link to={`/track/${delivery.id}`}>{delivery.eta}</Link></td>
              <td><a href={delivery.reprintLabel} target="_blank" rel="noopener noreferrer">Reprint Label</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DeliveryTracking;
