'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [contactForms, setContactForms] = useState([]);

  useEffect(() => {
    const fetchContactForms = async () => {
      try {
        const response = await axios.get('/api/contact');
        setContactForms(response.data);
      } catch (err) {
        console.error('Failed to fetch contact forms:', err);
      }
    };

    fetchContactForms();
  }, []);

  return (
    <div>
      <h1>Contact Form Submissions</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Service</th>
            <th>Message</th>
            <th>Submitted At</th>
          </tr>
        </thead>
        <tbody>
          {contactForms.map((form, index) => (
            <tr key={index}>
              <td>{form.name}</td>
              <td>{form.email}</td>
              <td>{form.phone}</td>
              <td>{form.service}</td>
              <td>{form.message}</td>
              <td>{new Date(form.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
