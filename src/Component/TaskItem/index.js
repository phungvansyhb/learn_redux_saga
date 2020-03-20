import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import style from './style'
import {Grid , Typography} from '@material-ui/core'
class TaskItem extends Component {
    render() {
        let {item , index} = this.props
        return (
            <Grid container key={index}>
                <Grid item xs={6} md={6} sm={6} >
                    <Typography component="h2" variant="h6">
                        {item.title}
                    </Typography>
                </Grid>

                <Grid item xs={4} md={4} sm={4} >
                    <Typography variant="subtitle1">
                        {item.description}
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}
export default withStyles(style)(TaskItem)