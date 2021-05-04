import React, { useEffect, useState } from 'react'
import {
  Typography, Button, Paper, AppBar, Toolbar, IconButton, Menu, MenuItem, Container
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'
import BasicBlock from './BasicBlock'
import BasicImage from './BasicImage'
import { NearMeRounded, TapAndPlayRounded } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    imgBox: {
        margin: 30
    },
    imgContainer: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    }
}))

export default function Sampler() {

    const styles = useStyles()

    const introText = [
        'Background',
        'In the 2020 Spring Semester I took 6.08, or Introduction to Computer Science and Electrical Engineering via Interconnected Embedded Systems. \
        This class was very hands on and used the ESP32 microcontroller and a class Python server to teach the basics of embedded system design \
        and the Internet of Things through labs and projects. I really loved this class, and it is probably my favorite class I\'ve taken so far at MIT. \
        For our final project, we were given 4 weeks in teams of 5 to build something interesting and complex that used both our ESP32 system and a REST API hosted \
        on the class server. We decided to build a sampler, a musical instrument that can record a sound and then play it back with a keyboard. Unfurtonately we \
        were sent home due to COVID-19 in March 2020, so the whole of this project was done remotely. This meant all of our collaboration was done over GitHub and Zoom, \
        and the teaching team shipped us any extra parts we needed, such as the speaker and copper tape.'
    ]

    const functionsText = [
        'Capabilities',
        'Our final product was a fairly robust sampling and song creation machine. There was a UI displayed on the ESP LCD screen that was controlled with two buttons. \
        A user could record a sound through the microphone, where the raw sound data would then be sent to the server to be put through our Python pitch shifting \
        algorithm that returned the 12 notes of the chromatic scale back down to the ESP, where it was stored in memory. The user could then choose to record a song with \
        the new sound, and use the capacitive touch keyboard to do so. Each touch triggered a note to be played out of the speaker. Once the song was finished, \
        it was sent to and stored on the \
        server in a SQL database. Users could use their browser to click through and listen to various songs and sounds recorded by other users.'
    ]

    return (
        <>
            <BasicBlock header={introText[0]} paragraph={introText[1]} />
            <BasicImage src="/projects/sampler_pic.jpg" width="504" height="378" caption="The final product"/>
            <BasicBlock header={functionsText[0]} paragraph={functionsText[1]} />
            <BasicImage src="/projects/song_ui.png" width="60%" height="60%" caption="Browser UI"/>
        </>
    )
}