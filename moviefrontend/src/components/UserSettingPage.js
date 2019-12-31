import React, { Component } from 'react';
import './UserSetting.scss'
import {Button, ButtonToolbar} from 'react-bootstrap'
import ModalComponent from './ModalComponent'

export class UserSettingPage extends Component {

    state = {
        newUserName: "",
        newPassword: "",
        addModalShow: false
    }

    addModalClose = () => {
      this.setState({
        addModalShow: false
      })
    }

    handleChangeUsername = (e) => {
        console.log(e.target.value)
        this.setState({
          newUserName: e.target.value
        })
    }

    handleChangePassword = (e) => {
      console.log(e.target.value)
      this.setState({
        newPassword: e.target.value
      })
    }

    handleUpdatedThings = () => {
      fetch(`http://localhost:3000/users/${this.props.userSettingInfo.id}`, {
        method: 'PATCH',
        headers: ({
          'Content-Type': 'Application/json'
        }),
        body: JSON.stringify({
          username: this.state.newUserName,
          password: this.state.newPassword
        })
      })
      .then(res => res.json())
      this.setState({
        addModalShow: true
      })
    }

    render() {
        
        return (
    //         <div>
    //             <p>{ this.props.userSettingInfo.username }</p>
                
    //             <form>
    //      <label style={{margin: "20px"}}>Password:</label>      
    //     <input
    //       type="password"
    //       value='password'
    //     //   onChange={this.onChange}
    //       name="password"
    //       autoComplete="new-password"
    //     />
    //     <input type="submit" style={{fontSize: "18px", border: "solid", borderWidth: "1px", borderColor: "#929ca7", margin: "20px", padding: "5px"}} />
    //   </form>
    //         </div>

    <div>
        <form className='form' >
  <div className='control'>
    <h1>
      Change Username
    </h1>
  </div>
  <div className='control block-cube block-input'>
    <input onChange={ this.handleChangeUsername } name='username' placeholder='Enter new Username' type='text' />
    <div className='bg-top'>
      <div className='bg-inner'></div>
    </div>
    <div className='bg-right'>
      <div className='bg-inner'></div>
    </div>
    <div className='bg'>
      <div className='bg-inner'></div>
    </div>
  </div>

  <h1>
      Change Password
    </h1>
    <br />
  <div className='control block-cube block-input'>
    <input onChange={ this.handleChangePassword } name='password' placeholder='Enter new Password' type='password' />
    <div className='bg-top'>
      <div className='bg-inner'></div>
    </div>
    <div className='bg-right'>
      <div className='bg-inner'></div>
    </div>
    <div className='bg'>
      <div className='bg-inner'></div>
    </div>
  </div>

  <ButtonToolbar>

  <button onClick={this.handleUpdatedThings} className='btn block-cube block-cube-hover' type='button' >
    <div className='bg-top'>
      <div className='bg-inner'></div>
    </div>
    <div className='bg-right'>
      <div className='bg-inner'></div>
    </div>
    <div className='bg'>
      <div className='bg-inner'></div>
    </div>
    <div className='text'>
      Save
    </div>
  </button>
  <ModalComponent 
        show={this.state.addModalShow}
        onHide={this.addModalClose}/>
      </ButtonToolbar>
</form>
</div>
        );
    }
}

export default UserSettingPage;
