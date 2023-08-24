import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Genres from '../../components/Genres';
import CustomPagination from '../../components/Pagination/CustomPagination';
import SingleContent from '../../components/SingleContent/SingleContent';

const Series = () => {

  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);

  const fetchSeries = async() => {
    try{
    const {data} = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);    
    const tvData = await data.results;
    setContent(tvData);
    setNumOfPages(data.total_pages);
    //console.log(data);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    fetchSeries();
  }, [])

  return (
    <div>
      <span className="pageTitle">TV Series</span>
      <Genres type='tv'
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

export default Series