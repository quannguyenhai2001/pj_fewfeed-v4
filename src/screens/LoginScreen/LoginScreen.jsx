import React from 'react';
// import FacebookLogin from 'react-facebook-login';
import {LoginSocialFacebook} from 'reactjs-social-login'
import { FacebookLoginButton } from 'react-social-login-buttons';


const LoginScreen = () => {
    return (
        <div>
            <LoginSocialFacebook
             appId="688235963207583"
             onResolve={(response) => {
               console.log(response);
             }}
             onReject={(error) => {
               console.log(error);
             }}
            >
                 <FacebookLoginButton />
            </LoginSocialFacebook>
        </div>
    );
};

export default LoginScreen;
