import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';

///import FaireUnPost from './test'


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



// email: 'valentin.richet@gmail.com',  {$email}

export default function HomePage() {
    const classes = useStyles();

    
    async function FaireUnPost () {
      try  {
        const token = await axios.post('https://instazzback.valentinrichet.com/v1/sessions', {
                email: 'valentin.richet@gmail.com',
                password: '123456',
              });
        console.log(token);
         
        const data = await axios.get('https://instazzback.valentinrichet.com/v1/posts', { headers: {Authorization: `Bearer ${token}` } });
        console.log(data);
         
        } catch(exception) {
        alert("pas ok");
        }
    }

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
              
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick= {FaireUnPost}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Button href="/resetpwd" style={{color: "white"}}>  
                    Mot de passe oublié ?
                </Button >     
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Button href="/signup" style={{color: "white"}}>
                    Inscrivez-vous ?
                  </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }