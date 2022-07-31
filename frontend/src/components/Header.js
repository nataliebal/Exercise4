import React from 'react'
import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge, makeStyles } from '@material-ui/core'
import HomeIcon from '@mui/icons-material/Home';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#F0F8FF',
        transform: 'translateZ(0)'
    },
}))

export default function Header() {

    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid>
                    <Grid item>
                    <IconButton>
                        <HomeIcon fontSize="small" />
                    </IconButton>
                    </Grid>
                    <Grid item sm></Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}