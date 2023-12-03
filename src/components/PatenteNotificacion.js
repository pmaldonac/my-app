import {IconButton, Grid,Typography, Box, Button } from "@mui/material"
import { NotificationBox } from "../styled/panel"
import "../styled/notification.css"
import { useState } from "react"
import RegistroPatenteNotification from "./RegistroPatenteNotificacion"
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios"

const PatenteNotification = (props) =>{
    const [modalRegisto, setModalRegistro] = useState(false)


    const ResolutionUpdate = (resolutionField,plateField) =>{
        axios.put(`http://localhost:9090/plate/notification/${props.data._id}/resolution`, {resolution:resolutionField, plate: plateField})
        .then((response) => {
            // Maneja la respuesta del servidor si es necesario
            console.log(response.data);
        })
        .catch((error) => {
            // Maneja errores de la solicitud si es necesario
            console.error(error);
        });
    }
    const abrirModalRegistro = () =>{
        ResolutionUpdate("Autorizado", props.data.license_plate)
        setModalRegistro(true)
    }

    const cerrarModalRegistro = () =>{
        setModalRegistro(false)
    }

    const handleDesconocidoButton = () =>{
        ResolutionUpdate("Desconocido", props.data.license_plate)
        props.onClose()

    }
    if (!props.isOpen) return null;
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
                                        src={props.data.image_url}
                                        />
                            </Grid>
                            <Grid style={{margin:10}}><Button className="buttonRegistrarPatente" onClick={abrirModalRegistro}>Registrar Entrada</Button></Grid>
                            <Grid>
                                <Button className="buttonRegistrarPatenteDesconocida" onClick={handleDesconocidoButton}>Registrar como vehículo Desconocido</Button>
                            </Grid>
                    </Box>
            <RegistroPatenteNotification isOpen={modalRegisto} onClose={cerrarModalRegistro}/>
        </div>
        
        )
}

export default PatenteNotification

