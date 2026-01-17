import "./contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h1>Contact Me</h1>
        <p>Let's work together or just say hi 👋</p>
      </div>

      <form className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          required
        />

        <textarea
          placeholder="Your Message"
          rows="6"
          required
        ></textarea>

      </form>
      <button type="submit" className="button">Send Message 🚀</button>
    </section>
  );
}
