import React from 'react';
//import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
//import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
//import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
//import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//import Link from '@material-ui/core/Link';
//import FavoriteIcon from '@material-ui/icons/Favorite';
//import IconButton from '@material-ui/core/IconButton';
import imagesData from './imagesData';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//import Divider from '@material-ui/core/Divider';
//import InboxIcon from '@material-ui/icons/Inbox';
//import DraftsIcon from '@material-ui/icons/Drafts';


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
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
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




export default function Profil(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <PrimarySearchAppBar/>


      <Container component="main" className={classes.cardGrid} maxWidth="md">
      <div className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <Avatar alt="Amelie" src="https://raw.githubusercontent.com/mui-org/material-ui/master/docs/public/static/images/avatar/3.jpg"  className={classes.large} />
            </Grid>
            
            <List component="nav" aria-label="main mailbox folders" >
                <ListItem button className={classes.donnees}>
                <ListItemText primary= { props.prenom } />
                </ListItem>
                <ListItem button className={classes.donnees}>
                <ListItemText primary= { props.nom } />
                </ListItem>
                <ListItem button className={classes.donnees}>
                <ListItemText primary= "followers : &nbsp;" />
                <ListItemText primary= { props.followers } />
                </ListItem>
                <ListItem button className={classes.donnees}>
                <ListItemText primary= "following : &nbsp;" />
                <ListItemText primary= { props.following } />
                </ListItem>
            </List>

            {/* <Grid item xs={12} md={12}  className={classes.donnees}>
                OK
  </Grid> */}     
                
            
          </Grid>
        </div>
        </Container>









      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
        {imagesData.map(card => (
            <Grid item key={card} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardMedia
                className={classes.cardMedia}
                image={card.img}
                title="Image title"
                />
                <CardActions>
                    <Button href="/photo" size="small" color="primary">
                        { card.title }
                    </Button>
                </CardActions>
            </Card>
            </Grid>
        ))}
        </Grid>
      </Container>



    </React.Fragment>
  );
}

