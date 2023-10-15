import React, { useState } from 'react';
import axios from 'axios';
import './Style.css'

const SubscribeForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/subscribe', { email });
      console.log('Email sent:', response.data);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="container">
      <div className="horizontal-container">
        <h1 className="custom-heading">SIGN UP FOR OUR DAILY INSIDER</h1>
        <form id="subscribeForm" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeForm;
