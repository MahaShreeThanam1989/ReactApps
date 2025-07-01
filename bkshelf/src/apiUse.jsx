import React, { useEffect, useState } from 'react';
import { fetchJSON } from '../services/api';
import { axiosInstance } from '../services/api';

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Approach A: plain fetch
    fetchJSON(`${process.env.REACT_APP_USER_API_URL}`)
      .then(data => setUsers(data))
      .catch(err => setError(err.message));

    // Approach B: axios (you can swap baseURL on the fly)
    axiosInstance
      .get(process.env.REACT_APP_ORDER_API_URL.replace(/.*\/api/, '/api'))
      .then(({ data }) => setOrders(data))
      .catch(err => setError(err.message));
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!users.length || !orders.length) return <p>Loading…</p>;

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.name} ({u.email})</li>
        ))}
      </ul>

      <h2>Orders</h2>
      <ul>
        {orders.map(o => (
          <li key={o.id}>
            #{o.id} – {o.product} × {o.qty}
          </li>
        ))}
      </ul>
    </div>
  );
}