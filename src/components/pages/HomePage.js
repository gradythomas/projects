import React, { useEffect, useState } from 'react'
import {
  Typography, Button, Paper, AppBar, Toolbar, IconButton, Menu, MenuItem, Container, Divider
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import BasicBlock from '../elements/BasicBlock'

const useStyles = makeStyles((theme) => ({
    blogHeader: {
        marginBottom: 10,
        marginTop: 20,
        color: theme.palette.primary.main
    },
    divider: {
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: theme.palette.primary.main
    }
}))

export default function Home() {
    const styles = useStyles();
    const introText = [
        'About Me',
        'Hi, welcome to my portfolio. My name is Grady Thomas and I am a second-year student at MIT majoring in Electrical Engineering and Computer Science (6-2) \
        and concentrating in Music. I am most interested in embedded system development and projects that physically interact with the world around us. \
        This site has a little bit about various school and personal projects I have completed. Take a look around! Outside of school, I love music, \
        especially playing guitar, recording and making music, and seeing live shows. I also really enjoy being outside and climbing, hiking, biking, and camping. I am involved in \
        the outdoors community at MIT as a Co-Leader with the Outing Club and am a graduate of the 2021 NOLS Summer Semester in Alaska program, where I spent 75 days mountaineering, \
        backpacking, and sea kayaking in the Alaskan backcountry. I grew up in Atlanta where I went to The Westminster Schools and now live in Boston while I attend MIT.'
    ]

    const designText = [
        'Site Design',
        'This website was created with React, hosted by GitHub Pages, and the source code is located in my GitHub profile. I chose React because I wanted an opportunity to \
        practice what I had learned at my internships at GTRI and BetterLesson, where I did full stack development that included React frontends. Although this site is not \
        currently very dynamic, which is what React is best known for, I wanted to keep the door open to easily integrate any web apps I may create in the future. Since I am not \
        much of a designer, although I am working on my design skills, I am using Material UI for basic components and structure. At the moment, there is no real backend \
        since the site is mostly static. However, if I eventually integrate some sort of web app, I plan on using the Flask framework and SQL and hosting it with Heroku.'
    ]

    return (
        <>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: window.innerWidth < 750? 'wrap' : 'nowrap' }}>
            <BasicBlock header={introText[0]} paragraph={introText[1]} />
            <img style={{ marginLeft: 50, marginTop: 10 }} src="/projects/self_pic.jpeg" height="321" width="271"/>
        </div>
        <BasicBlock header={designText[0]} paragraph={designText[1]} />
        <Divider className={styles.divider} />
        <div style={{ marginTop: 40, justifyContent: 'space-around', display: 'flex', flexDirection: 'row', flexWrap: window.innerWidth < 750? 'wrap' : 'nowrap' }}>
            <img  height="504" width="378" src="/projects/climbing_pic1.png" />
            <img   height="504" width="378" src="/projects/glacier_pic2.png" />
        </div>
        <div style={{ marginTop: 40, justifyContent: 'space-around', display: 'flex'}} >
        <img height="604" width="806" src="/projects/mountain_pic.jpg" />
        </div>
        <Typography component="div" style={{ height: '20vh' }} />
        </>

    )
}