import React, { useEffect, useRef } from 'react'
import {
  Typography, Button, Paper, AppBar, Toolbar, IconButton, Menu, MenuItem, Container
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles';
import BasicBlock from '../elements/BasicBlock'

const useStyles = makeStyles((theme) => ({
    videoBox: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 10
    },
    blogHeader: {
        marginBottom: 10,
        marginTop: 20
    }
}))

export default function Music(props) {

    const styles = useStyles()

    const aboutRef = useRef(null)
    //const designRef = useRef(null)


    useEffect(() => {
        props.setScrollFunctions({
            aboutScroll: (e) => window.scrollTo(0, aboutRef.current.offsetTop - 60) ,
            //designScroll: (e) => window.scrollTo(0, designRef.current.offsetTop - 60), 

        })
        props.setScrollButtons([
            'About',
            //'Site Design'
        ])
    }, [])

    const introText = [
        'About',
        'Guitar playing and music have been one of my biggest hobbies for about 8 years now. While I also love listening to music, \
        a few years ago I began recording my own music. That has since snowballed into a big interest in music production and \
        technology. I have recorded a fair amount of songs, but at this point only released one, with my friend Lonnie Reid \
        on vocals (as well as lyric songwriting). I also have a SoundCloud profile with more in progress work.'
    ]


    return (
        <>
        <div ref={aboutRef} />
        <BasicBlock header={introText[0]} paragraph={introText[1]} />
        <br />
        <div className={styles.videoBox}>
            <iframe src="https://open.spotify.com/embed/track/32OTogCfNH5ZoaZsLlb5Vb"
                width="300"
                height="380"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media">
            </iframe>
        </div>
        <br />
        <div className={styles.videoBox}>
        <iframe 
            width="100%"
            height="300"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1174613302&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
        </iframe>
        
        </div>
        </>
    )
}
