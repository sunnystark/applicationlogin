import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
const Welcome = ({ user, onSignOut}) => {
  return (
    <div>
    Welcome <strong>{user.username}</strong>!
    <a href="javascript:;" onClick={onSignOut}>Sign Out </a>
    </div>
  )
}
class LoginForm extends Component {

  handleSignIn = (e) => {
   e.preventDefault();
   let username = this.refs.username.value
   let password = this.refs.password.value
   this.props.onSignIn(username, password)
  }
  render() {
    const style = {
       color:'white'
    }

    return (
      <div>
      <div class="container">
  <form onSubmit={this.handleSignIn}>
    <div class="row">
      <h2 style={{color:'gray', textAlign:"center",}}>Login with Social Media or Manually</h2>
      <div class="vl">
        <span class="vl-innertext">or</span>
      </div>

      <div class="col">
        <a href="#" class="fb btn">
          <i class="fa fa-facebook fa-fw"></i> Login with Facebook
         </a>
        <a href="#" class="twitter btn">
          <i class="fa fa-twitter fa-fw"></i> Login with Twitter
        </a>
        <a href="#" class="google btn"><i class="fa fa-google fa-fw">
          </i> Login with Google+
        </a>
      </div>

      <div class="col">
        <div class="hide-md-lg">
          <p>Or sign in manually:</p>
        </div>

        <input type="text" ref="username" placeholder="Username" required/>
        <input type="password" ref="password" placeholder="Password" required/>
        <input type="submit" value="Login"/>
      </div>

      
    </div>
  </form>
</div>
<div class="bottom-container">
  <div class="row">
    <div class="col">
      <a href="#" style={style} class="btn">Sign up</a>
    </div>
    <div class="col">
      <a href="#" style={style} class="btn">Forgot password?</a>
    </div>
  </div>
</div>
  </div>
       
    );
  }
}

class App extends React.Component{
  constructor(props){
    super(props)
    // initial applicatio state 
    this.state ={
      user: null
    }
  }
//action function to modifi state
signIn(username,password){
  // this is wher you can call firebase any api 
  // callign applition it will re-render you entire applicatio
  this.setState({
  user:{
    username,
    password,
  }
})
}
signOut(){
  this.setState({
    user:null
  })
}
render(){
  return (
    <div>
    <h1> login application </h1>
    {
      (this.state.user) ? 
      <Welcome 
      user={this.state.user}
      onSignOut={this.signOut.bind(this)} />
     : <LoginForm onSignIn={this.signIn.bind(this)}/>
    }
    </div>
  )
}

}

render(<App />, document.getElementById('root'));

