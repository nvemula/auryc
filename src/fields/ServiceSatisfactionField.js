import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import {
    SATISFACTION_OPTIONS
} from './constants.js';

const useStyles = makeStyles((theme) => ({
    control: {
        padding: theme.spacing(2),
    },
}));

function ServiceSatisfactionField(props) {
    const classes = useStyles();

    return (
        <Grid item xs={12}>
            <FormControl component="fieldset">
                <FormLabel component="legend">
                    How would you rate the service?
                </FormLabel>
                <RadioGroup
                    aria-label="Service Satisfaction"
                    name="serviceSatisfaction"
                    value={props.serviceSatisfaction}
                    onChange={props.handleChange}>
                    {SATISFACTION_OPTIONS.map((option) => (
                        <FormControlLabel key={option.id} value={option.value} control={<Radio />} label={option.label} />
                    ))}
                </RadioGroup>
            </FormControl>
        </Grid>
    );
};

export default ServiceSatisfactionField;
