import { NotificationIntrusoBox } from "../styled/panel"
import { Grid,Typography, Box, Button } from "@mui/material"
import "../styled/notification.css"

const IntrusosCamara= (props) =>{
    if(!props.isOpen){ 
        return null
    };
    return( 
        <Box align="center" sx={NotificationIntrusoBox}>
            <Typography align="center" fontSize={40} color={"red"}><strong>Alerta de Intruso</strong></Typography>
            <Typography align="center"fontSize={35} color={"red"} ><strong>Cámara 5</strong></Typography>          
            <Grid >
                    <Box
                    component="img"
                            sx={{
                                margin: 1,
                                height: 400,
                                width: 1050,
                                maxHeight: { xs: 3000, md: 2000 },
                                maxWidth: { xs: 2000, md: 3000 },
                            }}
                            src="https://s3.us-east-2.amazonaws.com/img2.eltipografo.cl/media/2019/12/3992757_n_vir3-750x438.jpg"
                            fullWidth/>
            </Grid>
            <Grid><Button className="buttonIntrusoObservacion" onClick={props.onClose}>Volver</Button></Grid>
         
        </Box>

    )
}
export default IntrusosCamara