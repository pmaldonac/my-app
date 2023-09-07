import { Box, Grid,Paper,Typography, Button } from "@mui/material"
import {VideoStyle, AlertaPaperStyle} from "../styled/panel";
import "../styled/panel.css"
const VideoPanel  = (props)=>{
    return(
        <Grid item xs={8}>
            <Paper style={VideoStyle}>
            <Typography fontSize={20}><strong>Alertas de Video Vigilancia</strong></Typography>
            <Box sx = {{flexGrow:1}}>
                    <Grid container spacing={2} align="center">
                        <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            sx={{
                                margin: 1,
                                height: 300,
                                width: 350,
                                maxHeight: { xs: 230, md: 160 },
                                maxWidth: { xs: 350, md: 250 },
                            }}
                            src="https://i.ibb.co/ZSFwKDH/ew.jpg"
                            fullWidth/>
                        </Grid>
                        <Grid item xs={12} md={6} align="center">
                            <Paper style={AlertaPaperStyle} align="center" fullWidth>
                                <Typography><strong>Última Alerta</strong></Typography>
                                <Typography><strong>Cámara 5</strong></Typography>
                            </Paper>
                            <Grid>
                                <Button style={{background:"rgba(82, 172, 70, 0.76)",color:"#fff"}}>Ver imagen</Button>
                            </Grid>
                            
                        </Grid>
                    
                    </Grid>
                </Box>
            </Paper>
        </Grid>
    )
}

export default VideoPanel