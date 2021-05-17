import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Inbox" value="inbox" icon={<FontAwesomeIcon icon={faInbox} />} />
      <BottomNavigationAction label="Sent" value="sent" icon={<img src="http://localhost:3000/icons/paperPlane.svg" alt="sent" />} />
      <BottomNavigationAction label="Add new" value="add" icon={<img src="http://localhost:3000/icons/plus-icon.svg" alt="plus icon" />} />
      <BottomNavigationAction label="Favorites" value="favorites" icon={<FontAwesomeIcon icon={faStar} />} />
      <BottomNavigationAction label="User" value="user" icon={<img src="http://localhost:3000/icons/user.svg" alt="user" />} />
    </BottomNavigation>
  );
}
