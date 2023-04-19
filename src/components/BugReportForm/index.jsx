import React, { useState } from 'react';
import styles from './styles.module.css';

const BugReportForm = () => {
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    setMessage('Sending bug report...');
  };

  return (
    <div className={styles.container}>
      <h1>Bug Report Form</h1>
      <form
        onSubmit={handleSubmit}
        action="https://formspree.io/f/your_form_id" // Replace with your Formspree form endpoint
        method="POST"
        className={styles.form}
      >
        <label>
          Email:
          <input type="email" name="_replyto" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Description:
          <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default BugReportForm;
