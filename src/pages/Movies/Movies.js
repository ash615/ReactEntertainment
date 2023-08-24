import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Genres from '../../components/Genres';
import CustomPagination from '../../components/Pagination/CustomPagination';
import SingleContent from '../../components/SingleContent/SingleContent';

const Movies = () => {

  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);

  const fetchMovies = async() => {
    try{
    const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);    
    const moviesData = await data.results;
    setContent(moviesData);
    setNumOfPages(data.total_pages);
    //console.log(data);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    fetchMovies();
  }, [])

  return (
    <div>
      <span className="pageTitle">Movies</span>
      <Genres type='movie'
      genres={genres}
      setPage={setPage}
      setGenres={setGenres}
      setSelectedGenres={setSelectedGenres}
      selectedGenres={selectedGenres}
      />
      <div className="trending">
          {
            content && content.map((c)=> <SingleContent key={c.id}
            id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date}
            media_type={c.media_type} vote_average={c.vote_average}
            />
            )
          }
        </div>
        { numOfPages>1 &&
          <CustomPagination setPage={setPage} numOfPages={numOfPages}/>
        }
    </div>
  )
}

export default Movies