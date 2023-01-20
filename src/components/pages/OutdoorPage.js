import React, { useEffect, useState, useRef } from 'react'
import {
  Typography, Button, Paper, AppBar, Toolbar, IconButton, Menu, MenuItem, Container
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles';
import BasicBlock from '../elements/BasicBlock'
import BasicHeader from '../elements/BasicHeader'
import BasicImage from '../elements/BasicImage'

export default function Outside(props) {
    
    const scoutsRef = useRef(null)
    const nolsRef = useRef(null)
    const mitocRef = useRef(null)
    const moondanceRef = useRef(null)
    const certsRef = useRef(null)
    const photoRef = useRef(null)

    useEffect(() => {
        props.setScrollFunctions({
            scoutsScroll: (e) => window.scrollTo(0, scoutsRef.current.offsetTop - 60) ,
            nolsScroll: (e) => window.scrollTo(0, nolsRef.current.offsetTop - 60), 
            mitocScroll: (e) => window.scrollTo(0, mitocRef.current.offsetTop - 60), 
            moondanceScroll: (e) => window.scrollTo(0, moondanceRef.current.offsetTop - 60), 
            certsScroll: (e) => window.scrollTo(0, certsRef.current.offsetTop - 60),
            photoScroll: (e) => window.scrollTo(0, photoRef.current.offsetTop - 60), 
        })
        props.setScrollButtons([
            'Boy Scouts',
            'NOLS',
            'MIT Outing Club',
            'Moondance Adventures',
            'Certifications',
            'Photography'
        ])
    }, [])

    const scoutsText = [
        'Boy Scouts',
        'Growing up, I spent a lot of time playing and being outside. My first exposure to leadership in the woods was with Scouts, where I progressed from a rookie in 6th grade to an Eagle Scout by 11th grade. Scouts taught me a lot of t lessons about working in a team, the importance of being stewards of our natural places, and being independent and self-sufficient. For my Eagle Scout project, I built a trail at a local park. My project was my first experience with any kind of project or team management, and I learned how to manage logistics and a budget for the first time. I am very grateful for my time in Scouts, and plan to be a Scoutmaster some day to give others the same experience I had.'
    ]

    const nolsText = [
        'NOLS',
        'In 2020 I took a gap year due to COVID-19, where I worked at Georgia Tech Research Institute as a software engineer Co-Op from May 2020 until May 2021. That summer, I did a NOLS semester in Alaska where we spent 75 days in the backcountry, camping the entire time. The course was split into three sections, mountaineering, sea kayaking, and backpacking. We spent the whole summer with the same other eight people, learning to work with and lead each other. NOLS is first and foremost a leadership school (National Outdoor Leadership School) and we spent a lot of time learning about various leadership tenets and styles, better communication, how to give and receive feedback, and other important soft skills. We also got to practice these skills every day as designated leaders or our smaller cook groups. We also spent time learning hard skills relevant to the current terrain and activity, such as glacier travel and snow anchors on the Nelchina glacier, reading weather and sea conditions in Prince William Sound, and navigation and route-finding in the Talkeetna Mountains. \
        <br /><br />NOLS was an extremely transformative experience for me. I had just come out of a year living at home during the pandemic when my mental health and self-confidence had been at an all time low. Spending that much time outside in an incredible place would have been amazing by itself; but the challenges that came with the leadership practice and navigating unique social situations (i.e. living with the same people for so long) forced me to grow and reflect in ways I never had before. It also left me with a renewed passion for the outdoors and protecting our planet.'
    ]

    const mitocText = [
        'MIT Outing Club',
        'Talk about SoR, leading trips, and being the president'
    ]

    const moondanceText = [
        'Moondance Adventures',
        'Talk about leading trips, also going on a couple.'
    ]

    const certsText = [
        'Certifications',
        '- Wilderness First Responder<br />- Wilderness First Aid<br />- CPR + AED Certified'
    ]

    const photography = [
        'Photography',
        'On all of my trips I have had a small point and shoot camera that I like to take landscape pictures with. Recently I have started editing my pictures in Adobe Lightroom and have some pictures I am proud of. ',
        'Midnight sunset in the Talkeetnas on NOLS',
        'A small flower in the same field as the previous picture',
        'Denali, the tallest mountain in North America, from the saddle of a peak in the Talkeetnas',
        'Looking up-glacier at the rope teams behind me on the Nelchina'


    ]

    return (
        <>
        <div ref={scoutsRef} />
        <BasicBlock header={scoutsText[0]} paragraph={scoutsText[1]} />
        <BasicImage src="/projects/trail_pic.JPG" width="504" height="378" caption="A portion of the trail"/>
        <div ref={nolsRef} />
        <BasicBlock header={nolsText[0]} paragraph={nolsText[1]} />
        <div ref={mitocRef} />
        <BasicBlock header={mitocText[0]} paragraph={mitocText[1]} />
        <div ref={moondanceRef} />
        <BasicBlock header={moondanceText[0]} paragraph={moondanceText[1]} />
        <div ref={certsRef} />
        <BasicBlock header={certsText[0]} paragraph={certsText[1]} />
        <div ref={photoRef} />
        <BasicBlock header={photography[0]} paragraph={photography[1]} />
        <BasicImage  src="/projects/nols_talkeetna_sun_hills.jpg" width="800" height="auto" caption={photography[2]} />
        <BasicImage src="/projects/nols_talkeetna_flower.jpg" width="800" height="auto" caption={photography[3]} />
        <BasicImage src="/projects/nols_talkeetna_denali_blue.jpg" width="800" height="auto" caption={photography[4]} />
        <BasicImage src="/projects/nols_nelchina_wide.jpg" width="800" height="auto" caption={photography[5]} />
        </>
    )
}