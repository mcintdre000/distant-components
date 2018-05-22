import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from './redux-stuff/reducer';

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
    const { loggedInAs, isCCHolder, myLoginWithDispatch } = this.props;

    return (
      <div className="login">
        {!loggedInAs && <div>
          Log in as <input onChange={(e) => this.updateLoginName(e.target.value)} />
          <button
            className="button"
            onClick={() => myLoginWithDispatch(this.state.loginName)}
          >Go</button>
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

const mapDispatchToProps = {
  myLoginWithDispatch: login,
};

// We can connect our component in 3 lines like this...
// const connector = connect(mapStateToProps); // returns a function
// const ConnectedLogin = connector(Login);
// export default ConnectedLogin;

// ... or 1 line like this:
export default connect(mapStateToProps, mapDispatchToProps)(Login);