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



export default function HomePage() {
    const classes = useStyles();


    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper} >
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar >
          <Typography component="h1" variant="h5" style={{color: "white"}}>
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              color= "white"
              variant="outlined" 
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
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
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot de Passe"
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
            <FormControlLabel 
              control={<Checkbox value="remember" style={{color: "white"}} />}
              label="Se souvenir de moi"
            />
            <Button 
              href="/InstaFood"
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container >
              <Grid item xs="6" >
               <Link to="/resetpwd" style={{color: "white"}}>  
                    Mot de passe oublié ?
                </Link >
              </Grid>
              <Grid item xs="6">
                  <Link to="/signup" style={{color: "white"}}>
                    Inscrivez-vous ?
                  </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }