import React, {Component} from 'react';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''});
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return(
            <div class="sign-in">
                <div>SingIn</div>
                <div class="title">I already have an account</div>
                <div class="subtitle">Sign in with your email and password</div>

                <form onSubmit={this.handleSubmit}>
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input class="input is-primary" type="email" placeholder="Email" required
                            onChange={this.handleChange}
                            />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                            <input class="input is-danger" type="password" placeholder="Password" required 
                            onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div class="field is-grouped">
                        <div class="control">
                            <button class="button is-link" type="submit">Submit</button>
                        </div>

                        <div class="control">
                            <button class="button is-primary" onClick={signInWithGoogle}>Sign In With Google</button>
                        </div>                        

                    </div>                                        
                </form>

            </div>
        )
    }
}

export default SignIn;