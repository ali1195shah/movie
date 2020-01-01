import React from 'react'
// import { NavLink } from 'react-router-dom'

class LoginForm extends React.Component {

  state = {
    logIn: true,
    name: "",
    username: "",
    password: "",
    ccNumber: "",
    cvcNumber: "",
    errors: [],
    userid: null,
    cart: []
  }

  assigingUserId = () => {
    const id = this.props.loggedInUserId
    this.setState({
      userid: id
    })
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  onSubmitFunctions = (event) => {
    event.preventDefault()
    // console.log(event)
    this.logInSubmitted(event)
  }
    onClickFunctionsSignUp = (event) => {
        event.preventDefault()
        this.props.history.push('/signup')
    }

    logInSubmitted = (event) => {
      event.preventDefault()
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      })
      .then(response => response.json())
      .then(res_obj => {
        
        console.log(res_obj)
        if (res_obj.errors) {
          
        } else {
          this.props.setToken(res_obj)
          // this.props.getUser(res_obj)
          this.props.history.push('/movies')
        }
      })
    }

    signUpSubmitted = (e) => {
      // console.log(e.target['sign_up_password'].value)
      e.preventDefault();
      fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json'
        },
        body: JSON.stringify({
          name: e.target['sign_up_name'].value,
          username: e.target['sign_up_username'].value,
          password: e.target['sign_up_password'].value,
          cc_number: e.target['sign_up_ccNumber'].value,
          cc_s_code: e.target['sign_up_cvcNumber'].value
        })
      })
      .then(r => r.json())
      .then(data => {
        console.log(data)
        if (data.errors) {
          this.setState({
            errors: data.errors
          })
        } else {
          // fetch(`http://localhost:3000/carts`, {
          //   method: 'POST',
          //   headers: {
          //     'Content-Type': 'Application/json'
          //   },
          //   body: JSON.stringify({
          //     user_id: this.state.userid,
          //     checkout: false
          //   })
          // })
          // .then(r => r.json())
          // .then(data => {
          //   if (data.errors) {
          //     this.setState({
          //       errors: data.errors
          //     })
          //   } else {
              this.props.setToken(data)
              this.props.history.push('/movies')
            // }
          // })
          // this.props.history.push('/movies')
        }
      })
    }

  hangleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted the login form');
  }


  logInSubmitted = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then(response => response.json())
    .then(res_obj => {
      
      console.log(res_obj)
      if (res_obj.errors) {
        
      } else {
        this.props.setToken(res_obj)
        this.props.history.push('/movies')
      }
    })
  }

  render(){
    return <div style={{textAlign: "Center", marginTop:"10%", fontFamily: "Courier New, Monospace", fontWeight: "100", color: "white"}}>
      <ul>
        {
          this.state.errors.map(error => <li>{ error }</li>)
        }
      </ul>
      {
        this.state.logIn 
        ? 
        <section>
          <h2 >Log In</h2>
          <button style={{fontSize: "18px", borderBottom: "solid", borderWidth: "1px", borderColor: "#929ca7", margin: "20px"}} onClick={ () => this.setState({ logIn: false }) }>Switch to Sign Up</button>
          <br></br>
          <form onSubmit={ this.logInSubmitted }>
            <br></br>
            <label  htmlFor="log_in_username">Username</label>
            <br></br>
            <input  id="log_in_username" 
                    type="text" 
                    onChange={ this.onChange /* for controlled form input status */ } 
                    name="username" 
                    value={ this.state.username /* for controlled form input status */ } />
                    <br></br>
                    <br></br>
            <label  htmlFor="log_in_password">Password</label>
            <br></br>
            <input  id="log_in_password" 
                    type="password" 
                    onChange={ this.onChange } 
                    name="password" 
                    value={ this.state.password } />
                    <br></br><br></br>
            <input type="submit" />
          </form>
        </section>
        :
        <section>
          <h2>Sign Up</h2>
          <button style={{fontSize: "18px", borderBottom: "solid", borderWidth: "1px", borderColor: "#929ca7", margin: "20px"}} onClick={ () => this.setState({ logIn: true }) }>Switch to Log In</button>
          <br></br>
          <form onSubmit={ this.signUpSubmitted }>
          <br></br>
          <label  htmlFor="sign_up_name">Name</label>
            <br></br>
            <input  id="sign_up_name" 
                    type="text" 
                    onChange={ this.onChange } 
                    name="name" 
                    value={ this.state.name } />
                    <br></br><br></br>
            <label  htmlFor="sign_up_username">Username</label>
            <br></br>
            <input  id="sign_up_username" 
                    type="text" 
                    onChange={ this.onChange } 
                    name="username" 
                    value={ this.state.username } />
                    <br></br><br></br>
            <label  htmlFor="sign_up_password">Password</label>
            <br></br>
            <input  id="sign_up_password" 
                    type="password" 
                    onChange={ this.onChange } 
                    name="password" 
                    value={ this.state.password } />
                    <br></br><br></br>
                    <label  htmlFor="sign_up_ccNumber">Credit Card Number</label>
            <br></br>
            <input  id="sign_up_ccNumber" 
                    type="text" 
                    onChange={ this.onChange } 
                    name="ccNumber" 
                    value={ this.state.ccNumber } />
                    <br></br><br></br>
                    <label  htmlFor="sign_up_name">CVC Number</label>
            <br></br>
            <input  id="sign_up_cvcNumber" 
                    type="text" 
                    onChange={ this.onChange } 
                    name="cvcNumber" 
                    value={ this.state.cvcNumber } />
                    <br></br><br></br>
            <input type="submit" />
          </form>
        </section>
      }
    </div>
  }
}
export default LoginForm

