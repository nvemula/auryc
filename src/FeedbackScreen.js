import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import NPSField from './fields/NPSField.js';
import CategoryField from './fields/CategoryField.js';
import GoalsField from './fields/GoalsField.js';
import CustomerServiceField from './fields/CustomerServiceField.js';
import ProductCategoryField from './fields/ProductCategoryField.js';
import GoalDifficultyField from './fields/GoalDifficultyField.js';
import ServiceSatisfactionField from './fields/ServiceSatisfactionField.js';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

function FeedbackScreen(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [page, setPage] = React.useState(1); // Page names can be used here for clarity

    // Individual state variables declared here for clarity
    const [nps, setNps] = React.useState(-1);
    const [category, setCategory] = React.useState('choose');
    const [goal, setGoal] = React.useState('choose');
    const [customerService, setCustomerService] = React.useState('choose');
    const [locationFeedback, setLocationFeedback] = React.useState('');
    const [productCategory, setProductCategory] = React.useState('choose');
    const [goalDifficulty, setGoalDifficulty] = React.useState('veryEasy');
    const [serviceSatisfaction, setServiceSatisfaction] = React.useState('satisfied');
    const [customerExperience, setCustomerExperience] = React.useState('');
    const [generalFeedback, setGeneralFeedback] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        const target = event.target;

        switch (target.name) {
            case "nps":
                setNps(target.value);
                break;
            case "category":
                setCategory(target.value)
                break;
            case "goal":
                setGoal(target.value)
                break;
            case "customerService":
                setCustomerService(target.value)
                break;
            case "productCategory":
                setProductCategory(target.value)
                break;
            case "goalDifficulty":
                setGoalDifficulty(target.value)
                break;
            case "serviceSatisfaction":
                setServiceSatisfaction(target.value)
                break;
            case "locationFeedback":
                setLocationFeedback(target.value)
                break;
            case "customerExperience":
                setCustomerExperience(target.value)
                break;
            case "generalFeedback":
                setGeneralFeedback(target.value)
                break;
            default:
                break;
        }
    };

    const nextButtonValidator = () => {
        if (page == 1 && nps >= 0) {
            return false;
        } else if (page == 2 && category === 'website' && goal !== 'choose') {
            return false;
        } else if (page == 2 && category === 'products' && productCategory !== 'choose') {
            return false;
        } else if (page == 2 && category === 'locations' && locationFeedback !== '') {
            return false;
        } else if (page == 2 && category === 'customerService' && customerService !== 'choose') {
            return false;
        } else if (page == 2 && category === 'general') {
            return false;
        }
        return true;
    };

    const submitValidator = () => {
        if (page == 3 && category === 'website' && generalFeedback !== '') {
            return false;
        } else if (page == 3 && category === 'products' && customerExperience !== '') {
            return false;
        } else if (page == 3 && category === 'locations' && customerExperience !== '') {
            return false;
        } else if (page == 3 && category === 'customerService' && customerExperience !== '') {
            return false;
        } else if (page == 3 && category === 'general' && customerExperience !== '') {
            return false;
        }
        return true;
    };

    const onNextClick = () => {
        setPage(page + 1);
    };

    const onSubmit = () => {
        let data = {
            nps,
            category,
            goal,
            customerService,
            locationFeedback,
            productCategory,
            goalDifficulty,
            serviceSatisfaction,
            customerExperience,
            generalFeedback
        };

        window.alert(JSON.stringify(data));
        handleClose();
    };

    const LocationsField = () => {
        return (
            <Grid item xs={12}>
                <FormControl className={classes.formControl}>
                    <TextField 
                        name="locationFeedback"
                        label="Store location"
                        variant="outlined"
                        value={locationFeedback}
                        onChange={handleChange}
                        fullWidth
                        multiline rows={4} />
                </FormControl>
            </Grid>
        );
    };

    const ExperienceField = () => {
        return (
            <Grid item xs={12}>
                <FormControl className={classes.formControl}>
                    <TextField
                        id="customerExperience"
                        name="customerExperience"
                        label="Tell us what you think."
                        variant="outlined"
                        value={customerExperience}
                        onChange={handleChange}
                        fullWidth
                        multiline rows={4} />
                </FormControl>
            </Grid>
        );
    };

    const GeneralFeedbackField = () => {
        return (
            <Grid item xs={12}>
                <FormControl className={classes.formControl}>
                    <TextField
                        name="generalFeedback"
                        id="generalFeedback"
                        label="Please share feedback"
                        variant="outlined"
                        value={generalFeedback}
                        onChange={handleChange}
                        fullWidth
                        multiline rows={4} />
                </FormControl>
            </Grid>
        );
    };

    const nextDisabled = nextButtonValidator();
    const submitDisabled = submitValidator();

    return (
        <div className={classes.root}>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open Feedback
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Feedback</DialogTitle>
                <DialogContent>
                    <Container>                
                        <Grid container className={classes.root} spacing={2}>
                            {page === 1 &&
                                <NPSField nps={nps} handleChange={handleChange}/>
                            }
                            {page === 2 &&
                                <React.Fragment>
                                    <CategoryField category={category} handleChange={handleChange}/>
                                </React.Fragment>
                            }
                            {page === 2 && category === 'website' &&
                                <React.Fragment>
                                    <GoalsField goal={goal} handleChange={handleChange}/>
                                </React.Fragment>
                            }
                            {page === 2 && category === 'products' &&
                                <React.Fragment>
                                    <ProductCategoryField
                                        productCategory={productCategory}
                                        handleChange={handleChange}/>
                                </React.Fragment>
                            }
                            {page === 2 && category === 'customerService' &&
                                <React.Fragment>
                                    <CustomerServiceField
                                        customerService={customerService}
                                        handleChange={handleChange}
                                    />
                                </React.Fragment>
                            }
                            {page === 2 && category === 'locations' &&
                                <React.Fragment>
                                    <LocationsField />
                                </React.Fragment>
                            }
                            {page === 3 && category === 'website' &&
                                <GoalDifficultyField
                                    goalDifficulty={goalDifficulty}
                                    handleChange={handleChange}
                                />
                            }
                            {page === 3 &&
                                (
                                    category === 'general' ||
                                    category === 'products' ||
                                    category === 'locations' ||
                                    category === 'customerService'
                                ) &&
                                <React.Fragment>
                                    <ExperienceField/>
                                </React.Fragment>
                            }
                            {page === 3 && category === 'website' &&
                                <React.Fragment>
                                    <GeneralFeedbackField />
                                </React.Fragment>
                            }
                            {page === 3 && category === 'customerService' &&
                                <ServiceSatisfactionField
                                    serviceSatisfaction={serviceSatisfaction}
                                    handleChange={handleChange}
                                />
                            }
                        </Grid>
                    </Container>
                </DialogContent>
                <DialogActions>
                    {page < 3 &&
                        <Button onClick={onNextClick} disabled={nextDisabled} color="primary">
                            Next
                        </Button>
                    }
                    {page === 3 &&
                        <Button onClick={onSubmit} disabled={submitDisabled} color="primary">
                            Submit
                        </Button>
                    }
                </DialogActions>
            </Dialog> 
        </div>
    );
}

export default FeedbackScreen;
