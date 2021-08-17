import React from 'react'
import ReactStars from "react-rating-stars-component";
const Movie =(props)=>{
    return(
       <div> 
        <div className="col s12 m6 l4">
            
       
            <div className="card">
                <div className="card-image">
                    {
                        props.image == null ?  <img src="https://picsum.photos/200/300" alt="card image" style={{width:"100%", height:360}} ></img>: 
                        <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card image" style={{width:"100%", height:360}} ></img>
                    }
                  
                </div>
                <div className="card-content "style={{alignContent:'center'}}>
                    <p>{props.moviename}</p> 
                    <p ><ReactStars count={10} value={props.rating} size={24} emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"/></p>
                    <p>{props.movielanguage}</p>
                    <p>{props.movieyear.substring(0,4)}</p>
                    <a href="#" onClick={()=>props.viewMovieInfo(props.movieId)}>View</a>
                  </div>
        
                  </div>
        </div>
      
        </div>     
        
    )

}

export default Movie;