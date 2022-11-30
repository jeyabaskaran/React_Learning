import React, { Component } from 'react'

class InputRef extends Component {

    constructor(props) {
        super(props);
        this.inref = React.createRef();
    }

    focusUpdate = () => {
        this.inref.current.focus();
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.inref} />
            </div>
        )
    }
}

export default InputRef