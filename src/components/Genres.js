import { Chip } from '@mui/material';
import axios from 'axios'
import React, { useEffect } from 'react'
import { generatePath } from 'react-router-dom';

const Genres = ({
    genres,
    selectedGenres,
    setGenres,
    setSelectedGenres,
    type,
    setPage,
}) => {

   const handleAdd =(genre)=> {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g)=> g.id!== genre.id));
    setPage(1);
   }

   const handleRemove =(genre)=> {
    setSelectedGenres(selectedGenres.filter((g)=> g.id!== genre.id));
    setGenres([...genres, genre]);
    setPage(1);
   }

    const fetchGenres =async()=>{
        const {data}= await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        const genresData = await data.genres;
        setGenres(genresData);
    }

    useEffect(()=>{
      const fetchGenress = async()=>{
        await fetchGenres();
      }
      fetchGenress()
    },[])

  return (
    <div style={{padding: "6px 0px"}}>
       {
        selectedGenres && 
        selectedGenres.map((genre)=>(
          <Chip onDelete={()=> {handleRemove(genre)}} label={genre.name} key={genre.id} style={{margin:2, backgroundColor:"yellow", color:"blue"}} clickable/>
        ))
      }
      {
        genres && 
        genres.map((genre)=>(
          <Chip onClick={()=> {handleAdd(genre)}} label={genre.name} key={genre.id} style={{margin:2, backgroundColor: "white", color:"black"}} clickable/>
        ))
      }
    </div>
  )
}

export default Genres;