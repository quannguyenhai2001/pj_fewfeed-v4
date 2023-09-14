import React from 'react';
import FacebookLogin from 'react-facebook-login';


const responseFacebook = (response) => {
    console.log(response);
  }

const LoginScreen = () => {
    return (
        <div>
         <FacebookLogin
            appId="694410078784057"
            autoLoad={true}
            fields="name,email,picture"
            callback={responseFacebook} />
        </div>
    );
};

export default LoginScreen;
