import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllMovieDisplay from './components/AllMovieDisplay';
import { Route, Switch, Redirect } from 'react-router-dom'
import ShowMovieDetails from './components/ShowMovieDetails';
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm' 
import CartMap from './components/CartMap'
import UserSettingPage from './components/UserSettingPage'

export class App extends Component {
  
  state = {
    movies: [],
    singleMovie: null,
    isPresent: [],
    token: localStorage.token,
    loggedInUserId: localStorage.userId,
    cart: [],
    searchedMovie: [],
    movieUserOwn: [],
    userInfo: []
    
  }

  searchMovie = (e) => {
    e.preventDefault();
    this.setState({
      searchedMovie: this.state.movies.filter(movie => movie.title.toLowerCase().includes(e.target.value.toLowerCase()))
    })
  }

  showInfoOnMovie = (movie) => {
    this.setState({
      isPresent: movie,
      singleMovie: movie
    })
  }

  goBack = () => {
    this.setState({
      singleMovie: null,
      isPresent: null
    })
  }

  componentDidMount = async() => {
    let allMovies = await fetch('http://localhost:3000/flims')
    let movies = await allMovies.json()
      this.setState({
        movies,
        searchedMovie: movies
    })
  }



  setToken = ({ token, user_id })  =>{
    localStorage.token = token
    localStorage.setItem("token", token)
    localStorage.userId = user_id
    this.setState({
      token: token,
      loggedInUserId: user_id
    })
  }

  addToCart = (e) => {
    console.log(e)

    // fetch(`http://localhost:3000/flims/${e.target.id}`)
    // .then(r => r.json())
    // .then(data => {
    //   this.setState({
    //     cart: [...this.state.cart, data]
    //   })


    

      fetch(`http://localhost:3000/transactions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json'
        },
        body: JSON.stringify({
          flim_id: e.id,
          user_id: this.state.loggedInUserId
        })
      })
      .then(r => r.json())
      .then(data => {
        console.log(data)
      })

  }

  placeOrder = () => {
    console.log('clicked!');
  }

  removeFromCart = (e) => {
    e.preventDefault();
    console.log(e);
  }

  signout = () => {
    localStorage.clear()
    this.setState({
      loggedInUserId: null,
      token: null
    })
  }

  moviesThatTheUserHas = (arr) => {
    this.setState({
      movieUserOwn: arr
    })
  }

  userSetting = () => {
    fetch(`http://localhost:3000/users/${this.state.loggedInUserId}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        userInfo: data
      })
    })
  }

  
  render() {
    console.log(this.state.movieUserOwn) 
    return (
    <div>
        {this.state.singleMovie ? <Redirect to="/movie-details" /> : <Redirect to="/movies" />}
        <Navbar goBack={ this.goBack } cart={ this.state.cart } signout={ this.signout } token={this.state.token} searchMovie={ this.searchMovie } userSetting={ this.userSetting }/>
        <Switch>
          <Route exact path={'/login'} render={(props) => <LoginForm {...props} setToken={ this.setToken } />} />
          <Route exact path={'/movies'} render={(props) => <AllMovieDisplay {...props} allMovies={this.state.movies} showInfoOnMovie={this.showInfoOnMovie} userInput={this.state.searchedMovie} />} />
          <Route exact path={'/movie-details'} render={(props) => <ShowMovieDetails {...props} showInfoOnMovie={this.showInfoOnMovie} singleMovie={this.state.isPresent} goBack={this.goBack} addToCart={ this.addToCart } />}/>
          <Route exact path={'/past-orders'} render={(...props)=> <CartMap {...props} cart={ this.state.cart } placeOrder={ this.placeOrder } remove={ this.removeFromCart } user={ this.state.loggedInUserId } moviesThatTheUserHas={ this.moviesThatTheUserHas }/>}/>
          <Route exact path={'/edit-profile'} render={(...props)=> <UserSettingPage {...props} userSettingInfo={ this.state.userInfo } />} />
        </Switch>
        {this.state.token ? null : <Redirect to='/login' />}

      </div>











//         // <div className=" App">
//         <>
//         <Navbar />
//           <Switch>
//             {/* <Route exact path={'/'}>
//               <AllMovieDisplay allMovies={this.state.movies} showInfoOnMovie={this.showInfoOnMovie}/> 
//             </Route>  */}
// <Route exact path={'/'} render={(props) => <showInfoOnMovie></Route>
// {/* <Route exact path={'/'} render={(props) => <LoginForm {...props} setToken={this.setToken} loggedInUserId={ this.loggedInUserId }/>} / */}


//             <Route exact path={'/movie-details'}>
//               <ShowMovieDetails showInfoOnMovie={this.showInfoOnMovie} singleMovie={this.state.isPresent} goBack={this.goBack} />
//             </Route>
//           </Switch>
//           {/* {this.state.singleMovie ? <Redirect to="/movie-details" /> : <Redirect to="/movies" />} */}
//           </showInfoOnMovie>
//       // </div>

    );
  }
}

export default App;
