import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: "white,"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(1),
      color: "white",
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));


export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" style={{color: "white"}}>
          Inscription
        </Typography>
        <form className={classes.form} noValidate>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="Pseudo"
                        label="Pseudo"
                        name="Peusdo"
                        autoComplete="lname"
                        InputLabelProps={{
                            style: {
                            textOverflow: 'ellipsis',
                            color: 'white'
                            } }}
                        InputProps={{
                            style: {
                            color: 'white'
                        }}}
                    />
                </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="Prenom"
                variant="outlined"
                required
                fullWidth
                id="Prenom"
                label="Prenom"
                autoFocus
                InputLabelProps={{
                    style: {
                      textOverflow: 'ellipsis',
                      color: 'white'
                    } }}
                  InputProps={{
                    style: {
                      color: 'white'
                  }}}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Nom"
                label="Nom"
                name="Nom"
                autoComplete="lname"
                InputLabelProps={{
                    style: {
                      textOverflow: 'ellipsis',
                      color: 'white'
                    } }}
                  InputProps={{
                    style: {
                      color: 'white'
                  }}}
              />
            </Grid>
            <Grid  item xs={6} >
                    <form className={classes.container} noValidate>
                        <TextField
                            id="date"
                            label="Birthday"
                            type="date"
                            defaultValue="2017-05-24"
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            InputLabelProps={{
                                style: {
                                textOverflow: 'ellipsis',
                                color: 'white'
                                } }}
                            InputProps={{
                                style: {
                                color: 'white'
                            }}}
                        />
                    </form>                
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                InputLabelProps={{
                    style: {
                      textOverflow: 'ellipsis',
                      color: 'white'
                    } }}
                  InputProps={{
                    style: {
                      color: 'white'
                  }}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                InputLabelProps={{
                    style: {
                      textOverflow: 'ellipsis',
                      color: 'white'
                    } }}
                  InputProps={{
                    style: {
                      color: 'white'
                  }}}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" style={{color: "white"}} />}
                label="Je souhaite recevoir des propositions marketing et des mises à jour par e-mail."
              />
            </Grid>
          </Grid>
          <Button
            href="/"
            type="Valider"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}

          >
            S'inscrire
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/" style={{color: "white"}}>
                Déjà un compte ? Connectez-vous 
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

