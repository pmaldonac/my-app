import { Grid,Typography, Box, Button, FormControl, FormLabel, Radio,RadioGroup, FormControlLabel, TextField } from "@mui/material"
import { NotificationBox } from "../styled/panel"
import { useState } from "react"
import "../styled/notification.css"
import LoginInput from "./loginInput"
const NuevoEvento = (props) =>{
    const [showTextbox, setShowTextbox] = useState(true);
    const [showTextbox2, setShowTextbox2] = useState(false);
  
    const handleRadioChange = () => {
        setShowTextbox2(false)
        setShowTextbox(true);
    };
    const handleRadioChange2 = () => {
        setShowTextbox(false);
        setShowTextbox2(true)
    };

    return(
        <Box align="center" sx={NotificationBox}>
                <Typography align="center" fontSize={25}><strong>Ingresar Nuevo Evento</strong></Typography>
                <Grid align = "center" style={{margin:25}}>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label" style={{color:"black", fontSize:18}}><strong></strong></FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Registrar"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="Registrar" control={<Radio onChange={handleRadioChange}/>} label="Registrar Visita"/>  {showTextbox && (<Grid>
                           <Grid style={{margin:6}}><TextField label="Nombre del Conductor" variant="outlined" />
                            </Grid>
                            <Grid style={{margin:6}}><TextField label="Rut" variant="outlined" />
                            </Grid>
                            <Grid style={{margin:6}}><TextField label="Patente" variant="outlined" />
                            </Grid>
                            <Grid style={{margin:6}}><TextField label="Numero de casa" variant="outlined" />
                            </Grid>
                        </Grid>

      )}
                    <FormControlLabel value="Otro" control={<Radio onChange={handleRadioChange2}/>} label="Otro" />{showTextbox2 && (<Grid>
                           <Grid style={{margin:6}}><TextField label="Descripción" variant="outlined" />
                            </Grid></Grid>
     

      )}
                    </RadioGroup>
                </FormControl>
                </Grid>
                <Grid style={{margin:10}}><Button className="buttonIntrusoObservacion">Guardar</Button></Grid>
                
        </Box>
        )
}

export default NuevoEvento

