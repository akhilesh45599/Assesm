import Movie from './Movie'

const MovieList=(props)=>{
  return(
    <div className="container">
    <div className="row">
        <div className="col s12">
            {
               props.movies.map((movie,i)=>{
                    return(
                        <Movie Key={i} viewMovieInfo={props.viewMovieInfo}  moviename={movie.title} movieyear={movie.release_date} rating={movie.vote_average}movielanguage={movie.original_language} image={movie.poster_path} movieId={movie.id} />
                    ) 
                })
            }
        </div>
    </div>


</div>
  )
       
       
    
}

export default MovieList;