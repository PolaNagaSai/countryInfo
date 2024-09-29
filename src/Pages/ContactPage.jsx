function ContactPage() {

  const handleFormSubmit=(formData)=>{
    const formInputData=  Object.fromEntries(formData.entries());
    console.log(formInputData);
  
  };

  return (
    <section className="contact-section">
        <div className="contact-container container">
        <h2 className="contact-title">Contact Us</h2>
        <form className="actions" action={handleFormSubmit}>
          <input className="form-control" type="text" placeholder="Enter your name" required name="username"/>
          <input className="form-control"  type="Email" placeholder="Enter your email" required name="email"/>
          <textarea className="form-control text-area" rows="10" placeholder="Enter your message" required name="message"></textarea>
          <button className="contact-btn" type="submit" value="send">Send</button>
        </form>
        </div>
    </section>
  )
}

export default ContactPage