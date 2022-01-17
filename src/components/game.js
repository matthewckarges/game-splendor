import React from 'react';
import clsx from 'clsx';
import Fab from '@material-ui/core/Fab';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import Board from './board'
import PlayerControls from './playercontrols'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

const controlsViewHeight = 15;

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex"
    // width: "99vw",
    // flexGrow: 1
  },
  playercontrolssection: {
    backgroundColor: "#776655"

    //height: "15vh"
  },
  boardsection: {
    backgroundColor: "#223344",
    overflow: "auto"
    //height: "85vh"
  }
}));

function Game() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    console.log("handleDrawerOpen");
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className="App"className={classes.root} >
      {/* <header className="App-header">
        Splendor Game
      </header> */}
      <Grid container direction="column-reverse" justify="flex-start" alignItems="stretch">
        <Grid item className={classes.boardsection}>
          <Board />
          <Fab onClick={handleDrawerOpen} styles={{position:"static"}}>
            <UpIcon />
            Controls
          </Fab>
        </Grid>
      </Grid>
      <Drawer
        variant="persistent"
        anchor="bottom"
        open={open}>
          <PlayerControls />
      </Drawer>
    </div>
  );
}

export default Game;
