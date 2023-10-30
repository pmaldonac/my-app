import HeaderPanel from "../../components/headerPanel"
import { Grid, Modal } from "@mui/material";
import VideoPanel from "../../components/VideoPanel";
import PatentePanel from "../../components/PatentePanel";
import EventosPanel from "../../components/EventosPanel";
import React, {useEffect, useState} from "react";
import PatenteNotification from "../../components/PatenteNotificacion";
import IntrusosNotification from "../../components/IntrusoNotificacion";
import NuevoEvento from "../../components/NuevoEvento";
import alert from "../../Assets/alert.mp3"
import axios from "axios"

const Panel = (props)=>{
    const [alertType, setAlertType]= useState("intrusos")
    const [notification,setNotification] = useState(false)
    const [sonido, setSonido] = useState(false)
    const [result, setResult] = useState({})
    const [uploaded, setUploaded] = useState(false)
    const [events, setEvents] = useState([])
    const [eventsUploaded, setEventsUploaded] = useState(false)

    useEffect(() =>{
        const fetchData = async () => {
            try{
                //Problemas con el end-point, debo cambiar el estaddo published en algún momento.
                const response = await axios.get("http://localhost:9090/intrusos/newnotification")
                if(response.status === 400){
                    setSonido(true)
                    setNotification(false)
                }else{
                    setResult(response.data)
                    setAlertType(response.data.alert_type)
                    setUploaded(true)
                    setNotification(true)
                    setSonido(false)           
                }

            
            }catch(e){
                console.error(e)
            }
        }
        const fetchAndUpdateData = () => {
            fetchData();
        };
    
        if (!uploaded) {
            fetchAndUpdateData(); 
        }
        


        

        const FetchDataEvents = async () =>{
            try{
                const response2 = await axios.get("https://localhost:9090/all")
                console.log(response2)
                if(response2.data){
                    setEvents(response2.data)
                    setEventsUploaded(true)
                }else{
                    setEventsUploaded(false)
                }
            }catch(e){
                console.error(e)
            }
            
        }

        if(!eventsUploaded){
            FetchDataEvents()
        }
        
        const interval = setInterval(fetchAndUpdateData, 3000);
        return () => {
        clearInterval(interval);
        };

        

    },[notification,alertType, result, uploaded, events, eventsUploaded])


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
        switch(alertType){
            case "patentes":
                return <PatenteNotification onClose={handleClose}></PatenteNotification>
            case "Intruso":
                return <IntrusosNotification data={result} isOpen={notification} onClose={handleClose}></IntrusosNotification>
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
                <EventosPanel data={events}></EventosPanel>
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