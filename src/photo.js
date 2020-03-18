import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import imagesData from './imagesData';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import AlignItemsList from './alignItemList'


//import MessageManager from "./manager";


import PrimarySearchAppBar from './primarySearchBar'
import Avatar from '@material-ui/core/Avatar';





const useStyles = makeStyles(theme => ({
  informations: {
    marginRight: theme.spacing(10),
  },
  donnees: {
      color: "white",
      height: '30%',
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1, 0, 2),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(8),
    marginLeft: theme.spacing(50)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '80.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },

}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


/*
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            InstaFood
          </Typography>
          <Typography variant="h6" color="inherit" align="center">
            InstaFood
          </Typography>
        </Toolbar>
      </AppBar>
*/



export default function Profil(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <PrimarySearchAppBar/>


      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={2}>
            <Grid xs={12} sm={6}>
            <Card className={classes.card}>
                <CardMedia
                className={classes.cardMedia}
                image='https://assets.afcdn.com/recipe/20151003/20052_w1024h768c1cx480cy300.jpg'
                />
            </Card>
            </Grid>
            <Grid>
                <AlignItemsList/>
            </Grid>
        ))}
        </Grid>
      </Container>



    </React.Fragment>
  );
}

