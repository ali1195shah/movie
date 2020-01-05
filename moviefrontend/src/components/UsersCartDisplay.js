import React, { Component } from 'react';
import './UsersCartDisplay.scss'
import {Button, ButtonToolbar} from 'react-bootstrap'
import RickRoll from './RickRollModal'

export class UsersCartDisplay extends Component {


    state = {
        addModalShow: false
    }

    addModalClose = () => {
        this.setState({
          addModalShow: false
        })
      }

    render() {
        const image = this.props.item.flim.poster_img
        return (
            <div id={this.props.item.flim.id}>
                <div className="cart_movie_card" id="bright">
                <div className="cart_info_section">
                    <div className="cart_movie_header">
                    <img className="cart_locandina" src={this.props.item.flim.poster_img} alt={this.props.item.flim.title}/>
                    <h3>{this.props.item.flim.title}</h3>
                    <h4>{this.props.item.flim.year}, {this.props.item.flim.director}</h4>
                    <span className="cart_minutes">{this.props.item.flim.runtime}</span>
                    <p className="cart_type">{this.props.item.flim.genre}</p>
                    <br/>
                    </div>
                    <div className="cart_movie_desc">
                    <p className="cart_text">{this.props.item.flim.plot}</p>
                    </div>
                    <div className="cart_movie_social">
                    <ul>
                        <li><i className="cart_material-icons">share</i></li>
                        <li><i className="cart_material-icons"></i></li>
                        <li><i className="cart_material-icons">chat_bubble</i></li>
                    </ul>
                    </div>
                </div>
                <div className="blur_back bright_back" style={{backgroundImage: `url(${image})` }}>
                    {/* <img alt={this.props.item.flim.title} src={this.props.item.poster_img} style={{width: '70%', height: '350px'}}/> */}
                </div>
                
                </div>
                <ButtonToolbar>
                    <Button onClick={ () => this.setState({addModalShow: true})}>Watch Movie</Button>
                    <RickRoll 
                    show={this.state.addModalShow}
                    onHide={this.addModalClose}/>
                </ButtonToolbar>
                
            </div>
        );
    }
}


export default UsersCartDisplay;
