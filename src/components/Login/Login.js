import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [signInButton, setSignInButton] = useState('Login');
    const [serverErrorMessage, setServerErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [frontErrorMessages, setFrontErrorMessages] = useState({username: '', password: ''});

    const validateLoginForm = () => {
        const newErrors = {};
        if (!username) newErrors.username = 'Username is required';
        if (!password) newErrors.password = 'Password is required';
        setFrontErrorMessages(newErrors);
        return Object.keys(newErrors).length === 0;
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        if (!validateLoginForm()) return;
        setIsLoading(true);
        setServerErrorMessage('');
        setSignInButton('Logging in...');

        const loginCredentials = {username, password};

        try
        {
            const response = await axios.post('https://localhost:7292/api/login', loginCredentials, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200)
            {
                const result = response.data;
                localStorage.setItem('refreshToken', result.data.refreshToken);
                localStorage.setItem('expiration', result.data.expiration);
                localStorage.setItem('user', result.data.user);
                navigate('/dashboard');

            }
            else
                console.log('Login failed');
        }
        catch(error)
        {
            if (error.response && error.response.data)
                setServerErrorMessage('Invalid credentials');
            else
                setServerErrorMessage('An error occurred');

            setSignInButton('Login');
        }

        finally
        {
            setIsLoading(false);
        }

    };

    return (
        <div className="main-content mt-0">
            <div className="page-header min-vh-75">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                            <div className="card card-plain mt-8">
                                <div className="card-header pb-0 text-left bg-transparent">
                                    <h3 className="font-weight-bolder text-info text-gradient">Horizon HR Portal</h3>
                                    <p className="mb-0">Enter your username and password to sign in</p>
                                </div>
                                <div className="card-body">
                                    <form role="form">
                                        <label>Username</label>
                                        <div className="mb-3">
                                            <input
                                                type="text"
                                                className={`form-control ${frontErrorMessages.username ? 'is-invalid' : ''}`}
                                                placeholder="Username"
                                                onChange={(e) => setUsername(e.target.value)}
                                            />
                                            {frontErrorMessages.username && <div className="invalid-feedback">{frontErrorMessages.username}</div>}
                                        </div>
                                        <label>Password</label>
                                        <div className="mb-3">
                                            <input
                                                type="password"
                                                className={`form-control ${frontErrorMessages.password ? 'is-invalid' : ''}`}
                                                placeholder="Password"
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            {frontErrorMessages.password && <div className="invalid-feedback">{frontErrorMessages.password}</div>}
                                        </div>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="rememberMe" />
                                                <label className="form-check-label" htmlFor="rememberMe">Remember
                                                    me</label>
                                        </div>
                                        <div className="text-center">
                                            <button onClick={handleLogin} className="btn bg-gradient-info w-100 mt-4 mb-0" disabled={isLoading}>
                                                {signInButton}
                                            </button>
                                        </div>
                                    </form>
                                    {serverErrorMessage && <p style={{color: 'red'}}>{serverErrorMessage}</p>}
                                </div>
                                <div className="card-footer text-center pt-0 px-lg-2 px-1">
                                    <p className="mb-4 text-sm mx-auto">
                                        Forgot your password ?
                                            <a href="" className="text-info text-gradient font-weight-bold"> Reset it</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                                <div
                                    className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                                    style={{backgroundImage: `url("/images/login_page_background.jpg")`}}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;