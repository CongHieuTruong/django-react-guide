import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    backgroundColor: "#537895",
    backgroundImage: "linear-gradient(315deg, #537895 0%, #09203f 74%)"

  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Button color="inherit" className={classes.menuButton} href="/addSpell">Add Spell</Button>    
          <Button color="inherit" href="/viewSpell" >VIEW SPELL</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
