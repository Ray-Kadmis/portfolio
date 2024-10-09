// src/components/ContactForm.jsx
import React, { useState } from "react";
import useScrollAnimation from "./Animate.js";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    numberOfPages: "",
    hasDesign: "",
    email: "",
    message: "",
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");
    const formDataToSubmit = new FormData();
    formDataToSubmit.append(
      "access_key",
      "6329ffeb-0510-47ab-96af-212052d5d825"
    );
    for (const key in formData) {
      formDataToSubmit.append(key, formData[key]);
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSubmit,
    });

    const data = await response.json();

    if (data.success) {
      setResult(
        "Your message has been successfully sent! I'll get back to you promptly, ensuring you're not kept waiting. Stay tuned for my response!"
      );
      setFormData({
        name: "",
        numberOfPages: "",
        hasDesign: "",
        email: "",
        message: "",
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  const addElement = useScrollAnimation();
  return (
    <form
      className="formCSS hidden  "
      data-animation="show"
      ref={addElement}
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="numberOfPages">Number of Pages:</label>
        <input
          type="number"
          id="numberOfPages"
          name="numberOfPages"
          value={formData.numberOfPages}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Do you have a design?</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="hasDesign"
              value="yes"
              checked={formData.hasDesign === "yes"}
              onChange={handleChange}
              required
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="hasDesign"
              value="no"
              checked={formData.hasDesign === "no"}
              onChange={handleChange}
              required
            />
            No
          </label>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <button type="submit">Submit</button>
      <br />
      <span className="SubMes">{result}</span>
    </form>
  );
};

export default ContactForm;
