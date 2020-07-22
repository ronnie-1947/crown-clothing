import React, { Component } from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    handle3rdPartySignIn = (e) =>{
        e.preventDefault();
        signInWithGoogle()
    }

    handleSubmit = () => {
    }
    
    handleChange = (e)=>{
        const x = e.target.getAttribute('name');
        this.setState({[x]: e.target.value})
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

                    <div className="buttons">
                        <CustomButton type ='submit' >Sign In</CustomButton>
                        <CustomButton type='' onClick={this.handle3rdPartySignIn} isGoogleSignIn>
                            {' '}
                            sign In With Google{' '}
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;

