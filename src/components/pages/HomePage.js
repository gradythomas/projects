import React, { useEffect, useRef } from 'react'
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

export default function Home(props) {
    const styles = useStyles();

    const aboutRef = useRef(null)
    const designRef = useRef(null)


    useEffect(() => {
        props.setScrollFunctions({
            aboutScroll: (e) => window.scrollTo(0, aboutRef.current.offsetTop - 60) ,
            designScroll: (e) => window.scrollTo(0, designRef.current.offsetTop - 60), 

        })
        props.setScrollButtons([
            'About Me',
            'Site Design'
        ])
    }, [])


    const introText = [
        'About Me',
        'My name is Grady Thomas and I am a third-year student at MIT majoring in Electrical Engineering and Computer Science (6-2) \
        and minoring in History. I am most interested in embedded system development, audio circuits and projects, and generally stuff that physically interact with the world around us. \
        This site has a little bit about various school and personal projects I have completed. Outside of school, I love music, \
        especially playing guitar, recording and making music, and seeing live shows. I also really enjoy being outside and climbing, hiking, biking, and camping. I am involved in \
        the outdoors community at MIT as the President of the Outing Club and am a graduate of the 2021 NOLS Summer Semester in Alaska program, where I spent 75 days mountaineering, \
        backpacking, and sea kayaking in the Alaskan backcountry. I grew up in Atlanta where I went to The Westminster Schools and now live in Boston while I attend MIT.'
    ]

    const designText = [
        'Site Design',
        'This website was created with React, hosted by GitHub Pages, and the source code is located in my GitHub profile. I chose React because I wanted an opportunity to \
        practice what I had learned at my internships at GTRI and BetterLesson, where I did full stack development that included React frontends. I am using Material UI for basic components and structure. At the moment, there is no real backend \
        since the site is mostly static.'
    ]

    return (
        <>
        <div ref={aboutRef} style={{ display: 'flex', flexDirection: 'row', flexWrap: window.innerWidth < 750? 'wrap' : 'nowrap' }}>
            <BasicBlock header={introText[0]} paragraph={introText[1]} />
            <img style={{ marginLeft: 50, marginTop: 10 }} src="/self_pic.jpeg" height="321" width="271"/>
        </div>
        <div ref={designRef} />
        <BasicBlock header={designText[0]} paragraph={designText[1]} />
        <Divider className={styles.divider} />
        <div style={{ marginTop: 40, justifyContent: 'space-around', display: 'flex', flexDirection: 'row', flexWrap: window.innerWidth < 750? 'wrap' : 'nowrap' }}>
            <img  height="504" width="378" src="/climbing_pic1.png" />
            <img   height="504" width="378" src="/glacier_pic2.png" />
        </div>
        <div style={{ marginTop: 40, justifyContent: 'space-around', display: 'flex'}} >
        <img height="604" width="806" src="/mountain_pic.jpg" />
        </div>
        <Typography component="div" style={{ height: '20vh' }} />
        </>

    )
}