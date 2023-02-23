import React from 'react'
import { Button } from '@mui/material';

const CustomButton = ({ label, onclickFunction }) => {
    return (
        <>
            <Button sx={{ margin: '3%', float: 'right', backgroundColor: '#5c6869', borderColor: 'green' }}
                variant="contained"
                onClick={onclickFunction}>
                { label }
            </Button>
        </>
    )
}

export default CustomButton