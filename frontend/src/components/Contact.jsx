import React, { useState } from "react";
import "../App.css";

function Contact() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "Aritro Chatterjee", // Pre-filled name
    email: "chatte65@purdue.edu", // Pre-filled email
    phone: "765-772-0826", // Pre-filled phone
    message: "I created this game with my friends during Boilermake XII. Feel free to reach out with any questions", // Message field is left empty
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    // Reset form fields (optional)
    setFormData({
      name: "Aritro Chatterjee",
      email: "chatte65@purdue.edu",
      phone: "765-772-0826",
      message: "I created this game with my friends during Boilermake XII. Feel free to reach out with any questions",
    });
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Have questions or feedback? We'd love to hear from you!</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;