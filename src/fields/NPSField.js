import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    control: {
        padding: theme.spacing(2),
    },
}));

function NPSField(props) {
    const classes = useStyles();

    return (
        <Grid item xs={12}>
            <Paper className={classes.control}>
                <Grid container>
                    <Grid item>
                        <FormLabel>
                            How likely are you to recommend Cole Haan to a friend or colleague?
                        </FormLabel>
                        <RadioGroup
                            name="nps"
                            aria-label="recommendation field"
                            value={props.nps}
                            onChange={props.handleChange}
                            row
                        >
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                                <FormControlLabel
                                    key={value}
                                    value={value.toString()}
                                    control={<Radio />}
                                    label={value.toString()}
                                />
                            ))}
                        </RadioGroup>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
};

export default NPSField;
 