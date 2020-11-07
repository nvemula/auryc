import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import {
    CUSTOMER_SERVICE_OPTIONS
} from './constants.js';

const useStyles = makeStyles((theme) => ({
    control: {
        padding: theme.spacing(2),
    },
}));

function CustomerServiceField(props) {
    const classes = useStyles();

    return (
        <Grid item xs={12}>
            <FormControl className={classes.formControl}>
                <FormLabel>
                    How did you contact customer service?
                </FormLabel>
                <Select
                    name="customerService"
                    id="customerService"
                    value={props.customerService}
                    onChange={props.handleChange}
                >
                    {CUSTOMER_SERVICE_OPTIONS.map((option) => (
                        <MenuItem key={option.id} value={option.value}>{option.label}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
    );
};

export default CustomerServiceField;
