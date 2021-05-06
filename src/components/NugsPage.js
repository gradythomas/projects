import React, { useEffect, useState } from 'react'
import {
  Typography, Button, Paper, AppBar, Toolbar, IconButton, Menu, MenuItem, Container
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles';
import BasicBlock from './BasicBlock'
import BasicHeader from './BasicHeader'

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

export default function Nugs() {

    const styles = useStyles()

    const blogText = [
        [
            'Background',
            'nugs.net is a streaming service for primarily live music and \
             seems to be built on the AngularJS framework. I felt that nugs was a little unpolished compared to some other streaming services, \
             specifically with things like authentication and streaming optimization, and wanted to poke around the code to see what was going \
             on under the hood. I had messed around with the chrome dev tools before, and decided to try and see if I could find out how the music was streamed. \
             From my initial looking, the web app used AngularJS for its UI.'
        ],
        [
            'Vulnerability Description',
            'Using the chrome dev tools, I discovered that when a song is played, the angular callback is added in a new file \
             that includes a URL stored in the key streamLink. This file is a few levels down in the sources section; \
             it seems to be related to something called BigRiver, which could be an internal or external JS library. \
             Following the URL from the file leads to a blank page where the mp3 file is embedded in a basic \
             html video player with the audio/mp3 file type. Right clicking on this file allows you to save the audio as a file to your computer.'
        ],
        [
            'Analysis',
            'Given that nugs.net is purely a web or phone streaming application, and not for downloading or purchasing music, the user should not be able \
            to download any music from the site. However, because their file storage site is not secure, it is very easy to download any song stored there. \
            Obviously that violates their Terms of Service so I have not done so, but I have reached out to nugs.net about the issue. I believe it would be a \
            relatively easy fix, perhaps by making the file server private, or requiring some sort of authentication from the client before serving the file.'
        ]
    ]

    return (
        <>
        {blogText.map(textPair => (
            <BasicBlock header={textPair[0]} paragraph={textPair[1]} />
        ))}
        <BasicHeader text='Demonstration' />
        <div className={styles.videoBox}>
            <iframe 
                width="560"
                height="315"
                src="https://www.youtube.com/embed/q_uS7ZxgQzw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen 
            />
        </div>
        </>
    )
}