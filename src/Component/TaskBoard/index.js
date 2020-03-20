import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import style from './style'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchDataTask } from '../../Action/task'
// import Card from '@material-ui/core/Card';
// import Button from '@material-ui/core/Button'
// import Icon from '@material-ui/core/Icon';
// import Grid from '@material-ui/core/Grid';

import status from '../../Contant/index'
//import data from '../../Contant/dataFake'

import { Box, Button, Icon, Grid, } from '@material-ui/core';
import TaskList from '../TaskList';
import TaskForm from '../TaskForm'
import * as msg from '../../Common/Message'


class TaskBoard extends Component {
    state = {
        open: false,

    }
    
    componentDidMount = () => {
        this.props.fetchDataTask()
    }
    renderboard = (status) => {
        if (status.length > 0) {
            return status.map((item) => {
                let data = this.props.listTask;
                var datafilter = data.filter((subItem) => { return subItem.status === item.status })
                return (
                    <Grid item xs={4} sm={4} md={4} key={item.index}>
                        <Box mb={2} mt={3}>  {item.label} </Box>
                        <TaskList datafilter={datafilter} />
                    </Grid>

                )
            })
        }
    }
    handleClickOpen = () => {
        this.setState({ open: true })
    }
    handleClose = () => {
        this.setState({ open: false })
    }
    render() {
        return (
            <div>
                <Button variant="contained" color="primary" onClick={() => this.handleClickOpen()}>
                    <Icon>add_circle</Icon>  Them moi cong viec
                </Button>
                <Button variant="contained" color="primary" onClick={() => msg.msgsuccess("thanh cong")}>
                    <Icon>add_circle</Icon>  toast
                </Button>

                <Grid container spacing={3}>
                    {this.renderboard(status)}
                </Grid>

                <TaskForm open={this.state.open} handleClose={this.handleClose} />
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        listTask: state.task.listTask
    }
}
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ fetchDataTask: fetchDataTask }, dispatch),
})
export default withStyles(style)(connect(mapStateToProps, mapDispatchToProps)(TaskBoard))