import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increaseByTwoCounter } from '../redux/actions/counterAction'

class IncreseByTwoCounter extends Component {
    render() {
        return (
            <div className="d-grid gap-2"> 
                <button className="btn btn-success" onClick={e => {
                    this.props.dispatch(increaseByTwoCounter())
                }}>
                    2 Arttır
                </button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return { action: bindActionCreators(increaseByTwoCounter, dispatch) }
}

export default connect(mapDispatchToProps)(IncreseByTwoCounter);
