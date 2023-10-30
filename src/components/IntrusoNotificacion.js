import { NotificationIntrusoBox } from "../styled/panel"
import { IconButton, Grid,Typography, Box, Button } from "@mui/material"
import "../styled/notification.css"
import { useState } from "react"
import IntrusosCamara from "./CamaraIntrusoAlerta"
import IntrusosObservacionNotification from "./ObservacionIntrusoAlerta"
import CloseIcon from '@mui/icons-material/Close';

const IntrusosNotification = (props) =>{
    const [modalRegisto, setModalRegistro] = useState(false)
    const [modalCamara, setModalCamara] = useState(false)

    
    const abrirModalRegistro = () =>{
        setModalRegistro(true)
    }

    const cerrarModalRegistro = () =>{
        setModalRegistro(false)
    }

    const abrirModalCamara = () =>{
        setModalCamara(true)
    }
    const cerrarModalCamara = () =>{
        setModalCamara(false)
    }

    if (!props.isOpen) return null;
    
    return( 
        <div>           
            <Box align="center" sx={NotificationIntrusoBox}>
                <Grid>
                <IconButton style={{marginLeft:"95%"}} onClick={props.onClose}>
                    <CloseIcon />
                </IconButton></Grid>
                <Typography align="center" fontSize={40} color={"red"}><strong>Alerta de Intruso</strong></Typography>
                <Typography align="center"fontSize={35} color={"red"} ><strong>Cámara {props.data.camera}</strong></Typography>
            
                <Grid container spacing={2} columns={16} align="center" margin={3}>
                    <Grid >
                    <Typography align="center" fontSize={25}><strong>Ahora</strong></Typography>
                        <Box
                        component="img"
                                sx={{
                                    margin: 1,
                                    height: 300,
                                    width: 450,
                                    maxHeight: { xs: 3000, md: 2000 },
                                    maxWidth: { xs: 2000, md: 3000 },
                                }}
                                src={props.data.image_url}
                                fullWidth/>
                    </Grid>
                    <Grid>
                    <Typography align="center" fontSize={25}><strong>Ubicación de Cámara</strong></Typography>
                        <Box
                            component="img"
                                    sx={{
                                        margin: 1,
                                        height: 300,
                                        width: 350,
                                        maxHeight: { xs: 3000, md: 2000 },
                                        maxWidth: { xs: 2000, md: 3000 },
                                    }}
                                    src="https://i.ibb.co/ZSFwKDH/ew.jpg"
                                    fullWidth/>
                    </Grid>
                    <Grid  alignItems="center">
                        <Grid><Button className="buttonIntrusoCamara" style={{margin:50, width: 200, display:"none"}} onClick={abrirModalCamara}>Ver Cámara</Button></Grid>
                        <Grid><Button className="buttonIntrusoObservacion" style = {{margin:50, width:200}} onClick={abrirModalRegistro}>Agregar Observación</Button></Grid>
                    </Grid>
                </Grid>
                
                
            </Box>
            <IntrusosCamara isOpen={modalCamara} onClose={cerrarModalCamara} />
            <IntrusosObservacionNotification data={{"id_event": props.data.id_event,"camara": props.data.camera}} isOpen={modalRegisto} onClose={cerrarModalRegistro}/>

        </div>
       
    )
}
export default IntrusosNotification