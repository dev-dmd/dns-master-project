import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Button, Grid, Paper, InputBase } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TableInbox from '../../components/table_inbox';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: 'transparent'
  },
  paperBar: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    width: '100%',
    backgroundColor: 'transparent',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0),
      '& span button': {
        marginRight: theme.spacing(2),
      }
    },
  },
  appBarRight: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: theme.palette.mobile_header.main,
    borderRadius: '9px',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,      
      backgroundColor: theme.palette.background.default,
    },    
  },
  logoImg: {
    backgroundImage: 'url(http://localhost:3000/logo/dns_logo.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '88px',
    backgroundPosition: 'left center'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
   
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: "24px 24px 0",
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      padding: "24px 0px 0",
    },
  },
  inputRoot: {
    color: 'inherit',
    flexGrow: 1,
    width: '100%'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    transition: theme.transitions.create('width'),
    color: '#A5A1A1',
    border: '1px solid',
    borderColor: theme.palette.secondary.main,
    borderRadius: '10px',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
  settingContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  button: {
    width: '100%',
    backgroundColor: theme.palette.button.default,
    color: theme.palette.primary.main,
    textTransform: 'none',
    '&:hover': {
      backgroundColor: theme.palette.button.hover
    }
  },
  sideBtns: {
    color: theme.palette.text.secondary,
    '& svg ': {
      color: theme.palette.text.secondary,
    }
  },
  buttonCog: {
    textTransform: 'none'
  },
  userImg: {
    width: '40px',
    [theme.breakpoints.up('md')]: {
      width: '65px',
    },
  },
  centerVertical: {
    display: 'flex',
    alignItems: 'center'
  },
}));

export default function Dashboard(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={classes.drawerRoot}>
      <Grid container>
        <Grid item xs={12}>
          <Paper elevation={0} className={classes.paper}>
            <div className={`${classes.toolbar} ${classes.logoImg}`} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={0} className={classes.paper}>
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<FontAwesomeIcon icon={faEnvelope} />}
            >
              New message
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={0} className={classes.paper}>
            <List className={classes.sideBtns}>
              {[{text:'Inbox', icon: faInbox}, {text: 'Sent', icon: faPaperPlane}, {text: 'Drafts', icon: faEdit }, {text: 'Favorites', icon: faStar}].map((item, index) => (
                <ListItem button key={item}>
                  <ListItemIcon>
                    <FontAwesomeIcon icon={item.icon} />
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>            
          </Paper>
        </Grid>
        <Grid className={classes.settingContainer} item xs={12}>
          <Paper elevation={0} className={classes.paper}>
            <Button
              className={classes.buttonCog}
              startIcon={<FontAwesomeIcon icon={faCog} />}
            >
              Settings
            </Button>           
          </Paper>
        </Grid>
      </Grid>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar elevation={0} position="fixed" className={classes.appBar}>
        <Toolbar>
          <Grid container spacing={3}>
            <Grid className={classes.centerVertical} item xs={8} sm={6}>
            <Paper elevation={0} className={classes.paperBar}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  className={classes.menuButton}
                >
                  <img src="http://localhost:3000/icons/bars.svg" alt="curent user" />
                </IconButton>
                {
                  !matches ? (
                    <span>
                      <IconButton
                        color="inherit"
                        edge="start"
                        size="small"
                      >
                        <FontAwesomeIcon color="white" icon={faEdit} />
                      </IconButton>
                      <IconButton
                        color="inherit"
                        edge="start"
                        size="small"
                      >
                        <FontAwesomeIcon color="white" icon={faSearch} />
                      </IconButton>
                    </span>
                  ) : (
                    <InputBase
                      placeholder="Search notifications"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  )
                }
              </Paper>
            </Grid>
            <Grid item xs={4} sm={6}>
              <Paper elevation={0} className={classes.appBarRight}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <img className={classes.userImg} src="http://localhost:3000/images/current_user.png" alt="curent user" />
                </IconButton>
              </Paper>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
         <TableInbox />
      </main>
    </div>
  );
}