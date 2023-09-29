import { AppBar, Toolbar, Box } from "@mui/material"
import jacsecImage from "../Assets/jacsec.svg"
const Header = () =>{
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
            </Toolbar>
        </AppBar>
    )
}
export default Header