import React from 'react';
import GemCard from './card'
import Tile from './tile'
import BoardSection from './boardsection'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import game from '../data/testgameinstance'


const useStyles = theme => ({
    board: {
        height: "100%",
        overflow: "auto"
    },
    cardrow: {

    },
    tileboard: {
        backgroundColor: "#005522",
        //padding: theme.spacing(2),
        //height: "30%",
        overflow: "auto"
    },
    cardboard: {
        backgroundColor: "#898989",
        padding: theme.spacing(2),
        //height: "70%",
        overflow: "auto"
    }
});

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tilesOpen: true
        }
    }

    closeTiles() {
        this.setState({
            tilesOpen: !this.state.tilesOpen
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.board} direction="row" justify="flex-start" alignItems="stretch">
                
                <Grid item xs={12}>
                    <BoardSection name="Tiles">
                        <Grid container>
                            {game.Board.Tiles.map(t => {
                                return (
                                    <Grid item>
                                        <Tile tile={t} />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </BoardSection>
                </Grid>
                <Grid item xs={12} className={classes.cardboard}>
                    <Grid container className={classes.cardrow} direction="row" justify="flex-start" alignItems="stretch">
                        <Grid item><GemCard card={{"Image":"/card_imgs/Tier3_bank.png"}} /></Grid>
                        {game.Board.Cards.TierThree.Available.map(c => {
                            return (
                                <Grid item>
                                    <GemCard card={c} />
                                </Grid>
                            );
                        })}
                    </Grid>
                    <Grid container className={classes.cardrow} direction="row" justify="flex-start" alignItems="stretch">
                        <Grid item><GemCard card={{"Image":"/card_imgs/Tier2_bank.png"}} /></Grid>
                        {game.Board.Cards.TierTwo.Available.map(c => {
                            return (
                                <Grid item>
                                    <GemCard card={c} />
                                </Grid>
                            );
                        })}
                    </Grid>
                    <Grid container className={classes.cardrow} direction="row" justify="flex-start" alignItems="stretch">
                        <Grid item><GemCard card={{"Image":"/card_imgs/Tier1_bank.png"}} /></Grid>
                        {game.Board.Cards.TierOne.Available.map(c => {
                            return (
                                <Grid item>
                                    <GemCard card={c} />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(useStyles)(Board);