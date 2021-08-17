import React, {Component} from 'react';
import './App.css';
import HorizontalScroll from 'react-scroll-horizontal'
import {Route} from 'react-router-dom';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import axios from 'axios';
import MovieList from './Pages/MovieList'
import Navigation from './Pages/Navigation';
import Pagination from './Pages/Pagination';
import MovieInfo  from './Pages/MovieInfo';
import Slider from './Pages/Slider'
import MovieHorizontal from './Pages/MovieHorizontal'


class App extends Component {
  constructor() {
    super();
    this.state = {
       movies:[],
       movie:'Avengers',
       cmovie:null,
       totalresults:0,
       currentpage:1,
       currentMovie: null

    };
    this.apikey="944d18a3180f3d9f0b30576e0c668129"
    // this.movie="Avatar"

  }

    componentDidMount=()=>{
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apikey}&query=${this.state.movie}`)
      .then(data=>data.json())
      .then(data=>{
        console.log(data);
        this.setState({movies:[...data.results], totalresults: data.total_results});
        console.log(this.state.movies)
      })

      
    }

    viewMovieInfo =(id) =>{
      const filteredMovie =this.state.movies.filter(movie =>id == id)

      const newcurrentMovie =filteredMovie.length>0  ? filteredMovie[0]:null
      this.setState({currentMovie: newcurrentMovie})
    }

    closeMovieInfo =(id)=>{
      this.setState({currentMovie: null})
    }

    nextPage = (pageNumber) =>{
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apikey}&query=${this.state.movie}&page=${pageNumber}`)
      .then(data=>data.json())
      .then(data=>{
        console.log(data);
        this.setState({movies:[...data.results], currentpage : pageNumber});
        console.log(this.state.movies)
      })
    }
 
    
    
    


render(){
  const numberofpages =Math.floor(this.state.totalresults/20);
 return(
  
   <div className="App">
   
     <Navigation/>
   <Slider movies={this.state.movies}/>
     
     {this.state.currentMovie == null?  <MovieList viewMovieInfo={this.viewMovieInfo}  movies={this.state.movies}/>: <MovieInfo currentMovie={this.state.currentMovie} closeMovieInfo={this.closeMovieInfo}/>}
     {this.state.totalresults>20 && this.state.currentMovie==null ? <Pagination pages ={numberofpages} nextPage={this.nextPage} currentpage={this.state.currentpage}/> : ''}
   </div>



 )
};


}

export default App;
