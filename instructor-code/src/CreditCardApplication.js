import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CreditCardApplication extends Component {
  render() {
    const { loggedInAs, isCreditCardHolder, setIsCreditCardHolder } = this.props;

    return (
      <div className="credit-card-application">
        {!loggedInAs && "Must log in first"}
        {loggedInAs && <div>
          {!isCreditCardHolder && <div>
            <p>Hi {loggedInAs}, apply now!</p>
            <p><button className="button" onClick={() => setIsCreditCardHolder(true)}>Yes, sign me up!</button></p>
          </div>}
          {isCreditCardHolder && "Thanks for signing up!"}
        </div>}
      </div>
    )
  }
};

CreditCardApplication.propTypes = {
  loggedInAs: PropTypes.string,
  isCreditCardHolder: PropTypes.bool,
  setIsCreditCardHolder: PropTypes.func.isRequired,
}