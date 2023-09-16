import React, { useEffect } from 'react';
// import FacebookLogin from 'react-facebook-login';
import {LoginSocialFacebook} from 'reactjs-social-login'
import { FacebookLoginButton } from 'react-social-login-buttons';
import axios from 'axios';


const LoginScreen = () => {

    useEffect(() => {
        const fetch = async () => {
            axios.get(`https://graph.facebook.com/2060605517611588?
            fields=access_token&
            access_token=EAAJx8mwbz58BO5ihfG36QxAqudkdVIzZBsMZCliRfleA6IHQd7NJBqVvZA2VZB1bsPFYO9bZAChBZBZBNeqjMBmZA06MBLZCXO4AGTZBJiAkeFCZAFaUZBn5EIamjcuQyMFfISST9eP1xtV20ZC5H4O0a7DuQ7gqedR4STkWJNpKLXIaz1Elri6ZBGjNRXXvVJmzyjyjR5cecfbkBv0RhR8VM72l1zHnkl0D0ZBLJS5QnoXQ6qIZBM0ZD`)
                .then(response => {
                    console.log('Bài viết đã được đăng:', response.data);
                })
                .catch(error => {
                    console.error('Lỗi khi đăng bài')
                })

        }
        fetch()
    }, [])

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
