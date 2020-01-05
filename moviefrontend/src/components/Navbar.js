import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
// import { Button } from 'react-bootstrap';
import './Navbar.scss'


export class Navbar extends Component {

  handleClick = () => {
    this.props.signout(this.props.token)
  }

    render() {
      
        return (

          <div className="topnav">
          {this.props.token ? 
              <Link to='/movies'>
                <button onClick={() => this.props.goBack()} className="glow-on-hover" type="button">All Movies</button>
              </Link>
                : null }

              {this.props.token ? 
              <Link to='/past-orders'>
                <button className="glow-on-hover" type="button">Movies You Own</button>
                {/* <button className="glow-on-hover" type="button">Cart: { this.props.cart.length }</button> */}
              </Link>

              : null }

                {this.props.token ? 
                <Link to='/edit-profile'>
                <button onClick={ this.props.userSetting } className="glow-on-hover" type="button">Edit Profile</button>
                {/* <button className="glow-on-hover" type="button">Cart: { this.props.cart.length }</button> */}
                </Link>
               : null}
              
              {this.props.token ? 
              <Link to='/temp1'>
                <button onClick={this.handleClick} className="glow-on-hover" type="button">Sign Out</button>
                {/* <button className="glow-on-hover" type="button">Cart: { this.props.cart.length }</button> */}
              </Link>
              : null }

              {this.props.token ? 
              <div className="search__container">
                  <input onChange={(e) => this.props.searchMovie(e)} className="search__input" type="text" placeholder="Search" />
              </div>
                : null }
            </div>
        )
    }
}

export default Navbar;



