# React Authentication Library

## Overview
React Authentication Library provides a comprehensive solution for authentication in React.js applications. With an easy-to-use API and support for popular authentication providers, this library simplifies the implementation of authentication features in your projects.

## Features
- **Easy Integration**: Get up and running quickly with our intuitive API.
- **Multiple Authentication Providers**: Support for Google, Facebook, and more.
- **Robust Security Measures**: Built-in protection for user data.
- **Customizable Components**: Adapt the authentication UI to match your application's design.
- **Token-based Authentication**: Manage and validate authentication tokens effortlessly.

## Installation
To install the React Authentication Library, run the following command:

```shell
npm install react-auth-library
```

## Sample Code

### Google Authentication
```shell
import React, { useState } from 'react';
import {GoogleButton} from 'react-auth-library';
const App = () => {
  const [change, setchange] = useState(false);
  console.log(change?.user);
  return (
    <>
      <GoogleButton change={change} setChange={setchange}/>
    </>
  );
};

export default App;
``` 
So, make a state variable 'change' and send the change variable as props with the GoogleButton component.On Clicking the button a popup will open for the google account selection. So, after successfull login the state variable is changed with the user information.
The change variable contains user information after successfull authentication. 
```shell
const user = {};
if(change!=false)
{
user.userName = change.user.displayName;
user.email = change.user.email;
user.photo = change.user.photoURL
}
else{
    alert('Some error occured');
}
```
## Note
This package is only applicable till development mode. To use this library at production mode you have to send me an email on biswajeetraut382@gmail.com with your domain name. 

## Authors

- [@BiswajeetRaut](https://www.github.com/BiswajeetRaut)

