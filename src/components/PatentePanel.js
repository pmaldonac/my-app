import { Grid,Paper, Typography } from "@mui/material"
import { PatentePaper, CampoPaper, TypographyResolucion, TypographyDesconocidoResolucion } from "../styled/panel";
import React, {useState, useEffect} from "react";
import axios from "axios"

const PatentePanel  = (props)=>{
    const [notification, setNotification] = useState("Desconocido");
    const [result, setResult] = useState({})
    const [uploaded, setUploaded] = useState(false)

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await axios.get("http://localhost:9090/last-plate-notification")
                if(response.data){
                    setResult(response.data)
                    setUploaded(true)
                    setNotification(response.data.resolution)
                }
                
            }catch(e){
                console.error(e)
            }
        }

        if(!uploaded){
            fetchData()
        }

    },[result, uploaded])

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
                        <Typography fontSize= {18}><strong>{result.license_plate}</strong></Typography>
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