import React, { Component } from 'react';
import '../styles/form.css';

class Form extends Component {
    state = {
        userName:""
    };
    handleSubmit = async (event) => {
        event.preventDefault();
        const axios = require('axios');
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(resp.data);
        this.setState({userName : ""})
    };
    render() {
        return (
            <div>
                <form className = "form" onSubmit={this.handleSubmit}>
                <i className="fab fa-github"></i>
                <div className="input-field">
                 <label className="placeholder">GitHub Username</label>
                        <input 
                        className="effect"
                        type="text" 
                        value={this.state.userName}
                        onChange={event => this.setState({ userName : event.target.value })}
                        placeholder="" required/>
                    </div>
                    <button className="button">Get Info</button>
                </form>
            </div>
        );
    }
}

export default Form;