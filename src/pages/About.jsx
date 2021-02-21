import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class About extends PureComponent {
    render() {
        return (
            <div>
                <h2>this is About page</h2>
                {this.props.msg}
                {this.props.counter}
                <button onClick={this.props.inc}>increase</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log('mapStateToProps, state:', state);
    return {
        msg: state.app.msg,
        counter: state.app.counter
    }
}

const mapDispatchToProps = {
    ////func that i add to props
    inc: () => {
        return (dispatch) => {
            setTimeout(() => {
                dispatch({ type: 'INC' })
            }, 2000)
        }
    }
}
const AboutWithStore = connect(mapStateToProps, mapDispatchToProps)(About)
export default AboutWithStore
