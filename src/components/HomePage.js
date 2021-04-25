import React, { useEffect, useState } from 'react'
import {
  Typography, Button, Paper, AppBar, Toolbar, IconButton, Menu, MenuItem, Container
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles';

export default function Home() {

    return (
        <Typography variant='body1'>
            Hi, welcome to my portfolio. This site has a little bit about various school and personal projects
            I have completed. Take a look around! This website was created with React, hosted by Github Pages,
            and the source code is located here.
        </Typography>
    )
}