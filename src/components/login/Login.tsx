import React from "react";
import loginImg from "./../../assets/login.svg";
import "./style.scss";

export const Login = () => {
    return (
        <div className="login-container">
            <div className="header">Login</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg} className="img" alt="" />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button className="btn">Login</button>
            </div>
        </div>
    );
};
