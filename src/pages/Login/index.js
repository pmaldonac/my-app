import { Grid, Paper, Button } from "@mui/material"
import LoginInput from "../../components/loginInput"
import Header from "../../components/headerLogin"
import { ButtonLogin, paperStyle } from "../../styled/login"
import "../../styled/login.css"
import { Link, Navigate} from 'react-router-dom';
import { useState } from "react"

const Login = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleRedirect = () =>{
        return(<Navigate to="/inicio"/>)
    }

    if (loggedIn){
        handleRedirect()
    }

    return(
        <Grid>
            <Header></Header>
            <Paper elevation={10} style={paperStyle}>
                <Grid align = "center">
                    <h2>Iniciar Sesión</h2>
                    <LoginInput id="" label= "Usuario" type="" fullwidth required></LoginInput>
                    <LoginInput id="" label= "Contraseña" type = "password" fullwidth></LoginInput>
                    <Link to="/inicio">
                        <Button className="buttonLogin">Iniciar Sesión</Button>
                    </Link>
                    
                </Grid>
                
            </Paper>
             
        </Grid>
    )
}
export default Login