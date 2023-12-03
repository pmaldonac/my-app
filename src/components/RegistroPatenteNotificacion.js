import { Grid,Typography, Box, Button, TextField } from "@mui/material"
import { NotificationBox } from "../styled/panel"
import "../styled/notification.css"
import LoginInput from "./loginInput"
import React, {useState, useEffect} from "react";
import axios from "axios"

const RegistroPatenteNotification = (props) =>{
    const [nombreConductor, setNombreConductor] = useState("");
    const [rut, setRut] = useState("");
    const [patente, setPatente] = useState("");
    const [numeroCasa, setNumeroCasa] = useState("");

    const handleGuardarClick = async () => {
        try{
            const response = await axios.post("http://localhost:9090/register-visitor", {
              driver_name: nombreConductor,
              driver_dni: rut,
              license_plate: patente,
              id_house: numeroCasa
            });
            props.onClose();
        }
        catch(e){
            console.error(e)
        }   
        };


    if(!props.isOpen){ 
        return null
    };

    return(
        <Box align="center" sx={NotificationBox}>
            <Typography  align="center" fontSize={25} ><strong>Registro de Nueva Visita</strong></Typography>
                
                <Grid style={{margin:45}}>
                            <Grid style={{margin:15}}>
                            <TextField label="Nombre del Conductor" variant="outlined" onChange={(e) => setNombreConductor(e.target.value)} />
                            </Grid>
                            <Grid style={{margin:15}}><TextField label="Rut" variant="outlined" onChange={(e) => setRut(e.target.value)}/>
                            </Grid>
                            <Grid style={{margin:15}}><TextField label="Patente" variant="outlined" onChange={(e) => setPatente(e.target.value)}/>
                            </Grid>
                            <Grid style={{margin:15}}><TextField label="Numero de casa" variant="outlined" onChange={(e) => setNumeroCasa(e.target.value)}/>
                            </Grid>
                </Grid>
                <Grid style={{margin:10}}><Button className="buttonRegistrarPatente" onClick={handleGuardarClick}>Guardar</Button></Grid>
        </Box>
        )
        
}

export default RegistroPatenteNotification

