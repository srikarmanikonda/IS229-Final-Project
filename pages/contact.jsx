
import React, { useState } from 'react';
import styles from '../styles/Contact.module.css'; 
import Link from 'next/link';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    setTimeout(() => {
      setStatus('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 2000);
  };

  return (
    <div>
    <header className={styles.navbar}>
    <div className={styles.header}>
      <h2>Srikar's IS 229 Final Project</h2>
    </div>
    <nav>
      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/track-prices">Track Prices</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
    <div className={styles.contactContainer}>
     

      <h2>Contact Srikar!</h2>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">
            Name<span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name.."
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">
            Email<span className={styles.required}>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email.."
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject.. please make sure its crypto related!"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">
            Message<span className={styles.required}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
      {status && <p className={styles.statusMessage}>{status}</p>}
    </div>
    </div>
  );
}
