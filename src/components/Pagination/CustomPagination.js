import { createMuiTheme, Pagination, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'

const darkTheme = createMuiTheme({
  palette:{
    type:"light",
  },
})

const CustomPagination = ({setPage, numOfPages=10}) => {

  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0,0)
  }
  return (
    <div
    style={{
        width: "100%",
        display:"flex",
        justifyContent:"center",
        marginTop:10,
    }}>
      <ThemeProvider theme={darkTheme}>
        <Pagination onChange={(e)=> handlePageChange(e.target.textContent)}
        count={numOfPages}
        hideNextButton
        hidePrevButton
        color='primary'/>
        </ThemeProvider>
    </div>
  )
}

export default CustomPagination;