import React, { useState } from "react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // ekhane form data send korba (API ba EmailJS diye)
    
    setSubmitted(true);

    // conversion fire
    window.gtag("event", "conversion", {
      send_to: "AW-17526097727/ihbuCP3yuJMbEL-OjKVB",
    });
  };

  return (
    <div>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <button type="submit">Send</button>
        </form>
      ) : (
        <h2>Thank you! We will contact you soon.</h2>
      )}
    </div>
  );
};

export default ContactForm;
