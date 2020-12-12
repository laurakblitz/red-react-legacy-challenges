import React, { Component } from 'react'

export default class DogIndex extends Component {
    constructor() {
        super();
        this.state = {
            photo: ''
        }
    }

    componentDidMount() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    photo: data.message
                })
                console.log(this.state.photo);
            })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.componentDidMount();
    }

    render() {
        return (
            <div>
                <button onClick={(e) => this.handleSubmit(e)}>Button</button>
                <img src={this.state.photo} alt="dogs" />
            </div>
        )
    }
};