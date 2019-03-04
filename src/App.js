import React, { Component } from 'react'
import './App.scss'
import Movies from './Movies'
import axios from 'axios'
import { Carousel } from 'react-bootstrap';
import Trending from './Trending'

class App extends Component {
  state = {
    rows: '',
    error: false,
    movieDisplay: '',
    change: '',
  }

  inputChange = (e) =>{
    e.preventDefault();
    const searchField = this.state.change
    this.componentDidMount(searchField)

  }
  change = (e) => {
    const changedInp = e.target.value;
    this.setState({
      change: changedInp
    })
  }

  componentDidMount(search) {
    const api = 'https://api.themoviedb.org/3/search/movie?api_key=ea87ab0831b286e4e73751ae0b5b7a46&query='
    axios
    .get(api + search)
    .then(res => {
      const movies = res.data.results
      console.log(movies)
      const movie = movies.map(movies => {
        const src = 'https://image.tmdb.org/t/p/w200/' + movies.poster_path
        return <Movies 
          movies = {movies}
          key = {movies.id}
          src = {src}
          /> 
         });
         this.setState({
           rows: movie
          });
        })
      .catch(error => {
        console.log(error)
        this.setState({
          error:true
        })
      });
      this.Trending();
  }

  Trending(){
    axios
    .get('https://api.themoviedb.org/3/trending/all/day?api_key=ea87ab0831b286e4e73751ae0b5b7a46')
    .then(res => {
      const displaytem = res.data.results.slice(0,5)
      const display = displaytem.map(movies => {
        const src = 'https://image.tmdb.org/t/p/w200/' + movies.poster_path
        return <Trending 
          movies = {movies}
          key = {movies.id}
          src = {src}
          /> 
         });
         this.setState({
           movieDisplay: display
          });
        })
    .catch(error => console.log('parsing JSON failed', error))
    }

    render() {
    return (
      <div>
      <header className='header'>
       <h1>The movie search</h1>
       <form
       onSubmit = {this.inputChange}>
       <input type='text' className='header__input' 
       placeholder='please search your movies here'
         onChange = {this.change}
       />
       </form>
        
      </header>
      <main className='main'>
      <div className = 'main__carousel'>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src= {require('./img/slide1.jpg')}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src= {require('./img/slide2.jpg')}
                alt="second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src= {require('./img/slide3.jpg')}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
      </div>
      </main>
      {this.state.rows}
      <div className = 'movieRows'>
      {this.state.movieDisplay}
      </div>
      </div>
    );
  }
}

export default App;
