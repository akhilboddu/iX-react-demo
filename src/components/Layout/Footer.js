import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: 'white',
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
        <Container maxWidth="lg">
            <Typography variant="h5">FS-BNB in React</Typography>
            <Typography variant="body1">My sticky footer can be found here.</Typography>
        </Container>
    </footer>
  );
}