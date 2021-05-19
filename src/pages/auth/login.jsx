import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Login from "../../layout/AuthPage/loginLayout";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    height: '100vh'
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  coverImg: {
    background: 'linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(http://localhost:3000/images/auth_background.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  amicoAlign: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    padding: theme.spacing(3),
    textAlign: 'left',
    '& > *': {
      cursor: 'pointer'
    }
  }
}));

export default function SignUp() {  
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid className={classes.coverImg} item xs={12}>
            <CssBaseline />
            <Container maxWidth="lg">
              <div className={classes.root}>
                <Grid container>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      <Grid container spacing={0} xs={12}>
                        <Grid item xs={12}>
                        <Grid container spacing={0} xs={12}>                          
                          <Grid item xs={6}>
                            <Paper elevation={0} className={classes.paper + ' ' + classes.logo}>
                              <Link href="admin/dashboard">
                                  <img className={classes.logoImg} src="http://localhost:3000/logo/dns_logo.png" alt="logo" />
                              </Link>
                            </Paper>
                          </Grid>                         
                          <Grid item xs={6}></Grid>                                
                        </Grid>
                        </Grid>
                        <Grid item xs={6}>
                          <Login />
                        </Grid>
                        <Grid className={classes.amicoAlign} item xs={6}>
                          <img src="http://localhost:3000/images/login-amico.svg" alt="amico" />
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </Grid>
        </Grid>
      </div>
  );
}