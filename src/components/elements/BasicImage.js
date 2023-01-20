import React, { useEffect, useState } from 'react'
import {
  Typography, Button, Paper, AppBar, Toolbar, IconButton, Menu, MenuItem, Container
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles';
import BasicBlock from './BasicBlock';
import { NearMeRounded, TapAndPlayRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    imgBox: {
        margin: 30
        
    },
    imgContainer: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    textContainer: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 45
    }
}))

export default function BasicHeader(props) {
    const styles = useStyles()

    return (
        <>
            <div className={styles.imgContainer}>
                <img className={styles.imgBox} src={props.src} width={props.width} height={props.height}/>
            </div>
            <div className={styles.textContainer}>
                <Typography variant='body2'><i>{props.caption}</i></Typography>
            </div>
        </>
    )
}