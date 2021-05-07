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

export default function BasicParagraph(props) {
    const styles = useStyles()

    return (
        <Typography variant='body1'>
            <span dangerouslySetInnerHTML={{'__html': props.text}} />
        </Typography>
    )
}