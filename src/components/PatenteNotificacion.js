import { Grid,Typography, Box, Button } from "@mui/material"
import { NotificationBox } from "../styled/panel"
import "../styled/notification.css"

const PatenteNotification = (props) =>{
    return(
        <Box align="center" sx={NotificationBox}>
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
                            fullWidth/>
                </Grid>
                <Grid style={{margin:10}}><Button className="buttonRegistrarPatente">Registrar Entrada</Button></Grid>
                <Grid><Button className="buttonRegistrarPatenteDesconocida">Registrar como vehículo Desconocido</Button></Grid>
        </Box>
        )
}

export default PatenteNotification

