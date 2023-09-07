import { NotificationIntrusoBox } from "../styled/panel"
import { Grid,Typography, Box, Button } from "@mui/material"
import "../styled/notification.css"

const IntrusosNotification = (props) =>{
    return( 
        <Box align="center" sx={NotificationIntrusoBox}>
            <Typography align="center" fontSize={40} color={"red"}><strong>Alerta de Intruso</strong></Typography>
            <Typography align="center"fontSize={35} color={"red"} ><strong>Cámara 5</strong></Typography>

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
                            src="https://s3.us-east-2.amazonaws.com/img2.eltipografo.cl/media/2019/12/3992757_n_vir3-750x438.jpg"
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
                    <Grid><Button className="buttonIntrusoCamara" style={{margin:50, width: 200}}>Ver Cámara</Button></Grid>
                    <Grid><Button className="buttonIntrusoObservacion" >Agregar Observación</Button></Grid>
                </Grid>
            </Grid>
            
            
        </Box>

    )
}
export default IntrusosNotification