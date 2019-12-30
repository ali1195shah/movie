import React from 'react';
import './UsersCartDisplay.scss'

const UsersCartDisplay = (props) => {
    const image = props.item.poster_img
    console.log(props.item.flim.flim)
    return (
        <div id={props.item.flim.id}>
                <div className="cart_movie_card" id="bright">
                <div className="cart_info_section">
                    <div className="cart_movie_header">
                    <img className="cart_locandina" src={props.item.flim.poster_img} alt={props.item.flim.title}/>
                    <h3>{props.item.flim.title}</h3>
                    <h4>{props.item.flim.year}, {props.item.flim.director}</h4>
                    <span className="cart_minutes">{props.item.flim.runtime}</span>
                    <p className="cart_type">{props.item.flim.genre}</p>
                    <br/>
                    </div>
                    <div className="cart_movie_desc">
                    <p className="cart_text">{props.item.flim.plot}</p>
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
                    {/* <img alt={props.item.flim.title} src={props.item.poster_img} style={{width: '70%', height: '350px'}}/> */}
                </div>
                </div>
            </div>
    );
}

export default UsersCartDisplay;
