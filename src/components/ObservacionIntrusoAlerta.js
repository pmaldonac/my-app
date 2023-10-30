import { NotificationIntrusoBox } from "../styled/panel"
import { Grid,Typography, Box, Button, FormControl, RadioGroup, FormControlLabel, Radio, FormLabel,TextField } from "@mui/material"
import "../styled/notification.css"
import axios from "axios"



const IntrusosObservacionNotification = (props) =>{

    if(!props.isOpen){ 
        return null
    };

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
                <TextField style={{margin:10,width:1000}} id="outlined-basic" label="Descripción" variant="outlined"/>

            </Grid>
            <Grid align="center">
            <Button style={{margin:100}} className="buttonIntrusoObservacion" onClick={props.onClose}>Guardar</Button>
            </Grid>
            
            
            
        </Box>

    )
}
export default IntrusosObservacionNotification