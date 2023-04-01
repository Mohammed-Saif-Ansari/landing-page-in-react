import { useState } from "react";

function BookingForm() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
    // Reset form fields and hide the form
    setName("");
    setEmail("");
    setMobile("");
    setMessage("");
    setShowForm(false);
  };

  return (
    <div>
      {showForm ? (
        <div className="form-popup">
          <form onSubmit={handleSubmit} className="form-container">
            <h2>Booking Form</h2>
            
            <input
              type="text" placeholder="Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            /><br/>
            
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            /><br/>
           
            <input
              type="tel"
              placeholder="Mobile"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            /><br/>
          
            <textarea
              id="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            /><br/>
            <button className="submit-button" type="submit">Submit</button><br/>
            <button className="close-button" type="button" onClick={handleCloseForm}>
              Close
            </button>
          </form>
        </div>
      ) : (
        <div className="booknow-button" onClick={handleShowForm}>
          <button>Book Now</button>
        </div>
      )}
    </div>
  );
}

export default BookingForm;
