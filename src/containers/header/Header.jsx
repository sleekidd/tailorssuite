import React from 'react';
// import people from '../../assets/people.png';
// import ai from '../../assets/ai.png';
import customer from '../../assets/customer.png';
import starthere from '../../assets/starthere.svg';
import cart from '../../assets/shopping-cart.png';
// import tailor from '../../assets/tailor.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Making every occasion extra special.</h1>
      <p>No one ever again has the excuse of &rsquo;I can&rsquo;t find a good tailor&rsquo;</p>

      <div className="gpt3__header-content__buttons">
        <div className="gpt3__header-content__primary">
          <button type="button">Start as Customer &rsaquo;</button>
        </div>
        <div className="gpt3__header-content__secondary">
          {/* <input type="email" placeholder="Your Email Address" /> */}
          <button type="button">Join as Tailor<span>Its Free!</span></button>
        </div>
      </div>

      {/* <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Start as Customer</button>
        <button type="button" className="gpt3__header-content__button">Join as Tailor</button>
      </div> */}

      <div className="gpt3__header-content__people">
        <img src={cart} />
        <p>You can also join as Vendor to sell</p>
      </div>

      <div className="gpt3__header-content__starthere">
        <img src={starthere} />
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={customer} />
    </div>
  </div>
);

export default Header;
