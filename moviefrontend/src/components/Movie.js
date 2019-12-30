import React from 'react';
import './Movie.scss'

const Movie = (props) => {
    const image = props.movie.poster_img

    return (
        <div id={props.keys} className="ui column">
                <div className="movie_card" id="bright"onClick={ () => props.showInfoOnMovie(props.movie)}>
                <div className="info_section">
                    <div className="movie_header">
                    <img className="locandina" src={props.movie.poster_img} alt={props.movie.title}/>
                    <h3>{props.movie.title}</h3>
                    {/* <h4>{props.movie.released}</h4> props.movie.imdb_votes */}
                    <span className="minutes">{props.movie.runtime}</span>
                    {/* <p className="type">{props.movie.genre}</p> */}
                    </div>
                    <div className="movie_desc">
                    <p className="text">{props.movie.plot}</p>
                    </div>
                    <div className="movie_social">
                    {/* <ul>
                        <li><i className="material-icons">share</i></li>
                        <li><i className="material-icons"></i></li>
                        <li><i className="material-icons">chat_bubble</i></li>
                    </ul> */}
                    </div>
                </div>
                    <div className="blur_back bright_back" style={{backgroundImage: `url(${image})` }}>
                    </div>
                </div>
            </div>
    );
}

export default Movie;
