
import { Button } from '@mui/material';
import { styled, createTheme } from '@mui/material/styles'


export const customTheme = createTheme({
    palette: {
      primary: {
        main: '#0A178A',
      },
      secondary: {
        main: 'rgba(10, 23, 138, 0.17)'
      },
        third:{
        main: ''
      }
    },
  });

  export const ButtonLogin = styled(Button)`
    backgroundColor: '#3c52b2',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#3c52b2',
    }`

    
  
  export const paperStyle = {
    padding:40,
    height:"40vh",
    width:280,
    margin:"150px auto",
    background: "rgba(10, 23, 138, 0.17)"
  }
