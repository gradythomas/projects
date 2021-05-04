import React, { useEffect, useState } from 'react'
import {
  Typography, Button, Paper, AppBar, Toolbar, IconButton, Menu, MenuItem, Container
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import BasicBlock from './BasicBlock'

export default function Home() {

    const introText = [
        'About Me',
        'Hi, welcome to my portfolio. My name is Grady Thomas and I am a second year student at MIT majoring in Electrical Engineering \
        and Computer Science (6-2) and concentrating in Music. I am most interested in embedded system development and projects that \
        physically interact with the world around us. This site has a little bit about various school and personal projects \
        I have completed. Take a look around! This website was created with React, hosted by Github Pages, \
        and the source code is located in my GitHub profile.'
    ]

    const designText = [
        'Site Design',
        'I chose React...'
    ]

    return (
        <>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <BasicBlock header={introText[0]} paragraph={introText[1]} />
            <img style={{ marginLeft: 50 }} src="/projects/self_pic.jpeg" height="321" width="271"/>
        </div>
        <BasicBlock header={designText[0]} paragraph={designText[1]} />
        <Typography component="div" style={{ height: '50vh' }} />
        </>
    )
}