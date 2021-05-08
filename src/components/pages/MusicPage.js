import React, { useEffect, useState } from 'react'
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

export default function Music() {

    const styles = useStyles()

    const introText = [
        'Background',
        'Guitar playing and music have been one of my biggest hobbies for about 6 years now. While I also love listening to music, \
        a few years ago I been recording my own music. That has since snowballed into a big interest in music production and \
        technology. I have recorded a fair amount of songs, but at this point only released one, with my friend Lonnie Reid \
        on vocals (as well as lyric songwriting).'
    ]


    return (
        <>
        <BasicBlock header={introText[0]} paragraph={introText[1]} />
        <div className={styles.videoBox}>
            <iframe src="https://open.spotify.com/embed/track/32OTogCfNH5ZoaZsLlb5Vb"
                width="300"
                height="380"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media">
            </iframe>
        </div>
        </>
    )
}
