import { IconButton, Grid,Typography, Box, Button, FormControl, FormLabel, Radio,RadioGroup, FormControlLabel, TextField } from "@mui/material"
import { NotificationBox } from "../styled/panel"
import { useState } from "react"
import "../styled/notification.css"
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios"

const NuevoEvento = (props) =>{
    const [showTextbox, setShowTextbox] = useState(true);
    const [showTextbox2, setShowTextbox2] = useState(false);
    const [nombreConductor, setNombreConductor] = useState("");
    const [rut, setRut] = useState("");
    const [patente, setPatente] = useState("");
    const [numeroCasa, setNumeroCasa] = useState("");
    const [descripcion, setDescripcion] = useState("");
    
    const handleRadioChange = () => {
        setShowTextbox2(false)
        setShowTextbox(true);
    };
    const handleRadioChange2 = () => {
        setShowTextbox(false);
        setShowTextbox2(true)
    };
    const handleGuardarClick = async () => {
        try {
          if (showTextbox) {
            // Registrar visita
            await axios.post("http://localhost:9090/register-visitor", {
              driver_name: nombreConductor,
              driver_dni: rut,
              license_plate: patente,
              id_house: numeroCasa
            });
          } else if (showTextbox2) {
            // Registrar otro evento
            await axios.post("http://localhost:9090/user/2/register-event", {
              description: descripcion
            });
          }
          props.onClose();
        } catch (error) {
          console.error("Error al guardar el evento:", error);
        }
      };

    return(
        <Box align="center" sx={NotificationBox}>
                <Grid>
                <IconButton style={{marginLeft:"95%"}} onClick={props.onClose}>
                    <CloseIcon />
                </IconButton></Grid>
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
                           <Grid style={{margin:6}}><TextField label="Nombre del Conductor" variant="outlined" onChange={(e) => setNombreConductor(e.target.value)}/>
                            </Grid>
                            <Grid style={{margin:6}}><TextField label="Rut" variant="outlined"  onChange={(e) => setRut(e.target.value)}/>
                            </Grid>
                            <Grid style={{margin:6}}><TextField label="Patente" variant="outlined" onChange={(e) => setPatente(e.target.value)}/>
                            </Grid>
                            <Grid style={{margin:6}}><TextField label="Numero de casa" variant="outlined" onChange={(e) => setNumeroCasa(e.target.value)} />
                            </Grid>
                        </Grid>

      )}
                    <FormControlLabel value="Otro" control={<Radio onChange={handleRadioChange2}/>} label="Otro" />{showTextbox2 && (<Grid>
                           <Grid style={{margin:6}}><TextField label="Descripción" variant="outlined" onChange={(e) => setDescripcion(e.target.value)} />
                            </Grid></Grid>
     

      )}
                    </RadioGroup>
                </FormControl>
                </Grid>
                <Grid style={{margin:10}}><Button className="buttonIntrusoObservacion" onClick={handleGuardarClick}>Guardar</Button></Grid>
                
        </Box>
        )
}

export default NuevoEvento

