import React, { useEffect } from 'react';
// import FacebookLogin from 'react-facebook-login';
import {LoginSocialFacebook} from 'reactjs-social-login'
import { FacebookLoginButton } from 'react-social-login-buttons';
import axios from 'axios';


const LoginScreen = () => {

    useEffect(() => {
        const fetch = async () => {
            axios.get("https://graph.facebook.com/2060605517611588/accounts?fields=name,access_token&access_token=EAAJx8mwbz58BOZBvZBwjvlM16B1NdSTqbrZClYxeOo7GJZA0tXahMDapmrlTmRxZAHXEhCbVBj41vpLGL4zoGWdlooA2W2ID5L3MnCv9Moq2iU97n6g04ezEV1pgASVJBhYhZBQ8Rv7cbmg7QlBv1PCYVGe4qYUFwDhdVyHbpW8bA5nFY2rZA4aMy9ZBZBqKtjio4o3yitz3EaXNsxZAZAypZBWYI8JLVH0dRO9ZBKIgFTIx9RmQZD")
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
