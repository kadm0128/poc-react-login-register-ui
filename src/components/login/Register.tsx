import React from "react";
import loginImg from "./../../assets/login.svg";
import "./style.scss";

export const Register = () => {
    return (
        <div className="register-container">
            <div className="header">Register</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg} alt="" className="img" />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="email" />
                    </div>
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
                <button className="btn">Register</button>
            </div>
        </div>
    );
};
