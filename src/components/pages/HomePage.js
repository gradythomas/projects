import React, { useEffect, useState } from 'react'
import {
  Typography, Button, Paper, AppBar, Toolbar, IconButton, Menu, MenuItem, Container
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import BasicBlock from '../elements/BasicBlock'

export default function Home() {

    const introText = [
        'About Me',
        'Hi, welcome to my portfolio. My name is Grady Thomas and I am a second year student at MIT majoring in Electrical Engineering \
        and Computer Science (6-2) and concentrating in Music. I am most interested in embedded system development and projects that \
        physically interact with the world around us. This site has a little bit about various school and personal projects \
        I have completed. Take a look around! Outside of school, I enjoy playing guitar and recording music, being outside and climbing, biking, and camping, \
        and seeing live music. I grew up in Atlanta where I went to The Westminster Schools and now live in Boston while I attend MIT.'
    ]

    const designText = [
        'Site Design',
        'This website was created with React, hosted by Github Pages, and the source code is located in my GitHub profile. \
        I chose React because I wanted an opportunity to practice what I had learned at my internships at GTRI and BetterLesson, where I did full stack development \
        that included React frontends. Although this site is not currently very dynamic, which is what React is best known for, I wanted to keep the door open to easily \
        integrate any web apps I may create in the future. Since I am not much of a designer, although I am working on my design skills, I am using Material UI for basic \
        components and structure. At the moment, there is no real backend since the site is mostly static. However, if I eventually integrate some sort of web app, I plan \
        on using the Flask framework and SQL and hosting it with Heroku.'
    ]

    return (
        <>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: window.innerWidth < 750? 'wrap' : 'nowrap' }}>
            <BasicBlock header={introText[0]} paragraph={introText[1]} />
            <img style={{ marginLeft: 50, marginTop: 10 }} src="/projects/self_pic.jpeg" height="321" width="271"/>
        </div>
        <BasicBlock header={designText[0]} paragraph={designText[1]} />
        <Typography component="div" style={{ height: '50vh' }} />
        </>
    )
}