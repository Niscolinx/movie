import React, { Component } from 'react'

class Movies extends Component {
  clickHandler = () =>{
    const url = 'https://www.themoviedb.org/movie/' + this.props.movies.id
    window.location.href = url
  }
  
    render(){
      return(
        <div>
        <div className='movie-overlay'>
            <img
              width={150}
              height={150}
              className="mr-3"
              src = {this.props.src}
              alt="Generic placeholder"
            />
            <div className = 'movie-overlay__box'>
              <h4 className = 'movie__overlay__title'>{this.props.movies.title}</h4>
              <p>{this.props.movies.overview}</p>
              </div>
          </div>
      </div>
      )
    }
}
export default Movies