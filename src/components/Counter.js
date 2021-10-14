import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
    render() {
        return (
            <div className="row align-items-center">
                <div className="col"><h1>{this.props.counter}</h1></div>
                
            </div>
        )
    }
}
function mapStateToProps(state){
    return {counter:state.counterReducer}
}

export default connect(mapStateToProps)(Counter);