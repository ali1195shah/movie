import React, { Component } from 'react';
import Movie from './Movie'

export class AllMovieDisplay extends Component {
    render() {
        const allMovies = this.props.userInput.map(movie => <Movie movie={movie} key={movie.id} showInfoOnMovie={this.props.showInfoOnMovie}/>)
        return (

            <div className="ui three column grid">
                { allMovies }
            </div>
        );
    }
}

export default AllMovieDisplay;


// className="ui two column grid"