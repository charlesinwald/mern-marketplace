import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import {listLatest, listCategories} from './../product/api-product.js'
import {Button, Card, CardContent, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import { IntercomProvider, useIntercom } from 'react-use-intercom';
import CountUp from 'react-countup';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: '95vw',
      margin: 'auto',
      overflow: 'hidden'
    },
    videobackground: {
      position: 'fixed',
      zIndex: -1,
      right: 0,
      bottom: 0,
      minWidth: '100%',
      minHeight: '100%'
    },
  landingHeading: {
      // color: 'white',
      maxWidth: '40vw',
      margin: theme.spacing(3)
  },
  shopButton: {
    color: "white",
    marginTop: theme.spacing(3),
    width: theme.spacing(50),
    fontSize: "2rem"
  },
  latestpickscard: {
      margin: theme.spacing(3)
  },
  landinggraphic: {
      maxWidth: theme.spacing(60),
  }
}))


export default function Home(){
  const classes = useStyles()
  const [suggestionTitle, setSuggestionTitle] = useState("Latest Products")
  const [categories, setCategories] = useState([])
  const [suggestions, setSuggestions] = useState([])
  const { boot, shutdown, hide, show, update } = useIntercom();

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    listLatest(signal).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        setSuggestions(data)
      }
    })
    return function cleanup(){
      abortController.abort()
    }
  }, [])

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    listCategories(signal).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        setCategories(data)
      }
    })
    return function cleanup(){
      abortController.abort()
    }
  }, [])

    return (
      <div className={classes.root}>
        {/*<Card>*/}
        {/*<video autoPlay muted loop id="treebackground" className={classes.videobackground}>*/}
        {/*  <source src={treebackground} type="video/webm"/>*/}
        {/*</video>*/}
          <Grid container
                spacing={4}>
            <Grid item xs={5}>
                <Typography variant='h1' className={classes.landingHeading}>You buy furniture.  We plant trees.</Typography>
                <Typography variant='h3' className={classes.landingHeading}>The first online secondhand furniture marketplace that reforests the planet.</Typography>
              <Typography variant='h4' className={classes.landingHeading}>
                <CountUp   end={160527}
                           duration={2.75} /> Trees Planted
              </Typography>
                <Link to="/shops/all">
                  <Button variant='contained' color='secondary' size='large' className={classes.shopButton}>Browse Selection</Button>
                </Link>
            </Grid>
            <Grid item xs={6}>
               <button onClick={boot}>Boot intercom! ☎️</button>;
              {/*<CarouselProvider*/}
              {/*    naturalSlideWidth={100}*/}
              {/*    naturalSlideHeight={125}*/}
              {/*    totalSlides={3}*/}
              {/*>*/}
              {/*  <Slider>*/}
              {/*    <Slide index={0}>I am the first Slide.</Slide>*/}
              {/*    <Slide index={1}>I am the second Slide.</Slide>*/}
              {/*    <Slide index={2}>I am the third Slide.</Slide>*/}
              {/*  </Slider>*/}
              {/*  <ButtonBack>Back</ButtonBack>*/}
              {/*  <ButtonNext>Next</ButtonNext>*/}
              {/*</CarouselProvider>*/}
            </Grid>
        </Grid>
      </div>
    )
}


