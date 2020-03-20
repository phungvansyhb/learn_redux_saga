import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import style from './style'
import {Dialog , DialogTitle ,DialogActions , DialogContent , DialogContentText , Button} from '@material-ui/core'
class TaskForm extends Component {
    handleClose = (open) => {
        open = false
    }
    render() {
        let {open , handleClose} = this.props ;
        return (
            <Dialog open={open} onClose={  this.handleClose()} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        FOrm
                </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button onClick={ handleClose} color="primary">
                        Cancel
                </Button>
                    <Button onClick={ handleClose} color="primary">
                        Subscribe
                </Button>
                </DialogActions>
            </Dialog>
        )
    }
}
export default withStyles(style)(TaskForm)