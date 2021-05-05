import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Divider } from '@material-ui/core'
import BasicHeader from './BasicHeader'
import BasicParagraph from './BasicParagraph'

const useStyles = makeStyles((theme) => ({
    blogHeader: {
        marginBottom: 10,
        marginTop: 20
    }
}))

export default function BasicBlock(props) {
    const styles = useStyles()

    return (
        <div style={{ flexDirection: 'column' }}>
            <BasicHeader text={props.header} />
            <BasicParagraph text={props.paragraph} />
        </div>
    )
}