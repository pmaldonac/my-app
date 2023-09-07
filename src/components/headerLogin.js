import { AppBar, Toolbar, Box } from "@mui/material"

const Header = () =>{
    return(
        <AppBar sx ={{background:"#ffff"}}>
            <Toolbar>
            <Box
            component="img"
            sx={{
                height: 50,
                width: 85,
                maxHeight: { xs: 230, md: 160 },
                maxWidth: { xs: 350, md: 250 },
            }}
            src="https://i.ibb.co/T2gckt6/jacsec.png"
            />
            </Toolbar>
        </AppBar>
    )
}
export default Header