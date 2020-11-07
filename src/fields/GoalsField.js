import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import {
    GOAL_OPTIONS
} from './constants.js';

const useStyles = makeStyles((theme) => ({
    control: {
        padding: theme.spacing(2),
    },
}));

function GoalsField(props) {
    const classes = useStyles();

    return (
        <Grid item xs={12}>
            <FormControl className={classes.formControl}>
                <FormLabel>
                    What was your goal for todays visit to ColeHaan.com?
                </FormLabel>
                <Select
                    id="goal"
                    name="goal"
                    value={props.goal}
                    onChange={props.handleChange}
                >
                    {GOAL_OPTIONS.map((option) => (
                        <MenuItem key={option.id} value={option.value}>{option.label}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
    );
};

export default GoalsField;
