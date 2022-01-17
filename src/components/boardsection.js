import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    control: {
    },
}));

export default function BoardSection(props) {

    const styles = useStyles(props);
    const [isOpen, setIsOpen] = React.useState(true);

    const handleChange = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <React.Fragment>
            <Collapse in={!isOpen}>
                {props.children}
            </Collapse>
            <Button onClick={handleChange}>{props.name}</Button>
        </React.Fragment>
    );
}