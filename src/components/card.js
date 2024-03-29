import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    control: {
        //padding: theme.spacing(2),
        margin: theme.spacing(2),
        backgroundImage: props => {
            console.log(props.card.Image);
            return props.card ? "url('" + props.card.Image + "')" : null
        },
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "260px",
        width: "190px"
    },
}));

export default function GemCard(props) {
    //alert(JSON.stringify(props));
    const styles = useStyles(props);

    return (
        <Card className={styles.control}>
            <CardContent>
                {/* <img src={props.card.Image} /> */}
                <Typography>
                    This is a card
                </Typography>
            </CardContent>
        </Card>

    )
}
