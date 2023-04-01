import React from "react";
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation]);

const Testimonials = () => {
  return (
    <div className="mySwiper">
      <Swiper navigation={true}>
        <SwiperSlide>
          <div className="testimonial">
            <blockquote>
              It was my first time planning a trip with you guys. I appreciate all your help and your contribution has made our trip memorable. For my future trips as well I will continue to be in touch with you and will also recommend you to others.
              <br />
              A big thanks from my family as well.
            </blockquote>
            <div className="testimonial__author">
              <div className="testimonial__author__info">
                <h4>Saurabh</h4>
                <p className="stars">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial">
            <blockquote>
              Booked for sightseeing and airport transfer for 1-week trip. Good experience it was. The booking process was smooth too. The tripXOXO team helped us with the best itinerary for our holiday with all the best experiences at best prices.
            </blockquote>
            <div className="testimonial__author">
              <div className="testimonial__author__info">
                <h4>Nilima</h4>
                <p className="stars">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial">
            <blockquote>
              We had booked all our tour itineraries and transport through tripXOXO. The bookings from India were well handled and as per the instructions provided. And also the onsite coordinators managed all the travel and booking well and as per schedule. For future holidays as well we would contact them. Thanks.
            </blockquote>
            <div className="testimonial__author">
              <div className="testimonial__author__info">
                <h4>Kushal</h4>
                <p className="stars">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
