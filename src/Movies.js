import React, { Component } from 'react'

class Movies extends Component {
  clickHandler = () =>{
    const url = 'https://www.themoviedb.org/movie/' + this.props.movies.id
    window.location.href = url
  }
    render(){
        return(
    <div>
     <table key={this.props.movies.id}>
        <tbody>
          <tr>
            <td>
              <img src = {this.props.src} alt='The movie' width = ''/>
            </td>
            <td>
              <h4>{this.props.movies.title}</h4>
              <br/>
              <p>{this.props.movies.overview}</p>
              <br/>
              <input type='button' value='view' onClick = {this.clickHandler.bind(this)}/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
        )
    }
}
export default Movies