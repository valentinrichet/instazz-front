import React from 'react';
//import AppBar from '@material-ui/core/AppBar';
//import Button from '@material-ui/core/Button';
//import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
//import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//import Link from '@material-ui/core/Link';
//import FavoriteIcon from '@material-ui/icons/Favorite';
//import IconButton from '@material-ui/core/IconButton';
//import imagesData from './imagesData';

import Ingredients from './ingedients'
import Instruction from './instruction'




const useStyles = makeStyles(theme => ({
    titre: {
        marginTop: theme.spacing(6),
        color: "white",
        height: 48,
        fontSize: 45,
    },
    icon: {
      marginRight: theme.spacing(2),
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
  }));
  

  


export default function Recette() {
    const classes = useStyles();
  
    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          <div className={classes.titre} >
              Recette Burger 
          </div>
          <div className={classes.heroButtons}>
              <img src="https://www.la-viande.fr/sites/default/files/styles/slider_recettes/public/recettes/images/burger-de-hampe-de-boeuf-a-laustralienne.jpg" alt="imageDeProfil"/>
          </div>
          <div className={classes.titre} >
              Ingrédients
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={3}>
              {Ingredients.map(card => (
                <Grid item key={card} xs={12} md={6}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h6" component="h3">
                        { card.quantité }
                        { card.nom }
                      </Typography>
                    </CardContent>
                    <CardActions>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            </Container>
            <div className={classes.titre} >
              Instructions
            </div>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={3}>
              {Instruction.map(card => (
                <Grid item key={card} xs={12} md={16}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h6" component="h6">
                        { card.etape }
                        { card.description }
                      </Typography>
                    </CardContent>
                    <CardActions>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </React.Fragment>
    );
  }