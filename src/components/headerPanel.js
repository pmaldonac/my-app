import { AppBar, Toolbar, Box, Tab, Tabs, Typography } from "@mui/material"
import jacsecImage from "../Assets/jacsec.svg"
import { Link} from 'react-router-dom';
const HeaderPanel = () =>{
    return(
        <AppBar sx ={{background:"#ffff"}}>
            <Toolbar>
            <Box
            component="img"
            sx={{
                height: 70,
                width: 80,
                maxHeight: { xs: 230, md: 160 },
                maxWidth: { xs: 350, md: 250 },
            }}
            src={jacsecImage}
            />
            <Typography fontSize={20} sx = {{color: "#000000", marginLeft: "20px" }}><strong>Panel de Conserjería</strong></Typography>
            <Tabs  sx = {{marginLeft: "auto"}}>

                <Link to="/">
                <Tab label = "Cerrar Sesión"  sx={{color:"#000"}}>
                    </Tab>
                </Link>
                
            </Tabs>

            </Toolbar>
        </AppBar>
    )
}
export default HeaderPanel