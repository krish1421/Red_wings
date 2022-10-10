import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function MeraSignup()  {

    const [username, setUsername] = useState("")
    const [first_name, setfirst_name] = useState("")
    const [last_name, setlast_name] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [password2, setpassword2] = useState("")

    const usernameHandler = (e) => {
        setUsername(e.target.value)
    }

    const first_nameHandler = (e) => {
        setfirst_name(e.target.value)
    }

    const last_nameHandler = (e) => {
        setlast_name(e.target.value)
    }

    const emailHandler = (e) => {
        setemail(e.target.value)
    }

    const passwordHandler = (e) => {
        setpassword(e.target.value)
    }

    const password2Handler = (e) => {
        setpassword2(e.target.value)
    }


    const SignupNow = () => {
        let payload = {
            "username": username,
            "first_name": first_name,
            "last_name": last_name,
            "email": email,
            "password": password,
            "password2": password2
        }
        axios.post('https://salty-mountain-94962.herokuapp.com/api/register/', payload)
            .then(function (response) {
                console.log(response);
                alert("user created successfully")
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div className="signUp">
        <div className="wrapper ">
            <div className="illustration">
                <img src="https://source.unsplash.com/random" alt="illustration" />
            </div>
            <div className="form">
                <div className="heading">CREATE AN ACCOUNT</div>
                <form>

                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" placeholder="Enter your name" onChange={usernameHandler} value={username} />
                        </div>
                        &nbsp;&nbsp;   <div>
                            <label htmlFor="first_name">First Name</label>
                            <input type="text" id="first_name" placeholder="Enter your name" onChange={first_nameHandler} value={first_name} />
                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between" }}>

                    
                        <div>
                            <label htmlFor="last_name">Last Name</label>
                            <input type="text" id="last_name" placeholder="Enter your name" onChange={last_nameHandler} value={last_name} />
                        </div>
                        <div>
                            <label htmlFor="email">E-Mail</label>
                            <input type="text" id="email" placeholder="Enter your mail" onChange={emailHandler} value={email} />
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>

                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter you password"
                                onChange={passwordHandler} value={password}
                            />
                        </div>

                        <div>
                            <label htmlFor="password2">confirm Password</label>
                            <input
                                type="password"
                                id="password2"
                                placeholder="Enter you password"
                                onChange={password2Handler} value={password2}
                            />
                        </div>
                    </div>
                    <button type="submit" onClick={SignupNow}>Submit</button>
                    <h2 align="center">
                        OR
                    </h2>
                </form>
                <p>
                    Have an account ? <Link to="/"> Login </Link>
                </p>
            </div>
        </div>
        </div>
    )
}
