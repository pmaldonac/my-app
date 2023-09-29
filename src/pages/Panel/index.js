import HeaderPanel from "../../components/headerPanel"
import { Grid, Modal } from "@mui/material";
import VideoPanel from "../../components/VideoPanel";
import PatentePanel from "../../components/PatentePanel";
import EventosPanel from "../../components/EventosPanel";
import React, {useState} from "react";
import PatenteNotification from "../../components/PatenteNotificacion";
import IntrusosNotification from "../../components/IntrusoNotificacion";
import NuevoEvento from "../../components/NuevoEvento";
import alert from "../../Assets/alert.mp3"

const Panel = (props)=>{
    const [data, setData]= useState("intrusos")
    const [notification,setNotification] = useState(true)
    const [sonido, setSonido] = useState(false)
       
    const handleClose = () => {
        setNotification(false)
    }

    const play = () =>{
        new Audio(alert).play()
        setSonido(true)
    }

 
    const showNotification = () =>{
        if(!sonido && notification){
            play()
        }
        switch(data){
            case "patentes":
                return <PatenteNotification onClose={handleClose}></PatenteNotification>
            case "intrusos":
                return <IntrusosNotification isOpen={notification} onClose={handleClose}></IntrusosNotification>
            case "eventos":
                return <NuevoEvento></NuevoEvento>
            default: 
                return
        }
        

    }


    return(
        <Grid>
            <HeaderPanel></HeaderPanel>
            <Grid container spacing={2} columns={16} align="center">
                <VideoPanel > </VideoPanel>
                <PatentePanel></PatentePanel>
            </Grid>
            <Grid>
                <EventosPanel></EventosPanel>
            </Grid>
            <Modal open={notification}>
                <div>
                    {showNotification()}
                </div>              
            </Modal>
        </Grid>
        
        
    )
}

export default Panel;