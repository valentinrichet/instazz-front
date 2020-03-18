// Regarder material UI router


import React/*, { useState }*/ from 'react'
//import ReactDOM from 'react-dom'

import './App.css';


import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'


import TextField from '@material-ui/core/TextField';


import SignUpPage from './signUp' ;
import ForgotPasswordPage from './forgotPassword' ;
import HomePage from './homePage'
import Album from './mainPage'
//import PermanentDrawerRight from './drawer'

//import MessageManager from './manager';
import Recette from './recette' ;
import Profil from './pageProfil' ;
//import Photo from './PagePhoto'
import Photo from './photo'





import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';


import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";




function Home () {
  return(
    <div> 
      <HomePage/>
    </div>
  )
}



function SignUp () {
  return(
    <div> 
    <SignUpPage/>
    </div>
  )
}

function ResetPwd () {
  return(
    <div> 
      <ForgotPasswordPage/> 
    </div>
  )
}



function InstaFood () {
  return(
    <div>
      <Album/>
    </div>
  )
}



async function FaireUnPost (login,mdp) {
  try  {
    const token = await axios.post('https://instazzback.valentinrichet.com/v1/sessions', {
            email: login,
            password: mdp,
          });
    console.log(login);
    console.log(token.data);
     
    const data = await axios.get('https://instazzback.valentinrichet.com/v1/posts', { headers: {Authorization: `Bearer ${token.data}` } });
    console.log(data);
    } catch(exception) {
    alert("mauvaise identification");
    }
}



class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: '', password: '' , url: 'InstaFood'};

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange1(event) {
    this.setState({login: event.target.value});
  }

  handleChange2(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    FaireUnPost(this.state.login,this.state.password) ;
    this.setState({redirect: true});
  }
  
  

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/InstaFood" />;
    }
    return (
      <Container component="main" maxWidth="xs">
        <div >
        <Typography component="h1" variant="h5" style={{color: "white" }}  >
          Sign in
        </Typography>
      <form onSubmit={this.handleSubmit}>
            <TextField
              login={this.state.login} 
              onChange={this.handleChange1}
              autoComplete="email"
              variant="outlined" 
              margin="normal"
              label="Email"
              fullWidth
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
              password={this.state.login} 
              onChange={this.handleChange2}
              fullWidth
              variant="outlined"
              margin="normal"
              label="Mot de passe"
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
            <Button 
              type="submit"
              fullWidth
              variant="contained"
              color="primary"

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
}




// Modifier render dans signin enfaite 
function App() {

  return (
    <div className="App">
       <Router basename="instazz-front">
        <div>
          <Switch>
            <Route exact path="/" render={() => <NameForm />} />
            <Route path="/signup"> <SignUp /> </Route>
            <Route path="/resetpwd"> <ResetPwd /> </Route>
            <Route path="/InstaFood"> <InstaFood/> </Route>
            <Route path="/recette"> <Recette /> </Route>
            <Route path="/profil"> <Profil prenom="amelie" nom="divine" followers="155" following="127"/>} </Route>
            <Route path="/photo"> <Photo /> </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}


export default App;

