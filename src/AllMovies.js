import React, { Component } from "react"

class AllMovies extends Component {

    render(){
        return(
          <div>
            <div className='movie__items'>
              <img
                width={185}
                height={185}
                className="mr-3"
                src = {this.props.src}
                alt="Generic placeholder"
              />
              <div className = 'movie-box'>
              <h4 className = 'movie__title'>{this.props.movies.title}</h4>
              </div>
            </div>
        </div>
        )
      }
  }
  export default AllMovies
