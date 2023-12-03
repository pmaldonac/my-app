import { NotificationIntrusoBox } from "../styled/panel"
import { Grid,Typography, Box, Button, FormControl, RadioGroup, FormControlLabel, Radio, FormLabel,TextField } from "@mui/material"
import "../styled/notification.css"
import axios from "axios"
import { useEffect, useState } from "react"


const IntrusosObservacionNotification = (props) =>{
    const [severity, setSeverity] = useState("Alta")
    const [description, setDescription] = useState("")

    const handleSetSeverity = (event) =>{
        setSeverity(event.target.value)
    }

    const handleSetDescription = (event) =>{
        setDescription(event.target.value)
    }

    if(!props.isOpen){ 
        return null
    };

    const UpdateNotification = () =>{
        axios.put(`http://localhost:9090/last-video-notification?id_event=${props.data.id_event}`, {"severity": severity, "description": description})
        .then((response) => {
            // Maneja la respuesta del servidor si es necesario
            console.log(response.data);
        })
        .catch((error) => {
            // Maneja errores de la solicitud si es necesario
            console.error(error);
        });
    }

    const handleButton = ()=>{
        UpdateNotification()
        props.onClose()
    }

    return( 
        <Box  sx={NotificationIntrusoBox}>
            <Typography align="center" fontSize={40} color={"red"}><strong>Alerta de Intruso</strong></Typography>
            <Typography align="center"fontSize={35} color={"red"} ><strong>Cámara {props.data.camara}</strong></Typography>
            <Grid sx={{marginLeft:10}}>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label" style={{color:"black", fontSize:18}}><strong>Gravedad de Alerta</strong></FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Baja"
                        onChange={handleSetSeverity}
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="Baja" control={<Radio />} label="Baja" />
                        <FormControlLabel value="Media" control={<Radio />} label="Media" />
                        <FormControlLabel value="Alta" control={<Radio />} label="Alta" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid sx={{marginLeft:10}}>
                <Typography fontSize={18} ><strong>Observación</strong></Typography>
                <TextField style={{margin:10,width:1000}} id="outlined-basic" label="Descripción" variant="outlined" onChange={handleSetDescription}/>

            </Grid>
            <Grid align="center">
            <Button style={{margin:100}} className="buttonIntrusoObservacion" onClick={handleButton}>Guardar</Button>
            </Grid>
            
            
            
        </Box>

    )
}
export default IntrusosObservacionNotification