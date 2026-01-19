import "./contact.css";
import Swal from "sweetalert2";

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Message Sent!",
      text: "Thank you for contacting me. I will get back to you soon.",
      icon: "success",
      confirmButtonText: "OK",
    });

    e.target.reset();
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h1>Contact Me</h1>
        <p>Let's work together or just say hi 👋</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
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

        <button type="submit" className="button">
          Send Message 🚀
        </button>
      </form>
    </section>
  );
}
