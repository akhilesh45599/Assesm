import React, {Component} from 'react';
import ReactStars from "react-rating-stars-component";

const MovieInfo =(props) =>{
    return(
        
            <div className="container">
            <div className="row" onClick={props.closeMovieInfo} style={{cursor: "pointer", paddingTop:50}} >
                <i className="fas fa-arrow-left"></i>
                <span style={{marginLeft:5}}>Back</span>
            </div>
           

                <div className="row">
                    <div className="col s12 m4">
                        {props.currentMovie.poster_path == null ? <img  src="https://picsum.photos/200/300" alt="card image" style={{width:"100%", height:360}}/> : 
                            <img  src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} alt="card image" style={{width:"100%", height:360}}/> 
                        }

                    </div>
                
                    <div className="col s12 m8 container">
                        <div className="info-container">
                            <div >
                                <p style={{overflow:'hidden',WebkitLineClamp:'1'}}>{props.currentMovie.title}</p>
                            </div>
                            
                            <p><ReactStars count={10} value={props.currentMovie.vote_average} size={24} emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"/></p>
                                <p>{props.currentMovie.release_date.substring(0,4)}</p>
                            <p>{props.currentMovie.original_language}</p>
                          
                        </div>
                    
                </div>

                </div>
                <h4 style={{marginLeft:"20"}}>OverView</h4>
                <div>{props.currentMovie.overview}</div>
                
                </div>
        
        

        
    )
}

export default MovieInfo;