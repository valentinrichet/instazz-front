import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import PrimarySearchAppBar from './primarySearchBar'
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import AlignItemsList from './alignItemList'



const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  commentaire: {
    alignItems: 'center',
  },
  cardMedia: {
    paddingTop: '120.25%', // 16:9
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justify: 'flex-start', 
    float: 'left',
  },
}));



export default function Photo() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <CssBaseline />
    <PrimarySearchAppBar/>
      <Container component="main" className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} className={classes.card} >
           <img src='https://assets.afcdn.com/recipe/20151003/20052_w1024h768c1cx480cy300.jpg'/>
          </Grid>
          <Grid item xs={12} sm={6} 
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="flex-end"
            style={{ minHeight: '100vh' }}
          >
              <AlignItemsList/>
          </Grid>
        </Grid>
    </Container>
    </React.Fragment>
  );
}
