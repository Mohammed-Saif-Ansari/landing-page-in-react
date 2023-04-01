import './App.css';
import myImage from './Image/image-top.png'
import myImage1 from './Image/half-rect.png'
import myImage2 from './Image/lowprice-icon.png'
import Hero from './Components/Hero'
import Testimonials from './Components/testimonials'
import { useState } from 'react';
import { CgPhone } from "react-icons/cg";
import BookingForm from "./Components/bookingform";
import ProductDetails from './Components/productdetailes';

function App() {
  const [adultCount, setAdultCount] = useState(0);
  const [kidsCount, setkidsCount] = useState(0);
  const [seniorCount, setseniorCount] = useState(0);


  const handleAdultCountChange = (num) => {
    setAdultCount(prev => prev + num);
  }

  const handlekidsCountChange = (num) => {
    setkidsCount(prev => prev + num);
  }

  const handleseniorCountChange = (num) => {
    setseniorCount(prev => prev + num);
  }

  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <div className="App">
      <section className="header">
        <div className="header-container">
          <div className="main-image">
            <img src={myImage} alt="My image" />

            {/* <div className="left-image">
              <div className="left-top-image">
                <img src={myImage2} alt="price" />
              </div>
              <div className="left-top-title">
                <h2>The Great Escape</h2>
              </div>
            </div> */}
            <div className="right-image">
              <div className="right-top-image">
                <img src={myImage1} alt="image-title" />
                <div className="right-top-title">
                  <h2>LOWEST</h2>
                  <p>Price Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="second">
        <div className="second-left">
          <div className="left-image">
            <div className="left-top-image">
              <img src={myImage2} alt="price" />
            </div>
            <div className="left-top-title">
              <h2>The Great Escape</h2>
            </div>
          </div>
          <div className="second-left-top">

            <div className="left-toptitle">
              <p>OFFER</p>
            </div>
            <div className="left-lowprice">
              <p>15% Off + Free meals
              </p>
            </div>
          </div>
          <ProductDetails/>

          {/* <div className="second-left-middle">
            <div className="second-left-midlle-container">
              <div className="middle-container-links">
                <a href="https://www.cubosquare.com" id="change-green">Description</a> |
                <a href="https://www.cubosquare.com"> What you get</a> |
                <a href="https://www.cubosquare.com"> What you dont get</a> |
                <a href="https://www.cubosquare.com"> Highlights</a> |
                <a href="https://www.cubosquare.com"> Terms & Conditions</a>

              </div>
              <div className="middle-container-text">
                <ul>
                  <li> November weekday Offer OR 1-Day Expo 2020 Dubai Ticket OR Multi-Day Pass Valid between 1 October 2021 and 31 March 2022 (Open Dated)</li>
                  <li> Entry Ticket to Global Village (Fixed Dated) - only on 1-Day Expo 2020 Dubai Ticket or Multi Day Pass</li>
                </ul>
              </div>
            </div>
          </div> */}

          <div className="second-left-bottam">
            <Hero />
            <Testimonials/>
            {/*   <section class="testimonials">
      <div class="testimonial">
        <blockquote>
          It was my first time planning a trip with you guys. I appreciate all your help and your contribution has made our trip memorable. For my future trips as well I will continue to be in touch with you and will also recommend you to others.
          <br></br>A big thanks from my family as well.
        </blockquote>
        <div class="testimonial__author">
          <div class="testimonial__author__info">
            <h4>Saurabh</h4>
            <p class="stars">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </p>
          </div>
        </div>
      </div>
      <div class="testimonial">
        <blockquote>
          Booked for sightseeing and airport transfer for 1-week trip. Good experience it was. The booking process was smooth too. The tripXOXO team helped us with the best itinerary for our holiday with all the best experiences at best prices.
        </blockquote>
        <div class="testimonial__author">
          <div class="testimonial__author__info">
            <h4>Nilima</h4>
            <p class="stars">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </p>
          </div>
        </div>
      </div>
      <div class="testimonial">
        <blockquote>
          We had booked all our tour itineraries and transport through tripXOXO. The bookings from India were well handled and as per the instructions provided. And also the onsite coordinators managed all the travel and booking well and as per schedule. For future holidays as well we would contact them. Thanks.
        </blockquote>
        <div class="testimonial__author">
          <div class="testimonial__author__info">
            <h4>Kushal</h4>
            <p class="stars">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </p>
          </div>
        </div>
    </div></section> */}
          </div>
        </div>
        <div className="second-right">
          <div className="second-right-container">
            <div className="second-right-container-top">
              <p>- Booking -</p>
            </div>
            <div className="second-right-container-middle">
              <div className="midlle-complete">
                <div className="middle-date">
                  <div className="middle-date-title">
                    <h4>Select a date</h4>
                  </div>
                  <div className="middle-date-date">
                    <input type="date" id="date" name="date" />
                  </div>
                </div>

                <div className="middle-adult">
                  <div className="middle-adult-title">
                    <h4>Adult<span>(Above 4.46ft)</span></h4>
                  </div>
                  <div className="middle-adult-button">
                    <button onClick={() => handleAdultCountChange(-1)} >-</button><span id="button-counter">{adultCount}</span><button onClick={() => handleAdultCountChange(1)}>+</button>
                  </div>
                </div>

                <div className="middle-adult">
                  <div className="middle-adult-title">
                    <h4>Kids<span>(Height 3.3ft to 4.46ft)</span></h4>
                  </div>
                  <div className="middle-adult-button">
                    <button onClick={() => handlekidsCountChange(-1)}>-</button><span id="button-counter">{kidsCount}</span><button onClick={() => handlekidsCountChange(1)}>+</button>
                  </div>
                </div>

                <div className="middle-adult">
                  <div className="middle-adult-title">
                    <h4>Senior citizen<span>(Age 58 & above)</span></h4>
                  </div>
                  <div className="middle-adult-button">
                    <button onClick={() => handleseniorCountChange(-1)}>-</button><span id="button-counter">{seniorCount}</span><button onClick={() => handleseniorCountChange(1)}>+</button>
                  </div>
                </div>

                <div className="middle-adult">
                  <div className="middle-adult-title">
                    <h4>Children<span>(Below Height 3.3ft - Free)</span></h4>
                  </div>
                </div>

              </div>
            </div>
            <div className="second-right-container-bottam">
              <div className="bottam-price-container">
                <h5><strike>₹3900</strike></h5>
                <div className="bottam-main-price">
                  <p>You Pay</p>
                  <h4>₹3300</h4>
                </div>
              </div>
              <div className="book-container">
                <div className="booknow-button" onClick={() => setShowForm(true)}>
                  {/* <button>Book Now</button> */}
                </div>
                <BookingForm />
                <div className="groupbook-button">
                  <button>Group Booking</button>
                </div>
              </div>
              <div className="call-container">
                <div className="call-icon">
                  <CgPhone />
                </div>
                <div className="call-data">
                  <p><span>Book</span> by Phone</p>
                  <h1>+91 740 019 9990</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
