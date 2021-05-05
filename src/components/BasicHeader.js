import React from 'react'
import {
  Typography, Divider
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

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

export default function BasicHeader(props) {
    const styles = useStyles()

    return (
        <>
        <Divider className={styles.divider} />
        <Typography className={styles.blogHeader} variant='h5'>
            <b>{props.text}</b>
        </Typography>
        </>
    )
}