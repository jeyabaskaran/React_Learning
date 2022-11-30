import React, { Component } from 'react'
import ChildInput from './ChildInput'

class RefParentInput extends Component {

    constructor(props) {
        super(props);

        this.refNew = React.createRef();
    }

    ChangeHandler = () => {
        this.refNew.current.focus();
    }

    render() {
        return (
            <div>
                <ChildInput ref={this.refNew} />
                <button onClick={this.ChangeHandler}>Focus</button>
            </div>
        )
    }
}

export default RefParentInput