import React, { Component } from 'react';
import UserCartDisplay from './UsersCartDisplay'

export class CartMap extends Component {

    state = {
        moviesThatTheUserHas: []
    }

    componentDidMount(){
        // console.log("hello")
        fetch(`http://localhost:3000/users/${this.props.user}`)
        .then(r => r.json())
        .then(res => {
            console.log(res.transactions)
            this.setState({
                moviesThatTheUserHas: res.transactions
            })
        //   const arr = res.filter(movie =>  { 
        //    return movie.user.id  === parseInt(this.props.user)
        //   })
        //   this.props.moviesThatTheUserHas(arr)
        // })
      })
    }
    
    render() {
        const moviesThatTheUserHas = this.state.moviesThatTheUserHas.map(item => <UserCartDisplay item={item} key={item.id}/>)
        return (
            <div>
                {moviesThatTheUserHas}
                <div>
                    {/* <button onClick={() => this.props.placeOrder()} className="glow-on-hover" type="button">Place Order</button> */}
                    <button onClick={() => this.props.remove()} className="glow-on-hover" type="button">Place Order</button>
                </div>
            </div>
        );
    }
}

export default CartMap;
