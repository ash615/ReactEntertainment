import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {makeStyles} from "react-mui-styles"
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import {useNavigate} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';


// const useStyles = makeStyles ({
//     root: {
//         width: "100%",
//         position:"fixed",
//         bottom:0,
//         backgroundColor:"#",
//         zIndex:100,
//     }
// })

export default function SimpleBottomNavigation() {
   // const classes = useStyles();
  const history = useNavigate()
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    if (value === 0) {
      history("/");
    } else if (value === 1) {
      history("/movies");
    } else if (value === 2) {
      history("/series");
    } else if (value === 3) {
      history("/search");
    }
  }, [value, history]);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      style={{  width: "100%",
      position:"fixed",
      bottom:0,
      marginTop:"10px",
      backgroundColor:"#808080",
      zIndex:100}}
      >
        <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} style={{color:"white"}}/>
        <BottomNavigationAction label="Movies" icon={<MovieIcon />} style={{color:"white"}}/>
        <BottomNavigationAction label="TV Series" icon={<TvIcon />} style={{color:"white"}}/>
        <BottomNavigationAction label="Search" icon={<SearchIcon/>} style={{color:"white"}}/>
      </BottomNavigation>
    </Box>
  );
}
