import React, { Component } from 'react'

export default class signIn extends Component {
        state = {
        email: '',
        password: ''
        }

handleChange = (e) => {

        this.setState({
        [e.target.id]: e.target.value    
        })
    console.log(e)

}

handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state)

}

    render() {
        return (
            <div className="container">
                <form action="" className="white" onSubmit={this.handleSubmit}>
                <h5 className="grey-text text-darken-3">Sign In</h5><br></br>
                <div className="input-field">
                <label htmlFor="email"> Email </label>
                <input type="email" id="email" onChange={this.handleChange}/>
                </div>
                    <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">
                    Login</button>
                    </div>

            </form>
                  
            </div>
        )
    }
}
