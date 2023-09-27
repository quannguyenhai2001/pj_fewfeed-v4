import React, { useEffect } from 'react';
// import FacebookLogin from 'react-facebook-login';
import { LoginSocialFacebook } from 'reactjs-social-login'
import { FacebookLoginButton } from 'react-social-login-buttons';
import axios from 'axios';


const LoginScreen = () => {

    useEffect(() => {
        const fetch = async () => {
            axios.post("https://graph.facebook.com/132958139894524/feed?message=vfgfgfgf&access_token=EAADZAugTc54UBOZCbq8YhdZAiOVFlmw3XhRTrZBA0vY4JYklaG1RPVRZCzXVfGbSN2pGRsgW3PEneN5AGFed1sdMTiwqCFZBNNvYZA0ILogjUtrON20CbMWqT8bb8H1RpEuA2pl5ZC3qZCdefLQC17bPwB6SMQeWCeX53KH0vRR7WCC5xJunNS391S0y1wznk5YvNQM9bChuLiDCDL0jzlh4E8ztNPqfh1AhW3FTqJfcZD")
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
                appId="239392968730501"
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
