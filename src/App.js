// Regarder material UI router


import React, { useState } from 'react'
import ReactDOM from 'react-dom'


//import React from 'react';
import logo from './logo.svg';
import './App.css';


import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'



//import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';


import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList }   from 'react-window';


import {Virtuoso} from 'react-virtuoso';
import List from '@material-ui/core/List';


import faker from 'faker';
import {useMemo} from 'react';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import imagesData from './imagesData';



import SignUpPage from './signUp' ;
import ForgotPasswordPage from './forgotPassword' ;
import HomePage from './homePage'
import Album from './mainPage'
import PermanentDrawerRight from './drawer'



// npm i react-virtuoso
// npm i react-window
// npm i faker


const StyledTextField = withStyles({
  root: {
    color: 'white',
  },
  label: {
    textTransform: 'capitalize',
    color: "white",
  },
})(TextField);



const stylesJo = {
  'input-label': {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    width: '100%',
    color: 'red'
  },

  'input': {
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
      color: 'blue'
    }
  }
};


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





//https://dev.to/petyosi/creating-beautiful-virtualized-lists-with-material-ui-and-react-virtuoso-31i3


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




const Home = () => (
  <div> 
    <HomePage/>
    <h2 style={{color: "white"}}></h2> 
  </div>
)





const SignUp = () => (
  <div> 
    <SignUpPage/>
  </div>
)

const ResetPwd = () => (
  <div> 
    <ForgotPasswordPage/> 
  </div>
)


/*
function InstaFood () {
  const classes = useStyles();

  const users = useUserRecords(500);

  return(
    <div> 
    <h2 style={{color: "white"}}>Ceci est la page principale</h2>
  
    <div className={classes.paper}>
        <GridList cellHeight={160} className={classes.paper} cols={3}>
          {imagesData.map(tile => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
  </div>
  )
}
*/


function InstaFood () {
  const classes = useStyles();

  const users = useUserRecords(500);

  return(
    <div>
      <Album/>
    </div>
  )
}




// Modifier render dans signin enfaite 
function App() {

  const [page, setPage] = useState('home')

  const content = () => {
    if (page === 'home') {
      return <Home />
    } else if (page === 'inscription') {
      return <SignUp />
    } else if (page === 'users') {
      return <ResetPwd />
    } else if (page == 'InstaFood') {
      return <InstaFood />
    }
  }

 const toPage = (page) => (event) => {
    event.preventDefault()
    setPage(page)
  }

  const padding = {
    padding: 5
  }

  return (
    <div className="App">
       <Router>
        <div>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/signup" render={() => <SignUp />} />
          <Route exact path="/resetpwd" render={() => <ResetPwd />} />
          <Route exact path="/InstaFood" render={() => <InstaFood />} />
        </div>
      </Router>
    </div>
  );
}

export default App;

