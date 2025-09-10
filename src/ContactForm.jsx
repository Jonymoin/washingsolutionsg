import React, { useState } from "react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  

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
