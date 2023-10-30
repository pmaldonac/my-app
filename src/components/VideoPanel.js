import { Box, Modal,Grid,Paper,Typography, Button } from "@mui/material"
import {VideoStyle, AlertaPaperStyle} from "../styled/panel";
import "../styled/panel.css"
import { useEffect, useState } from "react";
import IntrusosNotification from "./IntrusoNotificacion";
import axios from "axios"


const VideoPanel  = (props)=>{
    const [openModal,setOpenModal] = useState(false)
    const [result, setResult] = useState({})
    const [uploaded, setUploaded] = useState(false)

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await axios.get("http://localhost:9090/intruso/lastNotification")
                if(response.data){
                    setResult(response.data)
                    setUploaded(true)
                }
                
            }catch(e){
                console.error(e)
            }
        }
        if (!uploaded) {
            fetchData(); 
        }
    },[uploaded,result])
    
    const handleOpenModal = ()=>{
        setOpenModal(true)
    }
    const handleCloseModal = () =>{
        setOpenModal(false)
    }
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
                                <Typography fontSize={18} color={"red"}><strong>Última Alerta</strong></Typography>
                                <Typography fontSize= {18} color={"red"}><strong>Cámara {result.camera}</strong></Typography>
                            </Paper>
                            <Grid>
                                <Button style={{background:"rgba(82, 172, 70, 0.76)",color:"#fff"}} onClick={handleOpenModal}>Ver imagen</Button>
                            </Grid>
                            
                        </Grid>
                    
                    </Grid>
                </Box>
            </Paper>
            <Modal open={openModal}>
                <IntrusosNotification data={result} isOpen={openModal} onClose={handleCloseModal}/>
            </Modal>
        </Grid>
    )
}

export default VideoPanel