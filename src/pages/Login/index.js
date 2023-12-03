import { Grid, Paper, Button, TextField } from "@mui/material"
import LoginInput from "../../components/loginInput"
import Header from "../../components/headerLogin"
import { ButtonLogin, paperStyle } from "../../styled/login"
import "../../styled/login.css"
import { Link, Navigate} from 'react-router-dom';
import { useState } from "react";
import axios from "axios";

const Login = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        console.log(username)
        console.log(password)
        try {
            // Realiza la solicitud al endpoint /login con las credenciales
            const response = await axios.post("http://localhost:9090/login", {
                username: username,
                password: password
            });

            // Verifica si la respuesta tiene el código de estado 200
            if (response.status === 200) {
                // Credenciales correctas, establece loggedIn en true
                setLoggedIn(true);
            } else {
                // Credenciales incorrectas u otro error, maneja según sea necesario
                console.error("Error en la autenticación:", response.data);
            }
        } catch (error) {
            // Maneja errores de la solicitud
            console.error("Error en la solicitud de inicio de sesión:", error);
        }
    };

    if (loggedIn) {
        // Redirige a la página de inicio si está autenticado
        return <Navigate to="/inicio" />;
    }

    return (
        <Grid>
            <Header></Header>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <h2>Iniciar Sesión</h2>
                    <Grid style={{margin:15}}>
                    <TextField style={{background: "rgb(255, 255, 255)"}} label="Usuario" variant="outlined" onChange={(e) => setUsername(e.target.value)} />
                    </Grid>
                    <Grid style={{margin:15}}>
                     <TextField style={{background: "rgb(255, 255, 255)"}} label="Contraseña" variant="outlined" type="password" onChange={(e) => setPassword(e.target.value)} />
                     </Grid>

                    <Button className="buttonLogin" onClick={handleLogin}>
                        Iniciar Sesión
                    </Button>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default Login;