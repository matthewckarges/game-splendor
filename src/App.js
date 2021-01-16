import logo from './logo.svg';
import './App.css';
import PlayCard from './components/card'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  cardstack: {
    backgroundColor: "#005522",
    padding: theme.spacing(2)
  },
  cardboard: {
    backgroundColor: "#fa34b7",
    padding: theme.spacing(2)
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  playercontrols: {
    backgroundColor: "#776655"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        Splendor Game
      </header>
      <Grid container className={classes.root} direction="column" justify="flex-start" alignItems="stretch">
        <Grid item>
          <Typography>
            Game Board
          </Typography>
          <Grid container className={classes.board} direction="row" justify="flex-start" alignItems="stretch">
            <Grid item xs={3} className={classes.cardstack}>
              <div id="cardlist">
                {[1,2,3,4].map(i => {
                  return <PlayCard />          
                })}
              </div>
            </Grid>
            <Grid item xs={9} className={classes.cardboard}>
              <div id="playedcards">
                {[1,2].map(i => {
                  return <PlayCard />          
                })}
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.playercontrols}>
          <Typography>
            Player Controls
          </Typography>
          <Button>Play</Button>
          <Button>Stop</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
