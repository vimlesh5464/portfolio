const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-20 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="mb-6">Have a project or question? Let’s connect!</p>
      <form className="max-w-xl mx-auto grid gap-4">
        <input type="text" placeholder="Your Name" className="p-3 border rounded" />
        <input type="email" placeholder="Your Email" className="p-3 border rounded" />
        <textarea placeholder="Your Message" rows="4" className="p-3 border rounded"></textarea>
        <button type="submit" className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">Send Message</button>
      </form>
    </section>
  );
};
export default Contact;

