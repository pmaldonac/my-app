import HeaderPanel from "../../components/headerPanel"
import { Grid, Paper, Modal, Typography } from "@mui/material";
import VideoPanel from "../../components/VideoPanel";
import PatentePanel from "../../components/PatentePanel";
import EventosPanel from "../../components/EventosPanel";
import React, {useState} from "react";
import PatenteNotification from "../../components/PatenteNotificacion";
import IntrusosNotification from "../../components/IntrusoNotificacion";
import IntrusosCamara from "../../components/CamaraIntrusoAlerta";
import IntrusosObservacionNotification from "../../components/ObservacionIntrusoAlerta"
import RegistroPatenteNotification from "../../components/RegistroPatenteNotificacion"
import NuevoEvento from "../../components/NuevoEvento";

const Panel = (props)=>{
    const [data, setData]= useState("patentes")
    const [notification,setNotification] = useState(true)


    const showNotification = () =>{
        switch(data){
            case "patentes":
                return <RegistroPatenteNotification></RegistroPatenteNotification>
            case "intrusos":
                return <IntrusosNotification></IntrusosNotification>
            case "eventos":
                return <NuevoEvento></NuevoEvento>
            default: 
                return
        }
        

    }
    const handleClose = () => {
        setNotification(false)
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
            <Modal open={notification} onClose={() => handleClose()}>
                <div>
                    {showNotification()}
                </div>              
            </Modal>
        </Grid>
        
        
    )
}

export default Panel;