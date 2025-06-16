import React from "react";
import "../style/About.css"; // Adjust the path based on your project structure
import NewsLetter from '../shared/Newsletter';

const About = () => {
  return (
    <div className="about-container">
      <section className="hero">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>
            {" "}
            Welcome to our vibrant tourist destination website "Explore
            Kolkata"! Discover a world of breathtaking landscapes, rich cultural
            experiences, and unforgettable adventures. Our passionate team is
            your gateway to an unforgettable travel experience. Immerse yourself
            in the beauty of our diverse landscapes, indulge in unique local
            flavors, and create lasting memories. Our mission is to guide you
            through the wonders of Kolkata with expert insights, travel tips,
            and personalized recommendations. Whether you're a solo explorer, a
            family seeking adventure, Explore Kolkata is here to make your
            journey extraordinary. Explore with us and join us on a journey
            where every moment becomes a cherished memory.
          </p>
        </div>
      </section>

      <section className="team">
        <h2>Our Team</h2>
        <div className="team-member">
          <img
            src="https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/337039708_162933396649002_2934627341834798876_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=wg_LD1Z1tDgAX8biSrs&_nc_ht=scontent.fccu31-1.fna&oh=00_AfBKauHLmVXYu61Pf93P1jqSkRJUpn0adEFuTSB_toQNLA&oe=65B9FC89"
            alt="Team Member 1"
          />
          <h3>Abir Ghosh</h3>
          <p>Developer</p>
        </div>
        <div className="team-member">
          <img
            src="https://scontent.fccu31-2.fna.fbcdn.net/v/t39.30808-6/322585168_495107269314660_1833006833353478753_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=SDrQLksqh-EAX_JxOIK&_nc_ht=scontent.fccu31-2.fna&oh=00_AfAVXIdPu3Fmpp0UWUS_cEX0bZtJBbGBIvBq4V26wKoz8w&oe=65B9FB53"
            alt="Team Member 2"
          />
          <h3>Debanjan Das</h3>
          <p>Developer</p>
        </div>
        <div className="team-member">
          <img
            src="https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/421475788_836841528215787_8529025520121584154_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=klc0x4xOQUsAX8Jj5Xn&_nc_ht=scontent.fccu5-1.fna&oh=00_AfAIt8N9dkTGo-_6MEq9C2HThlPxFxfRdKav_ZcrcdaaGA&oe=65B9570B"
            alt="Team Member 3"
          />
          <h3>Shreetama Das</h3>
          <p>Developer</p>
        </div>
        <div className="team-member">
          <img
            src="https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/412586028_691200766529868_9182025903490128863_n.jpg?stp=dst-jpg_p720x720&_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=SUHGI3QC9awAX_zn_kD&_nc_ht=scontent.fccu5-1.fna&oh=00_AfBo8JGZbbXkGHg3pu5GYQOetfyRKufk1Mim1-tCYC1WnQ&oe=65B9C172"
            alt="Team Member 4"
          />
          <h3>Soumi Bhadra</h3>
          <p>Developer</p>
        </div>
        <div className="team-member">
          <img
            src="https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/393343135_901909144817636_4340427481791583198_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=oinrmM1J0wYAX-4gBU9&_nc_ht=scontent.fccu5-1.fna&oh=00_AfBRuS45Dt1Pdj_gVsrm7UaLFMn7vvdYTMlWbEFTe9AsWw&oe=65B84230"
            alt="Team Member 5"
          />
          <h3>Tanushka Chanda</h3>
          <p>Developer</p>
        </div>
        {/* Add more team members as needed */}
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          At EXPLORE KOLKATA , we are on a mission to celebrate the vibrant
          tapestry of Kolkata's rich culture, heritage, and experiences. Our
          goal is to be the premier guide for tourists, offering insightful
          recommendations, captivating stories, and personalized itineraries
          that showcase the City of Joy in all its glory. Through our passion
          for Kolkata, we aspire to create memorable journeys for travelers,
          fostering a deep appreciation for the city's history, art, cuisine,
          and warmth of its people. Join us as we embark on a mission to make
          every visit to Kolkata an unforgettable exploration of joy, discovery,
          and connection.
        </p>
      </section>

      <section className="values">
        <h2>Our Values</h2>
        <ul>
          <li>Quality</li>
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Customer-Centric</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or would like to get in touch, please don't
          hesitate to contact us.
        </p>
        {/* <a href="contact.html" className="cta-button">Contact Us</a> */}
        <section className="footer-social">
          <ul>
            <li>
              <a href="https://www.facebook.com/debanjan.das.10690203?mibextid=ZbWKwL">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/DEBANJANDA53702">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/debanjan_9935">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/debanjan-das-0b49a921b">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/debanjan1309">
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </section>
      </section>
      

      <footer>
        <section className="footer-content">
          <section className="footer-bottom">
            <p>&copy; 2024 Kolkata Tourism. All rights reserved.</p>
          </section>
        </section>
      </footer>
    </div>
  );
};

export default About;
