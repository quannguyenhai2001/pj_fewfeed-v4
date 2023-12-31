import { Box, Button, Container, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import React from 'react';
import useStyles from './OneCardFeatureScreen.styles';
import { FormatDate } from 'utils/FormatDate';
import PreviewBox from './components/PreviewBox/PreviewBox';
import { Field, Form, Formik } from 'formik';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const initialValues = {
    facebookPage: '',
    adAccount: '',
    primaryText: '',
    cardButton: '',
    schedule: FormatDate(),
    title: '',
    websiteUrl: '',
    fakeLink: '',
    fakeLinkDescription: '',
    image: ""
};



const OneCardFeatureScreen = () => {
    const classes = useStyles();



    const handleSubmit = (values) => {
        console.log(values)
        const imagePath = values.image ? URL.createObjectURL(values.image) : '';
        console.log(imagePath);
    };
    return (
        <Box sx={{ minHeight: "100vh" }}>
            <Container maxWidth="md" >
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched, values, setFieldValue }) => (
                        <Form>
                            <Grid container spacing={20} pt="2rem">
                                <Grid item xs={12} sm={4}>
                                    <Box className={classes.boxID}>
                                        <Box mb="1.5rem">
                                            <Typography className={classes.typo}>Facebook Pages</Typography>
                                            <Field
                                                as={Select}
                                                fullWidth
                                                size="small"
                                                labelId="demo-simple-select-standard-label"
                                                id="demo-simple-select-standard"
                                                name="facebookPage"
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Field>
                                        </Box>
                                        <Box mb="1.5rem">
                                            <Typography className={classes.typo}>Ad Accounts</Typography>
                                            <Field
                                                as={Select}
                                                size="small"
                                                fullWidth
                                                labelId="demo-simple-select-standard-label"
                                                id="demo-simple-select-standard"
                                                name="adAccount"
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Field>
                                        </Box>
                                    </Box>
                                    <Box className={classes.boxID}>
                                        <Box mb="1.5rem">
                                            <Typography className={classes.typo}>Primary text</Typography>
                                            <Field
                                                as={TextField}
                                                sx={{ display: "block" }}
                                                id="outlined-multiline-static"
                                                multiline
                                                fullWidth
                                                rows={4}
                                                name="primaryText"
                                            />
                                        </Box>
                                        <Box mb="1.5rem">
                                            <Typography className={classes.typo}>Card Buttons</Typography>
                                            <Field
                                                as={Select}
                                                size="small"
                                                labelId="demo-simple-select-standard-label"
                                                id="demo-simple-select-standard"
                                                fullWidth
                                                name="cardButton"
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Field>
                                        </Box>
                                        <Box mb="1.5rem">
                                            <Typography className={classes.typo}>Schedule</Typography>
                                            <Field
                                                as={TextField}
                                                sx={{ display: "block" }}
                                                id="outlined-multiline-static"
                                                name="schedule"
                                                fullWidth
                                                size="small"
                                                disabled
                                            />
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Box className={classes.boxID}>
                                        <PreviewBox values={values} />
                                    </Box>
                                    <Box className={classes.boxID}>
                                        <Box mb="1.5rem">
                                            <Typography className={classes.typo}>Card 1 title</Typography>
                                            <Field
                                                as={TextField}
                                                id="outlined-multiline-static"
                                                fullWidth
                                                size="small"
                                                name="title"
                                            />
                                        </Box>
                                        <Box mb="1.5rem">
                                            <Typography className={classes.typo}>Website Url</Typography>
                                            <Field
                                                as={TextField}
                                                id="outlined-multiline-static"
                                                fullWidth
                                                size="small"
                                                name="websiteUrl"
                                            />
                                        </Box>
                                        <Box mb="1.5rem">
                                            <Typography className={classes.typo}>Fake display link (Basic +)</Typography>
                                            <Field
                                                as={TextField}
                                                id="outlined-multiline-static"
                                                fullWidth
                                                size="small"
                                                name="fakeLink"
                                            />
                                        </Box>
                                        <Box mb="1.5rem">
                                            <Typography className={classes.typo}>Fake display link description (Basic +)</Typography>
                                            <Field
                                                as={TextField}
                                                id="outlined-multiline-static"
                                                fullWidth
                                                size="small"
                                                name="fakeLinkDescription"
                                            />
                                        </Box>
                                    </Box>
                                    <Box className={classes.boxID}>
                                        <input
                                            id="image"
                                            name="image"
                                            type="file"
                                            onChange={(event) => {
                                                setFieldValue('image', event.currentTarget.files[0]);
                                            }}
                                            style={{ display: 'none' }}
                                        />
                                        <label htmlFor="image">
                                            <Button
                                                component="span"
                                                size="small"
                                                sx={{ minWidth: "100%" }}
                                                variant="contained"
                                                startIcon={<CloudUploadIcon />}
                                            >
                                                Upload file
                                            </Button>
                                        </label>



                                    </Box>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>



            </Container>
        </Box >
    );
};

export default OneCardFeatureScreen;