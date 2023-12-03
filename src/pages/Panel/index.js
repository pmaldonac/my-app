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

const Panel = (props) => {
    const [alertType, setAlertType] = useState("Patente");
    const [notification, setNotification] = useState(false);
    const [sonido, setSonido] = useState(false);
    const [result, setResult] = useState({});
    const [uploaded, setUploaded] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:9090/notifications-no-published");
            if (response.status === 204) {
              setSonido(true);
              setUploaded(false);
              setNotification(false)

            }if(response.status === 200){
              setResult(response.data);
              setAlertType(response.data.alert_type);
              setUploaded(true);
              setNotification(true);
              setSonido(false);

            }

        } catch (e) {
          console.error(e);
        }
      };
  
      const fetchAndUpdateData = () => {
        fetchData();
      };
  
      if (!uploaded && !notification) {
        fetchAndUpdateData();
      }
  
      const interval = setInterval(fetchAndUpdateData, 3000);
      return () => {
        clearInterval(interval);
      };
    }, [notification, alertType, result, uploaded, sonido]);
  
    const handleClose = async () => {
      if (notification) {
        if (alertType === "Patente") {
          await axios.put(`http://localhost:9090/published-state?event=${result._id}`, { alert_type: alertType });
        }
        if (alertType === "Intruso") {
          await axios.put(`http://localhost:9090/published-state?event=${result.id_event}`, { alert_type: alertType });
        }
      }
      setNotification(false)
    };
  
    const play = () => {
      new Audio(alert).play();
      setSonido(true);
    };
  
    const showNotification = () => {
      if (!sonido && notification) {
        play();
      }
      switch (alertType) {
        case "Patente":
          return <PatenteNotification data={result} isOpen={notification} onClose={handleClose}></PatenteNotification>;
        case "Intruso":
          return <IntrusosNotification data={result} isOpen={notification} onClose={handleClose}></IntrusosNotification>;
        case "eventos":
          return <NuevoEvento></NuevoEvento>;
        default:
          return null; 
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