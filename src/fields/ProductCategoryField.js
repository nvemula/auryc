import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import {
    PRODUCT_CATEGORY_OPTIONS
} from './constants.js';

const useStyles = makeStyles((theme) => ({
    control: {
        padding: theme.spacing(2),
    },
}));

function ProductCategoryField(props) {
    const classes = useStyles();

    return (
        <Grid item xs={12}>
            <FormControl className={classes.formControl}>
                <FormLabel>
                    What category would you like to leave feedback about?
                </FormLabel>
                <Select
                    id="productCategory"
                    name="productCategory"
                    value={props.productCategory}
                    onChange={props.handleChange}
                >
                    {PRODUCT_CATEGORY_OPTIONS.map((option) => (
                        <MenuItem key={option.id} value={option.value}>{option.label}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
    );
};

export default ProductCategoryField;
