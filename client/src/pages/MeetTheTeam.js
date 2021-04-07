import React from 'react';
// Components
import Navbar from '../components/Navbar.js';
// Material UI
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
    root: { flexGrow: 1 },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    pic: {
        width: theme.spacing(12),
        height: theme.spacing(12)
    }
}));

export default function MeetTheTeam() {
    const classes = useStyles();
    return(
        <>
            <Navbar />
            <Container fixed>
            <div className={classes.root}>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper} elevation={3}>
                            <Avatar alt="Nardin Lachowski" src="https://avatars.githubusercontent.com/u/39885707?v=4" className={classes.pic} />
                            <Typography variant="h5" color="textSecondary">Nardin Lachowski</Typography>
                            <IconButton aria-label="Github" href="https://github.com/nard1n"><GithubIcon /></IconButton>
                            <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/nardinl"><LinkedInIcon /></IconButton>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper} elevation={3}>
                        <Avatar alt="Adrienne Osorio" src="https://avatars.githubusercontent.com/u/72840388?v=4" className={classes.pic} />
                            <Typography variant="h5" color="textSecondary">Adrienne Osorio</Typography>
                            <IconButton aria-label="Github" href="https://github.com/amo02008"><GithubIcon /></IconButton>
                            <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/adrienne-osorio-jrdev"><LinkedInIcon /></IconButton>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper} elevation={3}>
                        <Avatar alt="Bill Soss" src="https://avatars.githubusercontent.com/u/58079883?v=4" className={classes.pic} />
                            <Typography variant="h5" color="textSecondary">Bill Soss</Typography>
                            <IconButton aria-label="Github" href="https://github.com/sossw1"><GithubIcon /></IconButton>
                            <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/william-soss/"><LinkedInIcon /></IconButton>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper} elevation={3}>
                        <Avatar alt="Emily Spoldi" src="https://avatars.githubusercontent.com/u/72423431?v=4" className={classes.pic} />
                            <Typography variant="h5" color="textSecondary">Emily Spoldi</Typography>
                            <IconButton aria-label="Github" href="https://github.com/espoldi"><GithubIcon /></IconButton>
                            <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/emily-spoldi/"><LinkedInIcon /></IconButton>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper} elevation={3}>
                        <Avatar alt="Adriana Valdiglesias" src="https://avatars.githubusercontent.com/u/73134344?v=4" className={classes.pic} />
                            <Typography variant="h5" color="textSecondary">Adriana Valdiglesias</Typography>
                            <IconButton aria-label="Github" href="https://github.com/adrianavv1"><GithubIcon /></IconButton>
                            <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/adriana-valdiglesias-962677184/"><LinkedInIcon /></IconButton>
                        </Paper>
                    </Grid>
                </Grid>
        </div>
            </Container>
        </>
    );
}