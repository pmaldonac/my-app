import { Grid,Paper, Modal,Typography, Table,TableBody,TableCell, TableHead, TableRow, TableContainer, Button, Box } from "@mui/material"
import { EventosPaper, EventosTablaHeader } from "../styled/panel";
import "../styled/panel.css"
import { useState } from "react";
import NuevoEvento from "./NuevoEvento";

function createData(name, calories) {
    return { name, calories};
  }
  
  const rows = [
    createData('14:20', "Ingreso de Vehículo Patente FTFD-17"),
    createData('12:10', "Intruso en cámara 5"),
    createData('12:00', "Registro de Ingreso Patente DVKH-12"),
    createData('11:23', "Ingreso de Vehículo Patente FTFD-17"),
    createData('09:12', "Intruso en cámara 4"),
  ];



const EventosPanel  = (props)=>{
    const [nuevoEventoModal, setNuevoEventoModal] = useState(false)

    const handleOpenModal =  () => {
        setNuevoEventoModal(true)
    }
    const handleClose =() =>{
        setNuevoEventoModal(false)
    }

    return(
        <Grid item xs={8}>
            <Paper style={EventosPaper}>
                <Box sx = {{flexGrow:1}}>
                    <Grid container spacing={10}>
                        <Grid item xs={6} md={10}>
                        <Typography fontSize={20}><strong>Historial de Eventos</strong></Typography>
                        </Grid>
                        <Grid item xs={6} md={2} align="Right">
                        <Typography fontSize={16} fullWidth><strong>Fecha: 10/07/2023</strong></Typography>
                        </Grid>
                    
                    </Grid>
                </Box>
               
                
                <Box sx={{flexGrow:1}}>
                <Grid container spacing={5}>
                        <Grid item xs={6} md={10}>
                            <Paper >
                            <TableContainer sx={{maxHeight:230}}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                <TableRow>
                                    <TableCell style={EventosTablaHeader} align="Right">Hora</TableCell>
                                    <TableCell style={EventosTablaHeader} align="Right" >Descripción</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                    key={row.name}
                                    style={{ top: 57, minWidth:17 }}
                                    align="Right"
                                    >
                                    <TableCell component="th" scope="row" >
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="Right">{row.calories}</TableCell>
                            
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                            </TableContainer>
                            
                            </Paper>
                            
                        </Grid>
                        <Grid item xs={6} md={2} align={"center"} sx={{marginTop: "0.5%"}}>
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
         
        
    )
}

export default EventosPanel