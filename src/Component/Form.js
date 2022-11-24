import React, { Component } from "react";

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            comments: '',
            topic: 'angular'
        }
    }

    handleText = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleComment = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopic = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    submitFlow = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
        event.preventDefault(); 
    }
    render() {

        return (
            <div>
                <form onSubmit={this.submitFlow}>
                    <div>
                        <label>UserName</label>
                        <input type="text" value={this.state.username} onChange={this.handleText} />
                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea value={this.state.comments} onChange={this.handleComment} />
                    </div>
                    <div>
                        <label>Select</label>
                        <select value={this.state.topic} onChange={this.handleTopic}>
                            <option value='react'>React</option>
                            <option value='angular'>Angular</option>
                            <option value='vue'>Vue</option>
                        </select>

                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;