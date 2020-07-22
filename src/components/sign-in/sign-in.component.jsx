import React, { Component } from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = () => {
        console.log('lala')
    }

    render() {

        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        label='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        label='password'
                        handleChange={this.handleChange}
                        value={this.state.password}
                        required
                    />

                    <CustomButton type = 'submit'>Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;