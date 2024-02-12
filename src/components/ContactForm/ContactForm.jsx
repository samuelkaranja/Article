import "./style.css";

const ContactForm = () => {
  return (
    <div className="contactform">
      <form>
        <label>Your name</label>
        <input type="text" name="name" placeholder="Enter your name" />
        <label>Email</label>
        <input type="text" name="name" placeholder="Enter your email" />
        <label>Subject</label>
        <input type="text" name="name" placeholder="What's this about?" />
        <label>Your message</label>
        <textarea rows={10} placeholder="How can we help you?"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
