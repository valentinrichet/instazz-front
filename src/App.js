// Regarder material UI router


import React/*, { useState }*/ from 'react'
//import ReactDOM from 'react-dom'


//import React from 'react';
//import logo from './logo.svg';
import './App.css';


import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'



//import React from 'react';
//import Avatar from '@material-ui/core/Avatar';
//import Button from '@material-ui/core/Button';
//import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
//import Grid from '@material-ui/core/Grid';
//import Box from '@material-ui/core/Box';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
//import Typography from '@material-ui/core/Typography';
//import { makeStyles} from '@material-ui/core/styles';
//import Container from '@material-ui/core/Container';
//import { withStyles } from '@material-ui/core/styles';


//import PropTypes from 'prop-types';
//import ListItem from '@material-ui/core/ListItem';
//import ListItemText from '@material-ui/core/ListItemText';
//import { FixedSizeList }   from 'react-window';


//import {Virtuoso} from 'react-virtuoso';
//import List from '@material-ui/core/List';


//import faker from 'faker';


//import {useMemo} from 'react';
//import ListItemAvatar from '@material-ui/core/ListItemAvatar';

//import GridList from '@material-ui/core/GridList';
//import GridListTile from '@material-ui/core/GridListTile';

//import imagesData from './imagesData';



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

//import axios from 'axios';

//import Test from './test'


// npm i react-virtuoso
// npm i react-window
// npm i faker



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



//https://dev.to/petyosi/creating-beautiful-virtualized-lists-with-material-ui-and-react-virtuoso-31i3

/*
const ListContainer = ({listRef, style, children}) => {
  return (
    <List ref={listRef} style={style}>
      {children}
    </List>
  );
};

const ItemContainer = ({children, ...props}) => {
  // remove the margins from the list item - 
  // they are not measured correctly by the component
  return (
    <ListItem {...props} style={{margin: 0}}>
      {children}
    </ListItem>
  );
};
*/


/*
const getUser = () => {
  let firstName = faker.name.firstName();
  let lastName = faker.name.lastName();
  return {
    name: `${firstName} ${lastName}`,
    initials: `${firstName.substr(0, 1)}${lastName.substr(0, 1)}`,
    description: faker.company.catchPhrase(),
    avatar: faker.internet.avatar(),
  };
};

const sortUser = (a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};
*/

/*
const useUserRecords = count => {
  const allUsers = useMemo(
    () =>
      new Array(count)
        .fill(true)
        .map(getUser)
        .sort(sortUser),
    [count],
  );

  return allUsers;
};
*/





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

/*
export default function HomePage(props) {
  const classes = useStyles();

  
  async function FaireUnPost () {
    try  {
      const token = await axios.post('https://instazzback.valentinrichet.com/v1/sessions', {
              email: props.email,
              password: props.mdp,
            });
      console.log(token.data);
       
      const data = await axios.get('https://instazzback.valentinrichet.com/v1/posts', { headers: {Authorization: `Bearer ${token.data}` } });
      console.log(data);
       
      } catch(exception) {
      alert("pas ok");
      }
  }

  function Afficher () {
    console.log()
  }



function Afficher () {
  console.log()
}
*/
/*
const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: "white,"
  },
});
*/



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
    alert("pas ok");
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
       <Router>
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

