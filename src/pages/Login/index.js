import { Grid, Paper, Button } from "@mui/material"
import LoginInput from "../../components/loginInput"
import Header from "../../components/headerLogin"
import { ButtonLogin, paperStyle } from "../../styled/login"
import "../../styled/login.css"

const Login = (props) => {
    return(
        <Grid>
            <Header></Header>
            <Paper elevation={10} style={paperStyle}>
                <Grid align = "center">
                    <h2>Iniciar Sesión</h2>
                    <LoginInput id="" label= "Usuario" type="" fullwidth required></LoginInput>
                    <LoginInput id="" label= "Contraseña" type = "password" fullwidth></LoginInput>
                    <Button className="buttonLogin">Iniciar Sesión</Button>
                </Grid>
                
            </Paper>
             
        </Grid>
    )
}
export default Login