import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      alert("All fields are required.");
      return;
    }

    formData.append("access_key", "035ab0f-313-4d6b-9a5a-6af3e519cd");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to send
            me a message about anything that you want.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>singhkhushbu3200@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Lucknow, Uttar Pradesh, India</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>9555219367</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label>Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
