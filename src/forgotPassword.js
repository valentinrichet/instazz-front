import React from 'react';
//import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
//import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
//import Box from '@material-ui/core/Box';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
//import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';



                  

export default function forgotPassword() {
    return (
      <Container component="main" maxWidth="xs" >
          <form noValidate   style={{width: '100%',color: "white"}}>
            <div>
                <Grid>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="Email"
                        label="Email"
                        name="Email"
                        autoComplete="lname"
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
                </Grid>
            </div>
            <div>
                <Button
                href="/"
                type="Valider"
                fullWidth
                variant="contained"
                color="primary"
                >
                Envoyer un email de récupération de mot de passe
                </Button>
            </div>
        </form>
      </Container>
    );
  }
  