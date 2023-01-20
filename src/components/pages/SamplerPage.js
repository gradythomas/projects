import React, { useEffect, useRef } from 'react'
import {
  Typography, Divider
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import BasicBlock from '../elements/BasicBlock'
import BasicImage from '../elements/BasicImage'
import BasicHeader from '../elements/BasicHeader'

const useStyles = makeStyles((theme) => ({
    imgBox: {
        margin: 30
    },
    imgContainer: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10
    }
}))

export default function Sampler(props) {

    const styles = useStyles()

    const backgroundRef = useRef(null)
    const capabilitiesRef = useRef(null)
    const challengesRef = useRef(null)
    const demoRef = useRef(null)

    useEffect(() => {
        props.setScrollFunctions({
            backgroundScroll: (e) => window.scrollTo(0, backgroundRef.current.offsetTop - 60) ,
            capabilitiesScroll: (e) => window.scrollTo(0, capabilitiesRef.current.offsetTop - 60), 
            challengesScroll: (e) => window.scrollTo(0, challengesRef.current.offsetTop - 60), 
            demoScroll: (e) => window.scrollTo(0, demoRef.current.offsetTop - 60), 

        })
        props.setScrollButtons([
            'Background',
            'Capabilities',
            'Challenges',
            'Demonstration',
        ])
    }, [])


    const introText = [
        'Background',
        'In the 2020 Spring Semester I took 6.08, or <i>Introduction to Computer Science and Electrical Engineering via Interconnected Embedded Systems</i>. \
        This class was very hands on and used the ESP32 microcontroller and a class Python server to teach the basics of embedded system design \
        and the Internet of Things through labs and projects. I really loved this class, and it is probably my favorite class I\'ve taken so far at MIT. \
        For our final project, we were given 4 weeks in teams of 5 to build something interesting and complex that used both our ESP32 system and a REST API hosted \
        on the class server. We decided to build a sampler, a musical instrument that can record a sound and then play it back with a keyboard. Unfortunately, we \
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

    const challengesText = [
        'Personal Challenges',
        'Since this was a team project, I focused on some parts more than others. Specifically, I worked a lot on the hardware part of sound: recording through the mic \
        and playing it back through the speaker. Recording was not very difficult, as all you have to do is directly read the voltages off the correct analog IO pin. \
        The ESP32 has a 12-bit ADC, so we got 12-bit numbers from reading this input. However, the amplifier/speaker breakout board we used needed 8-bit input, and to write \
        to a <code>wav</code> file (for the browser interface and testing) we needed either 8-bit or 16-bit input. Our initial approach was to use a mu-law encoding algorithm we had \
        used in a previous lab; however, this created quite a bit of distortion. We then tried linearly shifting the numbers (i.e. divide everything by 16) which initially \
        led to a strange bug of seemingly playing no sound. However, we discovered that dividing by 16 led to getting quite a few 0\'s in our data, which when sending to the \
        server as binary data was interpreted as a null character and ended the string prematurely. Shifting all 0\'s to 1 fixed the issue and gave us clean, 8-bit audio. \
        Once the data was 8-bit, playing the audio was relatively straight forward and did not require any complex third party libraries. Initially, we had planned to write \
        each note to a <code>wav</code> file on an SD card, and play those files when triggered. However, we had just enough flash memory to store the notes\' binary data in char arrays \
        and therefore decided not to complicate it with external storage. Playing these notes was as straightforward as writing the data from each array to the DAC pin; \
        the tricky part was getting the audio to play back at the right rate. Since it was recording at 8000 kHz, it needed to be written to the DAC at the same rate, which was \
        achieved by slowing down the internal clock with delay functions to 8000 kHz. <br /><br />\
        Another part of the project I worked on a fair amount was figuring out how to write raw audio data (essentially just a list of voltages) to a <code>wav</code> file. This proved \
        more difficult than we initially thought, as most libraries expected some sort of encoded data or data that had been recorded in Python into some sort of object. \
        However, we just had an array of numbers. As I read more into the documentation for the Python standard library <code>wave</code>, I found functions for writing binary data \
        to a <code>wav</code> file. However, this was my first time every interacting with binary data, especially in the realm of sound, and it took quite a bit of trial and error \
        to get the framerate, data size, and date rate to match properly between the ESP32 and Python script. However, once everything was matched up properly, the data \
        was packed up into structs and written to a <code>wav</code> file as 8-bit audio that could be played for testing and in the browser. Getting this working quickly was very \
        important as it was very difficult to test our recording and pitch shifting without any playback capabilities. <br /><br /> \
        I intentionally worked primarily on parts of the project dealing with binary data and low level hardware, as those were areas I felt the least comfortable with and wanted \
        to learn about the most. I think this project prepared me very well for the work I did at GTRI dealing with reading, writing, and encoding raw binary data. I also \
        found it very satisfying to see how computers dealt with (and implement myself) recorded sound and sound files at the lowest level.'
    ]

    return (
        <>
        <div ref={backgroundRef} />
        <BasicBlock header={introText[0]} paragraph={introText[1]} />
        <BasicImage src="/projects/sampler_pic.jpg" width="504" height="378" caption="The final product"/>
        <div ref={capabilitiesRef} />
        <BasicBlock header={functionsText[0]} paragraph={functionsText[1]} />
        <BasicImage src="/projects/song_ui.png" width="60%" height="60%" caption="Browser UI"/>
        <div ref={challengesRef} />
        <BasicBlock header={challengesText[0]} paragraph={challengesText[1]} />
        <div ref={demoRef} />
        <BasicHeader text="Demonstration" />
        <div className={styles.imgContainer}>
            <iframe width="560" height="315"
                src="https://www.youtube.com/embed/D0RY7BqFPo0" 
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>
        <div className={styles.imgContainer}>
            <Typography variant='body2'><i>Recorded by teammate for final report</i></Typography>
        </div>
        </>
    )
}