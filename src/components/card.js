import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    control: {
        padding: theme.spacing(2),
        margin: theme.spacing(2)
    },
}));

export default function PlayCard() {
    const styles = useStyles();

    return (
        <Card className={styles.control}>
            <CardContent>
                <Typography>
                    This is a card
                </Typography>
            </CardContent>
        </Card>

    )
}
