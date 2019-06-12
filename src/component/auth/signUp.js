import React, { Component } from 'react'

export default class signUp extends Component {
        state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
        }

handleChange = (e) => {

        this.setState({
        [e.target.id]: e.target.value    
        })
  

}

handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state)

}

    render() {
        return (
            <div className="container">
                <form action="" className="white" onSubmit={this.handleSubmit}>
                <h5 className="grey-text text-darken-3">Sign Up</h5><br></br>
                <div className="input-field">
                <label htmlFor="email"> Email </label>
                <input type="email" id="email" onChange={this.handleChange}/>
                </div>
                    <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                <label htmlFor="fristName"> First Name </label>
                <input type="text" id="fristName" onChange={this.handleChange}/>
                </div>

                    <div className="input-field">
                <label htmlFor="lastName"> Last Name </label>
                <input type="text" id="lastName" onChange={this.handleChange}/>
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
