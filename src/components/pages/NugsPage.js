import React, { useEffect, useState } from 'react'
import {
  Typography, Button, Paper, AppBar, Toolbar, IconButton, Menu, MenuItem, Container
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import BasicBlock from '../elements/BasicBlock'
import BasicHeader from '../elements/BasicHeader'

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
            '<b>nugs.net</b> is a streaming service for primarily live music and \
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
            'Given that nugs.net is purely a web or phone streaming application, and not for downloading or purchasing music, the user should not be able to download any music from the site. From my perspective, it seems like there are a couple issues here. For one, the file storage server should probably be more secure, or it shouldn’t load the entire mp3 file at once. Furthermore, the whole file is actually sent from the server to the client side of the page. If you navigate to the Network tab of the dev tools and view the requests being made, when a song is played, the client makes a request to the server that returns the entire audio file in the body of the HTTP response. Opening that response in a new tab also allows you to download the audio file, so you don’t even have to navigate to the server the request is being made to. This streaming strategy also explains why nugs.net can be very slow at times to load a song, as it is trying to load the entire song before it starts playing, instead of actually streaming it as it plays. For comparison’s sake, I took a look at similar requests that are made when streaming a song on Spotify, and it is very different. First of all, the server where the files are held is not accessible. Secondly, it streams the audio in pieces that are also encrypted, or at least not in a form that can just be downloaded.\
            <br /><br />\
            Another issue I discovered while digging around the nugs JavaScript code is that their API is totally public and accessible. From the console in the dev tools, you can easily make requests to their API and get things like song ID’s, a list of concert venues, a list of total band names, and anything else the frontend might need to display. Given a song ID, you can also generate the URL needed to get a certain song from the server. To demonstrate how deep this vulnerability runs, I wrote a python script that given a starting song ID, repeatedly pings the API with the python requests library for the URL’s to the server, then makes requests to the storage server and downloads the song that is returned by the HTTP response. In theory, starting this script with a very small ID and letting it run for hours could download the entire nugs.net library.\
            <br /><br />\
            Obviously, I do not use this script as that would definitely violate the Terms of Service and is likely illegal, but it was interesting experiment in web penetration testing. I believe it would take a relatively easy fix, perhaps by making the file server private, or requiring some sort of authentication from the client before serving the file. I think putting another level of security on the API itself would also be a good idea.'
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