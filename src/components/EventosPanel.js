import { Grid,Paper, Modal,Typography, Table,TableBody,TableCell, TableHead, TableRow, TableContainer, Button, Box } from "@mui/material"
import { EventosPaper, EventosTablaHeader } from "../styled/panel";
import "../styled/panel.css"
import { useEffect, useState } from "react";
import NuevoEvento from "./NuevoEvento";
import axios from "axios"

function obtenerFechaActual() {
    const fechaActual = new Date();
    const dia = fechaActual.getDate().toString().padStart(2, '0'); // Obtener el día (con relleno de ceros si es necesario)
    const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // Obtener el mes (se suma 1 porque los meses comienzan en 0)
    const año = fechaActual.getFullYear();
  
    const fechaFormateada = `${dia}-${mes}-${año}`;
    return fechaFormateada;
  }



const EventosPanel = (props) => {
    const [nuevoEventoModal, setNuevoEventoModal] = useState(false);
    const [events, setEvents] = useState([])
    const [date, setDate] = useState(obtenerFechaActual())

    useEffect( () =>{
      const FetchData =  async () =>{
          try{
            const response = await axios.get(`http://localhost:9090/notifications/2?date=${date}`)
            if(response.data){
              setEvents(response.data)

            }
          }catch(e){
            console.error(e)
          }
      }
      FetchData()
    },[events])
  
    const handleOpenModal = () => {
      setNuevoEventoModal(true);
    };
  
    const handleClose = () => {
      setNuevoEventoModal(false);
    };
    
    return (
      <Grid item xs={8}>
        <Paper style={EventosPaper}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={10}>
              <Grid item xs={6} md={10}>
                <Typography fontSize={20}><strong>Historial de Eventos</strong></Typography>
              </Grid>
              <Grid item xs={6} md={2} align="Right">
                <Typography fontSize={16}><strong>Fecha: {date} </strong></Typography>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={5}>
              <Grid item xs={6} md={10}>
                <Paper>
                  <TableContainer sx={{ maxHeight: 230 }}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          <TableCell style={EventosTablaHeader} align="Right">Hora</TableCell>
                          <TableCell style={EventosTablaHeader} align="Right">Descripción</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {events.map((event, index) => (
                          <TableRow key={index}>
                            <TableCell  style={{ top: 57, minWidth:17 }} align="Right">{event.hora}</TableCell>
                            <TableCell style={{ top: 57, minWidth:17 }} align="Right">{event.descripcion}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Grid>
              <Grid item xs={6} md={2} align="Center" sx={{ marginTop: "0.5%" }}>
                <Button className="buttonEvento" onClick={handleOpenModal} fullWidth>Nuevo Evento</Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
        <Modal open={nuevoEventoModal} onClose={handleClose}>
          <div>
            <NuevoEvento onClose={handleClose}></NuevoEvento>
          </div>
        </Modal>
      </Grid>
    );
  }
  

export default EventosPanel