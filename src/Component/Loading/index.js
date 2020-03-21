import React, { Component } from 'react'
import { withStyles} from '@material-ui/styles'
import style from './style'
import img from '../../Common/Assets/Images/VZvw.gif'
import { connect  } from 'react-redux';
import { compose } from 'redux';

class Loading extends Component {


    render() {
        let { classes } = this.props;
        let xhtml = null;
        if (this.props.showLoading === true) {
            xhtml = (
                <div className={classes.wrap}>
                    <img src={img} alt="loading" className={classes.loadingStyle} />
                </div>
            )
        }

        return xhtml;

    }
}
const mapStateToProps = (state) => {
    return {
        showLoading : state.ui.showLoading
    }
}

const withConnect = connect (
    mapStateToProps , 
    null
)
export default compose (withStyles(style) , withConnect)(Loading)