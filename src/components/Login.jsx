import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
	const login = () => {
		localStorage.setItem('loggedIn', JSON.stringify(true));
		window.location = '/'
	};

	useEffect(()=>{
		if(JSON.parse(localStorage.getItem('loggedIn')) == true){
			login()
		}
	})

	return (
		<section className="login-page">
			<p className="heading">Log In</p>
			<input type="email" placeholder="Email" className="input" />
			<input type="password" placeholder="Password" className="input" />
			<Link onClick={login}>
				<input type="button" value="Log In" className="btn" />
			</Link>
		</section>
	);
}

export default Login;
