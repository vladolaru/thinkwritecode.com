import React from 'react';

import './Signup.css';

class Signup extends React.Component {
  render() {
    return (
      <form
        className="formkit-form validate"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        action="https://thinkwritecode.us3.list-manage.com/subscribe/post?u=7f0fbbd4b421fd3424aa85beb&amp;id=d202bf397d"
        method="post"
        target="_blank"
      >
        <div data-style="full">
          <div
            data-element="column"
            className="formkit-column"
            style={{ backgroundColor: 'rgb(249, 250, 251)' }}
          >
            <h1
              className="formkit-header"
              data-element="header"
              style={{
                color: 'rgb(77, 77, 77)',
                fontSize: '20px',
                fontWeight: 700,
              }}
            >
              Join my little newsletter
            </h1>
            <div
              data-element="subheader"
              className="formkit-subheader"
              style={{ color: 'rgb(104, 104, 104)' }}
            >
              <p>
                Subscribe to get wind of what I've been thinking.
              </p>
            </div>
            <div data-element="fields" className="seva-fields formkit-fields">
              <div className="formkit-field">
                <input
                  className="formkit-input"
                  name="EMAIL"
                  id="mce-EMAIL"
                  aria-label="Your email address"
                  placeholder="Your email address"
                  required={true}
                  type="email"
                  style={{
                    borderColor: 'rgb(227, 227, 227)',
                    borderRadius: '4px',
                    color: 'rgb(0, 0, 0)',
                    fontWeight: 400,
                  }}
                />
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '-5000px'
                }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_7f0fbbd4b421fd3424aa85beb_d202bf397d"
                  tabIndex="-1"
                  value=""
                />
              </div>
              <button
                type="submit"
                className="formkit-submit formkit-submit"
                id="mc-embedded-subscribe"
                name="subscribe"
                style={{
                  backgroundColor: 'hsl(23.3, 99%, 65%)',
                  borderRadius: '24px',
                  color: 'white',
                  fontWeight: 700,
                }}
              >
                <span>Subscribe</span>
              </button>
            </div>
            <div
              data-element="guarantee"
              className="formkit-guarantee"
              style={{
                color: 'rgb(77, 77, 77)',
                fontSize: '13px',
                fontWeight: 400,
              }}
            >
              <p>Spam is definitely <em>not</em> on the menu, and you can unsubscribe at <em>any</em> time. Just common sense.</p>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Signup;
