import React, { Component } from 'react';
import './UserSetting.scss'

export class UserSettingPage extends Component {

    state = {
        newUserName: "",
        newPassword: ""
    }

    handleChangeUsername = (e) => {
        console.log(e.target.value);
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
      Change Username and Password
    </h1>
  </div>
  <div className='control block-cube block-input'>
    <input onChange={ this.handleChangeUsername } name='username' placeholder='Username' type='text' />
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
  <div className='control block-cube block-input'>
    <input name='password' placeholder='Password' type='password' />
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
  <button className='btn block-cube block-cube-hover' type='button'>
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
</form>

    </div>
        );
    }
}

export default UserSettingPage;
