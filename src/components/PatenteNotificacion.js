import {IconButton, Grid,Typography, Box, Button } from "@mui/material"
import { NotificationBox } from "../styled/panel"
import "../styled/notification.css"
import { useState } from "react"
import RegistroPatenteNotification from "./RegistroPatenteNotificacion"
import CloseIcon from '@mui/icons-material/Close';

const PatenteNotification = (props) =>{
    const [modalRegisto, setModalRegistro] = useState(false)

    const abrirModalRegistro = () =>{
        setModalRegistro(true)
    }

    const cerrarModalRegistro = () =>{
        setModalRegistro(false)
    }

    return(
        <div>
            <Box align="center" sx={NotificationBox}>
                <Grid>
                    <IconButton style={{marginLeft:"95%"}} onClick={props.onClose}>
                        <CloseIcon />
                    </IconButton></Grid>
                            <Typography align="center" fontSize={25} color={"red"}><strong>Alerta de Vehículo Desconocido</strong></Typography>
                            <Grid>
                                <Box
                                component="img"
                                        sx={{
                                            margin: 1,
                                            height: 300,
                                            width: 350,
                                            maxHeight: { xs: 3000, md: 2000 },
                                            maxWidth: { xs: 2000, md: 3000 },
                                        }}
                                        src="https://www.gateguard.com.mx/wp-content/uploads/2020/09/ACCESO-DE-RESIDENTES-CONTROL-DE-ACCESO-VEHICULAR-GATEGUARD-SYSTEM-1.jpg"
                                        />
                            </Grid>
                            <Grid style={{margin:10}}><Button className="buttonRegistrarPatente" onClick={abrirModalRegistro}>Registrar Entrada</Button></Grid>
                            <Grid>
                                <Button className="buttonRegistrarPatenteDesconocida" onClick={props.onClose}>Registrar como vehículo Desconocido</Button>
                            </Grid>
                    </Box>
            <RegistroPatenteNotification isOpen={modalRegisto} onClose={cerrarModalRegistro}/>
        </div>
        
        )
}

export default PatenteNotification

