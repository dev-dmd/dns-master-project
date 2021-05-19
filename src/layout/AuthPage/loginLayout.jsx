import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, Container, FormControl, FormHelperText, IconButton, TextField, Typography, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '../../components/keep_logged';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 'calc(100% - 16px)',
    margin: '8px',
    boxShadow: 'none'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    borderRadius: '25px',
    color: '#f4f4f4',
    padding: '3px 10px',
    backgroundColor: 'purple'
  },
  text: {
    flexGrow: 1,
    marginLeft: theme.spacing(2)
  },
  container: {
    padding: '100px 0'
  },
  checkbox: {
    padding: theme.spacing(0, 2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  bottomNav: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& span': {
      textTransform: 'capitalize',
      color: theme.palette.primary.main
    }
  },
  fullWidthInput: {
    width: '100%'
  }
}));

export default function Login() {
  const classes = useStyles();
  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
        <Card className={classes.root}>
          <CardContent>
            <Paper elevation={0} className={classes.paper}>
              <Typography variant="h1" component="h1" gutterBottom>
                Log in
              </Typography>
              <Typography variant="h5" component="p" color="textSecondary">
                Login with the registration data you used during registration
              </Typography>
            </Paper>
            <form className={classes.textFields} noValidate autoComplete="off">
              <Paper elevation={0} className={classes.paper}>
                <Typography variant="h6" component="p">Your e-mail</Typography>
                <FormControl className={classes.fullWidthInput} variant="outlined">
                  <TextField
                    id="outlined-email-input"
                    placeholder="ex: name@gmail.com"
                    type="email"
                    autoComplete="current-email"
                    variant="outlined"
                  />     
                  <FormHelperText id="my-email-text">We'll never share your email.</FormHelperText>        
                </FormControl>      
              </Paper>             
              <Paper elevation={0} className={classes.paper}>
                <Typography variant="h6" component="p">Your password</Typography>
                <FormControl className={classes.fullWidthInput} variant="outlined">
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={values.showPassword ? 'text' : 'password'}
                      value={values.password}
                      onChange={handleChange('password')}
                      placeholder="At least 8 characters"
                      endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? <FontAwesomeIcon size="xs" icon={faEye} /> : <FontAwesomeIcon size="xs" icon={faEyeSlash} />}
                        </IconButton>
                      </InputAdornment>
                  }
                  labelWidth={0}
                  />
                  <FormHelperText id="my-password-text">We'll never share your password.</FormHelperText>
                </FormControl>            
              </Paper>
              <Paper elevation={0} className={classes.checkbox}>
                  <Checkbox />
              </Paper>
              <Paper elevation={0} className={classes.paper}>
                  <Button color="primary" variant="contained" fullWidth>Log in</Button>
              </Paper>
            </form>
          </CardContent>
          <Grid container spacing={0}>
            <Grid className={classes.bottomNav} item xs={12}>
                <CardActions>
                  <Typography variant="h6" component="p">Don’t have an account?</Typography>
                    <Link  href="/auth/register">
                      <Button size="small">Sign up</Button>
                    </Link>             
                </CardActions>
                <CardActions>
                    <Button href="/" size="small">Forgot Password?</Button>
                </CardActions>
            </Grid>
          </Grid>
        </Card>
  )
}