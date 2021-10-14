import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increaseCounter } from "../redux/actions/counterAction"
import {Button} from "reactstrap"

class IncreaseCounter extends Component {
    render() {
        return (
            <div className="d-grid gap-2">
                <button className="btn btn-warning" onClick={e => {
                    this.props.dispatch(increaseCounter())
                }}>
                    1 Arttır
                </button>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(increaseCounter, dispatch) }
}

export default connect(mapDispatchToProps)(IncreaseCounter);