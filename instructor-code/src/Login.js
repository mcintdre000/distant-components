import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginName: ''
    };

    this.updateLoginName = this.updateLoginName.bind(this);
  }

  updateLoginName(name) {
    this.setState({ loginName: name })
  }

  render() {
    const { loggedInAs, isCCHolder, setLoggedInAs } = this.props;

    return (
      <div className="login">
        {!loggedInAs && <div>
          Log in as <input onChange={(e) => this.updateLoginName(e.target.value)} /> <button className="button" onClick={() => setLoggedInAs(this.state.loginName)}>Go</button>
        </div>}
        {loggedInAs && <div>
          Welcome, {loggedInAs}! {isCCHolder && "(CC holder)"}
        </div>}
      </div>
    )
  }
};

const mapStateToProps = storeData => {
  return {
    loggedInAs: storeData.loggedInAs,
    isCCHolder: storeData.isCreditCardHolder,
  };
};

const connector = connect(mapStateToProps);
const ConnectedLogin = connector(Login);
export default ConnectedLogin;