import React from 'react';

import Card from '@material-ui/core/Card';

import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


import AlignItemsList from './alignItemList'


//import MessageManager from "./manager";


import PrimarySearchAppBar from './primarySearchBar'





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

