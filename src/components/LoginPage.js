//This is login page of admin panel
import React from 'react';
import "../static/css/LoginPage.css";


const LoginPage = () => {
    return (
        <>
        <div class="banner">
            <div class="banner_text">Admin Panel- Industry Cell website</div>
        </div>
        <div class="login">
            <h1>Login</h1>
            <div className="input_panel">
                <input type="text" placeholder="Username" id="username"></input>
                <input type="password" placeholder="password" id="password"></input>
                <input type="submit" value="Sign In"></input>
            </div>
        </div> 
        </>
    )
}

export default LoginPage
