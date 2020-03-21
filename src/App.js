import React, { Component } from 'react'
import {ThemeProvider} from '@material-ui/core'
import TaskBoard from './Component/TaskBoard'
import theme from './Common/Theme'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './Component/Loading';
 class App extends Component {
     
    render() {
      
        return (
            <ThemeProvider theme={theme}>
                <TaskBoard/>
                <ToastContainer/>
                <Loading/>
            </ThemeProvider>
            // <div>
            //     <Button variant="contained" color="primary">
            //             Hello World
            //     </Button>
            //     <div>
            //         <div className = {classes.cochu}>JS</div>
            //         <div className ={classes.fontchu}>java</div>
            //         <div>csS</div>
            //     </div>
            // </div>
        )
    }
}
export default App