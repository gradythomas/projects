import React, { useEffect, useState } from 'react'
import {
  Typography, Button, Paper, AppBar, Toolbar, IconButton, Menu, MenuItem, Container, Tooltip, Card, CardContent, CardHeader
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import DescriptionIcon from '@material-ui/icons/Description'
import GitHubIcon from '@material-ui/icons/GitHub'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import AspectRatioIcon from '@material-ui/icons/AspectRatio';

import { makeStyles } from '@material-ui/core/styles'
import Home from './pages/HomePage'
import Sampler from './pages/SamplerPage'
import Nugs from './pages/NugsPage'
import Motor from './pages/MotorPage'
import Music from './pages/MusicPage'
import Outside from './pages/OutdoorPage'
import FPGA from './pages/FPGAPage'
import Circuits from './pages/CircuitsPage'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  title: {
    flexGrow: 1
  },
  container: {
    padding: 40,
    backgroundColor: '#FFFFFF',//'#8AC6D0',
    height: '100%',
    flexGrow: 1
  },
  card: {
    maxWidth:200,
    height: 'auto',
    backgroundColor: theme.palette.primary.main,//'#a1abb5',
    margin: 20,
    marginLeft: 40,
    marginRight: 0,
    position: 'fixed',
    padding: 5,
  },
  cardMinimized: {
    margin: 20,
    width:70,
    height: 70,
    backgroundColor: theme.palette.primary.main,
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 50
  },
  expandButton: {

  },
  minButton: {
    marginLeft:110
  },
  expandIcon: {
    width: 40,
    height: 40,
    color: 'black',
    marginLeft: 10
  },
  minIcon: {
    width: 40,
    height: 40,
    color: 'black',

  },
  scrollButtons: {
    color: '#171727',
    fontSize: 20,
    cursor: 'pointer',
    "&:hover": {
      fontSize:24
    }
  }
}));

export default function WindowFrame() {
    const styles = useStyles()

    const [menuOpen, setMenuOpen] = useState(false)
    const [menuAnchor, setMenuAnchor] = useState(null)
    const [currPage, setCurrPage] = useState(0)
    const [scrollFunctions, setScrollFunctions] = useState({})
    const [scrollButtons, setScrollButtons] = useState([])
    const [expandedView, setExpandedView] = useState(false)

    const handlePageChange = (event) => {
      setCurrPage(event.target.value)
      setMenuOpen(false)
      window.scrollTo(0, 0)
    }

    const handleMenuClick = (event) => {
      setMenuOpen(true)
      setMenuAnchor(event.currentTarget)
    }

    const openLinkedIn = (event) => {
      window.open("https://www.linkedin.com/in/grady-thomas-7530a71a2", "_blank")
    }

    const openGitHub = (event) => {
      window.open("https://github.com/gradythomas", "_blank") // change this to MIT github?
    }

    const openResume = (event) => {
      window.open("/projects/ResumePDF.pdf", "_blank")
    }

    const openSpotify = (event) => {
      window.open("https://open.spotify.com/artist/6TkfOksTZM6tfOU8knP0gd?si=caVUG_9wR0utpYd2MEan6A", "_blank")
    }

    const openMail = (event) => {
        window.open("mailto:gradyt@mit.edu")
    }

    const pages = {
      0: 'Home',
      1: '6.08 Sampler Project',
      //2: '6.111 Sound Isolator',
      //3: '6.002 Velocity Sensor',
      //4: '6.A01 Brushless Motor',
      5: 'nugs.net Exploit',
      6: 'Recorded Music',
      7: 'Outdoor Leadership'
    }

    let sidebar = expandedView? 
    <Card className={styles.cardMinimized}>
      <IconButton edge="start"  onClick={() => setExpandedView(false)} className={styles.expandButton}>
        <AspectRatioIcon className={styles.expandIcon}/>
      </IconButton>
    </Card>
    : 
    <Card className={styles.card}>
      <IconButton edge="start"  onClick={() => setExpandedView(true)} className={styles.minButton}>
        <AspectRatioIcon className={styles.minIcon}/>
      </IconButton>
      <CardContent>
          {scrollButtons.map((key, index) => (
            <Typography className={styles.scrollButtons} onClick={scrollFunctions[Object.keys(scrollFunctions)[index]]}><b>{key}</b></Typography>
          ))}
      </CardContent>
    </Card>
  

    return (
      <div className={styles.root}>
        <AppBar position="sticky">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={styles.title}>
              {pages[currPage]}
            </Typography>
            <Menu anchorEl={menuAnchor} open={menuOpen} onClose={() => setMenuOpen(false)}>
              {Object.keys(pages).map(page => (
                <MenuItem value={page} onClick={handlePageChange}>{pages[page]}</MenuItem>
              ))}
            </Menu>
            {/*LinkedIn Button, directs to my LinkedIn profile*/}
            <Tooltip title={'LinkedIn'} color="inherit">
              <IconButton onClick={openLinkedIn}>
                <LinkedInIcon />
              </IconButton>
            </Tooltip>
            {/*GitHub Button, directs to my GitHub Repos*/}
            <Tooltip title={'GitHub'} color="inherit">
              <IconButton onClick={openGitHub}>
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            {/*Resume Button, downloads my resume*/}
            <Tooltip title={'Resume'} color="inherit">
              <IconButton onClick={openResume}>
                <DescriptionIcon />
              </IconButton>
            </Tooltip>
            {/*Spotify Button, directs to my Spotify artist page*/}
            <Tooltip title={'Spotify'} color="inherit">
              <IconButton onClick={openSpotify}>
                <MusicNoteIcon />
              </IconButton>
            </Tooltip>
            {/*Mail Button, opens up a new email draft to me*/}
            <Tooltip title={'Email'} color="inherit">
                <IconButton onClick={openMail}>
                    <EmailIcon />
                </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
        <div style={{flexDirection: 'row', display: 'flex', flex: 1}}>

        <div>{sidebar}</div>
        <div style={{margin: 'auto'}}>
        <Container className={styles.container} maxWidth={expandedView? 'lg': 'md'}>
          {currPage == 0 && <Home setScrollButtons={setScrollButtons} setScrollFunctions={setScrollFunctions} /> }
          {currPage == 1 && <Sampler setScrollButtons={setScrollButtons} setScrollFunctions={setScrollFunctions} /> }
          {currPage == 2 && <FPGA />}
          {currPage == 3 && <Circuits />}
          {currPage == 4 && <Motor />}
          {currPage == 5 && <Nugs setScrollButtons={setScrollButtons} setScrollFunctions={setScrollFunctions} /> }
          {currPage == 6 && <Music setScrollButtons={setScrollButtons} setScrollFunctions={setScrollFunctions} />}
          {currPage == 7 && <Outside  expandedView={expandedView} setExpandedView={setExpandedView} setScrollButtons={setScrollButtons} setScrollFunctions={setScrollFunctions}/>}
        </Container>
        </div>
        </div>
      </div>
    )
}

// in progress pages
