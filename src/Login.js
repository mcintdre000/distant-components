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
    const { loggedInAs, isCreditCardHolder, login } = this.props;
    //destructure dispatch in used for onClick
    return (
      <div className="login">
        {!loggedInAs && <div>
          Log in as <input onChange={(e) => this.updateLoginName(e.target.value)} /> 
          <button 
            className="button" 
            // onClick={() => dispatch(login(this.state.loginName))}
            onClick={() => login(this.state.loginName)}
            >Go</button>
        </div>}
        {loggedInAs && <div>
          Welcome, {loggedInAs}! {isCreditCardHolder && "(CC holder)"}
        </div>}
      </div>
    )
  }
};

const mapStateToProps = storeData => {
  return{
    loggedInAs: storeData.loggedInAs,
    isCreditCardHolder: storeData.isCreditCardHolder
  };
};

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
