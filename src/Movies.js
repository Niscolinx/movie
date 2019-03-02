import React, { Component } from 'react'
import {Media} from 'react-bootstrap'

class Movies extends Component {
  clickHandler = () =>{
    const url = 'https://www.themoviedb.org/movie/' + this.props.movies.id
    window.location.href = url
  }
  
    render(){
      return(
        <div>
        <Media className='movie__items'>
            <img
              width={150}
              height={150}
              className="mr-3"
              src = {this.props.src}
              alt="Generic placeholder"
            />
            <Media.Body>
            <h4>{this.props.movies.title}</h4>
            <p>{this.props.movies.overview}</p>
            </Media.Body>
          </Media>;
      </div>
      )
    }
}
export default Movies