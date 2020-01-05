import React, { Component } from 'react';
import './Showdetail.scss'

export class ShowMovieDetails extends Component {

    // addingThisToCart = (e) => {
    //     this.props.addToCart(e)
    // }

    render(){
        console.log(this.props.singleMovie)
        return (
            <div>
                {/* <p>{this.props.singleMovie.id}</p> */}
               
                        {/* <iframe src='https://www.youtube.com/embed/HjZ6O-g48hE?rel=0&autoplay=1'
                        frameBorder='0'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                        width='690'
                        height='300'/>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/2cv2ueYnKjg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        
                        */}
                <div className="movie-card">
  
                <div className="container">
                    
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_cover.jpg" alt="cover" className="cover" />
                    <img src={this.props.singleMovie.poster_img} alt={this.props.singleMovie.title} className="cover" />

                        
                    <div className="hero" style={{transformOrigin: '0 0'}}>
                        {<iframe src={this.props.singleMovie.video + '?rel=0&autoplay=1'}
                        frameBorder='0'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                        width='750'
                        height='342'/>}
                        
        
                            
                    <div className="details">
                    
                    <div className="title1">{this.props.singleMovie.title} <span>{this.props.singleMovie.rating}</span></div>

                    <div className="title2">{this.props.singleMovie.released}</div>    
                        
                        {/* <fieldset className="rating">
                            <input type="radio" id="star5" name="rating" value="5" /><label className = "full" for="star5" title="Awesome - 5 stars"></label>
                            <input type="radio" id="star4half" name="rating" value="4 and a half" /><label className="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                            <input type="radio" id="star4" name="rating" value="4" checked /><label className = "full" for="star4" title="Pretty good - 4 stars"></label>
                            <input type="radio" id="star3half" name="rating" value="3 and a half" /><label className="half" for="star3half" title="Meh - 3.5 stars"></label>
                            <input type="radio" id="star3" name="rating" value="3" /><label className = "full" for="star3" title="Meh - 3 stars"></label>
                            <input type="radio" id="star2half" name="rating" value="2 and a half" /><label className="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                            <input type="radio" id="star2" name="rating" value="2" /><label className = "full" for="star2" title="Kinda bad - 2 stars"></label>
                            <input type="radio" id="star1half" name="rating" value="1 and a half" /><label className="half" for="star1half" title="Meh - 1.5 stars"></label>
                            <input type="radio" id="star1" name="rating" value="1" /><label className = "full" for="star1" title="Sucks big time - 1 star"></label>
                            <input type="radio" id="starhalf" name="rating" value="half" /><label className="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                        </fieldset> */}
                        
                        <span className="likes">{this.props.singleMovie.imdb_votes} likes</span>
                        
                    </div> {/*<!-- end details -->*/}
                    
                    </div> {/*<!-- end hero --> */}
                    
                    <div className="description">
                    
                    <div className="column1">
                    <span className="tag">Released: {this.props.singleMovie.released}</span>
                    <br/>
                    <span className="tag">Box office: {this.props.singleMovie.box_office}</span>
                    <br/>
                        {/* <span className="tag">Production: {this.props.singleMovie.production}</span> */}
                    <span className="tag">IMDB: {this.props.singleMovie.imdb_rating}</span>
                        <br/>
                    <span className="tag">Votes: {this.props.singleMovie.imdb_votes}</span>
                        <br/>
                    {/* <span className="tag">{this.props.singleMovie.awards}</span> */}
                        {/* <span className="tag">adventure</span> */}
                    </div> {/*<!-- end column1 --> */}
                    
                    <div className="column2">
                        
                        <p>{this.props.singleMovie.plot}</p>
                        {/* <p>{this.props.singleMovie.awards}</p> */}
                        <p>{this.props.singleMovie.writer}</p>
                        
                        <div className="avatars">

                            <p>Staring: {this.props.singleMovie.actor}</p>

                            {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar1.png" alt="avatar1" />
                        
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar2.png" alt="avatar2" />
                        
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar3.png" alt="avatar3" /> */}
                        
                         </div> {/*<!-- end avatars --> */}

                            {/* the bottom is the cool circle buttons! */}
                         {/* <div className="" style={{text: 'center', marginTop: '5%'}}>
                            <button className="icon-btn add-btn">
                            <div className="add-icon"></div>
                            <div className="btn-txt">Add to Cart</div>
                        </button>
                        </div> */}
                        {/* <div class="" style={{text: 'center', marginTop: '8px'}}>
                        <button class="icon-btn add-btn">  
                            <div class="btn-txt">Remove</div>
                        </button>
                        </div> */}
                        
                        
                     </div> {/*<!-- end column2 --> */}
                     </div> {/*<!-- end description --> */}


                    
                
                 </div> {/*<!-- end container --> */}

                 </div> {/*<!-- end movie-card --> */}


                <center>
                    <button onClick={() => this.props.goBack()} className="glow-on-hover" type="button">Go Back to All Movies</button>&nbsp;&nbsp;
                    {/* <button>Go Back to All Movies</button> */}
                    <button id={this.props.singleMovie.id} onClick={()=> this.props.addToCart(this.props.singleMovie)} className="glow-on-hover" type="button">Buy Movie</button>

                </center>
            </div>
        );
    }
}

export default ShowMovieDetails;
