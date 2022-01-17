import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import BoardSection from './boardsection'

const useStyles = theme => ({
    root: {
    },
    nobletiles: {

    },
    cardstack: {
        backgroundColor: "#005522",
        padding: theme.spacing(2),
        height: "100%",
        overflow: "auto"
    },
    cardboard: {
        backgroundColor: "#fa34b7",
        padding: theme.spacing(2),
        height: "100%",
        overflow: "auto"
    },
    playercontrols: {
        backgroundColor: "#776655",
        height: "15vh"
    },
    board: {
        backgroundColor: "#223344",
        height: "85vh"
    }
});

class PlayerControls extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Typography>
                    Player Controls
                </Typography>
                <Button>Play</Button>
                <Button>Stop</Button>
            </React.Fragment>
        )
    }
}

export default withStyles(useStyles)(PlayerControls);