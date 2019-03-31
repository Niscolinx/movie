import React, { Component } from 'react'
import './App.scss'
import Movies from './Movies'
import axios from 'axios'
import { Carousel } from 'react-bootstrap'
import Trending from './Trending'
import Popular from './Popular'
import AllMovies from './AllMovies'

class App extends Component {
  state = {
    rows: '',
    error: false,
    movieDisplay: '',
    allMovies: '',
    popular: '',
    change: ''
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
      this.AllMovies();
      this.Popular();
  }

  Trending(){
    axios
    .get('https://api.themoviedb.org/3/trending/all/day?api_key=ea87ab0831b286e4e73751ae0b5b7a46')
    .then(res => {
      const displaytem = res.data.results
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

  AllMovies(){
    axios
    .get('https://api.themoviedb.org/3/movie/top_rated?api_key=ea87ab0831b286e4e73751ae0b5b7a46')
    .then(res => {
      const displaytem = res.data.results
      const display = displaytem.map(movies => {
        const src = 'https://image.tmdb.org/t/p/w200/' + movies.poster_path
        return <AllMovies 
          movies = {movies}
          key = {movies.id}
          src = {src}
          /> 
         });
         this.setState({
           allMovies: display
          });
        })
    .catch(error => console.log('parsing JSON failed', error))
    }

  Popular(){
    axios
    .get('https://api.themoviedb.org/3/movie/popular?api_key=ea87ab0831b286e4e73751ae0b5b7a46')
    .then(res => {
      const displaytem = res.data.results
      const display = displaytem.map(movies => {
        const src = 'https://image.tmdb.org/t/p/w200/' + movies.poster_path
        return <Popular 
          movies = {movies}
          key = {movies.id}
          src = {src}
          /> 
         });
         this.setState({
           popular: display
          });
        })
    .catch(error => console.log('parsing JSON failed', error))
    }

    render() {
    return (
      <div>
        <header className='header'>
        <h1>24Movies</h1>
        <form
        onSubmit = {this.inputChange}>
        <input type='text' className='header__input' 
        placeholder='please search your movies here'
          onChange = {this.change}
        />
        </form> 
        </header>
        {this.state.rows}
        <main className='main'>
          <div className = 'main__carousel'>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src= {require('./img/got.jpeg')}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Game of Thrones</h3>
                    <p>Summers span decades. Winters can last a lifetime. And the struggle for the Iron Throne begins. Based on the bestselling book series by George R.R. Martin and created by David Benioff and D.B. Weiss.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src= {require('./img/arrow.jpg')}
                    alt="second slide"
                  />

                  <Carousel.Caption>
                    <h3>Arrow</h3>
                    <p>Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src= {require('./img/empire.jpg')}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Empire</h3>
                    <p>A hip-hop mogul must choose a successor among his three sons who are battling for control over his multi-million dollar company, while his ex-wife schemes to reclaim what is hers.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
          </div>
        </main>
        <div className = 'movie-layout'>
            <h1  className = 'movie__heading'>Discover</h1>
          <div className = 'movieRows'>
            {this.state.allMovies}
          </div>
        </div>
        <div className = 'movie-layout'>
            <h1  className = 'movie__heading'>Trending</h1>
          <div className = 'movieRows'>
            {this.state.movieDisplay}
          </div>
        </div>
        <div className = 'movie-layout'>
            <h1  className = 'movie__heading'>Popular</h1>
          <div className = 'movieRows'>
            {this.state.popular}
          </div>
        </div>
        <footer class="footer">
           
         </footer>
      </div>
    );
  }
}

export default App;
