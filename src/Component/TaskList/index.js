import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import style from './style'
import { Card, CardContent, CardActions, Fab, Icon} from '@material-ui/core'
import TaskItem from '../TaskItem';


class TaskList extends Component {
    render() {
        var { datafilter , classes } = this.props;
        return (

            <Card>
                <CardContent>
                    {
                        datafilter.map((item, key) => {
                            return (
                                <TaskItem item={item} index={key} key={key} />
                            )
                        })
                    }
                </CardContent>
                <CardActions className = {classes.chinhfab}>
                    
                        <Fab color="primary" aria-label="delete" size="small">
                            <Icon fontSize="small">delete</Icon>
                        </Fab>
                        <Fab color="secondary" aria-label="edit" size="small" >
                            <Icon fontSize="small">create</Icon>
                        </Fab>
                    

                </CardActions>
            </Card>
        )
    }
}
export default withStyles(style)(TaskList)

