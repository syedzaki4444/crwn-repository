import SignIn from '../components/sign-in/SignIn';
import SignUp from '../components/sign-up/SignUp';

const SignInAndSingUp = () => {

    return(
        <div class="container" style={{display: 'flex', justifyContent: 'space-around', margin: '30px auto'}}>
            <SignIn />
            <SignUp />
        </div>
    )

}

export default SignInAndSingUp;