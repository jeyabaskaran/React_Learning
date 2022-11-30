import React, { Component } from 'react'
import InputRef from './InputRef'

class FocusUpdate extends Component {

    constructor(props) {
        super(props);

        this.customRef = React.createRef();
    }

    FindFocus = () => {
        this.customRef.current.focusUpdate();
    }

    render() {
        return (
            <div>
                <InputRef ref={this.customRef} />
                <button onClick={this.FindFocus}>FocusUpdate</button>
            </div>
        )
    }
}

export default FocusUpdate