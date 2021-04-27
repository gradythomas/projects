import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
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
        <>
            <BasicHeader text={props.header} />
            <BasicParagraph text={props.paragraph} />
        </>
    )
}