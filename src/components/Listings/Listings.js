import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ListingItem from './ListingItem'
import Loader from 'react-loader-spinner'

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
    },
    listings: {
      flexGrow: 1,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(6),
      margin: 'auto'
    }
  }));

 

const Listings = ({ listings, loading }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Container component="main" className={classes.main} maxWidth="lg">
                <Typography variant="h2" component="h1" gutterBottom>
                    View Listings
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                  Below are some great listings to checkout!
                </Typography>
                <Grid container className={classes.listings} justify="center" spacing={3}>
                  {
                    loading === true ? 
                    <Loader 
                      type="Puff"
                      color="#00BFFF"
                      height="100"	
                      width="100"
                    />   
                    :
                    listings.map((listing, index) => (
                      <Grid key={index} item xs={3}>
                        <ListingItem listing={listing} />
                      </Grid>
                    ))
                  }
                  
                </Grid>
            </Container>
        </div>
    )
}

export default Listings
