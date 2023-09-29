import { Grid,Paper, Typography } from "@mui/material"
import { PatentePaper, CampoPaper, TypographyResolucion, TypographyDesconocidoResolucion } from "../styled/panel";
import React, {useState} from "react";
const PatentePanel  = (props)=>{
    const [notification, setNotification] = useState("Desconocido");

    const selectNotificacion = () => {
        switch(notification){
            case "Autorizado":
                return <Typography style={TypographyResolucion}><strong>Autorizado</strong></Typography>
            case "Desconocido":
                return <Typography style={TypographyDesconocidoResolucion}><strong>Desconocido</strong></Typography>
            default:
                return
        }
    }
    return(
        <Grid item xs={8}>
            <Paper style={PatentePaper}>
                <Grid>
                <Typography fontSize={20}><strong>Entrada y Salida de Vehículos</strong></Typography>
                </Grid>
                <Grid>
                    <Paper style={CampoPaper}>
                        <Typography fontSize= {18}><strong>Último Acceso</strong></Typography>
                        <Typography fontSize= {18}><strong>FTFD-17</strong></Typography>
                    </Paper>
                </Grid>
                <Grid>
                    <Typography><strong>Resolución</strong></Typography>
                </Grid>
                <Grid>
                   {selectNotificacion()}
                </Grid>
            
            </Paper>
        </Grid>
    )
}

export default PatentePanel