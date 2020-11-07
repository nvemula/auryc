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
    GOAL_DIFFICULTY_OPTIONS
} from './constants.js';

const useStyles = makeStyles((theme) => ({
    control: {
        padding: theme.spacing(2),
    },
}));

function GoalDifficultyField(props) {
    const classes = useStyles();

    return (
        <Grid item xs={12}>
            <FormControl component="fieldset">
                <FormLabel component="legend">
                    How easy was it to accomplish that goal?
                </FormLabel>
                <RadioGroup
                    aria-label="Goal difficulty"
                    name="goalDifficulty"
                    value={props.goalDifficulty}
                    onChange={props.handleChange}>
                    {GOAL_DIFFICULTY_OPTIONS.map((option) => (
                        <FormControlLabel key={option.id} value={option.value} control={<Radio />} label={option.label} />
                    ))}
                </RadioGroup>
            </FormControl>
        </Grid>
    );
};

export default GoalDifficultyField;
