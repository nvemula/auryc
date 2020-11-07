import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import {
    CATEGORY_OPTIONS
} from './constants.js';

const useStyles = makeStyles((theme) => ({
    control: {
        padding: theme.spacing(2),
    },
}));

function CategoryField(props) {
    const classes = useStyles();

    return (
        <Grid item xs={12}>
            <FormControl className={classes.formControl}>
                <FormLabel>
                    Please choose a category you would like to leave feedback about.
                </FormLabel>
                <Select
                    id="category"
                    name="category"
                    value={props.category}
                    onChange={props.handleChange}
                >
                    {CATEGORY_OPTIONS.map((option) => (
                        <MenuItem key={option.id} value={option.value}>{option.label}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
    );
};

export default CategoryField;
