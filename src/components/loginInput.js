import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const LoginInput = (props) => {
    return(
        <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch', background:"#fff" },
        }}
        noValidate
        autoComplete="off"
        >
            <div>
                <TextField
            id={props.id}
            label={props.label}
            type={props.type}
            variant="filled"
            />
            </div>
        </Box>
    )
}
export default LoginInput