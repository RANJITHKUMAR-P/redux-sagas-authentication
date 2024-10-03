import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login} from '~/src/actions/Login';

class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const {loginState, login, title} = this.props;

    return (
      <div id="login-form">
        <div className="card">
          {
            loginState.isFetching ? (
              <p className="processing">Processing...</p>
            ) : (
              <div>
                <p className="title">{title}</p>
                <form className="form">
                  <input className="input email"
                         type="email"
                         value={this.state.email}
                         onChange={(event) => this.setState({email: event.target.value})}
                         placeholder="user@example.com"/>
                  <input className="input pwd"
                         type="password"
                         value={this.state.password}
                         onChange={(event) => this.setState({password: event.target.value})}
                         placeholder="password"/>
                </form>
                {
                  loginState.error && <p className="error-message">{loginState.error.message}</p>
                }
                <button className="btn"
                        onClick={() => {
                          login(this.state.email, this.state.password);
                          this.setState({password: ''});
                        }}>Login
                </button>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loginState: state.login
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    login
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);