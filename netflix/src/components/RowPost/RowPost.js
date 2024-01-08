import React, { useEffect, useState } from 'react'
import './RowPost.css'
import {imageUrl,API_KEY} from '../../constants/constants'
import axios from '../../axios'
import Youtube from 'react-youtube'
function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('')

  useEffect(() => {
    axios.get(props.url).then(response => {
      // console.log(response.data);
      setMovies(response.data.results);
    }).catch(error => {
      // Handle error, e.g., alert("Network error")
    });
  }, []);
      const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
      const handleMovie = (id)=>{
           axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
               if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
               }else{
                console.log("Trailer not avalible")
               }
          })
      }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((movie) => (
          <img onClick={()=> handleMovie(movie.id)}
           
            className={props.isSmall?'smallPoster':'poster'}
            src={`${imageUrl}${movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    { urlId && <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  );
}

export default RowPost;
