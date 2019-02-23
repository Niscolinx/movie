import React, { Component } from 'react'
import './App.scss'
import Movies from './Movies'
import axios from 'axios'
import { Container, Col, Row, Carousel } from 'react-bootstrap';


class App extends Component {
  state = {
    rows: '',
    error: false,
  }

  inputChange = (event) =>{
    console.log(event.target.value)
    const searchField = event.target.value
    this.componentDidMount(searchField)
  }
  componentDidMount(search) {
    const api = 'https://api.themoviedb.org/3/search/movie?api_key=ea87ab0831b286e4e73751ae0b5b7a46&query='
    // const api = 'https://api.themoviedb.org/3/trending/all/day?api_key=ea87ab0831b286e4e73751ae0b5b7a46';

    axios
    .get(api + search)
    .then(res => {
      const movies = res.data.results
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
        this.setState({
          error:true
        })
      });
    }
    
    render() {
    return (
      <div>
      <header className='header'>
       <h1>The movie search</h1>
       <input 
       type='text' className='header__input' 
       placeholder='please search your movies here'
       onChange = {this.inputChange}
        />
      </header>
      <main className='main'>
      <div className = 'main__carousel'>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src= {require('./img/header-1.jpg')}
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
                src= {require('./img/header-1.jpg')}
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
                src= {require('./img/header-1.jpg')}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>;
      </div>
      </main>
      {this.state.rows}
      </div>
    );
  }
}

export default App;
