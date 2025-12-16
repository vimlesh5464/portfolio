import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",   // Must match EmailJS template variable
    user_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
          console.log("EmailJS Success:", result);
          setFormData({ user_name: "", user_email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          alert("Failed to send message. Check console for details.");
          console.error("EmailJS Error:", error);
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-gray-100 py-20 px-6 md:px-20 text-center"
    >
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="mb-6">Have a project or question? Let’s connect!</p>

      <form
        onSubmit={sendEmail}
        className="max-w-xl mx-auto grid gap-4 text-left"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="p-3 border rounded w-full"
          value={formData.user_name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="p-3 border rounded w-full"
          value={formData.user_email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          className="p-3 border rounded w-full"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button
          type="submit"
          className={`bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
