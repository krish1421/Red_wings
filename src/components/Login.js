import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

export default function Login() {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	

	const usernameHandler = (e) => {
		setUsername(e.target.value)
	}

	const passwordHandler = (e) => {
		setPassword(e.target.value)
	}

	const LoginNow = () => {
		let payload = {
			"username": username,
			"password": password
		}
		axios.post('http://127.0.0.1:8000/api/login/', payload)
			.then(function (response) {
				debugger
				console.log(response);
			})
			.catch(function (error) {
				debugger
				console.log(error);
			});
	}

	return (
		<div className="wrapper signIn">
			<div className="illustration">
				<img src="https://source.unsplash.com/random" alt="illustration" />
			</div>
			<div className="form">
				<div className="heading">LOGIN</div>
				<form>
					<div>
						<label htmlFor="name">Username</label>
						<input type="text" id="name" placeholder="Enter username" onChange={usernameHandler} value={username} />
					</div>
					<div>
						<label htmlFor="e-mail">Password</label>
						<input type="password" id="e-mail" placeholder="Enter password" onChange={passwordHandler} value={password} />
					</div>
					<button type="button" onClick={LoginNow}>
						Submit
					</button>
				</form>
				<p>
					Don't have an account ? <Link to="/signup"> Sign In </Link>
				</p>
			</div>
		</div>
	);
}
