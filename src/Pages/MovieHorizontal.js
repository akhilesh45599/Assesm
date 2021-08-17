import Slider from './Slider'

const MovieHorizontal=(props)=>{
  return(
    <div className="container">
    <div className="row">
        <div className="col ">
            {
               props.movies.map((movie,i)=>{
                    return(
                       

                        <Slider Key={i} viewMovieInfo={props.viewMovieInfo} movieyear={props.release_date} moviename={movie.title} rating={movie.vote_average}movielanguage={movie.original_language} image={movie.poster_path} movieId={movie.id} />
                        
                    ) 
                })
            }
        </div>
    </div>


</div>
  )
       
       
    
}

export default MovieHorizontal;