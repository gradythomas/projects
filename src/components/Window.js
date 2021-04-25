import React, { useEffect, useState } from 'react'
import {
  Typography, Button, Paper, AppBar, Toolbar, IconButton, Menu, MenuItem, Container
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles';
import Home from './HomePage'
import Sampler from './SamplerPage'
import Nugs from './NugsPage'

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding: '0 30px',
    height: '100%',
    flexGrow: 1
  }
}));

export default function WindowFrame() {
    const styles = useStyles()

    const [menuOpen, setMenuOpen] = useState(false)
    const [menuAnchor, setMenuAnchor] = useState(null)
    const [currPage, setCurrPage] = useState(0)

    const handlePageChange = (event) => {
      setCurrPage(event.target.value)
      setMenuOpen(false)
    }

    const handleMenuClick = (event) => {
      setMenuOpen(true)
      setMenuAnchor(event.currentTarget)
    }

    const pages = {
      0: 'Home',
      1: '6.08 Sampler Project',
      2: 'nugs.net Web App Exploit'
    }

    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">
              {pages[currPage]}
            </Typography>
            <Menu anchorEl={menuAnchor} open={menuOpen} onClose={() => setMenuOpen(false)}>
              {Object.keys(pages).map(page => (
                <MenuItem value={page} onClick={handlePageChange}>{pages[page]}</MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
        <Container style={{ padding: 40, backgroundColor:'#8AC6D0', height: '100vh' }} maxWidth='md'>
          {currPage == 0 && <Home /> }
          {currPage == 1 && <Sampler /> }
          {currPage == 2 && <Nugs /> }
        </Container>
      </>
    )
}
