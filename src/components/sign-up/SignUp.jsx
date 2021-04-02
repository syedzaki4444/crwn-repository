import "bulma";
import { Component } from "react";

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends Component {
     
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''

        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        console.log('handleSubmit() email ',email);
        
        if(password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        }catch(error) {
            console.error(error);
        }

    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value});

    }

    render() {

        const {displayName, email, password, confirmPassword} = this.state;

        return(
            <div class="sign-up">
                <h1>Sign Up</h1>
                <div class="title">I do not have a account</div>
                <div class="subtitle">Sign up with your Email and Password</div>
                <form onSubmit={this.handleSubmit}>

                    <div class="field">
                        <label class="label">Display Name</label>
                        <div class="control">
                            <input class="input is-primary" name="displayName" type="text" required onChange={this.handleChange}/>
                        </div>
                    </div>                                                            

                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input class="input is-primary" name="email" type="email" placeholder="Email" required onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                            <input class="input is-primary" name="password" type="password" placeholder="Password" required onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Confirm Password</label>
                        <div class="control">
                            <input class="input is-primary" name="confirmPassword" type="password" placeholder="Re-Type Password" required onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <button class="button is-primary" type="submit">SIGN UP</button>
                        </div>
                    </div>

                </form>

            </div>
        )
    }

}

export default SignUp;