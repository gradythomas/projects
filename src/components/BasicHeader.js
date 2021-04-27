import React from 'react'
import {
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    blogHeader: {
        marginBottom: 10,
        marginTop: 20
    }
}))

export default function BasicHeader(props) {
    const styles = useStyles()

    return (
        <Typography className={styles.blogHeader} variant='h4'>
            {props.text}
        </Typography>
    )
}