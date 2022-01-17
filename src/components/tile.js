import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    control: {
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        backgroundImage: props => {
            //console.log(props.tile.Image);
            return props.tile ? "url('" + props.tile.Image + "')" : null
        },
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "130px",
        width: "130px"
    },
}));

export default function Tile(props) {
    //alert(JSON.stringify(props));
    const styles = useStyles(props);

    return (
        <Card className={styles.control}>
            <CardContent>
                {/* <img src={props.card.Image} /> */}
                <Typography>
                    This is a tile
                </Typography>
            </CardContent>
        </Card>

    )
}
