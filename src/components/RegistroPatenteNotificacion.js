import { Grid,Typography, Box, Button, TextField } from "@mui/material"
import { NotificationBox } from "../styled/panel"
import "../styled/notification.css"
import LoginInput from "./loginInput"

const RegistroPatenteNotification = (props) =>{
    return(
        <Box align="center" sx={NotificationBox}>
           <Typography  align="center" fontSize={25} ><strong>Registro de Nueva Visita</strong></Typography>
                
                <Grid style={{margin:45}}>
                <Grid style={{margin:15}}><TextField label="Nombre del Conductor" variant="outlined" />
                            </Grid>
                            <Grid style={{margin:15}}><TextField label="Rut" variant="outlined" />
                            </Grid>
                            <Grid style={{margin:15}}><TextField label="Patente" variant="outlined" />
                            </Grid>
                            <Grid style={{margin:15}}><TextField label="Numero de casa" variant="outlined" />
                            </Grid>
                </Grid>
                <Grid style={{margin:10}}><Button className="buttonRegistrarPatente">Guardar</Button></Grid>
        </Box>
        )
}

export default RegistroPatenteNotification

