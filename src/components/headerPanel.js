import { AppBar, Toolbar, Box, Tab, Tabs, Typography } from "@mui/material"

const HeaderPanel = () =>{
    return(
        <AppBar sx ={{background:"#ffff"}}>
            <Toolbar>
            <Box
            component="img"
            sx={{
                height: 100,
                width: 185,
                maxHeight: { xs: 230, md: 160 },
                maxWidth: { xs: 350, md: 250 },
            }}
            src="https://i.ibb.co/T2gckt6/jacsec.png"
            />
            <Typography fontSize={20} sx = {{color: "#000000", marginLeft: "20px" }}><strong>Panel de Conserjería</strong></Typography>
            <Tabs  sx = {{marginLeft: "auto"}}>
                <Tab label = "Cerrar Sesión">
                </Tab>
                
            </Tabs>

            </Toolbar>
        </AppBar>
    )
}
export default HeaderPanel