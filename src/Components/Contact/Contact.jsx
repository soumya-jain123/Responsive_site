import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "87076a62-3512-4f41-abe5-e63066ef76e2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(res.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>Feel free to reach out through contact form or find our contaact
            information below. Your feedback, questions and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
        </p>
        <ul>
            <li> <img src={mail_icon} alt="" />Contact@Soumay.dev</li>
            <li> <img src={phone_icon} alt="" />Phone: 123-456-7890</li>
            <li> <img src={location_icon} alt="" />Address: 123 Main St, Anytown<br/>SA 12345, United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label >Your name</label>
          <input type="text" name='name' placeholder='Enter your name' required/>
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
          <label> Write your messages here</label>
          <textarea name="message" id="" rows='6' placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit Now 
            <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
